---
title: Migrate an Existing Site to Kite (WordPress, Wix)
description: How to move your site from WordPress or Wix to Kite without losing your Google rankings, using 301 redirects and avoiding duplicate content.
---

# Migrate an Existing Site to Kite (WordPress, Wix)

Moving your site to Kite from WordPress, Wix, Squarespace, or anywhere else doesn't have to cost you the search rankings you've built up. The key is to keep your domain, send your old web addresses to the new ones, and make sure the old site stops competing with the new one. This article walks you through it.

:::note Why migrations affect SEO
Google ranks individual pages by their web address (URL). If your URLs change or your old pages stay online, Google can get confused about which version to show, and your rankings can drop. The steps below prevent that.
:::

## Before you start

- **Keep your domain.** The single most important thing for protecting your SEO is keeping the same domain (like `yourbusiness.com`). You'll point it at your new Kite site. See [Connect a custom domain](/custom-domains/connect-a-custom-domain).
- **Make a list of your existing pages.** Write down the URL of every important page on your current site (Home, About, each service or product, blog posts, contact). You'll need this to set up redirects.
- **Build your new Kite site first.** Have your Kite site ready and published before you switch the domain, so there's no gap where visitors hit nothing. See [How to publish](/publishing/how-to-publish).

## Step 1: Rebuild your key pages in Kite

Recreate the pages that matter for search and for customers. Where you can, keep the new page addresses similar to the old ones. It makes redirects simpler. See [Pages & navigation](/building/pages-and-navigation).

## Step 2: Set up 301 redirects from your old URLs

A **301 redirect** is a permanent "this page has moved" instruction. When someone (or Google) visits an old URL, a 301 sends them automatically to the matching new page, and tells Google to transfer the old page's ranking value to the new one.

:::note What is a 301 redirect?
"301" is the technical code for a permanent redirect. Search engines treat a 301 as a signal to move a page's accumulated ranking to its new address, which is exactly what you want during a migration.
:::

If your new URLs differ from your old ones, you'll want a redirect for each changed page, for example, sending old `/about-us` traffic to new `/about`. Setting these up can require redirect configuration, so ask Kite for help:

1. Open your site in Kite.
2. Give Kite your old-to-new URL list, for example: "I'm migrating from WordPress. Please set up 301 redirects: /about-us to /about, /our-services to /services, /contact-us to /contact."
3. Publish your changes.

<!-- TODO: verify whether and how Kite supports configuring 301 redirects, and where, with product -->

## Step 3: Point your domain at Kite

Once your Kite site is published and your redirects are in place, connect your existing domain to Kite so visitors land on the new site at the same web address. See [Connect a custom domain](/custom-domains/connect-a-custom-domain).

## Step 4: Turn off the old site so it stops serving pages

This step is easy to forget and important. If your old WordPress or Wix site keeps serving the old pages, you can end up with **duplicate content** (two live copies of the same page), which splits your ranking and confuses Google.

1. After your domain points to Kite and everything looks right, **unpublish or take down the old site** on your previous host.
2. **Verify the old host stops serving the old pages.** Visit a couple of your old URLs and confirm they now lead to your new Kite pages (via the redirects) rather than the old design.

:::tip Verify before you celebrate
Open two or three of your most important old URLs in a fresh browser tab. Each should redirect to the matching new page on Kite. If an old page still shows the old design, the redirect or the old-site takedown isn't finished yet.
:::

## Step 5: Update your sitemap

After migrating, make sure your sitemap reflects your new Kite pages so search engines can re-discover them. See [Sitemap & robots.txt](/seo/sitemap-and-robots).

## Troubleshooting

- **My old pages still show the old site.** The old host is still serving them. Unpublish/take down the old site, and confirm your domain now points to Kite. See [Connect a custom domain](/custom-domains/connect-a-custom-domain).
- **Old links now lead nowhere ("page not found").** A redirect is missing for that URL. Give Kite the specific old and new addresses and ask it to add the 301 redirect.
- **My rankings dropped right after migrating.** Some short-term movement is normal while Google re-crawls. Make sure 301 redirects are in place, the old site is down, and your sitemap is updated. Then give Google time. See [Sitemap & robots.txt](/seo/sitemap-and-robots).
- **Google still shows my old URLs in search results.** Search engines take time to re-crawl and update. As long as those old URLs 301-redirect to the right new pages, visitors will land in the right place while Google catches up.
