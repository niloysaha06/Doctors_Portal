import  { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, getIdToken, updateProfile } from "firebase/auth";



initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // Registration User
    const registerUser = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            setAuthError('');
            const newUser ={email, displayName: name};
            
            setUser(newUser);
            // save user to database
            saveUser(email, name, 'POST');
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              
            }).catch((error) => {
              
            });
            history.replace('/');
           
          })
          .catch((error) => {
            setAuthError(error.message);
           
          })
          .finally( () => setIsLoading(false));
    }


    // Login User
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
       .catch((error) => {
        setAuthError(error.message);
       })
       .finally( () => setIsLoading(false));
    }


    // Google SignIn

    const signInWithGoogle = (location, history) => {
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT')
        setAuthError('');
        const destination = location.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        
      }).catch((error) => {
        setAuthError(error.message);
      })
      .finally( () => setIsLoading(false));
    }


    // observer user state
    useEffect( () => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              getIdToken(user)
              .then(idToken => {
                 setToken(idToken);
              })
            } else {
              setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    }, [auth]);

    useEffect( () => {
      fetch(`https://rocky-refuge-36307.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    } , [user.email])


    // Logout user
    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally( () => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
       const user = {email, displayName};
       fetch('https://rocky-refuge-36307.herokuapp.com/users', {
         method: method,
         headers: {
           'content-type': 'application/json'
         },
         body: JSON.stringify(user)
       })
    }



    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    }
};

export default useFirebase;