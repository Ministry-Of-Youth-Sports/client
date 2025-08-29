export function setTokenInCookies(token: string) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 7);

  document.cookie = `token=${token}; expires=${expirationDate.toUTCString()}; path=/; secure; samesite=strict`;
}
