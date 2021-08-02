import { useEffect, useState } from "react";
import { firestore } from "./firebase";
import "./style_.css";
import { auth } from "./firebase";
import { Redirect } from "react-router-dom";
import "./style_.css";

let View_=(props)=>{
    let [posts,setPosts] = useState([]);
  
    useEffect(()=>{
      let f = async ()=>{
        await firestore.collection("posts").onSnapshot((querySnapshot)=>{
         let tempArr = [];
         querySnapshot.forEach( (doc)=>{
          tempArr.push({
            id:doc.id,
            data:doc.data(),
        });
 
        console.log(tempArr);
         
         });
         setPosts(tempArr);
        });
      };
     f();
 
    },[]);
 



    return(
        <div>
             <button onClick={() => {
              auth.signOut();
            }} class ="logoutBtn">Logout</button>
            {props.userID ? "":(
        <Redirect to="/login" />
      )}
        <ul>
      {posts.map((el)=>(
        <li key={el.id}>{el.data.Body}</li>
      ))}
    </ul>
    </div>
    );
};
export default View_;