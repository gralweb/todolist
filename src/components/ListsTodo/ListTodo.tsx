import CardTodo from "../Todo/CardTodo"
import { Todo } from "../../interfaces/todo"
import { ReactNode, useContext, useEffect, useState } from "react"
import { TodoContext, TodoContextType } from "../../context/todoContext"

type ListTodoProps = {
	title:string,
	check:boolean,
	setTodoId: Function,
	setFormEditTodoOpenState: Function
}

const ListTodo : React.FC<ListTodoProps> = ({title, check, setFormEditTodoOpenState, setTodoId}) => {
	const { todos, updateTodo } = useContext(TodoContext) as TodoContextType
	const [todosCards, setTodosCards] = useState<ReactNode>([])
	
	// Filtrar los todos que no estan eliminados y que esten en completos o no para mostrar en el lugar correcto 
	const filterTodosByCheckAndDelete = () => {
		const filterTodos: Array<Todo> = todos.filter((item: Todo) => (
			item.check === check && item.delete === false
		))

		return filterTodos
	}

	// Covertir los datos de los todos en Card para la vista del usuario
	const convertTodosToCards = () => {
		const cards: Array<ReactNode> = filterTodosByCheckAndDelete().map((item: Todo) => (
			<CardTodo 
				key={item.id}
				todo={item}
				handlerCheckTodo={handlerCheckTodo} handlerDeleteTodo={handlerDeleteTodo}
				setFormEditTodoOpenState={setFormEditTodoOpenState} setTodoId={setTodoId}
			/>
		))

		setTodosCards(cards)
	}

	// Manejador de estado de Todo - Completo e Incompleto
	const handlerCheckTodo = (id: string) => {
		const [todo]: Array<Todo> = todos.filter((item: Todo) => (
			item.id === id
		))

		todo.check = !todo.check
		updateTodo(todo)
	}
	
	// Manejar el estado de Todo - enviar al historial de eliminados
	const handlerDeleteTodo = (id: string) => {
		const [todo]: Array<Todo> = todos.filter((item: Todo) => (
			item.id === id
		))

		todo.delete = !todo.delete
		updateTodo(todo)
		
	}

	useEffect(() => {
		// Convertir los todos a las cards al iniciar la vista
		convertTodosToCards()
	}, [todos])

	return (
		<>
			<section className='rounded md:w-7/12 p-3 w-auto h-screen max-h-96 overflow-y-auto border-2 border-black'>
				<div className="w-11/12 mx-auto relative flex items-center text-xl uppercase mb-3">
					{title}

					<div className={`w-2 h-2 block ml-3 ${check ? "bg-green-300" : "bg-red-300" }`}></div>
				</div>

				{ 
					todosCards
				}
			</section>
		</>
	)
}

export default ListTodo