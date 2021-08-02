import { useState } from "react";
import Login_ from "./Login_";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home_ from "./Home_";
import View_ from "./View_";
import Input_ from "./Input_";

function App_(){
    let[userID,setuserID] = useState(null);
  //  console.log(userID);
    
  
    return(
        
       <>
       <div>
       {/* <Login_ handleUserid={setuserID} userId={userID}/> */}
       </div>
       <Router>
       <Redirect to="/login" />
           <Switch>
               <Route path = "/login">
                   <Login_ handleUserid={setuserID} userID={userID}/>
               </Route>
               <Route path="/home">
                   <Home_ userID={userID}/>
               </Route>
               <Route path="/view">
                   <View_ userID={userID}/>
               </Route>
               <Route path="/input">
                   <Input_ userID={userID}/>
               </Route>
           </Switch>
       </Router>
       </>
    );
}
export default App_;