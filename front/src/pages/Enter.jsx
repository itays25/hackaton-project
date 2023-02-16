import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


export default function Enter() {
    return (
        <div className="h-100 w-100 d-flex justify-content-center flex-column align-content-around ">

            <NavLink to={"/donor"} style={{ textDecoration: 'none' }}>
                <Card
                    bg={"warning".toLowerCase()}
                    key={"warning"}
                    text={"warning".toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2 w-75 p-5 m-5">
                    <Card.Title>
                        DONOR
                    </Card.Title>
                </Card>
            </NavLink>
            <NavLink to={"/checker/0"} style={{ textDecoration: 'none' }}>
                <Card
                    bg={"info".toLowerCase()}
                    key={"info"}
                    text={"info".toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2 w-75 p-5 m-5">
                    <Card.Title>
                        CHECKER
                    </Card.Title>
                </Card>
            </NavLink>
        </div>
    )
}