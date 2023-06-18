import { ReactNode } from "react"

const FloatingButton = (props: { children: ReactNode, title: string, visibilityState: boolean, handlerVisibility: Function }) => {
	const { children, title, visibilityState, handlerVisibility } = props
	return (
		<>
			<button 
				title={title}
				type="button" onClick={() => handlerVisibility(!visibilityState)}
				className="w-14 h-14 p-3 rounded-full bg-black text-white grid place-items-center"
			>
				{children}
			</button>
		</>
	)
}

export default FloatingButton