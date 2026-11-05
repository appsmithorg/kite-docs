---
title: Site Analytics
description: Every Kite-hosted site has built-in analytics. Learn what each plan sees, what Kite tracks automatically, how to track a specific button, how to get funnels and answers from Kite, and how PostHog fits in.
---

# Site Analytics

Every site Kite hosts has analytics built in. There's nothing to install or set up. Kite starts counting visitors the first time you publish.

## Where to find it

Open your site in the browser workspace and choose **Insights** in the left-hand menu. Insights groups everything Kite measures about your site:

- **Analytics, then Site insights:** your visitors and what they do. This page explains it.
- **AI answers:** how often AI assistants mention and cite your site.
- **Google:** clicks and keywords from Google search.
- **Site health:** speed, problems, and errors visitors hit.

Form submissions are in the **Leads** tab in **Growth**. See [Contact forms](/forms-integrations/contact-forms).

:::tip Publish before you measure
Analytics count visits to your **live, published** site. Editor previews are not counted.
:::

## What each plan sees

On any plan, pick a time range: the last 24 hours, 7 days, 30 days, or 90 days.

**Free plan:** total visitors for the time range you pick. A banner shows what paid plans add.

**Paid plans:**

- Visitors over time
- **Pageviews**, **Pages per visit**, and **Avg time** on site
- **Left after one page** (often called bounce rate)
- **How people found you:** the sites, searches, and links that sent visitors
- **Top pages**
- **Devices** and **Countries**

See [Plans and trial](/pricing-credits/plans-and-trial).

## What Kite tracks automatically

When Kite builds your site, it marks the parts that matter so they are tracked without any setup:

- **Page views** and how far down each page visitors scroll
- **Which sections** visitors see and spend time on
- **Clicks on calls to action** such as "Book a demo" or "Start free trial"
- **Navigation clicks**
- **Form submissions**, and attempts blocked by a missing or invalid field
- **Conversions:** the actions that count as a win for your business, such as a signup or demo request

These are the same actions you can choose as the goal of an [A/B experiment](/capabilities/ab-experiments).

### Track something specific

Want to know how many people click a particular button or open a particular section? Ask Kite, for example:

- "Track clicks on the 'Download the guide' button."
- "Count the pricing calculator as a conversion."

Kite marks the element, and the new numbers start once you publish. Sites built before this tracking existed may need Kite to add it first. Just ask.

## Ask Kite about your numbers

You don't need to read charts to get answers. Ask Kite in Slack, for example:

- "How much traffic did the comparison page get this week?"
- "Where are our visitors coming from this month?"
- "Which pages lead to the most demo requests?"

### Funnels

A funnel shows how many visitors make it through each step, and where they drop off. Each step is one of the actions Kite tracks. For example: viewed a page, clicked **Book a demo**, then submitted the demo form.

Ask Kite to build one, for example: "Show me a funnel from clicking 'Book a demo' to submitting the demo form over the last 30 days." Funnels need a paid plan. They can have 2 to 8 steps and look back up to 180 days.

## How the analytics work: PostHog

Kite's analytics run on [PostHog](https://posthog.com), a widely used product analytics service. Kite sets up a separate PostHog project for each site you publish, so each site's data stays apart.

Kite manages these projects for you. **You don't get a PostHog login.** You see your numbers in **Insights** and by asking Kite. If you need data Kite doesn't show, ask Kite or open **Chat with us**.

### Already use PostHog?

If your site is imported from GitHub and its code already uses PostHog, Kite shows **This site already uses PostHog** on the analytics page. Click **Connect PostHog** and Kite can read the analytics you already collect. For sites Kite builds and hosts, Kite's built-in analytics are what experiments and reports use.

## Use another analytics tool too

Prefer a tool you already use, such as Google Analytics? Add it alongside Kite's.

1. Create your property in the analytics tool and copy its tracking snippet or measurement ID.
2. Ask Kite to add it, for example, "Add this Google Analytics tag to every page," and paste it.
3. Publish your site.
4. Use the tool's real-time view to confirm your visit is recorded.

See [Chat Widgets & Custom Scripts](/forms-integrations/chat-and-scripts).

## "My numbers look wrong or too low"

- **You only just published.** A brand-new site has few visitors, and Kite saves the numbers for a short while between refreshes, so a short delay is normal.
- **Preview views do not count.**
- **Ad blockers and privacy tools** stop some visitors from being counted, so real traffic is often a bit higher than analytics show. This affects every analytics tool.
- **Two tools will not match exactly.** Kite's numbers and Google Analytics count in different ways.

:::tip Compare trends, not single numbers
Watch the trend over weeks. Is traffic growing, steady, or dropping? That is the useful signal.
:::

## Related

- [A/B experiments](/capabilities/ab-experiments)
- [Conversion work](/capabilities/conversion-fixes)
- [Contact Forms & Lead Capture](/forms-integrations/contact-forms)
- [SEO & discoverability](/seo/)
