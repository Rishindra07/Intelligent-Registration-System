export default function SelectField({
  id, value, onChange, options, placeholder, error, label, name
}) {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <select 
        id={id} 
        name={name}
        value={value} 
        onChange={onChange}
        aria-label={placeholder}
        aria-invalid={!!error}
      >
        <option value="">{placeholder}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <span role="alert">{error}</span>}
    </div>
  );
}
