import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/defaultLayout.module.css"
const DefaultLayout = (props: any) => {
    
    return (
        <>
            <div >
                <div className = {styles.header} >
                    <Header/>
                </div>
                    <div className = {styles.default}>
                        {props.children}
                    </div>
                <div className = {styles.footer}>
                    <Footer />
                </div>
            </div>
        </>
        
    )
}
export default DefaultLayout;