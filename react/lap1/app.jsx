
// const div = (
//   <div>
//     <h1 onClick = {() => console.log("Clicked")}>Hello Chinh </h1>
//     <img
//       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfFS9HROGdxfHEWJ1JQ7RM3sJFQ4YKqMJaPjBQHvA&s"
//       alt="Girl xinh"
//     />
//     <form action="">
//       <label htmlFor="username">Họ Tên</label>
//       <input type="text" placeholder="Họ tên" />
//       <button>Submit</button>
//     </form>

//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloribus veritatis quo repudiandae ex exercitationem inventore animi, ea quos iusto vero excepturi maxime dolores! Nemo est quam impedit! Obcaecati, officiis.</p>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("#app"));
// root.render(div)
//****************************************** */
// function createApp (){
//   const now = new Date();
//   return (
//     <div>
//      <h1 onClick = {() => console.log("Clicked")}>Hello Chinh </h1>
//      <p>Bây giờ là: {now.toLocaleTimeString()}</p>
//      <img
//        src="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfFS9HROGdxfHEWJ1JQ7RM3sJFQ4YKqMJaPjBQHvA&s"
//        alt="Girl xinh"
//      />
//      <form action="">
//        <label htmlFor="username">Họ Tên</label>
//        <input type="text" placeholder="Họ tên" />
//        <button>Submit</button>
//      </form>

//      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloribus veritatis quo repudiandae ex exercitationem inventore animi, ea quos iusto vero excepturi maxime dolores! Nemo est quam impedit! Obcaecati, officiis.</p>
//    </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById("#app"))

// setInterval(function(){
//   return root.render(createApp())
// },)


/** Component - Base
 * 
 */

const reviews = [
  {
    id: "f78ff93a2f6723ba714b938d",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/971.jpg",
    name: "Jorge Farrell",
    job: "Investor Marketing Producer",
    content:
      "Dignissimos libero magnam unde sapiente quaerat vel accusantium reprehenderit. Quam excepturi omnis. Non inventore facilis ipsum iure omnis quis sunt.",
  },
  {
    id: "b39e485adf7eac8ef7ccdb7a",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/784.jpg",
    name: "Mrs. Rickey Ritchie",
    job: "Lead Functionality Consultant",
    content:
      "Amet blanditiis quis similique sint accusamus illum magni. Aperiam dolore earum. Odit natus quod cupiditate nam nihil architecto. Occaecati corrupti ipsam praesentium laborum ipsam deleniti sint cum. Optio ducimus cum corrupti dolores debitis.",
  },
  {
    id: "7c5bca0a82a0fb621acf9dc1",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/432.jpg",
    name: "Hugh Smith",
    job: "Central Configuration Designer",
    content:
      "Repudiandae vitae laboriosam. Eius hic magni ex quam molestiae magnam minus. Hic beatae corporis optio distinctio eveniet provident temporibus aliquid. Pariatur alias dolores quam nobis quidem. Voluptatem reiciendis magni quos neque cum iure itaque quidem. Alias molestias id reiciendis dolorem eius.",
  },
  {
    id: "42ffffe92ecb90376f7b1541",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/802.jpg",
    name: "Arnold Lind PhD",
    job: "Dynamic Web Liaison",
    content:
      "Accusantium consectetur unde accusantium asperiores nisi repellat ea delectus. Numquam atque libero sunt. Excepturi error enim dolore quos accusantium unde.",
  },
  {
    id: "1d1570fa3d0dfeb8fbe90a7f",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/927.jpg",
    name: "Brandy Stroman",
    job: "Direct Marketing Producer",
    content:
      "Exercitationem quia ad error dicta provident expedita neque eum reprehenderit. Numquam illum minus neque. Sit quod officiis. Tenetur nobis tempore nostrum.",
  },
  {
    id: "fbe30443cc6aecdcf21dd0be",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/607.jpg",
    name: "Anna Rogahn MD",
    job: "Central Program Director",
    content:
      "Dolore saepe cum repudiandae mollitia quia aspernatur. Vitae vel illo amet quae quis placeat optio ullam perspiciatis. Aliquid exercitationem expedita maiores numquam. Laborum magni id doloremque quibusdam quod quis explicabo beatae.",
  },
  {
    id: "a353b9c1f8fecbd32b0e1fee",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/173.jpg",
    name: "Rufus Adams",
    job: "Future Functionality Analyst",
    content:
      "Error asperiores quia quaerat quos. Enim optio ducimus eius neque et doloribus exercitationem. Molestias ducimus hic eos accusamus commodi saepe. Rem soluta inventore eum dignissimos dolorem nulla quibusdam recusandae. Ullam quibusdam aperiam labore vero repellendus quia ab.",
  },
  {
    id: "a01b99a200f3e728faa3d8c0",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/296.jpg",
    name: "Dr. Antonia Lynch",
    job: "Product Division Coordinator",
    content:
      "Voluptates aperiam iusto nihil quidem ad exercitationem quo reiciendis facilis. Error deserunt ullam animi hic commodi. Harum molestias rerum ratione voluptatem. Exercitationem quam repellendus eligendi saepe ex quaerat doloremque temporibus. Enim corrupti rem vitae in animi.",
  },
  {
    id: "bd3ed8ffa3f3be5ec7bc6a1c",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/227.jpg",
    name: "Wendy Reilly II",
    job: "Internal Metrics Producer",
    content:
      "Eaque impedit ipsa ratione. Nisi minus doloribus provident soluta. At doloremque distinctio. Facere totam beatae ad optio consectetur ex nostrum harum consequuntur.",
  },
  {
    id: "16e57c53df8280cdce6a7b64",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/379.jpg",
    name: "Crystal Kiehn",
    job: "Corporate Research Technician",
    content:
      "Tempore quos minima accusamus quibusdam veniam quod. Nemo tempore exercitationem fuga nobis. Provident fugit pariatur repellat minima iusto vel natus sunt.",
  },
];
const App = () => {
    const [i, setIndex] = React.useState(0)
}