import {Link} from "react-router-dom";
import store from "../store/store";
import userSlice from "../reducers/userSlice";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import styles from "../styles/header.module.css";
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
        <Link to= "/">
            Log Out 
        </Link>:
        <Link to ="/login">
        Log In
        </Link>
        }
    </Button>

    return (
        <div>
            <nav>
                <Button><Link to="/">Home</Link></Button>
                {userLoggedIn && <Button> <Link to= "/profile">Profile</Link> </Button>}
                {userLoggedIn &&<Button> <Link to="/createPost">Create Post</Link> </Button>}
                {accountButton}
            </nav>
        </div>

        
    )
}
export default Header;