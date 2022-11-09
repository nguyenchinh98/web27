// function App() {
//   const [isLiked, setIsLiked] = React.useState(false);

//   return (
//     <div>
//       <button>{isLiked ? "Liked" : "Like"}</button>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.createRoot(rootElement).render(<App />);


// export const likeApi = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   return {
//     success: true,
//   };
// };

// function App() {
//     const [isLiked, setIsLiked] = React.useState(false);
//     const handleLike = async () => {
//         const response = await likeApi();
//         if (response.success) {
//             setIsLiked(true);
//         }
//     };
//     return (
//         <div>
//       <button onClick={handleLike}>{isLiked ? "Liked" : "Like"}</button>
//     </div>
//   );
// }

// import { likeApi } from "./api";
// function App() {
//   const [isLiked, setIsLiked] = React.useState(false);
//   const [error, setError] = React.useState("");

//   const handleLike = async () => {
//     setIsLiked(true);
//     const response = await likeApi();
//     if (!response.success) {
//       setIsLiked(false);
//       setError("Something went wrong");
//     }
//   };
//   return (
//     <div>
//       <p>{error}</p>
//       <button onClick={handleLike}>{isLiked ? "Liked" : "Like"}</button>
//     </div>
//   );
// }

// theme.js
import React from 'react';
const ThemeContext = React.createContext('light');
export default ThemeContext;