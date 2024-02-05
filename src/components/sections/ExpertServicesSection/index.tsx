import Link from "@/components/common/Link";
import styles from "./styles.module.css";

const title = 'Title';

const links = [{
  id: 1,
  href: 'https://accedia.com/services/technology-consulting-services/business-analysis-services/',
  text: 'Text1'
}, {
  id: 2,
  href: 'https://accedia.com/services/technology-consulting-services/ui-ux-design-services/',
  text: 'Text2'
}, ];

const ExpertServicesSection = () => {

  return (
    <section className={styles['expert-services-section']}>
      <div className={styles['section-container']}>
        <h1 className={styles['section-title']}>
          {title}
        </h1>
        <div className={styles['buttons-container']}>
          {links.map(({ id, href, text }) => (
            <Link key={id} href={href}>{text}</Link>
          ))}
        </div>
      </div>
    </section>
  )
};

export default ExpertServicesSection;