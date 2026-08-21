---
title: Migrate an Existing Site to Kite (WordPress, Wix)
description: How to move your site from WordPress, Wix, or anywhere else to Kite without losing your Google rankings, by keeping your domain and your URLs the same.
---

# Migrate an Existing Site to Kite (WordPress, Wix)

Moving your site to Kite does not have to cost you the search rankings you have built up. The key is to keep the same domain and the same page addresses, then turn the old site off. This article walks you through it.

:::note Why migrations affect SEO
Google ranks individual pages by their web address (URL). If your URLs change or your old pages stay online, Google can get confused about which version to show, and your rankings can drop. The steps below prevent that.
:::

## Before you start

- **Keep your domain.** The single most important thing for protecting your SEO is keeping the same domain. You will point it at your new Kite site. See [Connect a custom domain](/custom-domains/connect-a-custom-domain).
- **Make a list of your existing page URLs.** Write down the address of every important page (Home, About, each service or product, blog posts, contact). You will give this list to Kite so the new pages use the same addresses.
- **Build your new Kite site first.** Have it ready and published before you switch the domain, so there is no gap.

## Step 1: Import or rebuild with the same URLs

Kite can import an existing website directly, or you can ask it to rebuild your key pages. Either way, give Kite your URL list and ask it to keep every page at the same address, for example: "Keep /about-us, /our-services, and /contact-us exactly as they are."

:::caution Kite cannot add redirects yet
Kite does not currently set up 301 redirects (the "this page has moved" instruction). That makes keeping your URLs identical the important step. If you must change a page's address, expect the old address to stop working, and update any links you control. Kite will tell you plainly when a change would need a redirect it cannot provide.
:::

## Step 2: Point your domain at Kite

Once your Kite site is published, connect your existing domain so visitors land on the new site at the same addresses. See [Connect a custom domain](/custom-domains/connect-a-custom-domain).

## Step 3: Turn off the old site

If your old WordPress or Wix site keeps serving pages, you can end up with **duplicate content**, which splits your ranking. After your domain points to Kite and everything looks right, take the old site down at your previous host, then open a few of your old URLs in a fresh browser tab and confirm they load the new Kite pages.

## Step 4: Let Kite handle the sitemap

Kite generates a live sitemap and, on paid plans, verifies your domain with Google Search Console and submits the sitemap after publish. See [Sitemap & robots.txt](/seo/sitemap-and-robots).

## Troubleshooting

- **My old pages still show the old site.** The old host is still serving them. Take the old site down, and confirm your domain now points to Kite.
- **An old link shows "page not found."** That page's address changed during the rebuild. Ask Kite to put the page back at its original URL.
- **My rankings dropped right after migrating.** Some short-term movement is normal while Google re-crawls. Make sure the URLs match, the old site is down, and give Google time.
