type SubtitleProps = {
  children: React.ReactNode;
};

export function Subtitle({ children }: SubtitleProps) {
  return (
    <h2 className="text-green-dark font-poppins text-2xl text-center">
      {children}
    </h2>
  );
}
