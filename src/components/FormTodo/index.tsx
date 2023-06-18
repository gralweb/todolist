import { FormEvent, useEffect, useState } from "react"
import InputForm from "./InputForm"
import ButtonForm from "./ButtonForm"
import { v4 as uuidv4 } from 'uuid'
import { Todo } from "../../interfaces/todo"

const FormTodo = (props: {
		title: string, title_todo?: string, content_todo?: string,
		id_todo?: string, check_todo?: boolean, delete_todo?: boolean,
		setTodo: Function, handlerVisibility: Function
	}) => {
	
	const { title, title_todo, content_todo, id_todo, check_todo, delete_todo, setTodo, handlerVisibility } = props
	const [todoForm, setTodoForm] = useState<Todo>({
		id: '',
		title: '',
		content: '',
		check: false,
		delete: false
	})

	// Manejar el envio del formulario de creacion y edicion
	const handlerForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const target = e.target as HTMLFormElement

		const [ title, content, id_todo, check_todo, delete_todo ] = target.elements

		setTodoForm({
			id: (id_todo as HTMLInputElement).value,
			title: (title as HTMLInputElement).value,
			content: (content as HTMLInputElement).value,
			check: JSON.parse((check_todo as HTMLInputElement).value),
			delete: JSON.parse((delete_todo as HTMLInputElement).value)
		})
	}

	useEffect(() => {
		// Comprobar si se han envido los datos del formulario para guardar
		if (todoForm.title !== '') {
			setTodo(todoForm)
			handlerVisibility(false)
		}
	}, [todoForm])

	return (
		<>
			<form onSubmit={handlerForm} className="w-11/12 max-w-3xl fixed top-1/4 z-10 left-0 right-0 bg-white overflow-hidden p-10 mx-auto my-6 border-2 rounded border-black">
				<div className="text-black tracking-wide font-bold mb-4">
					<h1 className="text-xl">{title} TODO</h1>
				</div>

				<div className="mb-6">
					<InputForm type='text' label='titulo' holder='Titulo para TODO' value={title_todo} />
				</div>

				<div className="mb-6">
					<InputForm type='textarea' label='contenido' holder='Contenido para TODO' value={content_todo} />
				</div>

				<InputForm type='hidden' label='id_todo' value={!id_todo ? uuidv4() : id_todo} />
				<InputForm type='hidden' label='check_todo' value={JSON.stringify(check_todo) || "false"} />
				<InputForm type='hidden' label='delete_todo' value={JSON.stringify(delete_todo) || "false"} />
				
				<div className="gap-4 flex justify-between">
					<div onClick={() => handlerVisibility(false)} className="w-full">
						<ButtonForm type='button' label='Cancelar' />
					</div>
					<ButtonForm type='submit' label='Guardar' />
				</div>
			</form>
		</>
	)
}

export default FormTodo