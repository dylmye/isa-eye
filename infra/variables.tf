variable "zone" {
  type = string
}

variable "region" {
  type = string
}

variable "project_id" {
  type        = string
  description = "Scaleway Project ID"
}

variable "scw_access_key" {
  type        = string
  description = "Scaleway Access Key"
  sensitive   = true
}

variable "scw_secret_key" {
  type        = string
  description = "Scaleway Secret Key"
  sensitive   = true
}
