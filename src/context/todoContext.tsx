import { ReactNode, createContext, useState } from 'react'
import { Todo } from '../interfaces/todo'
import { setTodosToLocalStorage } from '../services/setTodo'
import { updateTodoInLocalStorage } from '../services/updateTodo'

// Plantilla de tipos para las props que usa el contexto
export type TodoContextType = {
	todos: Array<Todo>,
	setTodo: (todoData: Todo) => void,
	updateTodo: (todoData: Todo) => void,
	deleteTodo: (idTodo: string) => void,
}
// Plantilla de tipos para las props que usa el provider
type TodoProviderProps = {
	children:ReactNode,
	todosData:Array<Todo>
}

// Creacion del contexto con estado null como inicio
export const TodoContext = createContext<TodoContextType | null>(null)

// Creacion del Provider para el contexto
const TodoProvider: React.FC<TodoProviderProps> = ({ children, todosData }) => {
	// Estado que maneja el contexto
	const [todos, setTodos] = useState<Array<Todo>>(todosData)
	// Funcion para crear Todos y guardarlo en el estado y en el localstorage
	const setTodo = (todoData: Todo) => {
		setTodos([todoData, ...todos])
		setTodosToLocalStorage([todoData, ...todos])
	}
	// Funcion para editar Todos y guardarlo en el estado y en el localstorage
	const updateTodo = (todoData: Todo) => {
		const oldsTodosData = todos.filter((item: Todo) => {
			item.id !== todoData.id
		})

		const newsTodosData: Array<Todo> = [todoData, ...oldsTodosData]
		setTodos(newsTodosData)
		updateTodoInLocalStorage(newsTodosData)
	}
	// Funcion para eliminar Todos del estado y en el localstorage
	const deleteTodo = (todoId: string) => {
		const newsTodosData = todos.filter((item: Todo) => {
			item.id !== todoId
		})

		setTodos(newsTodosData)
		updateTodoInLocalStorage(newsTodosData)
	}

	return (
		<TodoContext.Provider value={{ todos, setTodo, deleteTodo, updateTodo }}>
			{children}
		</TodoContext.Provider>
	)
}

export default TodoProvider