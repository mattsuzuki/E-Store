// import { ContextExclusionPlugin } from "webpack";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import Button from "../../components/button/button.component";

import {
  auth,
  signInWithGooglePopup,
  signInWithGooogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Authetication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>sign in page</h1>
      <Button onClick={logGoogleUser}>Sign in With Google</Button>
      <SignUpForm />
    </div>
  );
};

export default Authetication;
