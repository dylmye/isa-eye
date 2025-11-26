# ISA Eye - Budget Your ISA

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B3650%2Fisa-eye.svg?type=shield&issueType=license)](https://app.fossa.com/projects/custom%2B3650%2Fisa-eye?ref=badge_shield&issueType=license)

A privacy-first app for keeping track of your ISA allowance.

Keep an eye on Indiviual Saving Account balances across your bank accounts, investment managers and more. It's easy to make sure you don't go over your allowances - just add your accounts and keep your contributions up to date.

## Development

Dependencies for this project are managed with [bun](https://bun.sh). Install the dependencies with `bun install`. Ensure you also properly copy the icon font by running `bun run prebuild:include-icon-font`.

This project uses Expo. It is Expo Go compatible; run `bun run start` to start the bundler and follow the instructions in the terminal to continue.

### Stack

ISA Eye is built with [Expo](https://expo.dev/) ([React Native](https://reactnative.dev/)).

The data layer is ~~hacked together with~~ powered by [TinyBase](https://tinybase.org/) and [React Hook Form](https://react-hook-form.com/).

The majority of components are based on [React Native Reusables](https://reactnativereusables.com/), which in turn is based on [shadcn/ui](https://ui.shadcn.com/), [RN Primitives](https://rnprimitives.com/) and [Nativewind](https://www.nativewind.dev/) + the awesome [Class Variance Authority](https://cva.style/docs). The remaining components are built with Nativewind. The charting components were built with [Victory Native](https://nearform.com/open-source/victory-native/) by Nearform.

The theme was configured with [jlndev's theme configurator](https://ui.jln.dev/).

The website is hosted by [Cloudflare Pages](https://pages.cloudflare.com/) and the domain is provided by [Porkbun](https://porkbun.com/).

Special mentions to: [Shopify FlashList](https://shopify.github.io/flash-list/) for fixing perf issues, the polyfills bridging the gap between RN and web, and Mo Gorhom's [Bottom Sheet](https://gorhom.dev/react-native-bottom-sheet/) which somehow works better with Expo than Expo's own.

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
