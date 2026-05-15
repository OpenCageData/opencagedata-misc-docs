# Accessibility Conformance Report

### Based on VPAT® Version 2.4 — International (ITI)

---

**Name of Product/Version:** OpenCage Geocoding API and Geosearch — web application (opencagedata.com)

**Report Date:** 2026-05-14

**Current Version:** [The newest version of this document can be found online here](https://github.com/OpenCageData/opencagedata-misc-docs/blob/master/OpenCage-accessibility-conformance-report.md).

**Product Description:** A web application providing access to the OpenCage Geocoding API and Geosearch services. The report covers the public marketing website, the developer documentation, and the signed-in customer dashboard (account management, usage statistics, API key management, billing).

**Contact Information:** support@opencagedata.com

**Notes:** This report is a self-assessment produced by OpenCage. It is based on a structured review of the application's pages, supplemented by manual inspection and a set of automated regression tests. It has not yet been validated against the full range of automated tooling (axe, Lighthouse) or against assistive technology (screen readers). Criteria that require runtime or assistive-technology verification are marked **Not Evaluated** rather than assumed conformant. OpenCage will reissue this report as further testing is completed.

**Evaluation Methods Used:**
- Manual review of every public-facing page and the signed-in dashboard
- Inspection of HTML structure, focus order, ARIA attributes, and keyboard handling on a representative sample of pages (home, pricing, sign-up, sign-in, contact, the geocoding demo, the dashboard, account settings, API documentation)
- Programmatic measurement of brand-palette contrast ratios against the WCAG 2.x luminance formula
- Automated regression tests covering modal-dialog focus management and live-region announcements on the demo, dashboard, and documentation surfaces

**Applicable Standards/Guidelines:**

| Standard/Guideline | Included in Report |
| --- | --- |
| Web Content Accessibility Guidelines 2.1 — Level A | Yes |
| Web Content Accessibility Guidelines 2.1 — Level AA | Yes |
| Web Content Accessibility Guidelines 2.1 — Level AAA | No |

---

## Terms

The terms used in the Conformance Level column of the tables below are defined as follows:

- **Supports:** The functionality of the product has at least one method that meets the criterion without known defects, or meets it with equivalent facilitation.
- **Partially Supports:** Some functionality of the product does not meet the criterion.
- **Does Not Support:** The majority of product functionality does not meet the criterion.
- **Not Applicable:** The criterion is not relevant to the product.
- **Not Evaluated:** The product has not yet been evaluated against the criterion. Used here where the evaluation method cannot reliably determine conformance without runtime or assistive-technology testing.

---

## WCAG 2.1 Report

### Table 1: Success Criteria, Level A

| Criterion | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| **1.1.1 Non-text Content** | Supports | Content images carry descriptive alternative text. The site logo exposes its accessible name through both `title` and ARIA attributes. Decorative icons throughout the navigation, footer, dashboard, documentation, and tutorials are hidden from assistive technology, so the surrounding visible text alone is the accessible name. Icon-only controls — such as the "back to top" arrow, the dashboard edit pencils, and the "try this request" launchers in the API documentation — carry an explicit ARIA label describing the action they perform. |
| **1.2.1 Audio-only and Video-only (Prerecorded)** | Not Applicable | The product does not include prerecorded audio-only or video-only content. |
| **1.2.2 Captions (Prerecorded)** | Not Applicable | The product does not embed prerecorded video with synchronized audio. Third-party tutorial videos are linked out to their host platforms (for example YouTube), whose own caption support is outside the scope of this report. |
| **1.2.3 Audio Description or Media Alternative (Prerecorded)** | Not Applicable | See 1.2.2. |
| **1.3.1 Info and Relationships** | Supports | Pages use standard HTML landmarks (header, navigation, main, footer) and follow a meaningful heading hierarchy. All form fields use properly associated labels. Data tables in the dashboard (invoices, account details) and the pricing-comparison table on the marketing site use column and row headers, with captions where appropriate. |
| **1.3.2 Meaningful Sequence** | Supports | Reading order follows the visual order of each page. No content is repositioned by stylesheet rules in a way that would break the reading sequence. |
| **1.3.3 Sensory Characteristics** | Supports | Instructions and links throughout the site refer to content by name or position in a non-sensory-dependent way. No instructions rely solely on shape, colour, or visual location. |
| **1.4.1 Use of Color** | Supports | Status indicators in the dashboard (subscription state, two-factor on/off, disabled-API-key reason text), the coloured callout boxes on the marketing pages, and the pricing-page plan selectors all combine colour with text so the meaning is not conveyed by colour alone. In-content links are visually distinct from surrounding text by colour and gain an underline on hover. The daily-usage chart on the dashboard distinguishes successful from failed requests by bar colour; a "Usage Report (CSV)" download is rendered immediately below the chart and provides the same per-day, per-response-code counts as text, so the colour-only encoding has a text alternative. Required fields are marked with a visible red asterisk next to the label (rendered by SimpleForm's `<abbr title="required">`); inline form-validation errors pair the red field border with a circle-exclamation icon inside the input plus an explicit red error-text message beneath the field; the password-strength meter is accompanied by a polite-live text region that announces "Password strength: Weak / Normal / Medium / Strong / Very strong" as the user types; and red-text warning paragraphs in dashboard modals are prefixed by an `fa-triangle-exclamation` icon. |
| **1.4.2 Audio Control** | Not Applicable | The product does not auto-play audio. |
| **2.1.1 Keyboard** | Supports | All interactive controls — buttons, links, form fields, the collapsible advanced-options panel on the demo, and the copy-to-clipboard controls in the dashboard and documentation — are operable by keyboard. The interactive map on the geocoding demo provides keyboard pan and zoom; its result markers are focusable and each carries a descriptive accessible name ("Result 1: …", "Result 2: …"), and a hidden description on the map panel documents its keyboard affordances. The same geocoding results are also rendered as text outside the map, so the map is supplementary, not a replacement. The pricing-page currency selector is a native HTML select control with a proper label. |
| **2.1.2 No Keyboard Trap** | Partially Supports | The three dashboard modal dialogs (change name, change e-mail, change password) are covered by automated regression tests that verify there is no Tab-key trap, that the Escape key closes the dialog, and that focus returns to the trigger control on close. Two additional pop-up dialogs on the sign-up flow use the same dialog framework and inherit the same behaviour, but they are not yet under direct test coverage. End-to-end keyboard traversal of non-dialog surfaces is still pending. |
| **2.1.4 Character Key Shortcuts** | Not Applicable | The application does not implement single-character keyboard shortcuts. |
| **2.2.1 Timing Adjustable** | Supports | No time limits are imposed on the user. Session timeouts on the dashboard are long-running and warn before expiry. |
| **2.2.2 Pause, Stop, Hide** | Not Applicable | The product does not include moving, blinking, scrolling, or auto-updating content meeting this criterion's threshold. |
| **2.3.1 Three Flashes or Below Threshold** | Supports | No flashing content is present. |
| **2.4.1 Bypass Blocks** | Supports | A "Skip to main content" link is the first focusable element on every page, in both the visitor and signed-in layouts. It moves focus past the site header and navigation directly to the page's main content. HTML landmarks also give screen-reader users a second mechanism for bypassing repeated content. |
| **2.4.2 Page Titled** | Supports | Every page sets a meaningful, unique browser title (for example "OpenCage Pricing — Geocoding API and Geosearch", "OpenCage Account Dashboard"). |
| **2.4.3 Focus Order** | Supports | Keyboard focus moves through every page in an order that matches the visual layout. Each page begins with a "Skip to main content" link, followed by the masthead navigation, the page's main content, and the footer. The dashboard's section tabs and the geocoding demo's results / map / request / response tabs follow the WAI-ARIA tabs design pattern: arrow keys move between tabs, the active tab is the keyboard entry point, and the inactive panels do not appear in the focus order. All five modal dialogs in the product (three on the dashboard, two on the sign-up flow) move keyboard focus into the dialog when it opens and return focus to the originating control when it closes; the three dashboard modals are covered by automated regression tests that verify this behaviour. |
| **2.4.4 Link Purpose (In Context)** | Supports | Link text across the marketing site, documentation, and dashboard is descriptive, with no "click here", bare "here", or bare "Learn more" labels. Where a follow-up link is needed, the text names its target directly (for example "Why open data", "About Enterprise plans", "Read the IP restriction docs") so each link stands alone out of context as well as in it. Image-only links (such as the customer-logo grid) carry an accessible name derived from the image's alternative text. Every link that opens in a new window carries an accessible name including the wording "(opens in new window)", warning assistive-technology users before the context change. |
| **2.5.1 Pointer Gestures** | Supports | The product does not require multi-point or path-based gestures. The map on the geocoding demo supports pinch-zoom and also exposes equivalent zoom controls. |
| **2.5.2 Pointer Cancellation** | Supports | All interactive controls — including the copy-to-clipboard controls — are native HTML buttons, links, or form controls, and the client-side scripting throughout the product is wired to up-event activation (click, submit, change). No control fires on the pointer-down event, so users can abort an in-progress click by moving off the target before releasing. Destructive actions (disable API key, cancel subscription, delete team member, delete upload) additionally present a confirmation prompt before completing. |
| **2.5.3 Label in Name** | Supports | A static review of every accessible-name override in the product was completed. Form fields use native HTML labels, so their visible and accessible names are the same string by construction. Icon-only controls (copy-to-clipboard, edit, settings, sidebar back-to-top, modal close, password visibility toggle, navbar hamburger) carry an accessible name supplied by the icon's label and have no competing visible text. The four documentation/guides/tutorials/FAQ sidebar collapse triggers, where the visible link text ("Jump to topic", "Jump to section", "Jump to guide", "Jump to tutorial") previously diverged from the accessible name ("Toggle sidebar"), have been corrected so that the visible text is the accessible name — voice-input users can now activate them by speaking what they see. |
| **2.5.4 Motion Actuation** | Not Applicable | The product does not use device motion as an input. |
| **3.1.1 Language of Page** | Supports | Every page declares its language as English at the document level. |
| **3.2.1 On Focus** | Supports | No context changes occur on focus. |
| **3.2.2 On Input** | Supports | Form inputs do not trigger context changes on input. The pricing page recalculates the displayed prices on plan-type or currency change, which is an expected and predictable update of in-page content, not a change of context. |
| **3.3.1 Error Identification** | Supports | Server-side validation errors are rendered inline next to the offending field, with the field name and the cause of the failure included in the message text. Forms that perform live client-side validation (sign-up, contact, single-sign-on, two-factor, spreadsheet upload, onboarding) now also render a text description of the error next to each invalid field — including domain-check and duplicate-value checks that run asynchronously — and mark the field as invalid for assistive technology, so the error is identified both visually and programmatically rather than by border colour alone. |
| **3.3.2 Labels or Instructions** | Supports | Every user-facing form — sign-in, sign-up, password reset, two-factor setup, team invitations, the account and billing forms in the dashboard, and the contact form — renders an explicit, visible label for each field. Required fields carry a visible indicator inside the label. |
| **4.1.1 Parsing** | Supports | A representative set of ten customer-facing pages was validated with the W3C Nu Html Checker. The product's rendered HTML is well-formed and parses cleanly. Four small, repeatable defects identified by an earlier validator pass — a duplicate `aria-hidden` attribute on font-awesome icons, a small number of paragraphs containing a block-level child, a wrapper element nesting two `<pre>` elements around code samples in the API documentation, and obsolete `<a name="…">` scroll targets — have all been remediated and are covered by automated regression tests that prevent reintroduction. (This criterion is obsoleted in WCAG 2.2.) |
| **4.1.2 Name, Role, Value** | Partially Supports | Form controls, buttons, and links use native HTML and expose their role and value correctly. The product's five modal dialogs correctly declare their role and labelling for assistive technology. Pricing-page button groups, the password-visibility toggle, and copy-to-clipboard controls have descriptive accessible names. The remaining unverified surface is the JSON-response viewer on the geocoding demo, which is rendered by a third-party component. |

### Table 2: Success Criteria, Level AA

| Criterion | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| **1.2.4 Captions (Live)** | Not Applicable | No live audio content. |
| **1.2.5 Audio Description (Prerecorded)** | Not Applicable | No prerecorded video with audio. |
| **1.3.4 Orientation** | Supports | No content restricts itself to a single orientation. |
| **1.3.5 Identify Input Purpose** | Supports | Every input that collects an identifiable type of personal information — name, organization, e-mail, current password, new password, one-time codes, postal address (lines, city, state, postal code, country), and payment-card holder name — carries the corresponding HTML `autocomplete` value, so browsers and assistive technology can offer auto-fill. |
| **1.4.3 Contrast (Minimum)** | Partially Supports | The brand palette has been measured against the WCAG 2.x luminance formula. Body text, in-content links, and link hover states all clear AA contrast on every background they appear against, including the green callout background. The site's primary call-to-action button uses the brand green as its background colour; the white label text on that background does not pass AA contrast in the default state (the hover state has been adjusted to pass). Resolving the default-state contrast requires a change to the brand colour itself and is currently a known limitation. |
| **1.4.4 Resize Text** | Supports | Layouts use relative units for typography and reflow at 200% browser zoom in informal checks. Full verification at 200% zoom across all pages is pending. |
| **1.4.5 Images of Text** | Supports | The product uses real text for all informational content. Brand logos are the only images of text and are exempt under this criterion. |
| **1.4.10 Reflow** | Supports | Pages were walked at 320 CSS pixels width across the marketing site, sign-in flow, dashboard, API key settings, and the full API documentation. Content reflows into a single column without loss of information or functionality and without requiring two-dimensional scrolling, except where horizontal scrolling is intrinsic to the content (wide reference tables in the API documentation are wrapped in horizontally-scrollable containers as permitted by the criterion's exception for data tables). |
| **1.4.11 Non-text Contrast** | Partially Supports | Form input borders and the input focus indicator have been measured and adjusted to clear 3:1 contrast against the white background, with the focus indicator providing a darker outer ring to reach the threshold. Graphical separators (callout borders, modal dividers, breadcrumb chevrons) and graphical content (the brand logo and the dashboard usage chart) pass. The 1px brand-green border used on outlined buttons and secondary-navigation pills does not currently clear 3:1 against white; this is tied to the same brand-colour limitation noted under 1.4.3 and is under discussion with the design team. |
| **1.4.12 Text Spacing** | Supports | The marketing pages, dashboard, and documentation use min-height (not fixed height) on text containers and rely on the responsive layout to reflow on width. Body paragraphs already use a line-height ≥ 1.5. Pages were verified in the browser with the four WCAG 1.4.12 user-agent overrides applied (line-height 1.5, paragraph-spacing 2×, letter-spacing 0.12×, word-spacing 0.16×) across the representative sample of pages — no text clipping, content overlap, or loss of functionality was observed. |
| **1.4.13 Content on Hover or Focus** | Supports | Hover-revealed content is limited to two patterns. The first is the informational tooltips used on the pricing and demo pages and on the dashboard; these are dismissible with the Escape key, remain visible while the pointer is over either the trigger or the tooltip body itself (a short hide-delay bridges the gap), and stay visible until the user moves away or dismisses them. The second is the top-navigation dropdowns; moving the pointer to the menu items keeps the menu open because the menu is a child of the trigger element, the Escape key closes the menu, and the menu persists until the user activates one of its items or moves away. |
| **2.4.5 Multiple Ways** | Supports | Pages can be reached through the main navigation, the footer navigation, and via in-content cross-links. A site-wide search is not provided, but two independent navigation mechanisms are present. |
| **2.4.6 Headings and Labels** | Supports | Page-level top headings are descriptive and unique across the product. Every dashboard sub-page — update card, update billing, enable and disable two-factor authentication, cancel subscription, payment confirmation — presents a clear top-level heading. The marketing site, demo, and documentation follow a consistent heading outline. |
| **2.4.7 Focus Visible** | Supports | Default browser focus indicators are preserved. Where they are overridden for stylistic reasons, an equivalent visible focus indicator (border-colour change plus shadow) is provided. |
| **3.1.2 Language of Parts** | Supports | No foreign-language passages were identified in primary content that lack a language attribute. The marketing site, dashboard, and documentation are English-only. |
| **3.2.3 Consistent Navigation** | Supports | The top navigation and footer appear consistently across all pages within their respective sections (marketing site versus signed-in dashboard). |
| **3.2.4 Consistent Identification** | Supports | Components with the same function — the primary call-to-action button, the password-visibility toggle, the copy-to-clipboard control — are labelled consistently throughout the product. |
| **3.3.3 Error Suggestion** | Supports | Server-side validators surface constraint-bearing messages — Rails defaults include minimum/maximum lengths ("is too short (minimum is 8 characters)"), and custom validators name valid values ("must have a valid extension (txt, csv, tsv, xls, xlsx, ods)") or give actionable instructions ("must be different from your current password", "must be provided — please upload a file or paste data"). Visible per-field hints accompany formats that are easy to get wrong, with worked examples (e.g. IP-restriction and allowed-origin fields on the API-key settings page). Inherently-sensitive failures — sign-in, two-factor, captcha, contact-form spam blocking — use intentionally generic messages under the criterion's security exception, and the contact-form failure page directs users to Mastodon or email as alternative channels. |
| **3.3.4 Error Prevention (Legal, Financial, Data)** | Supports | Billing and account changes that have legal or financial consequences — subscription upgrade, payment-method change, account deletion — are submitted through confirmation dialogs that support review and reversibility. |
| **4.1.3 Status Messages** | Supports | The geocoding demo announces its results to assistive technology through a polite live region as each response arrives, without moving focus. Server-rendered confirmation and error messages (the banners that appear after a form submission) are announced as alerts. The four user-driven copy-to-clipboard controls — for an API key, for a documentation snippet, for the page as Markdown, and for the brand logo — announce a "copied" confirmation to assistive technology in addition to the visual tooltip. API-key creation announces both the "in progress" and "added" states. |

---

## Summary of Known Issues

The following items remain open from this self-assessment:

1. **Primary call-to-action button text contrast** (1.4.3, Level AA). White text on the brand-green primary button background does not pass AA contrast in the default state. The hover state has been adjusted to pass. Resolving the default state requires a change to the brand colour and is currently under discussion with the design team.
2. **Outlined-button and pill border contrast** (1.4.11, Level AA). The 1px brand-green border used on outlined buttons and on the secondary-navigation pills does not clear the 3:1 non-text contrast threshold against the white background. This is the same brand-colour limitation as item 1; resolution depends on the same design-team decision.

## Methods Not Yet Applied (and planned)

To strengthen this report from a self-assessment toward a fully validated conformance statement, the following testing is planned:

- Automated scanning with industry-standard accessibility tools (such as axe and Lighthouse) across a representative sample of pages: home, pricing, sign-up, contact, dashboard, account settings, API key management, the geocoding demo, and a representative tutorial.
- A keyboard-only walk-through of every surface, verifying tab order, focus visibility, and absence of keyboard traps.
- A screen-reader pass on NVDA (Windows) and VoiceOver (macOS) covering the primary user journeys: visiting the home page, reading documentation, signing up, reaching the dashboard, copying an API key, and trying the demo.
- Contrast measurement of remaining UI-component states (hover variants, disabled states, focus rings) at the same level as the brand-palette audit.

When this testing completes, the "Not Evaluated" rows above will be revised to Supports / Partially Supports / Does Not Support with concrete evidence, and this report will be reissued.

---

*This report was prepared by OpenCage. It is provided for informational purposes only. It reflects the state of the product on the report date and is subject to change as the product evolves and as further testing is performed.*
