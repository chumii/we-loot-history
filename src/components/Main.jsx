import './App.css';
import { Link } from "react-router-dom"
import Gallery from './Gallery';
import Nav from './Nav';


//package.json "homepage": "https://chumii.github.io/we-loot-history",


function Main() {


    return (
        <div>
            <div className="title">
                <Nav />
            </div>


            <div className="content">
                <Gallery />
            </div>
        </div>
    );
}

export default Main;


