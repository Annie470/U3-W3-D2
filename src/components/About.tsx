import { Container, Row, Col } from "react-bootstrap"
const About =()=> {
    return (
        <>
        <Container className=""><Row className="text-center mt-4 justify-content-center"><Col xs={10}><h1 className="title mb-4">About our site...</h1>
        <hr/>
        <p className="fs-4 d-block mt-5"><span className="text">Void -G</span> is a web platform where you can explore the latest news and updates about space exploration, astronomy, and space technologies. Stay informed with articles covering <span className="text">missions, scientific discoveries, and innovations</span> from across the universe.</p></Col></Row></Container>
        
        </>
    )
}
export default About