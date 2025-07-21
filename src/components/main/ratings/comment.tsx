type CommentProps = {
  children: React.ReactNode;
};

export function Comment({ children }: CommentProps) {
  return <p>{children}</p>;
}
