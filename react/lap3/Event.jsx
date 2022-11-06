const HandlingEvent = () => {
   const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
   }
   const HandleOnchange = (e) => {
    console.log(e.target.value)
   }
    // e.preDefaultEvent();
    return(
        <div>
            <form action="" onChange={HandleOnchange} onSubmit={HandleSubmit}>
                <input type="text" />
                <button> Submit</button>
            </form>
            <App/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("#app"))
root.render(<HandlingEvent/>)