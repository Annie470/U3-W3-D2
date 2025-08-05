import { Col, Card } from "react-bootstrap";
import { Result } from "../types/Articles";

interface ArtProps {
  art: Result;
}

const Art= ({ art }: ArtProps)=> {
    return(
        <>
          <Col xs={6} md={3} key={art.id} className="mb-4 d-flex">
                  <Card className="h-100 d-flex flex-column card-shadow">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="text fs-6">{art.title}</Card.Title>
                      <Card.Text className="flex-grow-1">
                        {" "}
                        {art.summary.length > 150
                          ? `${art.summary.slice(0, 150)}...`
                          : art.summary}
                      </Card.Text>
                       <Card.Img
                      variant="top"
                      src={art.image_url}
                      className="fixed-img"
                    />
                      <Card.Text className="text-end text-muted small mt-2">
                        {new Date(art.published_at).toLocaleString().slice(0,10)}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
        </>
    )
}
export default Art