interface SearchLoadingProps {
  message?: string;
}

export const SearchLoading = ({
  message = "Loading...",
}: SearchLoadingProps) => {
  return (
    <li
      className="cursor-pointer border-b border-black/10 px-4 py-2 hover:bg-secondary"
      data-value={0}
    >
      {message}
    </li>
  );
};
