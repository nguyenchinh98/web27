const getUsers = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
};

// const renderUserList = async () => {
//     try {
//         const {data} = await getUsers()
//         const html = data.map((user) => {
//             return `
//             <div class="user">
//             <div class="user-name">${user.name}</div>
//             <div class="user-email">${user.email}Ư</div>
//             <div class="user-phone">${user.phone}</div>
//             </div>
//             `;
//         }).join("");
//         document.querySelector(".user-list").innerHTML = html
//     }
//     catch (err){
//         console.log(err)
//     }
// };
// renderUserList()


const createUserCard = ({name, email, phone}) => {
    const userCard = document.createElement("div")
    userCard.classList.add("user")

    const userName = document.createElement("div")
    userName.classList.add("user-name")
    userName.textContent = name;

    const userEmail = document.createElement("div")
    userEmail.classList.add("user-email");
    userEmail.textContent = email;

    const userPhone = document.createElement("div")
    userPhone.classList.add("user-phone")
    userPhone.textContent = phone;

    userCard.append(userName, userEmail, userPhone);

    return userCard;
}

const renderUserList = async () => {
  try {
    const { data } = await getUsers();
    const users = data.map(createUserCard);
    document.querySelector(".user-list").append(...users);
  } catch (err) {
    console.log(err);
  }
};

renderUserList()