import React from "react";

type Props = {message: string, theme: string}

function Theme(theme: string) {
  if (theme === "dark") {
    return "bg-gray-900 text-white";
  } else if (theme === "light") {
    return "bg-white text-gray-900";
  } else {
    return "bg-gray-200 text-gray-900";
  }
}

function fontDesign(addStyle?: string) {
  return `font-sans text-4xl font-bold ${addStyle || ''}`;
}

function PageFormat({message, theme}: Props) {
  return (
    
    <div className={`w-screen h-screen flex items-center justify-center ${fontDesign()} ${Theme(theme)}`}>
      {message}
    </div>
    
  )
}

function HelloWorld() {
  return "Hello, World!";
}

type ButtonVariant = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

function Button({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export { PageFormat, HelloWorld, Button }