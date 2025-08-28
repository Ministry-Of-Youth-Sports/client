export const removeTokenFromCookies = () => {
  if (typeof document !== "undefined") {
    document.cookie = "token=; path=/;";
  }
};
