import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocReference = await createUserDocumentFromAuth(user);
    console.log(user);
  };
  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={logGoogleUser}>Sign in With Google</button>
    </div>
  );
};

export default SignIn;
