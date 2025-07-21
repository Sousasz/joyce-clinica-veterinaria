type ButtonsOfActionsProps = {
  children: React.ReactNode;
};

export function ButtonOfAction({ children }: ButtonsOfActionsProps) {
  return (
    <button className="flex items-center gap-1 cursor-pointer max-w-fit cursor font-medium underline">
      {children}
    </button>
  );
}
