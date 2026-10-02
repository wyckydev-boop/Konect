import Logo from "./Logo";
import Navbar from "./Navbar";


export default function Header(){
    return(
        <div className="flex justify-between p-4">
            <Logo/>
            <Navbar/>
            <div>
                 <button type="submit" className="text-white border-cyan-200 border-solid border-2 rounded-lg p-1 hover:border-transparent hover:bg-white hover:text-blue-600">Sign Up</button>
            </div>
           
        </div>
    );
}