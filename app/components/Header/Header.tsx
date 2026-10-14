import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
        <div className={styles.logoContainer}>
            <div className={styles.logoBox}>KM</div>
            <div className={styles.logoText}>Кухонная<br />мебель</div>
        </div>
        
        <nav className={styles.nav}>
            <a href="#features" className={styles.navLink}>Преимущества</a>
            <a href="#services" className={styles.navLink}>Услуги</a>
            <a href="#works" className={styles.navLink}>Наши работы</a>
            <a href="#about" className={styles.navLink}>О нас</a>
            <a href="#contacts" className={styles.navLink}>Контакты</a>
        </nav>

        <div className={styles.contacts}>
            <a href="tel:88464515582" className={styles.phone}>8 (846) 451-55-82</a>
            <span className={styles.callback}>Заказать звонок</span>
        </div>
        </header>
    );
}