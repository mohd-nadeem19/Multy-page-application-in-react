// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// // tailwind.config.js
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/*/.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Root HTML file ka path
    "./src/**/*.{js,jsx,ts,tsx}", // Src folder ke andar ke saare React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


