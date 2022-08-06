const getPost = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
}

const renderUserPost = async () => {

    try {
       const {data} = await getPost();
       const html = data.map((users) => {
        return `
            <tr>
                <td>${users.id}</td>
                <td>${users.title}</td>
                <td>${users.body}</td>
            </tr>
        `;
       }).join("");
       document.querySelector(".t-body").innerHTML = html;
    }
    catch (err) {
        console.log(err)
    }
}
renderUserPost()

