import Image from "next/image"
import Link from "next/link";


export default function Navbar(){
    return(
    
        <nav className="bg-red-300	flex flex-col  w-full">
                <div className="flex ">
                  <h1 className="text-white font-semibold text-start mx-48 w-full ">DOWNLOAD VIA APP</h1>
                      <div className="flex mx-24 text-right gap-2 w-full ">
                        <h1 className="text-red-700 font-semibold ">  اردو </h1>
                        <h1 className="text-white font-semibold"> | Sign In | </h1>
                        <h1 className="text-white font-semibold ">  Sign up</h1>
                      </div>
                </div>
                
                <hr className=" border-gray-700 mx-auto w-[1000px] my-4"/>

                    <div className="flex">
                    
                          <div className=" mx-40 -mt-11  ">
                            <Image src="/pakwheel.png" alt="logo" width={220} height={200} />
                          </div>

                          <div className="text-white text-center gap-8 font-extrabold -mt-2">
                            <Link href="/">HOMEPAGE</Link>&nbsp;&nbsp;
                            <Link href="/newCars">NEW CARS</Link>&nbsp;&nbsp;
                            <Link href="/carDetails">CAR DETAILS</Link>&nbsp;&nbsp;
                            <Link href="/thanks">THANKS</Link>&nbsp;&nbsp;
                          </div>

                          <div>
                            <button className="bg-red-700 -mt-3 font-semibold p-2 mx-32">Post An Add</button>
                          </div>
                    </div>
          </nav>

          
      
    )
}
  