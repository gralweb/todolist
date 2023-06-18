import CardOptionsTodo from './CardOptionsTodo'

const CardTodo = (props: { 
		title: string, content: string, check: boolean, delete: boolean, id: string,
		handlerCheckTodo: Function, handlerDeleteTodo: Function, setFormEditTodoOpenState: Function, setTodoId: Function
	}) => {

	const { title, content, check, id, handlerCheckTodo, handlerDeleteTodo, setFormEditTodoOpenState, setTodoId } = props

	// Funcion para manejar la vista del formulario de edicion y pasar el id del todo a editar
	const handlerFormEditTodo = ():void => {
		setTodoId(id)
		setFormEditTodoOpenState(true)
	}

	return (
		<>
			<article id={id} className={`w-11/12 relative block p-3 pr-10 mx-auto mb-3 text-gray-900 border border-gray-200 rounded-lg ${check ? 'bg-green-100' : 'bg-red-100'}`}>
				<section title="Editar" className='cursor-pointer' onClick={() => handlerFormEditTodo()}>
					<h2 className="flex items-center uppercase text-base tracking-wide font-medium mb-2">
						{title}
					</h2>

					<p className="text-sm">{content}</p>
				</section>

				<CardOptionsTodo check={check} id={id} handlerCheckTodo={handlerCheckTodo} handlerDeleteTodo={handlerDeleteTodo} />
			</article>
		</>
	)
}

export default CardTodo