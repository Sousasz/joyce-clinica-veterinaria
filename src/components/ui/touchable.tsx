type TouchableProps = {
  children: React.ReactNode;
};

export function Touchable({ children }: TouchableProps) {
  return (
    <button className="w-full bg-white text-black font-medium px-6 shadow-default h-10 rounded-full cursor-pointer font-poppins">
      {children}
    </button>
  );
}

// export function Touchable({ children, className, ...rest }: TouchableProps) {
//   return (
//     <button
//       {...rest}
//       className={` bg-green-light rounded-full px-12 h-20
//     text-white shadow-default cursor-pointer font-semibold uppercase ${className}`}
//     >
//       {children}
//     </button>
//   );
// }
