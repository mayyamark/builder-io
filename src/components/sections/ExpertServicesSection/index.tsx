import Link from "@/components/common/Link";
import styles from "./styles.module.css";
// import { useGetLinksQuery } from "@/graphql/queries/__generated__/GetLinks.types";

const ExpertServicesSection = (props: any) => {
  // const { data, loading } = useGetLinksQuery();

  const data = JSON.parse(JSON.stringify(props.builderState.state))

  if (data.loading) {
    return <div>Loading</div>
  }

  return (
    <section className={styles['expert-services-section']}>
      <div className={styles['section-container']}>
        <h1 className={styles['section-title']}>
          {props.title}
        </h1>
        <div className={styles['buttons-container']}>
          {data.data.link && data.data.link.map((link: any) => (
            <Link key={link.data.href} href={link.data.href}>{link.data.label}</Link>
          ))}
        </div>
      </div>
    </section>
  )
};

export default ExpertServicesSection;