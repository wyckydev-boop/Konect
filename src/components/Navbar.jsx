import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="text-white text-center flex gap-2">
            <Link to = "/" className="hover:text-pink-300">Home</Link>
            <Link to = "about" className="hover:text-pink-300">About</Link>
            <Link to = "products" className="hover:text-pink-300">Products</Link>
            <Link to = "contact" className="hover:text-pink-300">Contact</Link>
        </nav>
    );
}