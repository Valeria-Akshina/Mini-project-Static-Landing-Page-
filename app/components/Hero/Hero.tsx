import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Изготовление кухонной мебели на заказ
                </h1>
                <p className={styles.description}>
                    Позвони сейчас и получи скидку<br />или бесплатную установку
                </p>
                <button className={styles.cta}>УЗНАТЬ СТОИМОСТЬ</button>
            </div>

            <div className={styles.imageContainer}>
                <img 
                    src="/img/img1.png" 
                    alt="Кухонная мебель" 
                    className={styles.image} 
                />
            </div>
        </section>
    );
}