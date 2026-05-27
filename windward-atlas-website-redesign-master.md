# Windward Atlas Website Redesign Master Brief

## Purpose

This document is the source of truth for redesigning the Windward Atlas landing page.

The current site has a strong concept, but too many elements compete for attention: scenic backgrounds, a large map, oversized headlines, and promo videos all try to be the hero at the same time. The redesign should make the product feel clearer, calmer, more modern, and more conversion-focused.

The main goal of the page is simple:

> Communicate why Windward Atlas exists, show the app in action, prove it is real, and direct visitors to early access signup.

## Core Direction

Build a video-first product landing page with light scrollytelling.

The app videos should become the main content. The map path should remain as a supporting story/progress device, not the dominant visual. Real-life photography should be used for proof and atmosphere, but not as a constant background behind every feature.

The page should feel like a premium mobile app launch page for hikers in Dominica, not like a tourism brochure and not like a dense SaaS feature page.

## Working Assumptions

- The promo videos will be redesigned to show only clean phone app recordings.
- Keep using the existing video URLs already present in `src/components/map-story/storySections.ts`.
- Images will be replaced later. This brief only gives image direction.
- The page should remain built with Next.js, Tailwind CSS, and Framer Motion.
- The copy should stay short. Every word should carry weight.
- The page must work well on mobile, even if mobile uses a different layout than desktop.

## Conversion Priorities

The redesign should optimize for these outcomes, in order:

1. Visitors quickly understand the problem.
2. Visitors quickly understand the solution.
3. Visitors see the real app working.
4. Visitors trust that the product is real and locally grounded.
5. Visitors are naturally led to the early access CTA.

## Problem And Solution

The site should repeatedly communicate this core story:

**Problem:**
Dominica hiking information is scattered, trail conditions can change, and many routes have unreliable cell service.

**Solution:**
Windward Atlas gives travelers, local hikers, and guides one mobile-first place to discover trails, understand what is nearby, follow routes offline, and trust data maintained through real trail use.

Avoid making the product sound like a generic hiking app. It should feel Dominica-specific, practical, and locally informed.

## Visual Hierarchy

The hierarchy should be:

1. Product value proposition.
2. App video or app mockup.
3. Short supporting copy.
4. Real-life proof.
5. Map/progress decoration.
6. Background imagery.

The current site often reverses this hierarchy by letting background images dominate. The redesign should correct that.

## Visual Style

Use a restrained, modern visual system.

Recommended direction:

- Light neutral backgrounds for most feature/video sections.
- Deep forest green for hero, trust, and CTA moments.
- Accent green for buttons, active states, path progress, and important UI highlights.
- Subtle topographic or map texture only where it supports the story.
- Real photography only when it adds proof or emotion.
- Consistent phone/video framing across sections.

Avoid:

- Full-screen scenic image backgrounds behind every feature.
- Multiple competing visual layers in the same section.
- Oversized decorative maps that compete with the app.
- Text placed over visually busy image areas without strong contrast.
- Long paragraphs.
- Repeated green-on-green sections that make the whole page feel one-note.

## Suggested Palette

These colors can be adjusted, but the system should stay restrained.

- Deep forest: `#0F2318`
- Dark green: `#102317`
- Mid green: `#1A3D2B`
- Accent green: `#22C55E`
- Accent hover: `#16A34A`
- Warm off-white: `#F7F5EF`
- Soft mist: `#EEF3EC`
- Text dark: `#102317`
- Muted text: `#5E6B63`
- Border light: `rgba(16, 35, 23, 0.12)`

## Typography

The current bold type works well in spirit, but it is too large on mobile and sometimes overwhelms the content.

Desktop:

- Hero headline: large, confident, but not so large that it pushes the product visual out of view.
- Feature headlines: clear and punchy, roughly 2 to 4 lines max.
- Supporting copy: 1 to 2 short sentences.

Mobile:

- Reduce headline scale significantly.
- Avoid giant 5 to 7 line headings.
- Keep text blocks compact enough that the user can see headline plus product visual together.

General:

- Use strong verbs.
- Avoid marketing filler.
- Prefer plain product language over poetic abstraction.

## Motion Principles

Use Framer Motion to make the page feel alive, but the motion should clarify the story.

