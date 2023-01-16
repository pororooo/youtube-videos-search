import Search from "./Search";
import '../components/style.css'
import Card from "./Card";



const Main=()=>{
    return(
        <div className="main">
            <Search/>
            <div className="container">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}
export default Main;