// import { ContextExclusionPlugin } from "webpack";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGooogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={logGoogleUser}>Sign in With Google</button>
      <button onClick={signInWithGooogleRedirect}>
        Sign in With Google redirect
      </button>
    </div>
  );
};

export default SignIn;
