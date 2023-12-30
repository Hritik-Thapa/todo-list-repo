import "./App.css";
import ListUI from "./list/listUI";
import Add from "./add/add";
import { Data } from "./data";
import { useContext, useReducer, useState } from "react";
import Theme from "./context/themeContext";
import DispatchContext from "./context/dispatchContext";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, Data.list.incomplete);
  const [themeButton, setThemeButton] = useState("Dark");
  const [theme, setTheme] = useState(useContext(Theme));
  

  function handleThemeChange() {
    if (theme === "dark") {
      setTheme("light");
      setThemeButton("Light");
    } else {
      setTheme("dark");
      setThemeButton("Dark");
    }
  }

  function elementSwap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  function taskReducer(tasks, action) {
    let index;
    let newTasks;
    switch (action.type) {
      case "ADD":
        return [...tasks, { ...action.payload, id: tasks.length + 1 }];
      case "DELETE":
        return tasks.filter((task) => task.id !== action.payload);
      case "UP":
        index = tasks.findIndex((task) => task.id === action.payload);
        newTasks = [...tasks];
        if (index !== 0) {
          elementSwap(newTasks, index, index - 1);
          return [...newTasks];
        } else return newTasks;
      case "DOWN":
        index = tasks.findIndex((task) => task.id === action.payload);
        newTasks = [...tasks];
        if (index !== tasks.length - 1) {
          elementSwap(newTasks, index, index + 1);
          return [...newTasks];
        } else return newTasks;
      default:
        return tasks;
    }
  }



  return (
    <Theme.Provider value={theme}>
      <DispatchContext.Provider value={dispatch}>
      <div className={`App ${theme}`}>
        <button onClick={handleThemeChange}>{themeButton}</button>

        <h1 className="title">To Do App</h1>

        <p className="complete_counter">
          <b>Completed:</b> {Data.completed}/{Data.total}
        </p>

        {tasks.map((element) => (
          <ListUI task={element}/>
        ))}

        <Add addTask={dispatch} />
      </div>
      </DispatchContext.Provider>
    </Theme.Provider>
  );
}

export default App;
