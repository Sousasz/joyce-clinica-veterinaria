type HeadProps = {
  children: React.ReactNode;
};

export function Head({ children, ...rest }: HeadProps) {
  return (
    <h5 {...rest} className="text-[#8C8C8C]">
      {children}
    </h5>
  );
}
