import { useFormContext } from "react-hook-form";
import classNames from "classnames";
import { ErrorMessageCustom } from "./ErrorMessageCustom";
import { labelHelper } from "./labelHelper";

export function TextControl({
  name,
  type,
  registerOptions,
  registerOptions: { required },
  labelText,
  attributes = {},
  showErrorMessage = true,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {labelHelper({ name, labelText, required })}
      <div className={classNames("position-relative")}>
        <input
          {...register(name, registerOptions)}
          {...attributes}
          id={name}
          type={type}
          className={classNames("form-control", attributes.className, {
            "is-invalid": errors[name],
          })}
        />
      </div>
      {showErrorMessage && <ErrorMessageCustom errors={errors} name={name} />}
    </>
  );
}
