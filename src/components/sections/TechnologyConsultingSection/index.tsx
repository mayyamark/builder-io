import styles from "./styles.module.css";

const TechConsultingSection = (props: any) => {

  return (
    <section 
      className={styles['tech-consulting-section']} 
      style={{ 
        backgroundImage: `url(${props.backgroundImage})`
      }}
    >
      <div className={styles['content-container']}>
        <div className={styles['content-wrapper']}>
          <h1 className={styles['section-title']}>
            {props.title}
          </h1>
          <p className={styles['section-text']}>
            {props.text}
          </p>
        </div>
      </div>
    </section>
  )
};

export default TechConsultingSection;