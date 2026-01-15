## IAM for Gcore S3 API access

resource "scaleway_iam_application" "gcore_cdn_access_app" {
  name        = "gcore-s3-access"
  description = "S3 API access for GCore CDN"
}

resource "scaleway_iam_policy" "gcore_cdn_access_isa_eye_policy" {
  name           = "GcoreCdnAccessIsaEye"
  description    = "Access to ISA Eye storage bucket(s) for Gcore CDN"
  application_id = scaleway_iam_application.gcore_s3_access.id

  rule {
    project_ids          = [var.project_id]
    permission_set_names = ["ObjectStorageReadOnly"]
  }
}

resource "time_rotating" "rotate_after_a_year" {
  rotation_years = 1
}

resource "scaleway_iam_api_key" "gcore_cdn_access_api_key" {
  application_id = scaleway_iam_application.gcore_s3_access.id
  description    = "Gcore S3 Access"
  expires_at     = time_rotating.rotate_after_a_year.rotation_rfc3339
}

## Bucket for UGC assets

locals {
  bucket_name = "isa-eye-assets"
}

resource "scaleway_object_bucket" "assets_bucket" {
  name       = local.bucket_name
  project_id = var.project_id
}

resource "scaleway_object_bucket_acl" "assets_bucket_acl" {
  bucket = scaleway_object_bucket.assets-bucket.id
  acl    = "private"
}

## CDN access to bucket

resource "scaleway_object_bucket_policy" "assets_bucket_policy" {
  bucket = scaleway_object_bucket.assets-bucket.name
  policy = jsonencode({
    Version = "2023-04-17"
    Id      = "gcore-isa-eye-static-assets"
    Statement = [
      // access to specific folder for CDN
      {
        Sid       = "gcore-access-static-assets-default-bank-icons"
        Effect    = "Allow"
        Principal = { SCW = scaleway_iam_application.gcore_s3_access.id }
        Action    = "s3:GetObject"
        Resource  = "isa-eye-assets/default-bank-icons/*"
      }
    ]
  })
}

## CDN setup - access to scaleway + custom domain setup

resource "gcore_cdn_origingroup" "assets_scw_origin_group" {
  name = "ISA Eye Static Assets - Scaleway"

  auth {
    s3_type              = "other"
    s3_storage_hostname  = scaleway_object_bucket.assets_bucket.endpoint
    s3_access_key_id     = scaleway_iam_api_key.gcore_cdn_access_api_key.access_key
    s3_secret_access_key = scaleway_iam_api_key.gcore_cdn_access_api_key.secret_key
    s3_bucket_name       = local.bucket_name
  }
}

resource "gcore_cdn_resource" "assets_cdn_resource" {
  active      = true
  cname       = "static-assets.isaeye.uk"
  description = "ISA Eye static assets including bank images"
  ssl_enabled = true

  origin_group    = gcore_cdn_origingroup.assets_scw_origin_group.id
  origin_protocol = "HTTPS"

  options {
    edge_cache_settings {
      enabled = true
      default = "4d"
    }

    stale {
      enabled = true
      value   = ["error", "updating"]
    }

    redirect_http_to_https {
      value = true
    }

    sni {
      sni_type = "dynamic"
    }

    tls_versions {
      value = ["TLSv1.2", "TLSv1.3"]
    }

    gzip_on {
      value = true
    }

    cors {
      value = ["isaeye.uk"]
    }
  }
}
