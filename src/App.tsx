import { useState } from "react";


function App() {
  const [todo, setTodo] = useState("");

  const [todoList, setTodoList] = useState([])

  const handleForm = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { todoName: todo }]);
    setTodo("");
  }

  const deleteTodo = (deleteValue) => {
    const restTodoList = [...todoList.filter((val) => {
      return val.todoName !== deleteValue;
    })]
    setTodoList(restTodoList)
  }
  return (
    <div className="bg-gray-200 w-full h-screen flex items-center">
      <div className="w-[500px] mx-auto text-center bg-white p-5">
        <h1 className="text-5xl font-bold mb-5">TODO LIST</h1>
        <form onSubmit={handleForm}>
          <input type="text" className="border-2 placeholder:text-gray-500 rounded-xl border-black w-full p-5 mb-5 text-black " placeholder="Add Todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button type="submit" className="bg-blue-500 text-white py-3 px-8 rounded-lg mb-5">ADD</button>
        </form>
        <div className="todo-show-area">
          <ul>
            {todoList.map((singleTodo, index) => {
              return (<li key={index} className="bg-black mb-5 flex justify-between text-white py-5 rounded-lg text-3xl px-5">{singleTodo.todoName}{""} <span onClick={() => deleteTodo(singleTodo.todoName)} className="text-red-600 text-3xl cursor-pointer ">x</span></li>)
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
