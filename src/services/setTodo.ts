import { Todo } from '../interfaces/todo'

// Se encarga de manejar el envio de TODOS al localstorage
const setTodosToLocalStorage = ( todoData: Array<Todo> ) => {
	localStorage.setItem('todos', JSON.stringify(todoData))
}

export { setTodosToLocalStorage }