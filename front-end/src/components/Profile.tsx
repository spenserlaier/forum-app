import DefaultLayout from "./DefaultLayout";
import store from "../store/store";
import {useSelector} from "react-redux";
import { RootState } from "../reducers/rootReducer";
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
            {userLoggedIn? loggedInText : notLoggedInText}
        </DefaultLayout>
    )
    
    
}
export default Profile;