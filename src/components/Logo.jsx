import { Link } from "react-router-dom";
export default function Logo() {
    return(
       <Link to ="/">
         <img src="/logo.png" alt="Company logo"
        className="border-transparent border-solid border-2 rounded-[4px] m-6 h-15 w-auto" />
       </Link>
    );
}