// components/Meta.js
import Head from 'next/head';

function Meta({ title, blog }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="2024年の注目トレンドを徹底解説: ソーシャルメディアの進化、ゲーム業界の最新動向、VTuberの台頭、そしてそれらが如何にして今日のポップカルチャーを形成しているか。デジタルとエンターテインメントの交差点で起こる革新的変化を、詳細な分析とともにお届けします。" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yourTwitterHandle" />
      <meta name="twitter:title" content={blog.title} />
      <meta name="twitter:description" content={blog.description} />
      <meta name="twitter:image" content={blog.thumbnailUrl} />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SNFNEYEJX3"></script>
        <script
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-SNFNEYEJX3');
                `,
            }}
        />
    </Head>
    
  );
}

export default Meta;
