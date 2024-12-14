import Alto from "../alto/page"
import Corolla from "../corolla/page"
import Prado from "../prado/page"
import Cultus from "../cultus/page"
import City from "../city/page"
import Liana from "../liana/page"
import Vigo from "../vigo/page"
import Sports from "../sport/page"

export default function Details(){
    return(
        <div>
            <Alto/>
            <hr className="border-t-2 border-purple-500 mx-auto w-1/2" />
            <Corolla/>
            <hr className="border-t-2 border-purple-500 mx-auto w-1/2" />
            <Prado/>
            <hr className="border-t-2 border-purple-500 mx-auto w-1/2" />
            <Cultus/>
            <hr className="border-t-2 border-purple-500 mx-auto w-1/2" />
            <City/>
            <hr className="border-t-2 border-purple-500 mx-auto w-1/2" />
            <Liana/>
            <hr className="border-t-2 border-purple-500 mx-auto w-1/2" />
            <Vigo/>
            <hr className="border-t-2 border-purple-500 mx-auto w-1/2" />
            <Sports/>
        </div>
    )
}