// export const useGetuserInfo = () => {
//   const { name, profilePhoto, userID, isAuth } = JSON.parse(
//     localStorage.getItem("auth") || {}
//   );

//   return { name, profilePhoto, userID, isAuth };
// };
export const useGetuserInfo = () => {
  const authData = localStorage.getItem("auth");
  const { name, profilePhoto, userID, isAuth } = authData
    ? JSON.parse(authData)
    : {};

  return { name, profilePhoto, userID, isAuth };
};
