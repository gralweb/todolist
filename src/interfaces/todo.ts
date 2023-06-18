// Plantilla para la creacion con los datos correctos del TODO
interface Todo {
	'id': string,
	'title': string,
	'content': string,
	'check': boolean,
	'delete': boolean
}

export type { Todo }