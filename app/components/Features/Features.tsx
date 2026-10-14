import styles from './Features.module.css';

export default function Features() {
    const items = [
        { title: 'Индивидуальный проект', text: 'Разрабатываем дизайн-проект с учетом особенностей вашей планировки и пожеланий.' },
        { title: 'Европейские материалы', text: 'Используем только экологичные и долговечные комплектующие от ведущих брендов.' },
        { title: 'Гарантия 5 лет', text: 'Официальная гарантия по договору на все виды мебели и фурнитуру.' },
    ];

    return (
        <section id="features" className={styles.features}>
        <h2 className={styles.sectionTitle}>Наши преимущества</h2>
        <div className={styles.grid}>
            {items.map((item, index) => (
            <div key={index} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
            </div>
            ))}
        </div>
        </section>
    );
}