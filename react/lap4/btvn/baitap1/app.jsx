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

// // theme.js
// import React from 'react';
// const ThemeContext = React.createContext('light');
// export default ThemeContext;



// const Sample = () => (
// //   <Theme.Consumer>{(theme) => <div>Theme value: {theme}</div>}</Theme.Consumer>
// );

// DynamicContext.js


// const App = () => {
//   const [width, setWidth] = useState < number > window.innerWidth;
//   useEffect(() => {
//     const handler = () => {
//       setWidth(window.innerWidth);
//     };
//     window.addEventListener("resize", handler);
//     return () => {
//       window.removeEventListener("resize", handler);
//     };
//   }, []);
//   return <>{width >= 1024 && <Sidebar />}</>;
// };

// import { useState, useEffect } from "react";
// export const useWindowSize = () => {
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });
//   useEffect(() => {
//     const handler = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };
//     window.addEventListener("resize", handler);
//     return () => {
//       window.removeEventListener("resize", handler);
//     };
//   }, []);
//   return windowSize;
// };

import { useWindowSize } from "hooks";

const App = () => {
  const { width, height } = useWindowSize();

  return <>{width >= 1024 && <Sidebar />}</>;
};