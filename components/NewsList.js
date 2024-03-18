import Link from 'next/link';
import styles from '../styles/NewsList.module.css';

const NewsList = ({ blogs }) => (
    <section className={styles.newsList}>
        <h2>最新ニュース</h2>
        {blogs ? blogs.map((blog) => (
            <Link key={blog.id} href={`blog/${blog.id}`}>
                <article key={blog.id} className={styles.newsItem}>
                    <h3>{blog.title}</h3>
                </article>
            </Link>
        )) : <p>ブログがありません。</p>}
    </section>
);

export default NewsList;
