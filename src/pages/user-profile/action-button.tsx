import { GoPencil } from "react-icons/go";

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

export function ButtonIcon() {
  return (
    <button className="cursor-pointer">
      <GoPencil />
    </button>
  );
}

ActionButton.ButtonIcon = ButtonIcon;
