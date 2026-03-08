import styles from './button.module.css'

export interface ButtonProps {
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

export const Button = ({
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={styles.root}
      {...props}
    >
      {label}
    </button>
  );
};
