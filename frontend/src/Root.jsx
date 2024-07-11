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
                <Row className="h-25">
                    <BookShopNav/>
                </Row>
                <Row className="h-50 mh-50">
                    <Outlet style={{height : "100%", minHeight:"100%" }}/>
                </Row>
                <Row>
                    <BookShopFooter/>
                </Row>
            </Container>
        </>
    );
}