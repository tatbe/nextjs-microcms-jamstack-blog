// components/Meta.js
import Head from 'next/head';

function Meta({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* 他のメタデータもここに追加できます */}
    </Head>
  );
}

export default Meta;
