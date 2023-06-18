const ButtonForm = (props: {label: string, type: string}) => {
	const { label, type } = props

	return (
		<>
			<button 
				type={type === "submit" ? "submit" : "button" }
				className={`text-xs uppercase font-bold tracking-wide p-2 border-2 rounded border-gray-200 bg-gray-100 hover:border-black w-full text-center`}>
				{label}
			</button>
		</>
	)
}

export default ButtonForm