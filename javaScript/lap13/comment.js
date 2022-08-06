const getComment = () => {
  return axios.get("https://jsonplaceholder.typicode.com/comments");
};

const renderUserComment = async () => {
  try {
    const { data } = await getComment();
    const html = data
      .map((users) => {
        return `
            <tr>
                <td>${users.id}</td>
                <td>${users.name}</td>
                <td>${users.email}</td>
                <td>${users.body}</td>
            </tr>
        `;
      })
      .join("");
    document.querySelector(".t-body").innerHTML = html;
  } catch (err) {
    console.log(err);
  }
};
renderUserComment();
