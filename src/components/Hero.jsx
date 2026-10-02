import { useNavigate } from "react-router-dom";
export default function Hero(){
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/products");
    };
    return(
        <section className="grid grid-cols-2 gap-8">
             <div className="text-center p-20 flex flex-col items-center">
            <h1 className="text-white font-extrabold text-3xl/8">Welcome to <span className="text-sky-300">Konect</span></h1>
            <p className="text-white font-normal text-lg/7">Konect is an all in one business innovative tool that smoothens operations and helps businesses grow through its technological sophistication.</p>
           <br />
            <button onClick={handleClick} type="submit" className="text-white border-cyan-200 border-solid border-2 rounded-lg p-1 hover:border-transparent hover:bg-white hover:text-blue-600 text-center">Go to Products</button>
        </div>
        <div className="p-">
            <img src= "/heroPic.jpg" 
            alt="Hero picture"
            className="mx-auto h-80 w-auto object-cover rounded-[8px] border-2 border-solid border-transparent"/>
        </div>
        </section>
    );
}