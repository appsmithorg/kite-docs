---
title: Site Analytics
description: Use Kite's built-in visitor analytics and connect external tools like Google Analytics to understand your traffic.
---

# Site Analytics

Analytics tell you how many people visit your site, which pages they look at, and where they come from. Kite includes built-in analytics, and you can also connect an external tool if you prefer.

## Kite's built-in analytics

Kite tracks basic visitor activity on your published site so you can see how it's performing — typically things like visits, page views, and top pages. <!-- TODO: verify exactly which metrics built-in analytics measures and where the dashboard lives in the UI -->

1. Open your project in Kite.
2. Find the **Analytics** area for your site.
3. Review your visitor numbers and most-visited pages.

<!-- TODO: verify the location/name of the built-in analytics view and the metrics shown -->

:::tip Publish before you measure
Analytics only count visits to your **live, published** site. If you haven't published yet, or you only viewed the editor preview, you won't see meaningful numbers. See [How to publish](/publishing/how-to-publish).
:::

## Connect external analytics

Prefer a tool you already use? You can add an external analytics service by embedding its tracking script.

Commonly requested tools:

- **Google Analytics** (GA4)
- **PostHog**
- **Mixpanel**

<!-- TODO: verify which external analytics tools are officially supported vs. simply addable via a custom script -->

To connect one:

1. Create your property/project in the analytics tool and copy its **tracking snippet** or measurement ID.
2. In the Kite editor, ask Kite to add the snippet — for example, "Add this Google Analytics tag to every page," and paste it.
3. [Publish your site](/publishing/how-to-publish).
4. In the analytics tool, use its real-time view to confirm your visit is being recorded.

:::note Adding scripts
External analytics are added the same way as any embed script. If the tracker doesn't load, it may be blocked by your site's Content Security Policy — see [Chat Widgets & Custom Scripts](/forms-integrations/chat-and-scripts).
:::

## "My visitor count looks wrong or too low"

A lower-than-expected number is usually normal, not a bug. Common reasons:

- **You only just published.** It can take time before visits show up, and a brand-new site simply has few visitors. <!-- TODO: verify any data delay/processing window for built-in analytics -->
- **Your own visits may not count.** Some analytics filter out repeat visits from you, the owner.
- **Preview views don't count.** Only your published site is tracked.
- **Ad blockers and privacy tools** stop some visitors from being counted — so real traffic is often a bit higher than analytics show. This affects every analytics tool, not just Kite.
- **Two tools won't match exactly.** Kite's built-in numbers and Google Analytics use different methods, so their totals will differ. That's expected.

:::tip Compare trends, not single numbers
Don't obsess over one day's count. Watch the trend over weeks — is traffic growing, steady, or dropping? That's the useful signal.
:::

## Troubleshooting

**No data at all.**
Confirm your site is [published](/publishing/how-to-publish) and that you (or a test visitor) actually loaded the live URL. Give it a little time, then check again.

**External tracker isn't recording.**
Verify the snippet is complete and the measurement ID is correct, check for a CSP/blocked-script error in your browser console, and ask Kite to allow the tracker's domain if needed. See [Chat Widgets & Custom Scripts](/forms-integrations/chat-and-scripts).

## Related

- [Chat Widgets & Custom Scripts](/forms-integrations/chat-and-scripts)
- [SEO basics](/seo/seo-basics)
- [How to publish](/publishing/how-to-publish)
