const reviews = [
    {
        id: "f78ff93a2f6723ba714b938d",
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/971.jpg",
        name: "Jorge Farrell",
        job: "Investor Marketing Producer",
        content:
            "Dignissimos libero magnam unde sapiente quaerat vel accusantium reprehenderit. Quam excepturi omnis. Non inventore facilis ipsum iure omnis quis sunt.",
    },
    {
        id: "b39e485adf7eac8ef7ccdb7a",
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/784.jpg",
        name: "Mrs. Rickey Ritchie",
        job: "Lead Functionality Consultant",
        content:
            "Amet blanditiis quis similique sint accusamus illum magni. Aperiam dolore earum. Odit natus quod cupiditate nam nihil architecto. Occaecati corrupti ipsam praesentium laborum ipsam deleniti sint cum. Optio ducimus cum corrupti dolores debitis.",
    },
    {
        id: "7c5bca0a82a0fb621acf9dc1",
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/432.jpg",
        name: "Hugh Smith",
        job: "Central Configuration Designer",
        content:
            "Repudiandae vitae laboriosam. Eius hic magni ex quam molestiae magnam minus. Hic beatae corporis optio distinctio eveniet provident temporibus aliquid. Pariatur alias dolores quam nobis quidem. Voluptatem reiciendis magni quos neque cum iure itaque quidem. Alias molestias id reiciendis dolorem eius.",
    },
    {
        id: "42ffffe92ecb90376f7b1541",
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/802.jpg",
        name: "Arnold Lind PhD",
        job: "Dynamic Web Liaison",
        content:
            "Accusantium consectetur unde accusantium asperiores nisi repellat ea delectus. Numquam atque libero sunt. Excepturi error enim dolore quos accusantium unde.",
    },
    {
        id: "1d1570fa3d0dfeb8fbe90a7f",
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/927.jpg",
        name: "Brandy Stroman",
        job: "Direct Marketing Producer",
        content:
            "Exercitationem quia ad error dicta provident expedita neque eum reprehenderit. Numquam illum minus neque. Sit quod officiis. Tenetur nobis tempore nostrum.",
    },
    {
        id: "fbe30443cc6aecdcf21dd0be",
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/607.jpg",
        name: "Anna Rogahn MD",
        job: "Central Program Director",
        content:
            "Dolore saepe cum repudiandae mollitia quia aspernatur. Vitae vel illo amet quae quis placeat optio ullam perspiciatis. Aliquid exercitationem expedita maiores numquam. Laborum magni id doloremque quibusdam quod quis explicabo beatae.",
    },
]
const ListCard = (() => {
    const [index, setIndex] = React.useState(0)
    const review = reviews[index]
    const increment = () => {
      setIndex(index + 1);
    };
    const decrement = () => {
      setIndex(index - 1);
    };
    return (
        <div>
            <h1>List User</h1>
            <UserCard review={review} next = {increment} prev = {decrement}/> 
        </div>
    )
})


