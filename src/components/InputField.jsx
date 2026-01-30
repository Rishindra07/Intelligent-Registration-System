export default function InputField({
  id, name, value, onChange, placeholder, error, type="text", label
}) {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        aria-label={placeholder}
        aria-invalid={!!error}
      />
      {error && <span role="alert">{error}</span>}
    </div>
  );
}
