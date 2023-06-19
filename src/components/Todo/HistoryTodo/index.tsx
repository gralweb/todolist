import CardHistoryTodo from "./CartHistoryTodo"
import { Todo } from "../../../interfaces/todo"
import { ReactNode, useContext, useEffect, useState } from "react"
import { TodoContext, TodoContextType } from "../../../context/todoContext"

type ListHistoryProps = {
	setFormEditTodoOpenState: Function,
	setTodoId: Function
}

const ListHistoryTodo: React.FC<ListHistoryProps> = ({setFormEditTodoOpenState, setTodoId}) => {
	const { todos, updateTodo, deleteTodo } = useContext(TodoContext) as TodoContextType
	const [todosCards, setTodosCards] = useState<ReactNode>([])

	// Filtrar los todos que estan eliminados para mostrar en el historial
	const filterTodosByDelete = () => {
		const filterTodos: Array<Todo> = todos.filter((item: Todo) => (
			item.delete === true
		))

		return filterTodos
	}

	// Covertir los datos de los todos en Card para la vista del usuario
	const convertTodosToCards = () => {
		const cards: Array<ReactNode> = filterTodosByDelete().map((item: Todo) => (
			<CardHistoryTodo 
				todo={item}
				key={item.id}
				handlerDeleteTodo={handlerDeleteTodo} handlerRestoreTodo={handlerRestoreTodo}
				setFormEditTodoOpenState={setFormEditTodoOpenState} setTodoId={setTodoId}
			/>
		))

		setTodosCards(cards)
	}

	// Manejar el estado de eliminacion de los todos - restaurar si estan eliminados
	const handlerRestoreTodo = (id: string) => {
		const [todo]: Array<Todo> = todos.filter((item: Todo) => (
			item.id === id
		))

		todo.delete = !todo.delete
		updateTodo(todo)
	}

	// Manejar la eliminacion permanente de los todos del estado y localstorage
	const handlerDeleteTodo = (id: string) => {
		deleteTodo(id)
	}

	useEffect(() => {
		// Convertir los todos a las cards al iniciar la vista
		convertTodosToCards()
	}, [todos])

	return (
		<>
			<section className='rounded fixed bg-white bottom-20 max-w-xs w-full left-2/4 -translate-x-2/4 p-3 h-screen max-h-96 overflow-y-auto border-2 border-black'>
				<div className="w-11/12 mx-auto relative flex items-center text-xl uppercase mb-3">
					<h2>Eliminados</h2>

					<div className={`w-2 h-2 block ml-3 bg-black`}></div>
				</div>

				{ 
					todosCards
				}
			</section>
		</>
	)
}

export default ListHistoryTodo