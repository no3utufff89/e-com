  export const setUserData = (user:string) => {
    localStorage.setItem('user', user);
  }
  export const getUserData = (user: string) => {
    return localStorage.getItem(user);
  };
  export const deleteUserData = (user:string) => {
    localStorage.removeItem(user);
  };