import { Container, Row, Spinner, Col} from "react-bootstrap";
import { Articles } from "../types/Articles";
import { useState, useEffect } from "react";
import Art from "./Art"; 

const Main = () => {
  const [articles, setArticles] = useState<Articles | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const endpoint = "https://api.spaceflightnewsapi.net/v4/articles";
  const getArticles = (endpoint: string) => {
    fetch(endpoint)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore recupero articoli");
        }
      })
      .then((data: Articles) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("errore", err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getArticles(endpoint);
  }, []);

  return (
    <>
      <Container>
        <Row>
          {isLoading ? (
            <Col xs={12} md={6}>
              <Spinner animation="border" variant="success" />
            </Col>
          ) : (
            <>
              {articles?.results.map((art) => (
              <Art art={art}/>
              ))}
            </>
          )}
        </Row>
      </Container>
    </>
  );
};
export default Main;
