export function TextArea({ ...rest }) {
  return (
    <textarea
      {...rest}
      className="border-2 border-white shadow-default rounded-xl outline-none font-poppins p-2 w-full"
      name="description"
      rows={10}
    ></textarea>
  );
}
