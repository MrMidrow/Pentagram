export default function Input({ id, type = "text", name, value, classNameinput, classNameLabel }) {
  return (
    <label className={classNameLabel} htmlFor={id}>
      {textLabel}
      <input id={id} type={type} name={name} value={value} className={classNameinput} placeholder={placeholder} onChange={onChange} />
    </label>
  )
}