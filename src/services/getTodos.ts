import { Todo } from '../interfaces/todo'

// Se encarga de manejar la obtencion de TODOS del localstorage
const getTodosFromLocalStorage = () => {
	const todosLocal = localStorage.getItem('todos')
	
	// Obtener el item "todos" del localstorage para evitar codigo repetido
	const getTodos = (): Array<Todo> => {
		const todosLocalData: any = localStorage.getItem('todos')
		const todos: Array<Todo> = JSON.parse(todosLocalData)
		return todos
	}
	
	// Comprobando si existe el item "todos", si existe se devuelven los datos, si no se crea para evitar errores
	if (!todosLocal) {
		localStorage.setItem('todos', JSON.stringify([]))
		return getTodos()
	} else {
		return getTodos()
	}
}

export { getTodosFromLocalStorage }