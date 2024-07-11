import {Button, Card} from "react-bootstrap";

// eslint-disable-next-line react/prop-types
export default function BookShopCard({name, desc, setGenreOption}) {
    //example of our parent passing us a way to update its state!
    function handleClick() {
        setGenreOption(name)
    }

    return(
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Button onClick={handleClick}>Pick Me!</Button>
                </Card.Body>
            </Card>
        </>
    );
}
