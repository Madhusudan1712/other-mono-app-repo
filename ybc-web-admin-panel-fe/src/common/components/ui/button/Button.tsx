import { type ButtonHTMLAttributes, type FC } from 'react';

import styles from './button.module.scss';

export type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'soft';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  className,
  ...rest
}) => {
  const classes = [
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <button className={classes} {...rest} />;
};

export default Button;


