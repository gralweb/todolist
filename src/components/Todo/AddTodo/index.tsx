import { useContext } from "react"
import FormTodo from "../../FormTodo"
import { Todo } from '../../../interfaces/todo'
import { TodoContext, TodoContextType } from "../../../context/todoContext"

type AddTodoProps = {
	setFormAddTodoOpenState: Function
}

const AddTodo: React.FC<AddTodoProps> = ({setFormAddTodoOpenState}) => {
	const { setTodo } = useContext(TodoContext) as TodoContextType
	// Funcion para manejar el guardado de todos en el estado y en el localstorage
	const handlerAddTodo = (todoForm: Todo) => {
		setTodo(todoForm)
	}

	return (
		<>
			<FormTodo title='Añadir' handlerForm={handlerAddTodo} handlerVisibility={setFormAddTodoOpenState} />
		</>
	)
}

export default AddTodo