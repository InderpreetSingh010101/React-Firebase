import { useEffect, useState } from "react";
import { firestore } from "./firebase";
import "./style_.css";
import { auth } from "./firebase";
import { Redirect } from "react-router-dom";
import "./style_.css";
let Input_=(props)=>{


    
    return(<div>
        <input placeholder="Enter Your Blog !!"
    type="text"
    onKeyDown={(e)=>{
      if(e.code === "Enter"){
        let post = e.currentTarget.value;
        firestore.collection("posts").add({ Body : post})
        e.currentTarget.value="";
      }
    }
    }>
    </input>

    <h1>Press Enter to Add </h1>
    <button onClick={() => {
              auth.signOut();
            }} class ="logoutBtn">Logout</button>
            {props.userID ? "":(
        <Redirect to="/login" />
      )}
    
    </div>
    
    );

}
export default Input_;