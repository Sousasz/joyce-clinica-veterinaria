type Head5Props = {
  children: React.ReactNode;
};

export function Head5({ children, ...rest }: Head5Props) {
  return (
    <h5 {...rest} className="text-[#8C8C8C]">
      {children}
    </h5>
  );
}
