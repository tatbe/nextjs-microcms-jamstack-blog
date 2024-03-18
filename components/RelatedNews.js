// components/RelatedNews.js
import styles from '../styles/Home.module.css';

function RelatedNews() {
  const relatedNewsItems = [
    { id: 1, title: '関連ニュースタイトル1' },
    { id: 2, title: '関連ニュースタイトル2' },
    { id: 3, title: '関連ニュースタイトル3' },
    { id: 4, title: '関連ニュースタイトル4' },
    { id: 5, title: '関連ニュースタイトル5' },
    { id: 6, title: '関連ニュースタイトル6' },
  ];

  return (
    <section className={styles.relatedNews}>
      <h3>関連ニュース</h3>
      <ul>
        {relatedNewsItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </section>
  );
}

export default RelatedNews;
