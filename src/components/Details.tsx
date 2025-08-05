import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Result } from "../types/Articles";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Result>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nel caricamento articolo");
        }
      })
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
      <Container className="pt-5">
        <Row className="text-center justify-content-center mt-5">
          <h1 className="title mb-5">Explore & Check out the article</h1>
          <hr className="mb-5"/>
          {isLoading && (
            <>
              {" "}
              <Col xs={12}>
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />{" "}
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />
                <Spinner animation="grow" size="sm" />
              </Col>
            </>
          )}
          {article && (
            <>
              <Col xs={4}>
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="fixed-img2 card-shadow "
                />
              </Col>
              <Col xs={4} className="d-flex flex-column justify-content-between text-start">
                <h2 className="text">{article.title}</h2>
                <p>{article.summary}</p>
                <p className="text-muted">{new Date(article.published_at).toLocaleString().slice(0,10)}</p>
                <p className="text">{article.news_site}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <Button className="border-0 bg-dark">Browse article</Button>
                </a>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};
export default Details;
