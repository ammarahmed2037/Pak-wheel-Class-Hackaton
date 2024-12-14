import Link from "next/link"

export default function Form(){
    return(
        <div>
            <h1 className="bg-pink-800 text-center font-extrabold text-5xl">
                ENTER THE DETAILS:
            </h1>

            <form className="mt-10 flex flex-col gap-8 justify-center items-center ">
                <input type="text" placeholder="Enter Your Name" className="text-red-800 rounded-2xl p-2 w-2/5 text-center font-bold placeholder-red-500" />

                <input type="password" placeholder="Enter Your Password" className="text-red-800 rounded-2xl p-2 w-2/5 text-center font-bold placeholder-red-500"/>

                <input type="number" placeholder="Enter Your Card Number" className="text-red-800 rounded-2xl p-2 w-2/5 text-center font-bold placeholder-red-500"/>

                <input type="text" placeholder="Enter Your Address" className="text-red-800 rounded-2xl p-2 w-2/5 text-center font-bold placeholder-red-500"/>

               <Link href="/thanks">
                    <button className="rounded-lg bg-purple-700 text-white py-4 px-5 my-3">
                        Place Your Order
                    </button>
                </Link>&nbsp;&nbsp;
                
            </form>
        </div>
    )
}