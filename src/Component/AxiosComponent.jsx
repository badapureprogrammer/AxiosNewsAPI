import axios from "axios";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";


const AxiosComponent = () => {

  const [news, setNews] = useState([]);

  const newsData = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=7df864ed35d44bb39cd605cb8cc05d8a")
      .then((response) => {
        // console.log(response.data.articles);
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-4">
            <Button onClick={newsData}>Load News</Button>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="row">
          {news.map((data) => {
            console.log(data);
            return (
              <div className="col-4 my-4">
                <Card style={{ width: "22rem" }}>
                  <Card.Img variant="top" src={data.urlToImage} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "20px" }}>{data.title}</Card.Title>
                    <Card.Text style={{ fontSize: "16px" }}>{data.description}</Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Button>Read More</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default AxiosComponent;
