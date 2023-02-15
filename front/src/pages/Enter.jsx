import { NavLink } from 'react-router-dom';


export default function Enter() {
    return (
        <div>
            <NavLink to={"/donor"} />
            <NavLink to={"/checker"} />
        </div>
    )
}