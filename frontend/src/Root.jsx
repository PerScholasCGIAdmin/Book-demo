import {Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookShopNav from "./components/BookShopNav.jsx";
import BookShopFooter from "./components/BookShopFooter.jsx";

export default function Root(){
    return(
        <>
            <Container>
                <Row>
                    <BookShopNav/>
                </Row>
                <Row>
                    <Col>
                        <Outlet/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BookShopFooter/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}