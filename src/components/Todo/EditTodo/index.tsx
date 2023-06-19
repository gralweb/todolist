import FormTodo from "../../FormTodo"
import { Todo } from '../../../interfaces/todo'
import { useContext } from "react"
import { TodoContext, TodoContextType } from "../../../context/todoContext"

type EditTodoProps = {
	todoId:string,
	setFormEditTodoOpenState: Function,
}

const EditTodo: React.FC<EditTodoProps> = ({todoId, setFormEditTodoOpenState}) => {
	const { todos, updateTodo } = useContext(TodoContext) as TodoContextType

	// Filtrar todo por id para la edicion
	const todoFilterById = (id: string): Todo => {
		const [todo]: Array<Todo> = todos.filter((item: Todo) => {
			return item.id === id
		})

		return todo
	}

	// Manejar el envio datos del formulario para la edicion de todos
	const handlerTodoForm = (todoForm: Todo):void => {
		updateTodo(todoForm)
	}

	return (
		<>
			<FormTodo 
				title='Editar' todo={todoFilterById(todoId)}
				handlerForm={handlerTodoForm} handlerVisibility={setFormEditTodoOpenState}
			/>
		</>
	)
}

export default EditTodo