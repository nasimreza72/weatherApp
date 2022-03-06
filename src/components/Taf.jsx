import { useLocaleContext } from "../ApiData.jsx";

export default function Taf(){
    const [resultTaf] = useLocaleContext()

    return(
        <div className="taf">
            <p>{resultTaf}</p>
        </div>

    )
}