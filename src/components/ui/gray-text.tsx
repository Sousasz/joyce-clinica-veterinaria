type GrayTextProps = {
  children: string;
  className?: string
};

export function GrayText({ children, className, ...rest }: GrayTextProps) {
  return (
    <h5 {...rest} className={`text-gray-base ${className}`}>
      {children.toUpperCase()}
    </h5>
  );
}
