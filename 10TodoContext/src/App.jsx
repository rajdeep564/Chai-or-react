import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Context'
import { TodoForm, TodoItem } from './Components'

function App() {

  const [todos,setTodos] = useState([])


  //yeh todo useState se nahi mil raha hai forms mese milega 
  const addTodo = (todo)=> {
    //agar normaly setTodos(todo) kiya to purani sari values delete ho jayengi
    setTodos((prev) => [{id:Date.now(),...todo},...prev])
  }
  const updateTodo = (id, todo) => {
    //prev array leliya uspe loop lagake check kara ki agar id mili hui jo form mese vo match kre to todo lelo form vala or na kre to prevTodo matlab jo pehle tha vahui
      setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo :prevTodo)))
  }

  const deleteTodo = (id) => {
    // prev array me loop lagake value me filter krliya jahape todoval.id matlab vo object ki id jaha pr form ki id ke equal ho
    setTodos((prev) => prev.filter((todoval) => todoval.id !== id))
  }

  const toggleComplete = (id) => {
    //prev array me loop lagake check kiya ki id match krhi h ya nahi agar nahi krhi to as it is or krhi hai to properties leke usme properties change krdo completed vale ko !prevtodo.complete dedo
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo,completed :!prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }

  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])





  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                            
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
