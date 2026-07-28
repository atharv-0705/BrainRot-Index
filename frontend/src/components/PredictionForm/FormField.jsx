export default function FormField({ icon: Icon, label, htmlFor, children, hint }) {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={htmlFor}>
        {Icon && <Icon size={15} strokeWidth={2.25} />}
        {label}
      </label>
      {children}
      {hint && <span className="form-field__hint">{hint}</span>}
    </div>
  )
}
