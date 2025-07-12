
type ActionButtonProps = {
  children: React.ReactNode;
};

export function ActionButton({ children }: ActionButtonProps) {
  return (
    <button className="flex items-center gap-1 cursor-pointer max-w-fit cursor font-medium underline">
      {children}
    </button>
  );
}
