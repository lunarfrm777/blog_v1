// importing rss() helper function through the package just installed
import rss from '@astrojs/rss';

// In Astro, a .js/.ts file inside src/pages/ can export a GET function to become an API endpoint instead of a normal page — 
// meaning it returns raw data (XML here) instead of rendered HTML. context is Astro's request context object, which includes things like context.site (the site URL from your config).
export async function GET(context) {
    // glob grabs all posts from folder giving both the file path (the key) and the module data (frontmatter, etc.) as pairs
  const postFiles = Object.entries(
    import.meta.glob('./posts/*.md', { eager: true })
  );

//   For each [path, post] pair, this pulls out the filename to build the slug (same logic as [...slug].astro), 
//   then builds a plain object with just the four fields RSS actually needs: title, pubDate, description, and 
//   link (the post's URL). This reshapes your messy glob data into exactly what the rss() function expects.   
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