type TouchableProps = {
  children: string;
  className?: string
};

export function Touchable({ children, className, ...rest }: TouchableProps) {
  return (
    <button
      {...rest}
      className={`w bg-green-light rounded-full px-12 h-20
    text-white shadow-default cursor-pointer font-semibold ${className}`}
    >
      {children.toUpperCase()}
    </button>
  );
}
