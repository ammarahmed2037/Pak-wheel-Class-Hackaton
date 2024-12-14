import Image from "next/image";
import Link from "next/link";

export default function New() {
  return (
    <div>
        <h1 className="font-bold text-center text-pink-300 m-2 p-1 text-6xl">Featured New Cars</h1>
        
        <div className="flex flex-row gap-6 m-2">
            <div className="text-center font-bold text-orange-600">
                <Link href="/alto">SUZUKI ALTO</Link>&nbsp;&nbsp;
                <Image src="/alto.png" alt="alto image" width={300} height={500}/>
                
            </div>

            <div className="text-center font-bold text-orange-600">
                <Link href="/corolla">TOYATA COROLLA</Link>&nbsp;&nbsp;
                <Image src="/corolla.jpg" alt="corolla image" width={300} height={500}/>
                
            </div>
            <div className="text-center font-bold text-orange-600">
                <Link href="/liana">SUZUKI LIANA</Link>&nbsp;&nbsp;
                <Image src="/liana.jpg" alt="liana image" width={300} height={500}/>
                
            </div>
            <div className="text-center font-bold text-orange-600">
            <Link href="/prado">TOYATA PRADO</Link>&nbsp;&nbsp;
            <Image src="/prado.jpg" alt="prado image" width={300} height={500}/>
            
            </div>
        </div>    

                <div className="flex flex-row gap-6 m-2">
                    <div className="text-center font-bold text-orange-600">
                    <Link href="/city">HONDA CITY</Link>&nbsp;&nbsp;
                    <Image src="/city.jpg" alt="city image" width={300} height={500}/>
                    
                    </div>

                    <div className="text-center font-bold text-orange-600">
                    <Link href="/sport">SPORTS CAR</Link>&nbsp;&nbsp;
                    <Image src="/sports.jpg" alt="sport image" width={300} height={500}/>
                    
                    </div>

                    <div className="text-center font-bold text-orange-600">
                    <Link href="cultus/">SUZUKI CULTUS</Link>&nbsp;&nbsp;
                    <Image src="/cultus.jpg" alt="prado image" width={300} height={500}/>
                    
                    </div>

                    <div className="text-center font-bold text-orange-600">
                    <Link href="/vigo">TOYATA VIGO</Link>&nbsp;&nbsp;
                    <Image src="/vigo.jpg" alt="vigo image" width={300} height={500}/>
                    
                    </div>

                </div>      
        
    </div>
  );
}

