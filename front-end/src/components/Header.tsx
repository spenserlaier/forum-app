import {Link} from "react-router-dom";
import store from "../store/store";
import userSlice from "../reducers/userSlice";
import { Button } from "@mui/material";
const Header = () => {
    const logOutUser = () => {
        if (store.getState().user.loggedIn === true) {
            console.log("logging you out, broh");
            store.dispatch(userSlice.actions.setLoginFalse());
        }
        else{
            console.log("nothing's here to log out, broh");
        }
    }

    return (
        <div>
            <nav>
                <Button><Link to="/">this will be a link to home</Link></Button>
                <Button> <Link to="/login">this will be a link to login</Link></Button>
                <Button onClick = {() => logOutUser()}> this will be a link to logout</Button>
                <Button> <Link to= "/profile">this button will lead to the user's profile</Link> </Button>
                <Button> <Link to="/createPost">this button will create a post</Link> </Button>
            </nav>


            
        </div>

        
    )
}
export default Header;