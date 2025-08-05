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
        <Row >
          {isLoading ? (
            <> <Col className="text-center" xs={12}><Spinner animation="grow" size="sm" />
      <Spinner animation="grow" /> <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" /><Spinner animation="grow" size="sm" /></Col></>
          ) : (
            <>
              {articles?.results.map((art) => (
              <Art art={art} key={art.id}/>
              ))}
            </>
          )}
        </Row>
      </Container>
    </>
  );
};
export default Main;
