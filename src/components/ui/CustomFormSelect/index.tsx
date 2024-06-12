import { useField } from "formik";

interface CustomFormSelectProps {
  name: string;
  label: string;
  children: React.ReactNode;
}

export const CustomFormSelect = ({
  label,
  children,
  ...props
}: CustomFormSelectProps) => {
  const [field, meta] = useField(props);
  return (
    <div className="grid">
      <label className="text-xl tracking-wider" htmlFor={props.name}>
        {label}
      </label>
      <select
        className="mt-2 rounded-md border border-black/30 px-2 py-2"
        {...field}
        {...props}
      >
        {children}
      </select>
      {meta.touched && meta.error ? (
        <div className="mt-1 text-red-400">{meta.error}</div>
      ) : null}
    </div>
  );
};
