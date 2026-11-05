---
title: A/B Experiments
description: Test a headline, button, or section against your current site, see which version more visitors act on, and keep the winner. Learn what you can test, how to start, how long to run, and how to read results.
---

# A/B Experiments

An A/B experiment shows half your visitors the page as it is today and the other half a changed version. You see which version more visitors act on, then keep that one. It is the surest way to know a change helped rather than guessing.

:::note Rolling out
Experiments are rolling out to teams gradually. If you do not see **Experiments** in your site's left-hand menu, your team does not have it yet. Ask Kite in Slack or open **Chat with us** to ask about access.
:::

## What you can test

Each experiment tests **one change on one page**. Good candidates:

- A **headline** or subheading
- A **button**: its words, color, or position
- A **section**: a new testimonial block, a shorter form, a different hero image, or removing something you suspect gets in the way

An experiment always has two versions: the **Original** (what your site serves today) and the **Variant** (the change being tested).

### What you can't test

These affect the whole site or how it works, so they can't be split between visitors:

- The navigation, header, or footer
- Site-wide fonts, colors, or styles
- Page titles and search or social preview text
- New pages or redirects
- How a form or checkout works behind the scenes
- Prices (you can test how a price is presented, not the amount charged)

To change any of these, edit the site directly. See [Editing your site](/building/editing-your-site).

## Before you start

- **Your site must be published.** An experiment splits your live visitors, so a site Kite hosts needs to be live first. If it isn't, the Experiments page shows **Publish your site to start testing**.
- **Your site needs a goal to measure.** Kite tracks actions such as form submissions and clicks on calls to action. If no goals appear, republish your site, then pick a goal.
- **Your site must be a Next.js site.** That covers most sites Kite builds. Experiments aren't available yet on sites that use Kite's built-in CMS. Sites imported from GitHub can run experiments if their code follows Kite's standard layout. If your site can't run experiments, Kite tells you why when you try to create one.

## Set up an experiment

You can ask Kite, or set it up yourself.

### Ask Kite

Ask in Slack, for example:

- "Run an experiment on the homepage headline."
- "Test a shorter signup form against the current one."
- "Our pricing page isn't converting. Set up a test for a clearer call to action."

Kite writes the test version, picks a goal, and tells you when the experiment is ready. It never starts the experiment itself (see [Start the experiment](#start-the-experiment)).

### Set it up yourself

1. Open your site in the browser workspace and choose **Experiments** in the left-hand menu.
2. Click **New experiment**.
3. Fill in **What are you testing?** (for example, "Hero headline") and **What do you expect to happen, and why?** (for example, "A benefit-led headline will get more signups than the current feature-led one").
4. Set the **traffic split**: the share of visitors who see the variant. The default is 50%, which gives you a result fastest.
5. Click **Create and edit variant**. A draft opens where you describe the change in chat, or click the element to edit it.

To check both versions in the editor, use **Preview experiments** on the preview toolbar. It changes only what you see. Visitors and results are not affected.

### Pick the goal

The **Conversion goal** is the one action that counts as a win, such as a form submission or a click on your main call to action. Kite suggests your site's main conversion, marked **(primary)**. To change it, open the experiment and click **Edit goal**.

You can change the goal and traffic split until the experiment starts. After that they are locked, so the result stays fair.

## Start the experiment

Starting is always done by a person on your team, never by Kite on its own. That's because starting changes what real visitors see on your live site.

1. Open the experiment from **Experiments**.
2. Click **Publish and start**.
3. Kite asks **Start this experiment?** and lists anything else waiting to publish, since starting also publishes your site. Click **Publish and start** to confirm.

Starting takes a few minutes while Kite publishes the variant and begins splitting visitors. A returning visitor keeps seeing the same version.

If **Publish and start** is greyed out, the experiment either has no goal yet or no variant to publish. The message under the button tells you which.

## How long to run it

Give an experiment time. Kite won't call a winner until **both** of these are true:

- It has run for at least **7 days**, so weekdays and weekends both count.
- Each version has had at least **100 visitors**.

Low-traffic pages take longer. If there's still no clear winner after about three weeks, Kite suggests stopping. A real difference that small may not be worth chasing.

:::tip Resist peeking
Early numbers swing a lot. A version that looks like a winner on day two often isn't by day ten. Wait for Kite to say the result is significant.
:::

## Read the results

Open the experiment to see the **Results** table:

| Column | What it means |
|---|---|
| **Visitors** | How many people saw each version. |
| **Conversions** | How many of them completed the goal. |
| **Conversion rate** | Conversions divided by visitors. |
| **Chance to win** | How likely each version is to be the better one. |

Under the table, Kite says whether the result is **statistically significant** or **not statistically significant yet**. "Not significant yet" means the difference could still be chance, so keep it running.

While an experiment runs, Kite checks in about every 3 to 7 days in your team's home Slack channel (or by email if Kite isn't in your Slack) with how it is doing. Check-ins use credits. You can ask any time, for example: "How is the headline test doing?"

## End the experiment and keep the winner

Kite tells you when there's a winner, but you decide what happens next. Kite never ends an experiment or applies the winner by itself.

1. Open the experiment and click **Publish and end**.
2. Choose a **Conclusion**:
   - **Test won**: the variant beat the original by enough to be confident it was not chance.
   - **Control won**: the original beat the variant.
   - **No clear winner**: enough data came in, and neither version pulled ahead.
   - **Stopped early**: ended before there was enough data to call it either way.
   - **Invalid**: something was wrong with the setup or the data.
3. Optionally add **Notes** on what you learned. They help the next time someone tests this page.
4. Answer **Which version does your live site keep?** with **The original** or **The variant**.
5. Click **Publish and end**.

Every visitor gets the version you kept straight away. Kite then removes the other version from your site and republishes automatically. The status shows **Cleaning up…** while this happens. If cleanup fails, click **Retry cleanup**.

To stop a test early for any reason, use the same steps and choose **Stopped early**.

## Questions

**Can I publish other changes while an experiment runs?** Yes. Normal publishing keeps working, and both versions stay live.

**Can I run more than one experiment at once?** Yes, as long as they test different parts of the site.

**Do experiments use credits?** Yes, for the work Kite does: writing or editing the variant through chat, and the regular check-ins while the experiment runs. See [How credits work](/pricing-credits/how-credits-work).

## Related

- [Conversion work](/capabilities/conversion-fixes)
- [Site analytics](/forms-integrations/analytics)
- [Approvals and autonomy](/slack/approvals)
