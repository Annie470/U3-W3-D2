import { Container, Row } from "react-bootstrap"
const CFooter =()=> {
    return(
        <>
        <Container fluid className="bg-dark">
<Row className="text-light text-end p-2">
    <p className="m-0 text"> Void -G <span className="fst-italic">journal</span> &copy; {new Date().getFullYear()}</p>
</Row>
        </Container>
        </>
    )
}
export default CFooter