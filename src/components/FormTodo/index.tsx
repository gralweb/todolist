import { FormEvent, useEffect, useState } from "react"
import InputForm from "./InputForm"
import ButtonForm from "./ButtonForm"
import { v4 as uuidv4 } from 'uuid'
import { Todo } from "../../interfaces/todo"

type FormTodoProps = {
	title:string,
	todo?: Todo,
	handlerForm: (formData: Todo) => void,
	handlerVisibility: Function
}

const FormTodo: React.FC<FormTodoProps> = ({title, todo, handlerForm, handlerVisibility}) => {
	const [todoForm, setTodoForm] = useState<Todo>({
		id: '',
		title: '',
		content: '',
		check: false,
		delete: false
	})

	// Manejar el envio del formulario de creacion y edicion
	const handlerFormAdd = (e: FormEvent<HTMLFormElement>) => {
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
			handlerForm(todoForm)
			handlerVisibility(false)
		}
	}, [todoForm])

	return (
		<>
			<form onSubmit={handlerFormAdd} className="w-11/12 max-w-3xl fixed top-1/4 z-10 left-0 right-0 bg-white overflow-hidden p-10 mx-auto my-6 border-2 rounded border-black">
				<div className="text-black tracking-wide font-bold mb-4">
					<h1 className="text-xl">{title} TODO</h1>
				</div>

				<div className="mb-6">
					<InputForm type='text' label='titulo' holder='Titulo para TODO' value={todo?.title} />
				</div>

				<div className="mb-6">
					<InputForm type='textarea' label='contenido' holder='Contenido para TODO' value={todo?.content} />
				</div>

				<InputForm type='hidden' label='id_todo' value={!todo?.id ? uuidv4() : todo?.id} />
				<InputForm type='hidden' label='check_todo' value={JSON.stringify(todo?.check) || "false"} />
				<InputForm type='hidden' label='delete_todo' value={JSON.stringify(todo?.delete) || "false"} />
				
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