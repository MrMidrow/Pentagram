export default function Button({id, type, className, onClick, onClose, onSubmit, text}){
  return <button type={type} className={className} id={id} onClick={onClick} onClose={onClose} onSubmit={onSubmit} >{text}</button>
}