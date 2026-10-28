# Google Search plan

Updated: 2026-09-22

## Verified starting point

- Search Console has started reporting the `https://www.decodehistext.com/` property.
- The first report contains 4 impressions, 0 clicks, a 0% CTR, and an average position of 9.
- The homepage received 2 impressions. `/analyze/bad-at-texting` and `/analyze/just-go-with-the-flow` received 1 impression each.
- Google already returns `/analyze/bad-at-texting` for a relevant search about what “I'm bad at texting” means.
- The page-indexing report is still processing, so there is not yet a reliable indexed-page count.

## Search strategy

Prioritize exact dating-message questions over broad tool terms. Each phrase page should answer the query “What does this text mean?” while making uncertainty and context visible. The homepage targets “decode his text” and “what does his message mean.” The phrase library connects the homepage with all long-tail pages.

The first pages to monitor are:

1. `/`
2. `/analyze/bad-at-texting`
3. `/analyze/just-go-with-the-flow`

## First release

- Rewrite titles and descriptions around search intent instead of ratings.
- Make the visible H1 match the question a searcher asks.
- Add context checks so pages give useful guidance without claiming certainty from one message.
- Add Article and Breadcrumb structured data.
- Keep canonical URLs, sitemap URLs, and existing slugs unchanged.

## Decision rules

Do not judge demand from the first 4 impressions. Review Search Console after 7 and 14 days. Before expanding the page library, look for pages with at least 20 impressions. Improve the title and description when a page receives impressions but no clicks; improve or expand the content when it receives clicks but little engagement. Treat these as working thresholds for this experiment, not universal SEO benchmarks.

## 2026-10-27 search-only release

The owner explicitly prioritized Google organic traffic and deferred monetization. Do not use revenue, payment features, or product-feature expansion as the success measure for this release.

### Verified baseline

Search Console, 2026-09-28 through 2026-10-25: 417 impressions, 13 clicks, 3.1% CTR, average position 7.1. Homepage: 295 impressions / 10 clicks. Notifications-off: 70 / 1. Not-looking-for-anything-serious: 34 / 1. My-ex-was-crazy: 19 / 0. Go-with-the-flow: 7 / 1. Index report updated October 23: 9 indexed and 60 not indexed across known URLs, including historical routes. This is not the indexing count for the current sitemap alone.

### Changes

- Substantively revise 10 existing phrase pages using unique context, example replies, and explicit limits on interpreting a text; keep all 65 original article URLs.
- Replace the shared rating/roast-focused article shell with a readable short answer, topic navigation, and relevant related links. The remaining 55 older articles are not claimed as rewritten or independently fact-checked.
- Add two distinct overview guides: slow replies and relationship intentions. They support phrase discovery and explain different decisions rather than duplicating exact-phrase pages.
- Add server-rendered links to six priority articles and the topic guides on the homepage; organize the library into curated topics plus the full remaining collection.
- Add honest editorial information, including AI assistance and no claimed clinical review.
- Add accurate last-modified dates only to substantively changed pages. Sitemap now contains 70 URLs: the previous 67 plus two guides and the about page. The date must not automatically change on subsequent builds.

### Validation and interpretation

Existing four behavior/privacy tests pass. Production webpack build and TypeScript checks pass. Local HTTP verification covers 73 pages, all original article URLs, internal links and anchors, canonical tags, single H1, descriptions, JSON-LD parsing, no accidental noindex, and three historical redirects. Browser inspection uses the local preview and does not generate production demand events.

Compare future complete 28-day windows with this baseline, and separately inspect the 10 revised pages and two new guides. Track impressions, clicks, query relevance, and canonical URL indexing. Early changes may reflect recrawling or small samples. Neither a sitemap submission nor a successful live URL test guarantees indexing or ranking. Do not repeatedly request the same URL expecting faster indexing.

### Rationale and limits

Google recommends helpful original content and descriptive crawlable internal links. These are supported improvements, not a diagnosis that Google rejected the old pages for a specific quality reason. External links or reputation, competition, and search demand have not been quantified in this release.

References:
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- https://support.google.com/webmasters/answer/7440203

## 2026-10-28: first new scenario-article batch

The owner asked whether articles should also be updated. Add three distinct scenario guides alongside the earlier existing-article revisions:

- `/guides/he-texts-every-day-but-never-makes-plans`: moving from frequent conversation to a concrete plan.
- `/guides/he-only-texts-at-night`: schedules, the kind of contact being proposed, and availability boundaries.
- `/guides/hot-and-cold-texting`: repeated inconsistency, practical questions, and follow-through.

Each has its own introductory answer, situation examples, four substantive sections, three example replies, and three common questions. Publication and modification dates are October 28, 2026. The two existing overview guides retain their earlier editorial dates; they now link to the specific new situations. Homepage and library links, and the existing sitemap, expose all three new articles.

Topic rationale: adjacent to the site's existing slow-reply and relationship-intention content, with public search results and reader discussions for each question. Exact search volume and ranking difficulty have not been measured; do not call these verified high-volume or low-competition keywords. These are an initial content experiment, not an established publication cadence.

A primary further-reading source is the University of Alberta's psychologist-authored article about mixed signals: https://www.gsa.ualberta.ca/en/current-students/counselling/resources/dear-maddi/2026/mixed-signals-relationships.html . It is linked as an independent resource, not an endorsement or clinical review of this website. New examples and replies are illustrative, not testimonials or a diagnosis.

Validation: four existing behavior/privacy tests, production build, and type checks pass. Local HTTP verification covers 76 pages, all 65 original phrase URLs, the three historical redirects, internal links/anchors, metadata and JSON-LD. Each new article has its own publication date, visible reply/FAQ sections, and one H1. Sitemap grows from 70 to 73 URLs.

## 2026-10-28: complete the legacy-library cleanup

Audit found 55 remaining older phrase pages; 29 reused the exact introductory sentence “This common dating expression reveals crucial insights”. This is a verified content repetition finding, not proof of why Google did not index a page.

Replace all 55 older bodies and deterministic motive claims with individual concise editorial explanations. Each includes its own short answer, two context paragraphs, one adaptable reply, and a specific question/answer. Keep the earlier 10 longer articles and all 65 public phrase URLs. Do not call the shorter replacements 55 new articles or clinically reviewed advice.

Separate stable phrase identities from content and remove the old raw psychology templates from the data used by the application. The exact-phrase lookup now uses the revised answers too. Organize every phrase into one topic: slow replies (22), relationship intentions (31), and difficult conversations (12). The sitemap remains at 73 URLs; this release improves existing pages rather than creating more addresses. Newly revised phrase pages use October 28 modification dates, while the earlier 10 retain their October 27 dates.

Google Search Console manual checks resumed through the native browser interface. New scenario URLs initially reported unknown to Google, and indexing requests are being submitted one at a time. Record only confirmed queue acceptance, separately from actual indexing.

Checks: existing four behavior/privacy tests, production build and types pass; all 65 rendered phrase pages have no occurrences of the old repeated introduction, attachment-assessment heading, or former rating label. Content identity, topic partition and related links pass an independent integrity check. Preserve the prior audit as evidence and validate the live deployment before claiming completion.
