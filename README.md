# Art By Preyo enquiry site

A separate React/Vite enquiry website with the same logo, colours, and background as the Art By Preyo social links page.

## Run locally

```bash
npm install
npm run dev
```

## How enquiries arrive

- **Send enquiry by email** sends the form through FormSubmit's AJAX endpoint and shows a confirmation on this site. FormSubmit forwards submissions to `kundupreyasi1997@gmail.com`. Its free service requires the owner to click the activation link sent after the first live submission. Until that activation is complete, email delivery is not active. Do a real test from the published site before putting the URL on a printed card. Submissions pass through FormSubmit's service.
- **Continue on WhatsApp** opens a prefilled message to `+91 8918665336`. The visitor must tap Send in WhatsApp.
- The form includes the full site URL in `_url` and keeps visitors on `https://artbypreyo.github.io/enquiry-form/` after submission.
- The footer WhatsApp icon opens a short, prefilled artwork enquiry. The form's WhatsApp button includes the details entered in the form.

The site is hosted at `https://artbypreyo.github.io/enquiry-form/`. Test the form and WhatsApp links on a phone before printing this address on the business card.
