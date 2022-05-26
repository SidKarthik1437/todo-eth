function Todo({text}:any) {
  return (
    <div className="w-full text-xl text-white p-2 hover:-translate-y-1 translate duration-100 hover:shadow hover:shadow-btn">{text}</div>
  )
}

export default Todo