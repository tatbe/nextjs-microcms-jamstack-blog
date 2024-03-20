// components/Meta.js
import Head from 'next/head';

function Meta({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
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
