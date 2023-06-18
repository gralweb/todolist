import FormTodo from "../../FormTodo"
import { Todo } from '../../../interfaces/todo'
import { useEffect, useState } from "react"
import { updateTodoInLocalStorage } from "../../../services/updateTodo"

const EditTodo = (props: {todos: Array<Todo>, setTodos: Function, todoId: string, setFormEditTodoOpenState: Function}) => {
	const { todos, setTodos, todoId, setFormEditTodoOpenState } = props
	const [todo, setTodo] = useState({title:'', content:'', check: false, delete: false})

	// Filtrar todo por id para la edicion
	const todoFilterById = (id: string): Todo => {
		const [todo]: Array<Todo> = todos.filter((item: Todo) => {
			return item.id === id
		})

		return todo
	}

	// Manejar el envio datos del formulario para la edicion de todos
	const handlerTodoForm = (todoForm: Todo):void => {
		const filterTodos = todos.filter((item: Todo) => (
			item.id !== todoId
		))

		setTodos([todoForm, ...filterTodos])
		updateTodoInLocalStorage([todoForm, ...filterTodos])
	}

	useEffect(() => {
		// Enviar los datos del todo al estado para manejar la informacion
		setTodo(todoFilterById(todoId))
	}, [todoId])
	
	return (
		<>
			<FormTodo 
				title='Editar' title_todo={todo.title} content_todo={todo.content}
				id_todo={todoId} check_todo={todo.check} delete_todo={todo.delete}
				setTodo={handlerTodoForm} handlerVisibility={setFormEditTodoOpenState}
			/>
		</>
	)
}

export default EditTodo