CREATE TABLE `contributions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`productId` integer,
	`taxYear` text NOT NULL,
	`contributions` real NOT NULL,
	FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `taxYear_idx` ON `contributions` (`taxYear`);--> statement-breakpoint
CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`startTaxYear` text NOT NULL,
	`endTaxYear` text,
	`providerName` text NOT NULL,
	`friendlyName` text NOT NULL
);
