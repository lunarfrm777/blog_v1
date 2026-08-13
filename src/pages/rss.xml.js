import rss from '@astrojs/rss';

export async function GET(context) {
  const postFiles = Object.entries(
    import.meta.glob('./posts/*.md', { eager: true })
  );

  const posts = postFiles.map(([path, post]) => {
    const slug = path.split('/').pop()?.replace('.md', '');
    return {
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
      description: post.frontmatter.description,
      link: `/blog/${slug}`,
    };
  });

  return rss({
    title: "Lune's Blog",
    description: 'Patterns, patience, and pushing back on fears while learning new things.',
    site: context.site,
    items: posts.sort(
      (a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()
    ),
  });
}