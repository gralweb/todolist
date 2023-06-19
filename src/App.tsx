import Footer from "./components/UI/Footer"
import Header from "./components/UI/Header"
import Main from "./components/UI/Main"
import TodoProvider from "./context/todoContext"
import { getTodosFromLocalStorage } from "./services/getTodos"


const App = () => {
    return (
        <>
            <TodoProvider todosData={getTodosFromLocalStorage()} >
                <section>
                    <Header/>

                    <Main/>
                    
                    <Footer />
                </section>
            </TodoProvider>
        </>
    )
}

export default App
