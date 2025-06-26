import { GoPencil } from "react-icons/go";

type ActionButtonProps = {
  children: React.ReactNode;
}

export function ActionButton({ children }: ActionButtonProps) {
  return (
    <button className="flex items-center gap-1 cursor-pointer">
      {children}
    </button>
  );
}

export function ButtonIcon() {
  return <GoPencil />;
}

ActionButton.IconButton = ButtonIcon;