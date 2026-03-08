import { HTMLAttributes } from 'react';
import styles from './section.module.css'

export interface SectionProps extends HTMLAttributes<HTMLAreaElement> {
}

export const Section = ({
  children,
  ...props
}: SectionProps) => {
  return (
    <section
      className={styles.root}
      {...props}
    >
      {children}
    </section>
  );
};
