import "./style_.css";
import { auth } from "./firebase";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

let Home_ = (props)=>{
    console.log(props.userID)
    return(
    <div><h1> Welcome</h1>
          
            <button onClick={() => {
              auth.signOut();
            }} class ="logoutBtn">Logout</button>
            {props.userID ? "":(
        <Redirect to="/login" />
      )}

  <Link class="viewBlog" aria-current="page" to="/view">
                 Click Here to View Yr Blogs
                </Link>

                <Link class="input_" aria-current="page" to="/input">
                 Click Here to Add New Blogs
                </Link>
    </div>
    );
}

export default Home_;