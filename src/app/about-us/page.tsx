

export default function Page() {


    return ( 
        <div className=" pt-32 px-2  md:px-40"> 
        <div className="flex flex-col md:flex-row md:items-center gap-1">
        <div className="md:rotate-90  uppercase text-amber-700  font-medium">About Us</div>

            <div className=" space-y-3">
                <h1 className=" text-2xl md:text-3xl  font-semibold ">We Are Traz. We Create Unique And Sustainable</h1>
                <h1 className="text-2xl md:text-3xl">Living Spaces, Designed For Sharing</h1>
            </div>
        </div><img src="/about5.ce44f7ef.jpg" className=" mt-10" alt="" /> 
        <div className="grid grid-cols-2">
            <div>
                <p>We are leading architecture firm dedicated to creating visionary designs that transcend expectations. With our team of highly skilled architects and designers, we specialize in crafting.</p>
                <li>Innovative Design Approach</li>
                <li>Innovative Design Approach</li>
                <li>Innovative Design Approach</li>
                <li>Innovative Design Approach</li>
            </div>
            <div></div>
        </div>
        </div>
    )
}