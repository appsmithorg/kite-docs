---
title: Undo, Restore & Roll Back Your Site
description: Undo one change, restore your whole site to an earlier version, or take your live site back, from the browser workspace or from Slack. Learn what restoring changes and what it leaves alone.
---

# Undo, Restore & Roll Back Your Site

Kite saves a version of your site each time it makes a change, so nothing is lost. You can undo a single change, go back to an earlier version of the whole site, or take your live site back to how it was.

## The one thing to know: restoring doesn't change your live site

Your site has a **draft** (what you see in the preview) and a **live site** (what visitors see). Undoing or restoring changes the **draft only**. Your live site stays as it is until someone presses **Publish**.

This means you can restore safely, check the preview, and only then publish. It also means that if you want to fix the live site, **restoring is not enough on its own. You also need to publish.** See [Draft vs. live](/publishing/changes-not-showing).

## Choose what you need

| You want to... | Do this |
|---|---|
| Remove one change and keep everything since | [Undo a change](#undo-a-change) |
| Put the whole site back to an earlier point | [Restore an earlier version](#restore-an-earlier-version) |
| Fix something that's already live | [Roll back your live site](#roll-back-your-live-site) |

## When Kite saves a version

Kite saves a version automatically when it:

- Makes a change to your site. Kite saves one version for each separate change, with a plain description such as "Shorten the hero headline".
- Applies a draft to your site.
- Undoes or restores something.
- Applies a design you picked.

You don't need to save anything yourself.

## Undo a change

Undo removes **one** change and keeps everything that came after it.

**From the publish panel:** open **Publish**. Under **Changes to publish**, each change waiting to go live has an **Undo** button.

**From the change card:** when Kite finishes a change, the card it posts (in the browser workspace or in Slack) has **Preview**, **Undo**, and **Publish** buttons.

**By asking:** tell Kite in Slack or chat, for example "Undo the headline change." If Kite can't tell which change you mean, it changes nothing and shows your recent versions so you can restore to the right point.

## Restore an earlier version

Restoring puts the **whole site** back to how it was at an earlier point.

### In the browser workspace

Ask Kite in the Kite chat panel, for example "Show me earlier versions of the site." Kite runs a short task and replies with your 5 most recent versions, newest first. Each row shows what changed and when, with two icons. Hover over them to see their names:

- **Preview this version** opens the site as it was then, in a new tab. Nothing changes.
- **Restore to this point** puts the draft back to that version.

The row you're on now is marked **Current version**. When the restore finishes you see **Restored. Your site is back to that version.**

### From Slack

Ask Kite, for example:

- "Go back to yesterday's version of the site."
- "Restore the site to before the pricing changes."
- "Show me the recent versions."

Kite posts **Recent versions of** your site, with a **Restore** button on each row. Click one, and Kite confirms with **Restored** and the version's name.

### Restoring never deletes anything

A restore adds a new version labelled **Restored:** rather than removing the versions in between. If you change your mind, restore again to the later version.

:::tip Preview before you restore
Use **Preview this version** first so you're sure you're going back to the right point.
:::

## Roll back your live site

There's no single "undo publish" button. Taking your live site back is two steps:

1. **Undo the change or restore an earlier version** as described above. This fixes the draft.
2. **Check the preview, then click Publish.** This sends the fixed draft live.

After publishing, do a hard refresh or open a private window to see the change. Browsers often show a saved copy. See [Changes not showing](/publishing/changes-not-showing).

## What restoring does and doesn't cover

**Restored:** your site's pages, layout, design, and wording.

**Not restored:**

- **Blog posts and other CMS content.** These are saved separately. To take back a CMS edit, use its **Undo** in **Changes to publish**.
- **Form submissions** in the **Leads** tab in **Growth**.
- **Domain settings** and your `kite.space` address.

:::caution Running an A/B experiment?
End the experiment from **Experiments** before you restore to a version from before it started. Kite won't stop you, but restoring past the start removes the variant from your draft. See [A/B experiments](/capabilities/ab-experiments).
:::

A restore covers the whole site, not single pages. To take back one page's change only, use [Undo](#undo-a-change).

## Credits

- **Clicking Restore** doesn't use credits. In the browser workspace your team needs some credits available to restore the live site's draft.
- **Clicking Undo** usually doesn't use credits. If the change clashes with a later one, Kite runs a task to sort it out, and that uses credits.
- **Asking Kite in words** to undo, restore, or show your versions is a request like any other, so it uses credits.

If you're out of credits, [buy more](/pricing-credits/buy-credits). See [How credits work](/pricing-credits/how-credits-work).

## Sites imported from GitHub

If your site's code lives in your own GitHub repository, Undo isn't available in Kite. Open the change's pull request on GitHub and choose **Revert** instead. A restore is copied to your repository, and your own deploy setup decides when it goes live.

## Can't find the versions you want?

- **Your site has no saved versions yet.** Some sites, especially older ones, may have few or no earlier versions to go back to.
- **You need something older.** Kite's list shows the 5 most recent versions. Describe what you want, for example "the version from before the October redesign," and Kite can look a little further back, about the last 20 versions.
- **Still stuck?** Open **Chat with us** with your site URL and a description of the version you want back.

## Related

- [How to publish](/publishing/how-to-publish)
- [Changes not showing on the live site](/publishing/changes-not-showing)
- [Chat stuck or page crashed](/troubleshooting/editor-frozen)
