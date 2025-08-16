export default function TextArea({ label, ...props }) {
  return (
    <label className="block">
      {label && <span className="label">{label}</span>}
      <textarea className="input min-h-[120px]" {...props} />
    </label>
  )
}
