import { useFormContext } from "react-hook-form";
import { ErrorMessageCustom } from "./ErrorMessageCustom";
import { labelHelper } from "./labelHelper";
import classNames from "classnames";

export function TextareaControl({
  name,
  registerOptions,
  registerOptions: { required = false },
  labelText,
  attributes = {},
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {labelHelper({ name, labelText, required })}
      <textarea
        {...register(name, registerOptions)}
        id={name}
        {...attributes}
        className={classNames("form-control", attributes.className, {
          "is-invalid": errors[name],
        })}
      />
      <ErrorMessageCustom errors={errors} name={name} />
    </>
  );
}
