
const App = () => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"))
    const [job, setJob] = React.useState("")
    const [jobs, setJobs] = React.useState(storageJobs);
    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem("jobs", jsonJobs)
            return newJobs
        })
        setJob("")
    }
    const deleteTodo = (index) => {
        alert(index)
        const newList = list;
        newList.splice(index, 1)
        setJobs([...newList])
    }
   
    return (
        <div className="container">
            <h1 className="">Todo List</h1>
            <form action="">
                <div className="form-job">
                    <input
                        type="text"
                        placeholder="What do you want to do?"
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                        className="input-job"
                    />
                    <button className="create-job" onClick={(e) => {
                        e.preventDefault();
                        handleSubmit(e)
                    }}>Create</button>
                </div>

                {jobs.map((job, index) => (
                    <div key={index} className="todo-item">
                        <input type="checkbox" />       
                        <p> {job} </p>
                        <button className="btn-delete">
                            <i className="bi bi-x-circle"></i>
                        </button>
                    </div>
                ))}
            </form>
            <div className="todo-bottom">
                <div className="count-job">You have {} pending task</div>
                <button className="btn-clearAll">Clear All</button>
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
