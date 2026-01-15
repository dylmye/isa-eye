## IAM for Gcore S3 API access

resource "scaleway_iam_application" "gcore_s3_access" {
  name        = "gcore-s3-access"
  description = "S3 API access for GCore CDN"
}

resource "scaleway_iam_policy" "gcore_cdn_access_isa_eye" {
  name           = "GcoreCdnAccessIsaEye"
  description    = "Access to ISA Eye storage bucket(s) for Gcore CDN"
  application_id = resource.scaleway_iam_application.gcore_s3_access.id

  rule {
    project_ids          = [var.project_id]
    permission_set_names = ["ObjectStorageReadOnly"]
  }
}

## Bucket for UGC assets

resource "scaleway_object_bucket" "assets_bucket" {
  name       = "isa-eye-assets"
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
