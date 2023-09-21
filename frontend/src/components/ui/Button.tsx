import React from 'react';
import Spinner from '../loaders/Spinner';
import { ButtonProps } from '@/helpers/types/ui';



const Button: React.FC<ButtonProps> = ({  children,  isLoading = false,  disabled = false,  className,  onClick,   icon,
  iconPosition = 'start',  ...otherProps
}) => {
  const defaultStyle: React.CSSProperties = {
    padding: '8px 16px',
    cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
    opacity: disabled || isLoading ? 0.6 : 1,
  };

  return (
    <button
      className={className}
      style={{ ...defaultStyle, }}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...otherProps}
    >
        {isLoading ? (
        <Spinner />
      ) : (
        <>
          {icon && iconPosition === 'start' && icon}
          {children}
          {icon && iconPosition === 'end' && icon}
        </>
      )}
    </button>
  );
};

export default Button;
