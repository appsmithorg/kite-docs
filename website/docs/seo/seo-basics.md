---
title: SEO Basics
description: Plain-language guide to page titles, meta descriptions, headings, alt text, and canonical tags — and how to ask Kite to set them.
---

# SEO Basics

These are the building blocks that help Google understand your pages and show them to the right people. You don't need to write any code — once you know what each one does, you can ask Kite to set it for you.

:::tip
You don't edit these tags by hand in Kite. You describe what you want in plain language (for example, "Set the page title on my About page to…") and Kite updates your site.
:::

## Page titles

A **page title** is the clickable headline that shows up in Google's search results and in your browser tab. Each page should have its own clear, descriptive title that includes what the page is about.

**How to ask Kite:**

1. Open your site in Kite.
2. Tell Kite which page and what you want, for example: "Set the page title on my Services page to: Wedding Photography in Austin — Jane Doe Photography."
3. Review the change and publish. See [How to publish](/publishing/how-to-publish).

:::note Keep titles short
Google typically shows only the first 50–60 characters of a title, so put the most important words first. <!-- TODO: verify exact character guidance with product -->
:::

## Meta descriptions

A **meta description** is the short paragraph that appears under your title in search results. It doesn't directly change your ranking, but a clear, inviting description gets more people to click.

**How to ask Kite:**

1. Decide on a one- or two-sentence summary of the page (aim for roughly 150 characters).
2. Tell Kite, for example: "Set the meta description on my Home page to: Handmade candles poured in small batches in Portland. Free local pickup."
3. Publish your changes.

## Headings

**Headings** organize your page into a clear structure — like the title of a chapter and its sections. The main heading on a page is called an **H1**, and there's usually just one per page. Smaller sub-headings (H2, H3) break up the rest. Good headings help both readers and search engines follow your content.

**How to ask Kite:**

- "Make 'Our Story' the main heading on my About page."
- "Break my Services page into sections with headings for each service I offer."

## Alt text

**Alt text** (alternative text) is a written description of an image. It's read aloud by screen readers for people who can't see the image, and it helps search engines understand your pictures — which can bring in traffic from Google Images.

**How to ask Kite:**

1. Point Kite to the image and describe it plainly, for example: "Add alt text to the hero image on my Home page: A lit soy candle on a wooden table."
2. Publish your changes.

See also [Images & logos](/building/images-and-logos).

## Canonical tags

A **canonical tag** tells search engines which version of a page is the "official" one when similar content could be reached at more than one address. This prevents Google from getting confused or splitting your ranking between duplicate URLs. Kite generally sets this for you, but it's worth knowing the term — especially when you connect a custom domain, where the canonical address should point to your real domain. <!-- TODO: verify Kite's default canonical behavior with product -->

If your canonical tag points at your `.kite.space` address instead of your custom domain, see [Sitemap & robots.txt](/seo/sitemap-and-robots), which covers how to ask Kite to fix it.

## When will changes show up in Google?

Not right away. Publishing updates your **live site** immediately, but Google has to **crawl** (re-visit) and **re-index** your pages before the new titles and descriptions appear in search results. This can take anywhere from a few days to a few weeks, and Kite has no control over Google's schedule.

:::note Set expectations
A good way to check your work is to view the **live page itself** — your changes should be visible there as soon as you publish, even though Google's search listing lags behind.
:::

## Troubleshooting

- **My change isn't showing in Google search results.** Search engines update on their own timeline. Confirm the change is live on your actual page first; if it is, the search listing will catch up over the following days or weeks.
- **My change isn't showing on the live page either.** This is a publishing or caching issue, not an SEO one. Make sure you published, then try a hard refresh. See [Changes not showing](/publishing/changes-not-showing).
- **I'm not sure which page Kite changed.** Be specific about the page name in your request and re-check. You can also review past edits in [Version history](/troubleshooting/version-history).
