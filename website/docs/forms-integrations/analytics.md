---
title: Site Analytics
description: Every Kite site has built-in analytics with four tabs (Site insights, Leads inbox, Discoverability, Errors). Learn what each plan sees and how to connect an external tool.
---

# Site Analytics

Every Kite-hosted site has built-in analytics. Open your site in the browser workspace and choose **Analytics** to see four tabs.

## The four tabs

- **Site insights.** On paid plans: pageviews, pages per visit, bounce rate, time on site, top pages, referrers, countries, devices, events, and funnels. On the Free plan: a single visitor count.
- **Leads inbox.** Every contact form submission. Free-plan teams see the count; paid plans see the submissions. See [Contact forms](/forms-integrations/contact-forms).
- **Discoverability.** Page speed scores, an AI analysis of how findable your site is, and a **Review and fix** button that hands the findings to Kite. See [SEO & discoverability](/seo/).
- **Errors.** Problems visitors hit on the live site.

Kite's analytics are powered by a dedicated PostHog project for each site. Reads are cached, so a short delay before a visit shows up is normal.

:::tip Publish before you measure
Analytics count visits to your **live, published** site. Editor previews are not counted.
:::

## Connect an external analytics tool

Prefer a tool you already use? Add its tracking script the same way as any embed script.

1. Create your property in the analytics tool and copy its tracking snippet or measurement ID.
2. Ask Kite to add it, for example, "Add this Google Analytics tag to every page," and paste it.
3. Publish your site.
4. Use the tool's real-time view to confirm your visit is recorded.

See [Chat Widgets & Custom Scripts](/forms-integrations/chat-and-scripts).

## "My visitor count looks wrong or too low"

- **You only just published.** A brand-new site has few visitors, and reads are cached briefly.
- **Preview views do not count.**
- **Ad blockers and privacy tools** stop some visitors from being counted, so real traffic is often a bit higher than analytics show. This affects every analytics tool.
- **Two tools will not match exactly.** Kite's numbers and Google Analytics use different methods.

:::tip Compare trends, not single numbers
Watch the trend over weeks. Is traffic growing, steady, or dropping? That is the useful signal.
:::

## Ask Kite about your numbers

You can also ask Kite in Slack: "What did the comparison page do for traffic this week?" Kite reads the analytics and answers. See [Conversion work](/capabilities/conversion-fixes).

## Related

- [Contact Forms & Lead Capture](/forms-integrations/contact-forms)
- [SEO & discoverability](/seo/)
