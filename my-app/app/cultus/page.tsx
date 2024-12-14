import Image from "next/image";
import Link from "next/link";

export default function Cultus(){
    return(
        <div>
            <div className="flex flex-col justify-center items-center my-2">
                <h1 className="font-extrabold my-2">SUZUKI CULTUS PRICE IN PAKISTAN, IMAGES, REVIEWS & SPECS.</h1>
                <Image src="/cultus.jpg" alt="cultus image" width={300} height={500} />
            </div>

            <div className="flex gap-6 justify-center items-center my-4">
                <button className="bg-blue-500 p-2 rounded-s">Book a Test Drive</button>
                <button className="bg-blue-500 p-2 rounded-s">Request Bank Finance</button>
                <button className="bg-blue-500 p-2 rounded-s">Vsit Place</button>
                <button className="bg-blue-500 p-2 rounded-s">Car Inspection</button>
            </div>

            <div>
                <h1 className="text-center font-extrabold">Vehicle Description</h1>
                <div className="flex gap-6 justify-center items-center my-2">
                    <h1><b>Number Of Doors:</b> 4</h1>
                    <h1><b>Engine:</b> 1600 CC</h1>
                    <h1><b>Condition:</b> 8.5/10</h1>
                    <h1><b>Driven:</b> 9500 km</h1>
                    <h1><b>Suspension Type:</b> Soft Suspension</h1>
                    <h1><b>Number Of Doors:</b> 4</h1>
                </div>
                <div className="flex gap-6 justify-center items-center">
                    <h1><b>Avg:</b> 10 km pr hr</h1>
                    <h1><b>Transmission:</b> Manual</h1>
                    <h1><b>Fuel Type:</b> High Octane</h1>
                </div>

                <h1 className="font-bold text-center text-green-500 my-3">PKR: 9,00,000</h1>

                <Link href="/cardDetails">
                    <div className="flex justify-center items-center my-3">
                        <button className="bg-blue-500 p-2 rounded-s justify-center items-center">Make Payment</button>
                        
                    </div>
                </Link>&nbsp;&nbsp;
                

            </div>

        </div>
    )
}