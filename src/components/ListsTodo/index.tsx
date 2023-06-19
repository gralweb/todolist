import ListTodo from "./ListTodo"

type ListsTodoProps = {
	setTodoId: Function,
	setFormEditTodoOpenState: Function
}

const ListsTodo: React.FC<ListsTodoProps> = ({ setTodoId, setFormEditTodoOpenState }) => {
	return (
		<>
			<section className="w-11/12 max-w-3xl border-2 mx-auto my-6 p-10  border-black rounded md:flex grid gap-3" >
				<ListTodo title='Completar' check={false} setTodoId={setTodoId} setFormEditTodoOpenState={setFormEditTodoOpenState} />
				<ListTodo title='Completado' check={true} setTodoId={setTodoId} setFormEditTodoOpenState={setFormEditTodoOpenState} />
			</section>
		</>
	)
}

export default ListsTodo