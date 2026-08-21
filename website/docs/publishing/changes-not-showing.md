---
title: My Changes Aren't Showing on the Live Site
description: Edited your Kite site but the live version looks the same? Here's why, and how to fix it.
---

# My Changes Aren't Showing on the Live Site

This is one of the most common questions, and it usually has a simple cause: your edits live in the editor until you publish them.

## Preview vs. published: the key idea

Kite has two versions of your site:

- The **editor and preview** show your work-in-progress, including everything you've just changed.
- The **live site** (your `kite.space` address or custom domain) shows only what you've **published**.

So if you edit something and it looks right in the editor but not on the live site, the change simply hasn't been published yet.

:::info
Think of it like a document with a "draft" and a "published" copy. Editing the draft never changes the published copy until you hit **Publish**.
:::

## Fix it: step by step

1. Make sure you actually clicked **Publish**. Open your project and click **Publish** in the top-right corner. See [How to Publish Your Site](/publishing/how-to-publish).
2. If **Publish** shows no pending changes but the live site still looks stale, try **publishing again** to force a fresh deploy.
3. Allow a short time for the deploy to finish before checking the live site. <!-- TODO: verify typical deploy time -->
4. **Hard-refresh your browser** to clear its cache:
   - Windows: **Ctrl + Shift + R**
   - Mac: **Cmd + Shift + R**
5. Try an incognito/private window or a different device to rule out caching entirely.

:::tip
Browsers aggressively cache websites. A normal refresh may still show the old version. A hard refresh or private window is the reliable test.
:::

## Multi-page sites: a subpage shows the homepage

On multi-page sites, sometimes a subpage serves the homepage content instead of its own. This is usually a page or navigation setup issue rather than a publishing one.

- [Pages and navigation](/building/pages-and-navigation)

## Troubleshooting

- **The preview won't load at all.** See [Preview not loading](/troubleshooting/preview-not-loading).
- **Publishing throws an error.** See [Why Did Publishing Fail?](/publishing/publish-failures).
- **It's still stale after publishing and hard-refreshing.** Check that you're viewing the correct address. Your custom domain may point somewhere different from your `kite.space` URL. See [Custom domain troubleshooting](/custom-domains/troubleshooting).
