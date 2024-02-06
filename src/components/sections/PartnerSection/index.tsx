import styles from "./styles.module.css";

const PartnerSection = (props: any) => {

  return (
    <section>
      <div className={styles['section-container']}>
        <div className={styles['text-container']}>
          <h2 className={styles['section-title']}>
            {props.title}
          </h2>
          <p className={styles['section-text']}>
            {props.text}
          </p>
        </div>
        <div className={styles['list-container']}>
          <ul>
            {props.items.map(({ title }: any) => (
              <li key={title} className={styles['list-item']}>
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PartnerSection;