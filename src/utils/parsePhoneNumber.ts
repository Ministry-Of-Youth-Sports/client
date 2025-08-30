export const parsePhoneNumber = (phone: string | number) => {
  if (typeof phone === "number") return phone;
  if (typeof phone === "string") {
    const parsed = parseInt(phone);
    return isNaN(parsed) ? 0 : parsed;
  }
  return 0;
};
