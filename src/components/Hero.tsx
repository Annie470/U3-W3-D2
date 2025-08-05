import { Col, Row, Container } from "react-bootstrap"
const Hero = ()=> {
    return(
        <>
        <Container className="py-4 text-center">
            <Row><Col xs={12}>
            <h1 className="title">News Across the Void</h1></Col></Row>
            <hr />
        </Container>
        </>
    )
}
export default Hero