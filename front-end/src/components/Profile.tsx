import DefaultLayout from "./DefaultLayout";
import store from "../store/store";
import {useSelector} from "react-redux";
import { RootState } from "../reducers/rootReducer";
import styles from "../styles/profile.module.css";
const Profile = () => {
    const userLoggedIn = useSelector((state: RootState) => {
        return (state.user.loggedIn);
    });
    const username = useSelector((state: RootState) => {
        return (state.user.username);
    })
    const notLoggedInText = <div>you gotta log in, man</div>
    const loggedInText = <div> your username is: {username}</div>
    return (
        <DefaultLayout>
            <div className = {styles.default}>
                {userLoggedIn? loggedInText : notLoggedInText}
            </div>
        </DefaultLayout>
    )
    
    
}
export default Profile;