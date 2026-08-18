# ♡ v1blog ♡

<img width="1912" height="965" alt="Desktop View of Blog" src="https://github.com/user-attachments/assets/3ead8537-cc60-4893-9a74-86c089c1f21e" />
<img width="1290" height="2796" alt="Mobile View of Blog" src="https://github.com/user-attachments/assets/3ab74dd9-6885-4ac9-92a0-5dc4566d79bc" />


# ♡ Tech Used ♡
- Astro: static site framework, file-based routing
- Markdown: blog post content with frontmatter (title, description, pubDate, author, image, tags)
- import.meta.glob(): dynamic post loading (no CMS/database)
- @astrojs/rss: auto-generated RSS feed at /rss.xml
- Buttondown: email subscriptions (manual send-on-publish workflow)
- Netlify: hosting/deployment
- Custom CSS: hand-styled components (no UI framework — removed DaisyUI mid-project)

# ♡ Lessons Learned ♡
- Astro's Astro.glob() was deprecated in Astro 5 — switched to Vite's native import.meta.glob() with { eager: true } instead
- getStaticPaths() is required for any dynamic route (e.g. [...slug].astro), even if the file initially seems unused
- Content collections (getCollection()) require a defined src/content/config.ts — since posts lived in src/pages/posts/ instead, import.meta.glob() was the simpler fit for this project's structure
- Third-party CSS libraries (DaisyUI) can silently override custom component styles — removed it once it was identified as the cause of styling inconsistencies
- Not all "free tiers" are actually free for every feature — RSS-to-email automation is a paid feature on both Buttondown and Mailchimp as of 2026; opted for manual email sends instead to keep costs at $0

# ♡ Next Steps ♡
- Grow subscriber list and start sending manual "new post" emails via Buttondown
- Add tags/categories page for filtering posts
- Style individual post pages further (embedded images, code blocks, etc.)
- Consider a custom domain instead of the Netlify subdomain
- Possibly revisit RSS-to-email automation if subscriber count grows enough to justify the cost
