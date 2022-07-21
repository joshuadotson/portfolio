import { useButton } from '@react-aria/button';
import { useRef } from 'react';
import "./root.css"
import styles from './Button.module.css';

export const Button = (props: any) => {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);
  const { children } = props;
  const ButtonElement = props.elementType || 'button';
  return (
    <ButtonElement {...buttonProps} className={styles['button-primary']} ref={ref}>
      {children}
    </ButtonElement>
  );
};
