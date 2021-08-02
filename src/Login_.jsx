import { Redirect } from "react-router-dom";
import { auth, signInWithFacebook, signInWithGithub, signInWithGoogle } from "./firebase";
import { useEffect } from "react";
let Login_ =(props)=>{

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
          
          if (user) {
            let {  email } = user;
            
    
            props.handleUserid({   email });
          } else {
            props.handleUserid(user);
          }
        });
      },[]);
     
    return(
        <div>
           {props.userID ? <Redirect to="/home" /> : ""}
            <h1>Login with from any of these accounts</h1>
            <button
            onClick ={signInWithGoogle}
            type="submit">Sign in with Google</button>
            <button
            onClick ={signInWithFacebook}
            type="submit">Sign in with Facebook</button>
            <button
            onClick ={signInWithGithub}
            type="submit">Sign in with Github</button>
            
        </div>
    );

};
export default Login_;