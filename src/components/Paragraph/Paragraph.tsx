import { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './paragraph.module.css'

export const Paragraph = ({
  children,
  ...props
}: PropsWithChildren) => {
  return (
    <p
      className={styles.root}
      {...props}
    >
      {children}
    </p>
  );
};