Use motion for:

- Smooth section reveals.
- Sticky desktop product storytelling.
- Video/device entrance.
- Small map progress changes.
- CTA emphasis.

Avoid motion that:

- Makes the user wait for content.
- Moves too many things at once.
- Makes mobile sections feel cramped.
- Distracts from the video.

Recommended Framer patterns:

- Sticky desktop feature storytelling.
- Scroll progress tied to a simple path or step indicator.
- `AnimatePresence` for swapping section copy and active visual states.
- Small parallax only in hero or image proof sections.
- Reduced motion support for users who prefer less animation.

## Information Architecture

Use this page structure:

1. Hero: problem and solution.
2. Product story intro: why this exists.
3. Feature 1: trail search.
4. Feature 2: sights and warnings.
5. Feature 3: offline maps.
6. Local proof: guides and real trail use.
7. CTA: early access signup.
8. FAQ and footer.

The current five map-story sections can map into this new structure, but the final page should not feel like five identical hero panels.

## Desktop Layout Strategy

Desktop can keep a scrollytelling feel.

Recommended desktop structure:

- Hero uses real-life imagery and one clean app screen.
- Feature area uses a sticky product layout.
- Left or side rail shows simplified map progress.
- Main content area shows short copy and the app video.
- The phone/video frame remains visually consistent across all feature sections.

The map should become one of these:

- A slim vertical story rail.
- A simplified topographic line behind the progress state.
- A small pinned map card that updates subtly.

It should not take up a large part of the viewport unless the feature is specifically about maps.

## Mobile Layout Strategy

Mobile should not be the desktop experience squeezed into one column.

Recommended mobile structure:

- Use normal stacked sections.
- Remove the large map visual.
- Replace the five-label sticky stepper with a compact progress label.
- Example: `2 of 5 - Search`
- Keep the CTA visible in the nav or repeat it after major sections.
- Each feature section should show:
  - short headline
  - one sentence
  - video/phone visual
  - optional small supporting proof or CTA

Mobile should avoid:

- Full background images behind every section.
- Five small nav labels across the top.
- Giant headings that take the whole viewport.
- Videos that start too far below the headline.
- Large sticky UI that reduces usable content space.

Recommended mobile section size:

- Hero: about one screen.
- Feature sections: content can be longer than one screen, but should not feel trapped.
- Phone/video visual: around `55svh` to `65svh`, depending on actual recording ratio.

## Video Strategy

The videos are important and should be kept.

They should become the main proof that the app works.

Video requirements:

- Use clean phone-only recordings.
- Use consistent phone framing across all feature sections.
- Avoid baked-in background art inside the video.
- Avoid text-heavy video frames.
- Keep clips short and focused.
- Show one clear action per video.
- Use poster images so sections do not feel blank before video loads.
- Lazy-load video where possible.
- Respect reduced motion preferences.

Existing video mapping:

- Search section: use the existing search video URL.
- Sights and warnings section: use the existing trail sites video URL.
- Offline maps section: use the existing trail completion/offline route video URL.

The video should not be treated like a separate poster placed on top of another scenic background. It should feel like the actual app interface is being demonstrated.

## Image Strategy

Images will be replaced later, but each image should have a clear role.

Hero image direction:

- Real trail use.
- A person on a Dominica trail.
- Ideally phone visible in hand.
- Enough negative space for headline and CTA.
- Warm, real, grounded, not stock-like.

Product story intro image direction:

- Optional.
- Could use a subtle topographic texture or real trail detail.
- Do not use a busy full-bleed background if it hurts readability.

Feature sections image direction:

- Prefer neutral backgrounds or subtle map texture.
- Do not rely on large scenic photos behind videos.
- If an image is used, it should support the feature, not compete with it.

Local proof image direction:

- Guide on trail.
- Local hikers.
- Trail marker or route maintenance.
- Someone using the product outdoors.
- The goal is trust: "this is real and locally grounded."

CTA image direction:

- Usually no image needed.
- If used, use a quiet background detail or dark green section with subtle texture.
- The form should be the focus.

## Section Content Plan

### 1. Hero

Goal:
Explain the product in one glance.

Recommended headline options:

