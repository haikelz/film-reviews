import { FormInputProps } from "../types";

export const FormInput = ({ htmlForValue, label, value, setValue }: FormInputProps) => {
  return (
    <div className="mb-6">
      <label htmlFor={htmlForValue} className="block mb-2 text-lg font-semibold text-gray-900">
        {label}
      </label>
      <input
        type="text"
        className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-all ease-in-out"
        required
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onInvalid={(event) =>
          (event.target as HTMLInputElement).setCustomValidity(`Enter ${htmlForValue} here!`)
        }
      />
    </div>
  );
};
