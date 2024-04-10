interface SearchOptionProps {
  id: number;
  name: string;
  stringType: "category" | "town";
  handleOptionSelect: (
    fieldName: string,
    id: number,
    type: "category" | "town",
  ) => void;
}

export const SearchOption: React.FC<SearchOptionProps> = ({
  id,
  name,
  stringType,
  handleOptionSelect,
}) => {
  return (
    <li
      className="cursor-pointer border-b border-black/10 px-4 py-2 capitalize hover:bg-secondary"
      data-value={id}
      onClick={() => handleOptionSelect(name, id, stringType)}
    >
      {name}
    </li>
  );
};
