import Header from "./Header";
import Footer from "./Footer";
const DefaultLayout = (props: any) => {
    
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
        
    )
}
export default DefaultLayout;