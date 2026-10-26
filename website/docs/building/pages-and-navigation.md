---
title: Pages & Navigation
description: Add pages like About, Contact, and Pricing to your Kite site, link them in your navigation menu, keep clean URLs, and fix a subpage that shows your homepage instead of its own content.
---

# Pages & Navigation

As your site grows, you'll want more than one page: an About page, a Contact page, maybe Pricing. Kite can add pages, link them in your menu, and keep your URLs clean, all from chat.

## Adding a page

1. Tell Kite what page you want and what goes on it. For example:

> Add an **About** page with our story, a team section, and a photo.

2. Review the new page in the preview.
3. Refine the content with more chat edits or **Point & Edit**.

Common pages people add:

- **About**: `/about`
- **Contact**: `/contact`
- **Pricing**: `/pricing`
- **Services**: `/services`

:::tip
Add one page at a time and review it before moving on. It's easier to get each page right than to fix several at once.
:::

## Linking a page in the navigation

Adding a page doesn't always add it to your menu automatically. If a new page isn't in the nav, ask:

> Add a link to the **About** page in the main navigation menu, between "Home" and "Contact."

You can also ask Kite to rename, reorder, or remove menu links:

> In the nav, rename "Services" to "What We Do" and move it before "Pricing."

## Clean URLs

Clean URLs are short and readable, like `yoursite.com/about` instead of something long and cluttered. Kite generally creates clean URLs for your pages. If a page URL isn't what you want, ask:

> Change the URL of the About page to /about.

<!-- TODO: verify how page URLs/slugs are set and edited in Kite -->

## Common issue: a subpage shows the homepage on the live site

A frequent problem is this: in the editor your **About** (or other) page looks correct, but on your **published** site, visiting `/about` shows your homepage content instead of the About content. This is usually a **routing** issue: the URL isn't pointing to the right page on the live site.

To fix it:

1. Confirm the page exists and looks right in the editor.
2. Ask Kite to fix the routing, for example:

> On the live site, /about is showing the homepage instead of the About page. Please fix the routing so /about loads the About page content.

3. Publish again, then visit the page in a fresh browser tab (or hard-refresh).

:::caution
This often looks like "my edit didn't save," but the content is usually fine. The live URL just isn't routing to it. Publish and refresh first, then ask Kite to fix routing if the wrong page still loads. See [Changes Not Showing](/publishing/changes-not-showing).
:::

## Troubleshooting

- **New page isn't in the menu:** Ask Kite to add a nav link to it, and say where in the order it should go.
- **A subpage shows the homepage when published:** Ask Kite to fix the routing for that URL, then publish and refresh. See [Changes Not Showing](/publishing/changes-not-showing).
- **Wrong or messy URL:** Ask Kite to set the page's URL to the clean path you want. <!-- TODO: verify URL editing -->
- **Menu link goes to the wrong page:** Tell Kite which link and which page it should point to.
