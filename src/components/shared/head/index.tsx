type HeadProps = {
  children: string;
  className?: string
};

export function Head({ children, className, ...rest }: HeadProps) {
  return (
    <h5 {...rest} className={`text-gray-base ${className}`}>
      {children.toUpperCase()}
    </h5>
  );
}
