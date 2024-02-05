import styles from "./styles.module.css";
import NextLink, { LinkProps } from "next/link";

const Link: React.FC<LinkProps & { children?: React.ReactNode }> = ({ children, ...props}) => (
  <NextLink {...props} className={styles['link']}>
    <span>{children}</span>
  </NextLink>
);

export default Link;
