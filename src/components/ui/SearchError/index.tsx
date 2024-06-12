interface SearchErrorProps {
  message?: string;
}

export const SearchError = ({
  message = "Sometink went wrong",
}: SearchErrorProps) => {
  return (
    <li
      className="cursor-pointer border border-black/10 border-red-400 px-4 py-2 hover:bg-secondary"
      data-value={0}
    >
      {message}
    </li>
  );
};
