import heroPic from "../assets/heroPic.jpg"
export default function Hero(){
    return(
        <section className="grid grid-cols-2 gap-8">
             <div className="text-center p-20">
            <h1 className="text-white font-extrabold text-3xl/8">Welcome to <span className="text-sky-300">Konect</span></h1>
            <p className="text-white font-normal text-lg/7">Konect is a technological hub that brings innovation to your business and helps you connect with customers seamlessly.</p>
           <br />
            <button type="submit" className="text-white border-cyan-200 border-solid border-2 rounded-lg p-1 hover:border-transparent hover:bg-white hover:text-blue-600 text-center">Get Started</button>
        </div>
        <div className="flex flex-1 pt-10 pr-20 pb-20 boorder-none rounded-2xl">
            <img src={heroPic} 
            alt="Hero picture"
            className="aspect-3/2"/>
        </div>
        </section>
    );
}