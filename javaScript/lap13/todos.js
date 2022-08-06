const getTodos = () =>{
    return axios.get("https://jsonplaceholder.typicode.com/todos");
}
const renderUserTodos = async ()=>{
    try {
        const {data} = await getTodos();
        const html = data.map((users) => {
        return `
            <div class="user-list">
                <div>${users.id}</div>
                <div class="title">${users.title}</div>
                <button>X</button>
            </div>
        `;
    }).join("")
    document.querySelector(".container").innerHTML = html;
    }
    catch (err){
        console.log(err)
    }

}
renderUserTodos();