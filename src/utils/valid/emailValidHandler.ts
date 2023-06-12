const emailValidHandler = (email: string): boolean => {
  if (email.includes('@')) return true;
  return false;
};
export default emailValidHandler;
