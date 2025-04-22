import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const teas = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/teas" }),
    schema: ({image}) => z.object({
      posted: z.boolean().default(true),
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      region: z.string(),
      variety: z.string(),
      yieldYear: z.string(),
      aging: z.string().optional(),
      pubDate: z.coerce.date(),
      item: z.string().optional(),
      price: z.number(),
      image: image(),
      imageAlt: z.string(),
      image1: image(),
      image1alt: z.string(),
      image2: image().optional(),
      image2alt: z.string().optional(),
      image3: image().optional(),
      image3alt: z.string().optional(),
      image4: image().optional(),
      image4alt: z.string().optional(),
      image5: image().optional(),
      image5alt: z.string().optional(),
      category: z.array(z.string()),
      tags: z.array(z.string())
    })
});

const library = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/library" }),
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        subsubtitle: z.string().optional(),
        author: z.string().optional(),
        description: z.string(),
        pubDate: z.coerce.date(),
        postedDate: z.coerce.date(),
        heroImage: z.string().optional(),
        image: z.string().optional(),
        posted: z.boolean().optional(),
        category: z.object({
          title: z.string(),
          url: z.string().optional(),
        }),
    })
})

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/library/articles" }),
  schema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      subsubtitle: z.string().optional(),
      author: z.string().optional(),
      description: z.string(),
      pubDate: z.coerce.date(),
      postedDate: z.coerce.date(),
      heroImage: z.string().optional(),
      image: z.string().optional(),
      posted: z.boolean().optional(),
      category: z.object({
        title: z.string(),
        url: z.string().optional(),
      }),
  })
})

const aboutteas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/library/aboutteas" }),
  schema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      subsubtitle: z.string().optional(),
      author: z.string().optional(),
      description: z.string(),
      pubDate: z.coerce.date(),
      postedDate: z.coerce.date(),
      heroImage: z.string().optional(),
      image: z.string().optional(),
      posted: z.boolean().optional(),
      category: z.object({
        title: z.string(),
        url: z.string().optional(),
      }),
  })
})

const brewingtips = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/library/brewingtips" }),
  schema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      author: z.string().optional(),
      description: z.string(),
      pubDate: z.date(),
      postedDate: z.coerce.date(),
      heroImage: z.string().optional(),
      image: z.string().optional(),
      posted: z.boolean().optional(),
      category: z.object({
        title: z.string(),
        url: z.string().optional(),
      }),
  })
})

const gongfuchateatips = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/library/gongfuchateatips" }),
  schema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      author: z.string().optional(),
      description: z.string(),
      pubDate: z.date(),
      postedDate: z.coerce.date(),
      heroImage: z.string().optional(),
      image: z.string().optional(),
      posted: z.boolean().optional(),
      category: z.object({
        title: z.string(),
        url: z.string().optional(),
      }),
  })
})

const gongfuteapot = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/library/gongfuteapot" }),
  schema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      author: z.string().optional(),
      description: z.string(),
      pubDate: z.date(),
      postedDate: z.coerce.date(),
      heroImage: z.string().optional(),
      image: z.string().optional(),
      posted: z.boolean().optional(),
      category: z.object({
        title: z.string(),
        url: z.string().optional(),
      }),
  })
})

const questionsandanswers = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/library/questionsandanswers" }),
  schema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      author: z.string().optional(),
      description: z.string(),
      pubDate: z.date(),
      postedDate: z.coerce.date(),
      heroImage: z.string().optional(),
      image: z.string().optional(),
      posted: z.boolean().optional(),
      category: z.object({
        title: z.string(),
        url: z.string().optional(),
      }),
  })
})

const teaandseasons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/library/teaandseasons" }),
  schema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      author: z.string().optional(),
      description: z.string(),
      pubDate: z.date(),
      postedDate: z.coerce.date(),
      heroImage: z.string().optional(),
      image: z.string().optional(),
      posted: z.boolean().optional(),
      category: z.object({
        title: z.string(),
        url: z.string().optional(),
      }),
  })
})

export const collections = { teas, library, articles, aboutteas, brewingtips, gongfuchateatips, gongfuteapot, questionsandanswers, teaandseasons };