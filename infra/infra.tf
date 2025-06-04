########
# Setup
########

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "isaeye-tf-state"
    key    = "state.tfstate"
    region = "eu-central-1"
  }
}

provider "aws" {
  region = "eu-west-2"
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

########
# Bucket
########

resource "aws_s3_bucket" "isa-eye-uploads-s3-bucket" {
  bucket = "isa-eye-uploads-production"

  tags = {
    Name        = "Terraform"
    Environment = "true"
  }
}

resource "aws_s3_bucket_public_access_block" "public_block" {
  bucket = aws_s3_bucket.isa-eye-uploads-s3-bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "isa-eye-uploads-s3-bucket-policy-cloudfront-access" {
  bucket = aws_s3_bucket.isa-eye-uploads-s3-bucket.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = {
          Service = "cloudfront.amazonaws.com"
        },
        Action   = "s3:GetObject",
        Resource = "${aws_s3_bucket.isa-eye-uploads-s3-bucket.arn}/*",
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.isa-eye-uploads-cloudfront-distribution.arn
          }
        }
      }
    ]
  })
}


########
# Cloudfront
########

# @todo: ADD CORS

locals {
  s3_origin_id  = "isaEyeUploadsProdS3Origin"
  cdn_subdomain = "isa-eye-uploads-prod.dylmye.me"
}

resource "aws_cloudfront_distribution" "isa-eye-uploads-cloudfront-distribution" {
  origin {
    domain_name              = aws_s3_bucket.isa-eye-uploads-s3-bucket.bucket_regional_domain_name
    origin_id                = local.s3_origin_id
    origin_access_control_id = aws_cloudfront_origin_access_control.isa-eye-uploads-oac.id

    s3_origin_config {
      origin_access_identity = ""
    }
  }

  enabled         = true
  is_ipv6_enabled = true
  comment         = "CDN for Isa Eye UGC and default files"

  aliases = [local.cdn_subdomain]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 86400
    max_ttl     = 31536000

    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.cloudfront-alias-cert.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  tags = {
    Terraform = "true"
  }
}

resource "aws_cloudfront_origin_access_control" "isa-eye-uploads-oac" {
  name        = "my-oac"
  description = "OAC for public access to ISA Eye UGC and default objects"

  origin_access_control_origin_type = "s3"
  signing_protocol                  = "sigv4"
  signing_behavior                  = "always"
}


########
# Cert
########

resource "aws_acm_certificate" "cloudfront-alias-cert" {
  provider          = aws.us_east_1
  domain_name       = local.cdn_subdomain
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Terraform = "true"
  }
}