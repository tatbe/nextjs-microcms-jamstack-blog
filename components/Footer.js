// components/Footer.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function Footer() {
    return (

        <footer className={styles.footer}>
        © 2024 チャグのニュース | 
        <Link href="/privacy-policy">
            プライバシーポリシー
        </Link>
    </footer>
    );
}

export default Footer;
