---
title: Sitemap & robots.txt
description: What sitemap.xml and robots.txt do, how Kite generates them, how to ask Kite to update your sitemap, and how to fix common sitemap issues.
---

# Sitemap & robots.txt

These two files help search engines find and crawl your pages. Kite creates both for you, and you can ask Kite to update your sitemap as your site grows. This article explains what they are and how to fix the two issues people run into most.

## What is a sitemap?

A **`sitemap.xml`** file is a list of all the pages on your site, written in a format search engines can read. It helps Google discover your pages quickly and know when something changed. You normally find it at an address like `yourdomain.com/sitemap.xml`.

Kite generates this file automatically when you publish. <!-- TODO: verify exact sitemap generation behavior with product -->

## What is robots.txt?

A **`robots.txt`** file sits at the root of your site (for example, `yourdomain.com/robots.txt`) and tells search engines which parts of your site they're allowed to crawl. It usually also points search engines to your sitemap. Kite generates this for you too.

:::note You don't edit these files directly
In Kite you don't open or edit `sitemap.xml` or `robots.txt` by hand. You ask Kite to make changes in plain language, and Kite updates the files for you.
:::

## How to ask Kite to update your sitemap

When you add, rename, or remove pages, your sitemap should be refreshed so search engines see the current structure.

1. Open your site in Kite.
2. Ask Kite plainly, for example: "Update my sitemap to include the new Pricing page I just added."
3. Publish your changes. See [How to publish](/publishing/how-to-publish).

:::tip
Mention what changed (added pages, removed pages, or renamed URLs) so Kite knows exactly what to put in the sitemap.
:::

## Issue 1: "Kite said the sitemap updated, but it still looks old"

This is almost always about **timing and caching**, not a failed update. After a change is made, there can be a delay before you see it, and your browser or a network cache may still be showing you the old version.

Work through these steps:

1. **Check the live URL, not a preview.** Open your published sitemap directly in your browser, for example, `yourdomain.com/sitemap.xml`. This is the version search engines actually see.
2. **Hard-refresh the page.** A normal refresh can serve a cached copy. Do a hard refresh (on most browsers, hold **Shift** and click reload) to force a fresh load.
3. **Allow some time to propagate.** Changes can take a little while to appear everywhere. Wait a bit and check again before assuming something is wrong.
4. **Remember Google is on its own schedule.** Even once your sitemap is correct, Google won't re-crawl it instantly. Updates in search results can take days or weeks.

See also [Changes not showing](/publishing/changes-not-showing) for the general "I updated my site but don't see it" checklist.

## Issue 2: My sitemap or canonical points to my .kite.space address, not my custom domain

If you've connected a custom domain but your sitemap (or your [canonical tags](/seo/seo-basics)) still list the free `yourname.kite.space` address, search engines may index the wrong address. You want everything pointing at your real domain.

1. First, confirm your custom domain is fully connected and live. See [Connect a custom domain](/custom-domains/connect-a-custom-domain).
2. Ask Kite to update the addresses, for example: "My sitemap and canonical URLs still use my-site.kite.space. Please update them to use mybusiness.com."
3. Publish, then verify by opening `yourdomain.com/sitemap.xml` and checking that the links use your custom domain.

:::note Why this matters
If both addresses are indexed, Google may treat them as duplicate content and split your ranking. Pointing everything at your custom domain keeps your site's authority in one place.
:::

<!-- TODO: verify whether Kite updates sitemap/canonical to the custom domain automatically on connect, or requires a request -->

## Troubleshooting

- **The sitemap still looks old after updating.** Check the live URL directly, hard-refresh, and allow time to propagate. See Issue 1 above.
- **The sitemap shows my .kite.space address.** Confirm your custom domain is connected, then ask Kite to update the sitemap and canonical URLs. See Issue 2 above.
- **Google isn't picking up my new pages.** Make sure the pages are in the sitemap and your site is published, then give Google time to re-crawl. You can also submit your sitemap in Google Search Console. <!-- TODO: verify whether Kite documents Search Console submission -->
