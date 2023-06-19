import { ReactNode } from "react"

type FloatingButtonProps = {
	children:ReactNode,
	title:string,
	visibilityState:boolean,
	handlerVisibility:(state: boolean) => void
}

const FloatingButton: React.FC<FloatingButtonProps>  = ({ children, title, visibilityState, handlerVisibility }) => {
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