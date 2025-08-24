# ISA Eye - Budget Your ISA

A privacy-first app for keeping track of your ISA allowance.

Keep an eye on Indiviual Saving Account balances across your bank accounts, investment managers and more. It's easy to make sure you don't go over your allowances - just add your accounts and keep your contributions up to date.

## Development

Dependencies for this project are managed with [bun](https://bun.sh). Install the dependencies with `bun install`.

This project uses Expo. It is Expo Go compatible; run `bun run start` to start the bundler and follow the instructions in the terminal to continue.

## Infra

THe Terraform config in the `infra` folder sets up:

* A S3 bucket for bank icons (and potentially future UGC)
* A Cloudfront distribution set up with a custom subdomain + TLS cert
* IAM setup for the sync_bank_icons workflow (see below)

## GH Workflows

* `build`: triggers Android and iOS production builds on EAS build, when a commit is pushed to main
* `pr_checks`: checks that run on every commit pushed, for FOSSA compliance and Expo Doctor checks
* `sync_bank_icons`: syncs the assets/images/bank-icons folder with S3

This repo has the following secrets and env vars set up to make these workflows function:

| Name           | Type          | Description                     |
|----------------|:-------------:|:-------------------------------:|
| AWS_ACCOUNT_ID | repo variable | aws.com account ID for S3 sync  |
| EXPO_TOKEN     | repo secret   | Expo access token (robot user)  |
| FOSSA_API_KEY  | repo secret   | Fossa Integration API token     |

## Licence

ISC
