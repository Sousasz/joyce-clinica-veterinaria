import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const touchableVariants = tv({
  base: "shadow-default cursor-pointer rounded-full font-poppins",

  variants: {
    buttonType: {
      primary: "bg-white text-black font-medium px-6 h-10",
      secondary: "bg-green-light px-12 h-20 text-white font-semibold uppercase",
    },
  },

  defaultVariants: {
    buttonType: "primary",
  },
});

interface TouchableProps
  extends ComponentProps<"button">,
    VariantProps<typeof touchableVariants> {
  children: ReactNode;
}

export function Touchable({ children, buttonType, ...props }: TouchableProps) {
  return (
    <button {...props} className={touchableVariants({ buttonType })}>
      {children}
    </button>
  );
}
