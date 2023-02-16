import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


export default function Enter() {
    return (
        <div>

            <NavLink to={"/donor"}>
                <Card
                    bg={"success".toLowerCase()}
                    key={"success"}
                    text={"success".toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2">
                    <Card.Title>
                        DONOR
                    </Card.Title>
                </Card>
            </NavLink>
            <NavLink to={"/checker/0"} style={{textDecoration: 'none'}}>
                <Card
                    bg={"info".toLowerCase()}
                    key={"info"}
                    text={"info".toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2">
                    <Card.Title>
                        CHECKER
                    </Card.Title>
                </Card>
            </NavLink>
        </div>
    )
}