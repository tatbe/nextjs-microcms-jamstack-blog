// components/Meta.js
import Head from 'next/head';
import Script from 'next/script';

function Meta({ title, blog }) {
  // blog が undefined の場合のデフォルト値を設定
  const blogTitle = blog?.title || 'チャグのニュース';
  const blogDescription = blog?.description || '2024年の注目トレンドを徹底解説: VTuber、ゲーム業界の最新動向、ソーシャルメディアの進化';
  const blogThumbnailUrl = blog?.thumbnailUrl || '/default-thumbnail.jpg';

  return (
      <Head>
          <title>{title}</title>
          <meta name="description" content="2024年の注目トレンドを徹底解説: VTuber、ゲーム業界の最新動向、ソーシャルメディアの進化、そしてそれらが如何にして今日のポップカルチャーを形成しているか。デジタルとエンターテインメントの交差点で起こる革新的変化を、詳細な分析とともにお届けします。" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@yourTwitterHandle" />
          <meta name="twitter:title" content={blogTitle} />
          <meta name="twitter:description" content={blogDescription} />
          <meta name="twitter:image" content={blogThumbnailUrl} />
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-SNFNEYEJX3" strategy="afterInteractive" />
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
