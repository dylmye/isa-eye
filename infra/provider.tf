terraform {
  required_providers {
    scaleway = {
      source  = "scaleway/scaleway"
      version = "2.41.1"
    }
    gcore = {
      source  = "G-Core/gcore"
      version = ">=0.32.5"
    }
  }
  required_version = ">= 0.13"
}

provider "scaleway" {
  zone       = var.zone
  region     = var.region
  project_id = var.project_id
  access_key = var.scw_access_key
  secret_key = var.scw_secret_key
}

provider "gcore" {
  permanent_api_token = var.gcr_secret_key
}
