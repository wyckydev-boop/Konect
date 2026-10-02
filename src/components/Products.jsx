export default function Products(){
    return(
        <>
        <h1 className="text-center text-white text-2xl font-bold">Featured Products</h1>
        <section className="flex justify-evenly gap-4 p-8">
            <div className="flex flex-col items-center border-2 border-solid border-sky-200 rounded-sm p-6">
                <img src="/dataSyst.png" 
                alt="data management"
                 className="mx-auto h-40 w-auto object-cover rounded-[6px] border-2 border-solid border-transparent"
                />
                <h3 className="mt-4 text-white  font-bold text-center">Data Management Tool</h3>
                <p className="mt-2 text-white text-center">Our application comes with an integated data management tool that efficiently helps businesses save costs with data managed organised in one place.</p>
            </div>
            <div className="flex flex-col items-center border-2 border-solid border-sky-200 rounded-sm p-6">
                <img src="/growT.jpg" 
                alt="growth tracker"
                className="mx-auto h-40 w-auto object-cover rounded-[6px] border-2 border-solid border-transparent"
                />
                <h3 className="mt-4 text-white  font-bold text-center">Growth Tacker</h3>
                <p className="mt-2 text-white text-center">At just a click of a button, monitor your business progess and growth. Our software does all the heavy lifting for you by interpreting and presenting your business data in the most simplest way.</p>
            </div>
            <div className="flex flex-col items-center border-2 border-solid border-sky-200 rounded-sm p-6">
                <img src="/wirelessPayment.webp" 
                alt=" wireless payment" 
                 className="mx-auto h-40 w-auto object-cover rounded-[6px] border-2 border-solid border-transparent"
                />
                <h3 className="mt-4 text-white font-bold text-center">Wireless Payment</h3> 
                <p className="mt-2 text-white text-center">Our system supports cashless payment methods including credit/debit cards and google pay which your customers can enjoy.</p>
            </div>
        </section>
        </>
    );
}