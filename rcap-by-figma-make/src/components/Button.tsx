import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'flat';
  loading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  loading = false, 
  icon, 
  children, 
  className = '', 
  disabled,
  ...props 
}: ButtonProps) {
  const baseClass = variant === 'primary' ? 'btn-primary' :
                   variant === 'secondary' ? 'btn-secondary' :
                   variant === 'outline' ? 'btn-outline' :
                   'btn-flat';
  
  return (
    <button
      className={`${baseClass} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 size={20} className="animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
}
