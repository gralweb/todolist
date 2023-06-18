import FormTodo from "../../FormTodo"
import { Todo } from '../../../interfaces/todo'
import { setTodosToLocalStorage } from '../../../services/setTodo'

const AddTodo = (props: {todos: Array<Todo>, setTodos: Function, setFormAddTodoOpenState: Function}) => {
	const { todos, setTodos, setFormAddTodoOpenState } = props

	// Funcion para manejar el guardado de todos en el estado y en el localstorage
	const handlerAddTodo = (todoForm: Todo) => {
		setTodos([todoForm, ...todos])
		setTodosToLocalStorage([todoForm, ...todos])
	}

	return (
		<>
			<FormTodo title='Añadir' setTodo={handlerAddTodo} handlerVisibility={setFormAddTodoOpenState} />
		</>
	)
}

export default AddTodo