const passwordValidHandler = (password: string): boolean => {
  if (password.length > 8) return true;
  return false;
};
export default passwordValidHandler;
