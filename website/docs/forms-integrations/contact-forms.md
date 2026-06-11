---
title: Contact Forms & Lead Capture
description: Add a contact form or newsletter signup to your Kite site, choose where submissions go, and test it on your live site.
---

# Contact Forms & Lead Capture

A contact form lets visitors send you a message, ask a question, or join your mailing list — without you having to publish your email address. Here's how to add one and make sure it works.

## Add a contact form

1. Open your site in the Kite editor.
2. Go to the page where you want the form (a Contact page is common, but a form can live anywhere).
3. Ask Kite in plain language — for example, "Add a contact form with name, email, and message fields," or "Add a newsletter signup with just an email field."
4. Review the form Kite adds and adjust the fields if you need to (for example, add a phone number or a dropdown).
5. [Publish your site](/publishing/how-to-publish) so the form goes live.

:::tip Keep it short
The fewer fields you ask for, the more people will actually fill out your form. Name and email are often enough.
:::

## Add a newsletter signup

A newsletter signup is just a small form, usually with a single email field.

1. In the editor, go to the spot where you want the signup (footers and the bottom of the homepage work well).
2. Ask Kite, "Add a newsletter signup form here."
3. Decide where those email addresses should go — see [Where submissions go](#where-submissions-go) below.
4. Publish your site.

:::note
If you use a dedicated email marketing tool (like Mailchimp), you may prefer to embed its signup form as a script instead. See [Chat Widgets & Custom Scripts](/forms-integrations/chat-and-scripts).
:::

## Where submissions go

When someone submits your form, the entry needs to reach you somewhere — usually as an email to your inbox.

1. Open the form in the editor.
2. Set the **recipient email** — the address where you want submissions delivered.
3. Publish your site so the change takes effect.

<!-- TODO: verify where submissions are stored/delivered — confirm whether entries go only to a recipient email, are also saved in a dashboard/database, and exactly where the recipient-email setting lives in the UI -->

:::tip Use an address you check
Send submissions to an inbox you actually monitor, and consider adding a filter or label so form messages don't get lost.
:::

## Test your form on the live site

Always test on the **published** site, not the editor preview — forms often don't fully work in preview.

1. Open your live site URL in a browser. (Not sure of your URL? See [Your Kite URL](/publishing/your-kite-url).)
2. Fill out the form with real-looking details and submit it.
3. Confirm you see a success message on the page.
4. Check the recipient inbox for the test submission. Look in spam or junk if it doesn't arrive.

:::tip Test from a different account
Send your test from an email address that isn't the recipient address, so you can clearly see the message arrive.
:::

## Troubleshooting

**My form "doesn't submit" on the published site.**
Work through these checks:

1. **Did you publish after adding or editing the form?** Changes in the editor don't go live until you publish. See [Changes not showing](/publishing/changes-not-showing).
2. **Is a recipient email set?** Without a destination, a submission has nowhere to go. <!-- TODO: verify expected behavior when no recipient is configured -->
3. **Are required fields filled in?** A form may silently refuse to submit if a required field is empty or an email address is malformed.
4. **Did you check spam/junk?** The submission email may have been filtered.
5. **Try a different browser or device** to rule out a browser extension or ad blocker interfering.

If the form still won't submit, ask Kite directly — for example, "My contact form on the live site isn't submitting; can you check it?" Kite can look at how the form is wired up and where submissions are sent. <!-- TODO: verify the exact support/ask flow and what Kite can inspect -->

**The form submits, but no email arrives.**
This is usually an email delivery problem rather than a form problem. See [Email sending issues](/troubleshooting/email-sending) and double-check the recipient address for typos.

## Related

- [Chat Widgets & Custom Scripts](/forms-integrations/chat-and-scripts)
- [Email sending issues](/troubleshooting/email-sending)
- [How to publish](/publishing/how-to-publish)
