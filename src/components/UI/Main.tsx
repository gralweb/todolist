import { useState } from "react"
import ListsTodo from "../ListsTodo"
import AddTodo from "../Todo/AddTodo"
import EditTodo from "../Todo/EditTodo"
import ListHistoryTodo from "../Todo/HistoryTodo"
import FloatingButton from "./FloatingButton"
import ViewVoidTodo from "../Todo/ViewVoidTodo"
import { getTodosFromLocalStorage } from '../../services/getTodos'

const Main = () => {
	const [todos, setTodos] = useState(getTodosFromLocalStorage())
	const [todoId, setTodoId] = useState('')
	const [formAddTodoOpenState, setFormAddTodoOpenState] = useState(false)
	const [formEditTodoOpenState, setFormEditTodoOpenState] = useState(false)
	const [historyTodoOpenState, setHistoryTodoOpenState] = useState(false)

	return (
		<>
			<section className="todo-main">
				{
					// Validacion para saber si se puede mostrar el formulario de añadir Todo
					formAddTodoOpenState ?
					(<AddTodo todos={todos} setTodos={setTodos} setFormAddTodoOpenState={setFormAddTodoOpenState} />) :
					null
				}

				{
					// Validacion para saber si existen Datos de Todo y mostrar una vista respectiva al caso
					todos.length ?
					(<ListsTodo 
						todos={todos} setTodos={setTodos} setTodoId={setTodoId}
						setFormEditTodoOpenState={setFormEditTodoOpenState}
					/>) :
					(<ViewVoidTodo />)
				}

				{
					// Validacion para saber si se puede mostrar el formulario de Edicion de Todo
					formEditTodoOpenState ?
					(<EditTodo todos={todos} setTodos={setTodos} todoId={todoId} setFormEditTodoOpenState={setFormEditTodoOpenState} />) :
					null
				}
				
				<section className="fixed z-20 bottom-2 left-0 right-0 mx-auto flex gap-2 place-content-center">
					<FloatingButton title="Añadir TODO" visibilityState={formAddTodoOpenState} handlerVisibility={setFormAddTodoOpenState}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
						</svg>
					</FloatingButton>

					<FloatingButton title="Historial Eliminados" visibilityState={historyTodoOpenState} handlerVisibility={setHistoryTodoOpenState}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
						</svg>
					</FloatingButton>
				</section>
				
				{
					// Validacion para saber si se puede mostrar el historial de Todos Eliminados
					historyTodoOpenState ?
					(<ListHistoryTodo
						todos={todos} setTodos={setTodos} setTodoId={setTodoId}
						setFormEditTodoOpenState={setFormEditTodoOpenState}
					/>) :
					null
				}
			</section>
		</>
	)
}

export default Main