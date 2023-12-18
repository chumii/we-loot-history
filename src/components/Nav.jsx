import './App.css';
import { Link } from "react-router-dom"
// import Gallery from './Gallery';


//package.json "homepage": "https://chumii.github.io/we-loot-history",


function Nav() {


    return (
        <>

            <h1>whatever</h1>
            <div className="nav"><Link to="/">home</Link> | <Link to="/history">loot history</Link></div>

        </>
    );
}

export default Nav;


