import { useLocaleContext } from "../ApiData";

export default function Taf(){
    const [resultApi] = useLocaleContext()

    return(
        <div>
            <p>Hi from Taf component</p>
            <p>{resultApi.station}</p>
        </div>

    )
}