import styles from "./styles.module.css";

const backgroundImage = {
  src: 'https://accedia.com/wp-content/2023/08/Untitled-design-67.png',
}
const title = 'Title';

const text = 'Text';

const TechConsultingSection = () => {

  return (
    <section 
      className={styles['tech-consulting-section']} 
      style={{ 
        backgroundImage: `url(${backgroundImage.src})`
      }}
    >
      <div className={styles['content-container']}>
        <div className={styles['content-wrapper']}>
          <h1 className={styles['section-title']}>
            {title}
          </h1>
          <p className={styles['section-text']}>
            {text}
          </p>
        </div>
      </div>
    </section>
  )
};

export default TechConsultingSection;