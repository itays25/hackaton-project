import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


export default function Enter() {
    return (
        <div className="h-100 w-100 d-flex justify-content-center flex-column align-content-around ">

            <NavLink to={"/donor"} style={{ textDecoration: 'none' }}>
                <Card
                    bg={"primary".toLowerCase()}
                    key={"primary"}
                    text={"primary".toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2 w-75 p-5 m-5 rounded-pill">
                    <Card.Title className='fs-2'>
                        DONOR
                    </Card.Title>
                </Card>
            </NavLink>
            <NavLink to={"/checker/0"} style={{ textDecoration: 'none' }}>
                <Card
                    bg={"danger".toLowerCase()}
                    key={"danger"}
                    text={"danger".toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2 w-75 p-5 m-5 rounded-pill">
                    <Card.Title className='fs-2' >
                        CHECKER
                    </Card.Title>
                </Card>
            </NavLink>
        </div>
    )
}