import Link from "@/components/common/Link";
import styles from "./styles.module.css";
import { useGetLinksQuery } from "@/graphql/queries/__generated__/GetLinks.types";

const title = 'Title';

const ExpertServicesSection = () => {
  const { data, loading } = useGetLinksQuery();

  if (loading) {
    return <div>Loading</div>
  }

  return (
    <section className={styles['expert-services-section']}>
      <div className={styles['section-container']}>
        <h1 className={styles['section-title']}>
          {title}
        </h1>
        <div className={styles['buttons-container']}>
          {data && data.link && data.link.map((link) => (
            <Link key={link?.data?.href} href={link?.data?.href || '/'}>{link?.data?.label}</Link>
          ))}
        </div>
      </div>
    </section>
  )
};

export default ExpertServicesSection;