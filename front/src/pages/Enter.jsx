import { NavLink } from 'react-router-dom';


export default function Enter() {
    return (
        <div>
            <NavLink to={"/donor"}> DONOR</NavLink>
            <br />
            <NavLink to={"/checker/0"}>CHECKER</NavLink>
        </div>
    )
}