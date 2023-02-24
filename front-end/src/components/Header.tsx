import {Link} from "react-router-dom";
import store from "../store/store";
import userSlice from "../reducers/userSlice";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
const Header = () => {
    const userLoggedIn = useSelector( (state: RootState) => {
        return state.user.loggedIn;
    })
    const logOutUser = () => {
        if (userLoggedIn === true) {
            console.log("logging you out, broh");
            store.dispatch(userSlice.actions.setLoginFalse());
        }
        else{
            console.log("nothing's here to log out, broh");
        }
    }
    const accountButton = <Button onClick= {userLoggedIn? () => logOutUser(): () => 0}>
        {userLoggedIn?
        "Log out": 
        <Link to ="/login">
        Log in
        </Link>
        }
    </Button>

    return (
        <div>
            <nav>
                <Button><Link to="/">this will be a link to home</Link></Button>
                {userLoggedIn && <Button> <Link to= "/profile">this button will lead to the user's profile</Link> </Button>}
                {userLoggedIn &&<Button> <Link to="/createPost">this button will create a post</Link> </Button>}
                {accountButton}
            </nav>
        </div>

        
    )
}
export default Header;