- `Plan safer hikes in Dominica.`
- `Explore Dominica with trail data you can trust.`
- `Find trails, follow routes, hike with confidence.`

Recommended subcopy:

`Windward Atlas brings local trail data, offline maps, sights, and warnings into one mobile guide for Dominica.`

CTA:

- Primary: `Join Early Access`
- Secondary, optional: `See how it works`

Visual:

- Real-life hero image plus one clean app screen.
- Keep the first viewport focused on the product and CTA.

### 2. Product Story Intro

Goal:
Make the problem obvious before listing features.

Recommended copy:

`Dominica's trails are beautiful, remote, and often hard to plan from scattered information. Windward Atlas helps hikers choose the right route, know what is ahead, and stay oriented when signal drops.`

Alternative shorter version:

`Scattered trail info. Changing conditions. Weak signal. Windward Atlas brings the hike into one guide.`

Visual:

- Simple text-led section.
- Optional subtle map line or topographic texture.
- Do not add a heavy image unless it improves clarity.

### 3. Feature: Search

Goal:
Show users they can quickly find a trail that matches their needs.

Headline:

`Find the right trail fast.`

Supporting copy:

`Search by waterfall, difficulty, location, or trail name before you commit to a route.`

Supporting chips:

- `Waterfalls`
- `Easy`
- `Near me`
- `Family-friendly`
- `Short routes`

Visual:

- Search video.
- Phone-only recording.
- Neutral background.

CTA, optional:

`Join Early Access`

### 4. Feature: Sights And Warnings

Goal:
Show that the app gives useful trail context, not just route lines.

Headline:

`Know what is worth seeing.`

Supporting copy:

`Get context for waterfalls, historic sites, hazards, and trail notes while you hike.`

Supporting bullets:

- `Notable sights`
- `Hazards`
- `Trail notes`

Visual:

- Sights and warnings video.
- Show callouts appearing in the app.

### 5. Feature: Offline Maps

Goal:
Show practical value when signal is unreliable.

Headline:

`Stay oriented with no signal.`

Supporting copy:

`Save trails, follow the path, and review distance, time, and route details offline.`

Supporting bullets:

- `Saved routes`
- `Live path`
- `Trail stats`

Visual:

- Offline map or route completion video.
- Focus on route following and saved trail state.

### 6. Local Proof And Guides

Goal:
Build trust and show this is not just a concept.

Headline:

`Trail data kept alive by local hikers.`

Alternative:

`Built with real trail use.`

Supporting copy:

`Windward Atlas is designed around real routes, local knowledge, and the people who know these trails best.`

Proof elements:

- Real-life image.
- Short trust statement.
- Optional small stat or badge if true, such as `Dominica-first`, `Guide-informed`, or `Field-tested`.

Visual:

- Real guide or hiker image.
- Avoid generic landscape-only photography.

### 7. CTA

Goal:
Convert interest into signup.

Headline:

`Join the Dominica trail preview.`

Alternative:

`Get early access to Windward Atlas.`

Supporting copy:

`Be first to try Windward Atlas when the Dominica trail preview opens to travelers, guides, and local hikers.`

Form:

- Email input.
- Button: `Join Early Access`
- Microcopy: `Useful updates only. No inbox clutter.`

Design:

- Dark green section.
- Clean, centered form.
- No competing image required.

### 8. FAQ

Goal:
Handle final objections without slowing the main story.

Recommended questions:

- `When will Windward Atlas launch?`
- `Is this only for Dominica?`
- `Will the app work offline?`
- `Who keeps trail information updated?`
- `Is it for travelers, locals, or guides?`

Keep answers short.

## Copy Style Guide

Use:

- Short sentences.
- Concrete benefits.
- Product-led wording.
- Dominica-specific language.
- Strong verbs.

Avoid:

- Long explanations.
- Abstract adventure language.
- Repeating the same benefit in multiple sections.
- Overpromising safety.
- Saying trail data is perfect or guaranteed.

Preferred phrases:

- `local trail data`
- `offline maps`
- `trail notes`
- `sights and warnings`
- `Dominica trail preview`
- `guide-informed`
- `field-tested`

Use caution with:

- `safe`
- `always`
- `official`
- `emergency`
- `guaranteed`

Only use those words if the product truly supports the claim.

