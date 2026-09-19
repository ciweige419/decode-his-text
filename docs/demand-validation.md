# Demand validation v1

This phase measures interest in a free editorial preview. It does not test AI quality, checkout conversion, or willingness to pay. No new API or paid service is required.

The interface is mobile-first because Google states that more than half of Google.com searches happen on mobile, and Google Search uses mobile-first indexing. Base spacing, touch targets, form flow, and the single-column result order are designed for phones; larger breakpoints add space and a two-column layout. Validate this assumption with this site's own device data after traffic grows.

## What is live after deployment

- Existing article URLs and written examples remain available.
- Home is explicitly a library lookup, not a personalized AI analysis.
- Whole-phrase matching ignores case, whitespace, curly apostrophes, and trailing punctuation. Unmatched messages receive no invented analysis or risk score.
- Sample selections and typed inputs are separate cohorts.
- Feedback and feature choices are optional and do not request email or conversation context.
- Old waitlist, unavailable checkout, and fake contact success flows are removed.

## Analytics contract

Production on Vercel loads the existing GA4 property G-XFSSKRVGMZ. Local and preview builds do not load GA4. Custom experiment events also require the www.decodehistext.com hostname.

| Event | Meaning | Parameters |
| --- | --- | --- |
| demo_start | User submits a nonempty phrase | experiment_id, input_source |
| demo_result | Result UI rendered, including no match | experiment_id, input_source, match_status |
| demo_feedback | First feedback selection for that result | experiment_id, input_source, match_status, choice |
| feature_interest | First proposed-feature selection for that result | experiment_id, input_source, choice |

All parameter values are fixed enums. User-entered text is not included in events, URLs, or storage. Event choices can be blocked by browser settings and are not guaranteed delivered. No server acknowledgements are claimed by the UI.

Register event-scoped GA4 custom dimensions for experiment_id, input_source, match_status, and choice before collecting the experiment. This repository change does not create those administrative settings. Do not classify these events as purchases. Existing mvp_submit is a legacy metric and should not be merged with demo_start without noting the experiment change.

Use distinct users/sessions and raw counts alongside event counts. Repeated messages, edited inputs, returning visitors, staff testing, and blockers can affect totals. Guarding repeat clicks is not anti-bot protection. Never interpret a feature click as a purchase.

## Decisions

- Little qualified traffic: work on acquisition and search coverage before judging the product.
- People type messages but rarely match: the lookup is too limited; use feature choices to prioritize a future prototype. This does not prove demand for payment.
- Matched examples get poor feedback: review content and value before adding AI or payment.
- Independent target visitors repeatedly request the same capability: test a narrowly scoped delivery of that capability before pricing experiments.

No numerical success threshold is set before baseline traffic and a realistic acquisition plan are known. Report counts with date ranges, not unsupported market-wide conversion assumptions.

## Release gates

- Verify the final Vercel production domain and deployment commit. Historical Production deployments differ from the current custom-domain HTML.
- Add or verify the www Search Console property (or a domain property) and submit the canonical sitemap. The existing non-www URL-prefix property is insufficient. Not done by this code change.
- Register GA4 dimensions and check received production events with an identified staff test; exclude that test in analysis. Not yet verified.
- Next.js and its ESLint preset are updated to 16.3.5, React to 19.2.8, and affected transitive dependencies refreshed. npm audit reports zero known vulnerabilities on 2026-09-19; recheck before production release.
- Existing editorial articles still need a separate content review; the preview labels them as interpretations rather than evidence.

## Checks

`npm test`: phrase collision, event data allowlist, preview isolation, analytics failures.
`npm run lint`: no errors; two pre-existing unused helper warnings.
`npm run build`: production build.
Browser checks: sample match, unmatched neutral text, feedback selection, disabled repeat feedback, 390px responsive layout without horizontal overflow. Preview contains no Google Analytics script.
