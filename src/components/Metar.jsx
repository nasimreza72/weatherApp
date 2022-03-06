import { useLocaleContext } from "../ApiData";

export default function Metar(){
    const [resultMetar] = useLocaleContext()

    return(
        <div className="metar">
            <p>{resultMetar}</p>
        </div>
    )
}