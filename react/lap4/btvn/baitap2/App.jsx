
const App = () => {{
    const [currentInput, setCurrentInput] = React.useState("");
    const [jobs, setJobs] = React.useState([]);

    const AddTodo = () => {
         const newJobs = jobs;
         newJobs.unshift({todoItem: currentInput});
         setJobs([...newJobs]);
         setCurrentInput("")
    }
    const deleteTodo = (index) => {
        alert(index)
        const newJobs = jobs;
        newJobs.splice(index, 1);
        setJobs([...jobs]);
    }
    const clearAll = () => {
        setJobs([])
        setCount(0)
    }
    const [count, setCount] = React.useState(0);
    const up = () => {
        setCount(count + 1)
    }
    const down = () => {
        setCount(count - 1)
    }

   
    return (
      <div className="container">
        <h1>Todo List</h1>
        <form action="">
            <div className="form-job">
                <input
                    className="input-job"
                    type="text"
                    onChange={(e) => {setCurrentInput(e.target.value)}}
                    value={currentInput}
                />
                <button 
                    className="create-job"
                    onClick={(e) => {
                        e.preventDefault();
                        AddTodo(e)
                        up(e)
                    }}
                >Create</button>
            </div>
        </form>
        {jobs.map(({todoItem}, index) => {
            return (
              <div className="todo-item" key={index}>
                <input type="checkbox" />
                <p> {todoItem} </p>
                <button className="btn-delete" onClick={() => {
                        deleteTodo(index);
                        down()
                    }}>
                  <i className="bi bi-x-circle"></i>
                </button>
              </div>
            );
        })}
        <div className="todo-bottom">
            <div className="">You have <span>{count}</span> pending task</div>
            <button className="btn-clearAll" onClick={clearAll}>Clear All</button>
        </div>
      </div>
    );
}}
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
