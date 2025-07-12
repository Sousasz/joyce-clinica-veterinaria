type SubtitleProps = {
  children: string;
  className?: string
};

export function Subtitle({ children, className, ...rest }: SubtitleProps) {
  return (
    <h5 {...rest} className={`text-gray-base ${className}`}>
      {children.toUpperCase()}
    </h5>
  );
}
