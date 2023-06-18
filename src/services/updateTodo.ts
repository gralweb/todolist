import { Todo } from '../interfaces/todo'

// Se encarga de manejar el envio de TODOS al localstorage para actualizar algun Todo
const updateTodoInLocalStorage = ( todosData: Array<Todo> ):void => {
	localStorage.setItem('todos', JSON.stringify(todosData))
}

export { updateTodoInLocalStorage }