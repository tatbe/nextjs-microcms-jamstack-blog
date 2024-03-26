// components/Meta.js
import Head from 'next/head';
import Script from 'next/script';

function Meta({ title, blog }) {
  // blog が undefined の場合のデフォルト値を設定
  const blogTitle = blog?.title || 'チャグのニュース';
  const blogDescription = blog?.description || '2024年の注目トレンドを徹底解説: VTuber、ゲーム業界の最新動向、ソーシャルメディアの進化';
  const blogThumbnailUrl = blog?.thumbnail?.url || '/default-thumbnail.jpg';

  return (
      <Head>
          <title>{blogTitle + " | " + title}</title>
          <meta name="description" content={blogDescription} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@yourTwitterHandle" />
          <meta name="twitter:title" content={blogTitle} />
          <meta name="twitter:description" content={blogDescription} />
          <meta name="twitter:image" content={blogThumbnailUrl} />
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-SNFNEYEJX3" strategy="afterInteractive" />
          <Script
              dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-SNFNEYEJX3');
                  `,
              }}
          />
        <meta name="google-adsense-account" content="ca-pub-5463349623390342"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  );
}

export default Meta;
