---
title: Social Link Previews (Open Graph)
description: Why a shared link shows the wrong title, image, or the word "prototype" — and how to ask Kite to set Open Graph and Twitter card tags per page.
---

# Social Link Previews (Open Graph)

When you paste your website link into WhatsApp, LinkedIn, X, or Facebook, a little preview card usually appears with a title, a short description, and an image. If that card looks wrong, this article explains why and how to ask Kite to fix it.

:::note What is Open Graph?
**Open Graph** is a small set of hidden tags on each page that tell social apps what title, description, and image to show in the preview card. **Twitter cards** are the same idea for X (formerly Twitter). You don't see these tags on the page — they only appear when your link is shared.
:::

## Why your preview looks wrong

A few common reasons a shared link shows the wrong information:

- **The preview shows the word "prototype," a placeholder, or an old title.** This usually means the Open Graph tags were never customized for that page, so a default or build-time value is showing. <!-- TODO: verify the exact default Open Graph value Kite uses with product -->
- **The wrong image appears (or no image).** No preview image has been set for that page, so the social app picks something on its own — or nothing.
- **The old preview still shows after you fixed it.** Social platforms **cache** previews. They may keep showing the old card for a while even after your page is updated (see the troubleshooting note below).

## How to ask Kite to set your social preview

You can set the preview per page. Decide on a title, a short description, and an image, then tell Kite plainly.

1. Open your site in Kite.
2. Describe what you want for the page, for example: "Set the social link preview for my Home page. Title: Bright Spark Electricians. Description: Licensed electricians serving Denver — same-day quotes. Use my logo as the preview image."
3. Ask Kite to set both **Open Graph** and **Twitter card** tags so the preview looks right across all apps.
4. Publish your changes. See [How to publish](/publishing/how-to-publish).

:::tip Choose a good preview image
A clear, landscape image (such as your logo on a clean background or a strong photo of your work) reads best in preview cards. You can manage your images in [Images & logos](/building/images-and-logos).
:::

## Troubleshooting

- **The preview still shows the old/wrong info after I fixed it.** Social platforms cache previews. First confirm the change is live on your page, then re-share the link. Many platforms offer a "debugger" or "post inspector" tool that lets you force them to re-fetch your page — search for the one belonging to the platform you're using (for example, the LinkedIn Post Inspector or Facebook Sharing Debugger). <!-- TODO: verify Kite's recommended tooling here with product -->
- **It says "prototype" or a placeholder.** That page's Open Graph title hasn't been customized yet — ask Kite to set the title, description, and image as shown above.
- **The image is missing or cropped oddly.** Ask Kite to set a dedicated preview image for that page, and choose a landscape (wide) image.
- **Only some apps show the right preview.** Make sure both Open Graph and Twitter card tags are set, and remember each app caches separately, so they may update at different times.
