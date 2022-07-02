import { ErrorMessage } from "@hookform/error-message";

export const ErrorMessageCustom = ({ errors, name }) => (
  <ErrorMessage
    errors={errors}
    name={name}
    render={({ message }) => <span className="text-danger">{message}</span>}
  />
);
