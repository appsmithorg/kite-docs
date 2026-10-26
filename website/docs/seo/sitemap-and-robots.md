---
title: Sitemap & robots.txt
description: Kite generates your sitemap.xml and robots.txt automatically, keeps the sitemap live as pages change, and on paid plans verifies your domain with Google Search Console and submits the sitemap after publish.
---

# Sitemap & robots.txt

These two files help search engines find and crawl your pages. Kite creates both for you and keeps them current, so there is nothing to maintain. This article explains what they are and how to check them.

## What is a sitemap?

A **`sitemap.xml`** file is a list of all the pages on your site, written in a format search engines can read. You find it at `yourdomain.com/sitemap.xml`.

Kite generates it automatically. On sites with a content system, the sitemap is produced live on every request, so it always reflects your current pages. When you connect a custom domain, the sitemap switches to that domain on its own.

## What is robots.txt?

A **`robots.txt`** file sits at the root of your site (`yourdomain.com/robots.txt`) and tells crawlers which parts of your site they may visit. Kite's version welcomes search engines and AI crawlers and points them at your sitemap. Kite also publishes an `llms.txt` file and structured data so AI answer engines can read your site.

:::note You do not edit these files
In Kite you do not open or edit `sitemap.xml` or `robots.txt` by hand, and you do not need to ask Kite to update them. They update themselves.
:::

## Google Search Console

On Growth and Business, Kite verifies your domain with Google Search Console and submits your sitemap automatically after you publish. The publish panel shows the submission status. You do not need a Search Console account of your own for this to happen.

## "The sitemap still looks old"

This is almost always about caching, not a failed update.

1. **Check the live URL, not a preview.** Open `yourdomain.com/sitemap.xml` directly in your browser.
2. **Hard-refresh the page.** A normal refresh can serve a cached copy.
3. **Remember Google is on its own schedule.** Even once your sitemap is correct, Google re-crawls on its own timeline. Updates in search results can take days or weeks.

## Troubleshooting

- **The sitemap shows my .kite.space address.** Confirm your custom domain is fully connected. Once it is, the sitemap switches automatically. See [Connect a custom domain](/custom-domains/connect-a-custom-domain).
- **Google is not picking up my new pages.** Make sure the site is published and give Google time to re-crawl. On paid plans, check the Search Console status in the publish panel.
