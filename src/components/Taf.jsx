import { useLocaleContext } from "../ApiData";

export default function Taf(){
    const [resultApi] = useLocaleContext()

    return(
        <div className="taf">
            <p>Hi from Taf component</p>
            <p>{resultApi}</p>
        </div>

    )
}