
// import { useState, useEffect } from "react";
// import { TodoProvider } from "./contexts";
// import "./App.css";
// import TodoForm from "./components/TodoForm";
// import TodoItem from "./components/TodoItem";

// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (todo) => {
//     setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
//   };

//   const updateTodo = (id, todo) => {
//     setTodos((prev) =>
//       prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos((prev) => prev.filter((todo) => todo.id !== id));
//   };

//   const toggleComplete = (id) => {
//     //console.log(id);
//     setTodos((prev) =>
//       prev.map((prevTodo) =>
//         prevTodo.id === id  ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
//       )
//     );
//   };

//   useEffect(() => {
//     const todos = JSON.parse(localStorage.getItem("todos"));

//     if (todos && todos.length > 0) {
//       setTodos(todos);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   return (
//     <TodoProvider
//       value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
//     >
//       <div className="bg-[#172842] min-h-screen py-8">
//         <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//           <h1 className="text-2xl font-bold text-center mb-8 mt-2">
//             Manage Your Todos
//           </h1>
//           <div className="mb-4">
//             {/* Todo form goes here */}
//             <TodoForm />
//           </div>
//           <div className="flex flex-wrap gap-y-3">
//             {/*Loop and Add TodoItem here */}
//             {todos.map((todo) => (
//               <div key={todo.id} className="w-full">
//                 <TodoItem todo={todo} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </TodoProvider>
//   );
// }

// export default App;

//*********different styling*********** */

import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#F7F7F7] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-4 py-3 bg-white">
          <h1 className="text-4xl font-bold text-center mb-8 mt-2 text-[#333333]">
            📝 Manage Your Todos 📝
          </h1>
          <div className="mb-6">
            <TodoForm
              inputClassName="w-full p-3 border rounded focus:outline-none focus:border-[#666666] text-[#333333] placeholder-[#666666] transition duration-300 bg-gray-100"
              buttonClassName="w-full bg-[#666666] text-white py-3 rounded hover:bg-[#333333] focus:outline-none focus:bg-[#333333] transition duration-300"
            />
          </div>
          <div className="flex flex-wrap gap-y-4">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="w-full p-4 bg-white rounded-md shadow-md transition duration-300 transform hover:scale-105"
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