## CTA Strategy

The CTA should appear in these places:

- Navbar.
- Hero.
- After the main feature story on mobile.
- Final CTA section.

The CTA should not appear after every small block on desktop. Too many CTAs can make the page feel desperate. Use a persistent nav CTA and one strong final CTA.

Mobile can repeat CTA more often because scrolling distance is longer and attention is fragmented.

## Navigation Strategy

Desktop nav:

- Keep simple.
- Recommended labels:
  - `Product`
  - `Features`
  - `Guides`
  - `FAQ`
  - `Early Access`

Mobile nav:

- Keep hamburger if desired.
- Consider making `Early Access` visible without opening the menu.
- Avoid using the current five-step story nav as the main mobile progress UI.

## Map Path Strategy

Keep the map idea, but simplify it.

Recommended uses:

- Scroll progress indicator.
- Small route line that advances as feature sections change.
- Visual metaphor for the user's journey from problem to signup.

Avoid:

- Large map taking a full column on desktop.
- Map labels too small to read.
- Map competing with the app video.
- Map visible on mobile unless heavily simplified.

Desktop option:

- A slim sticky rail on the left with five route stops.
- Each stop maps to one major story section.
- Active stop highlights in accent green.

Mobile option:

- Text progress only, such as `3 of 5 - Offline Maps`.
- Optional tiny progress bar.

## Implementation Notes

Likely component structure:

- `HeroSection`
- `StoryIntroSection`
- `FeatureShowcaseSection`
- `FeatureShowcaseItem`
- `PhoneVideoFrame`
- `MapProgressRail`
- `LocalProofSection`
- `WaitlistSection`
- `FAQSection`

`storySections.ts` can still drive the content, but it should be simplified.

Suggested data shape:

```ts
type StorySection = {
  id: string;
  navLabel: string;
  eyebrow?: string;
  title: string;
  body: string;
  chips?: string[];
  videoUrl?: string;
  mockup?: string;
  imageDirection?: string;
  accent?: string;
};
```

Remove or ignore unused verbose fields once the design stabilizes.

## Desktop Feature Showcase Pattern

Recommended desktop layout:

- Outer section height: about `300vh` to `400vh`.
- Sticky inner layout.
- Left side: simple map progress rail or concise copy.
- Right side: large phone video frame.
- As the user scrolls, active feature changes.

The active section should control:

- Headline.
- One sentence of copy.
- Video source.
- Map progress state.
- Accent state.

The phone frame should not jump in size between features.

## Mobile Feature Showcase Pattern

Recommended mobile layout:

Each feature is its own stacked section:

```txt
[small progress label]
[headline]
[one sentence]
[phone video]
[optional chips]
```

Do not use a sticky full-width five-step nav. It consumes too much vertical space and truncates labels.

## Accessibility And Performance

Must-haves:

- Strong text contrast over images.
- `prefers-reduced-motion` support.
- Videos muted and `playsInline`.
- Do not autoplay with sound.
- Poster images for videos.
- Lazy-load videos where possible.
- Meaningful alt text for real images.
- Form labels accessible to screen readers.
- CTA button and input large enough for mobile touch.

Performance notes:

- Avoid loading all videos eagerly.
- Avoid full-resolution background images on mobile.
- Use `next/image` responsive sizes.
- Keep section backgrounds lightweight.

## Acceptance Checklist

The redesign is successful when:

- The first viewport clearly explains what Windward Atlas does.
- The user can identify the main CTA without searching.
- Feature sections are easy to scan.
- Videos are the dominant visual in sections 3 to 5.
- Background images no longer compete with the videos.
- Mobile does not feel clumped.
- Mobile headlines fit comfortably without taking over the entire screen.
- The page shows real-life use before the final CTA.
- The final CTA feels like a natural next step.
- The design still feels interactive and modern without becoming visually noisy.

## Highest Priority Changes From Current Site

1. Stop using full-screen background images behind every feature.
2. Make videos the primary feature visuals.
3. Simplify the map into a progress/story device.
4. Replace mobile stepper labels with compact progress.
5. Add a real problem/solution hero.
6. Add local proof before the CTA.
7. Shorten and sharpen section copy.
8. Keep phone/video framing consistent.

