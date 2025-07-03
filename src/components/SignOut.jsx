const SignOut = ({ signOut}) => {
  try {
    const data = signOut();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
  

export default SignOut;
