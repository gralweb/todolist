import ListTodo from "./ListTodo"
import { Todo } from '../../interfaces/todo'

const ListsTodo = (props: { todos: Array<Todo>, setTodos: Function, setTodoId: Function, setFormEditTodoOpenState: Function }) => {
	const {todos, setTodos, setFormEditTodoOpenState, setTodoId} = props

	return (
		<>
			<section className="w-11/12 max-w-3xl border-2 mx-auto my-6 p-10  border-black rounded md:flex grid gap-3" >
				<ListTodo title='Completar' check={false} todos={todos} setTodos={setTodos} setTodoId={setTodoId} setFormEditTodoOpenState={setFormEditTodoOpenState} />
				<ListTodo title='Completado' check={true} todos={todos} setTodos={setTodos} setTodoId={setTodoId} setFormEditTodoOpenState={setFormEditTodoOpenState} />
			</section>
		</>
	)
}

export default ListsTodo