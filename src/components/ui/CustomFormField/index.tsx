import { useField } from "formik";

interface CustomFormFieldProps {
  type: string;
  name: string;
  placeholder: string;
}

export const CustomFormField = ({
  type,
  placeholder,
  ...props
}: CustomFormFieldProps) => {
  const [field, meta] = useField(props);

  return (
    <div className="w-full">
      <input
        type={type}
        className="block h-[42px] w-full rounded-md border border-black/30 px-3 py-2 text-lg outline-none"
        {...field}
        {...props}
        placeholder={placeholder}
      />
      {meta.touched && meta.error ? (
        <div className="mt-1 text-red-400">{meta.error}</div>
      ) : null}
    </div>
  );
};
