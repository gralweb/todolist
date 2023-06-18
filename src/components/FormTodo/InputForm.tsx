const InputForm = (props: { type: string, label: string, holder?: string, value?: string }) => {
	// Validar que el tipo de input que se vaya a utilizar para evitar repetir codigo
	const validInput = () => (
		props.type == 'textarea' ?
		<textarea required id={props.label} defaultValue={props.value} className="bg-gray-100 border-2 border-gray-200 rounded-md tracking-wide p-1.5 text-sm w-full block text-black font-medium h-40 max-h-40" placeholder={props.holder}></textarea> :
		<input required type={props.type} id={props.label} defaultValue={props.value} className="bg-gray-100 border-2 border-gray-200 rounded-md tracking-wide p-1.5 text-sm w-full block text-black font-medium" placeholder={props.holder}/>
	)

	return (
		<>
			{
				validInput()
			}
		</>
	)
}

export default InputForm