import styles from "./styles.module.css";

const title = 'Title';
const text = 'Text';

const items = [{
  id: 1,
  title: 'Title 1'
}, {
  id: 2,
  title: 'Title 2'
}]

const PartnerSection = () => {

  return (
    <section>
      <div className={styles['section-container']}>
        <div className={styles['text-container']}>
          <h2 className={styles['section-title']}>
            {title}
          </h2>
          <p className={styles['section-text']}>
            {text}
          </p>
        </div>
        <div className={styles['list-container']}>
          <ul>
            {items.map(({ id, title }) => (
              <li key={id} className={styles['list-item']}>
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