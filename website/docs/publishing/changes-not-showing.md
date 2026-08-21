---
title: My Changes Aren't Showing on the Live Site
description: Edited your Kite site but the live version looks the same? Here is why, and how to fix it.
---

# My Changes Aren't Showing on the Live Site

This is one of the most common questions, and it usually has a simple cause: your edits live in the editor as a draft until you publish them.

## Draft versus published: the key idea

Kite has two versions of your site:

- The **editor and preview** show your draft, including everything you have just changed.
- The **live site** (your `kite.space` address or custom domain) shows only what you have **published**.

So if you edit something and it looks right in the editor but not on the live site, the change has not been published yet.

:::info
Think of it like a document with a draft and a published copy. Editing the draft never changes the published copy until you hit **Publish**.
:::

## Fix it: step by step

1. Make sure you clicked **Publish**. Open your project and click **Publish** in the top-right corner. See [How to Publish Your Site](/publishing/how-to-publish).
2. If the button says **No changes to update**, your latest edits are already live. The problem is caching, so go to step 4.
3. Allow about 40 seconds for the deploy to finish. The panel shows **Published · just now** when it is done.
4. **Hard-refresh your browser** to clear its cache:
   - Windows: **Ctrl + Shift + R**
   - Mac: **Cmd + Shift + R**
5. Try a private window or a different device to rule out caching entirely.

:::tip
Browsers aggressively cache websites. A normal refresh may still show the old version. A hard refresh or a private window is the reliable test.
:::

## Multi-page sites: a subpage shows the homepage

On multi-page sites, sometimes a subpage serves the homepage content instead of its own. This is usually a page or navigation setup issue rather than a publishing one. See [Pages and navigation](/building/pages-and-navigation).

## Troubleshooting

- **The preview will not start.** See [Preview won't start](/troubleshooting/preview-not-loading).
- **Publishing throws an error.** See [Why Did Publishing Fail?](/publishing/publish-failures).
- **It is still stale after publishing and hard-refreshing.** Check that you are viewing the correct address. Your custom domain may point somewhere different from your `kite.space` URL. See [Custom domain troubleshooting](/custom-domains/troubleshooting).
