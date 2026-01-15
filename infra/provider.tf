terraform {
  required_providers {
    scaleway = {
      source  = "scaleway/scaleway"
      version = "2.41.1"
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
