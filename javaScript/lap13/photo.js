const getPhotos = () => {
    return axios.get("https://jsonplaceholder.typicode.com/photos");
}
const renderUserPhotos = async () => {
    try {
        const {data} = await getPhotos();
        const html = data.map((users) => {
            return `
             <div class="album-list">
                <img src="${users.thumbnailUrl}" alt="">
                <div class="title">${users.title}</div>
            </div>
            `;
        }).join("")
        document.querySelector(".albums").innerHTML = html

    }

    catch (err) {
        console.log(err)
    }

}
renderUserPhotos()