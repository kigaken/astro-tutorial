import rss, {pagesGlobToRssItems} from '@astrojs/rss';

export async function GET() {
    return rss({
        title: 'Astro学習者｜ブログ',
        description: 'Astroを学ぶ旅',
        site: 'https://kigaken-astro-tutorial.netlify.app',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>ja-JP</language>`,
    })
}