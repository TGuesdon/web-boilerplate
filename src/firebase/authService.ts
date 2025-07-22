import type { User } from "firebase/auth";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { firebaseAuth } from "./baseConfig";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    return signInWithPopup(firebaseAuth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // console.log(credential);
            // const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user.displayName);
            return user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        })
        .catch((error) => {
            console.log(error);
            throw error;
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
};

export const signOutUser = () => {
    return signOut(firebaseAuth);
};

export const getCurrentUser = (): User | null => {
    return firebaseAuth.currentUser;
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
    return onAuthStateChanged(firebaseAuth, callback);
};
