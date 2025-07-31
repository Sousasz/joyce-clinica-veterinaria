type TextAreaProps = {
  className?: string;
};

export function TextArea({ className, ...rest }: TextAreaProps) {
  return (
    <textarea
      {...rest}
      className={`border-2 border-white shadow-default rounded-xl outline-none font-poppins p-2 w-full ${className}`}
      name="description"
      rows={10}
    ></textarea>
  );
}
