import { Todo } from '../../../interfaces/todo'
import CardHistoryOptionsTodo from './CardHistoryOptionsTodo'

type CardHistoryTodoProps = {
	todo: Todo,
	setTodoId: Function,
	handlerRestoreTodo: Function,
	handlerDeleteTodo: Function,
	setFormEditTodoOpenState: Function,
}

const CardHistoryTodo: React.FC<CardHistoryTodoProps> = ({todo, handlerRestoreTodo, handlerDeleteTodo, setFormEditTodoOpenState, setTodoId}) => {
	const { title, content, id, check } = todo

	// Manejar el envio datos del formulario para la edicion de todos desde el historial de borrados
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

				<CardHistoryOptionsTodo id={id} handlerRestoreTodo={handlerRestoreTodo} handlerDeleteTodo={handlerDeleteTodo} />
			</article>
		</>
	)
}

export default CardHistoryTodo