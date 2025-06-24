
type SmallTextProps = {
    children: React.ReactNode
}

export function SmallText({ children }: SmallTextProps) {
  return (
    <div className="flex flex-col justify-center font-poppins text-sm text-center">{children}</div>
  );
}
