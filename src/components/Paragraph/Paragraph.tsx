import { HTMLAttributes } from 'react';
import styles from './paragraph.module.css'

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  onClick?: () => void;
}

export const Paragraph = ({
  children,
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={styles.root}
      {...props}
    >
      {children}
    </p>
  );
};
