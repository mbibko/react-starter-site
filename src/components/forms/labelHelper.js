export function labelHelper({ name, labelText, required }) {
  return (
    labelText && (
      <label htmlFor={name} className="form-label">
        {labelText}{" "}
        {required ? "*" : <span className="text-muted">Optional</span>}
      </label>
    )
  );
}
