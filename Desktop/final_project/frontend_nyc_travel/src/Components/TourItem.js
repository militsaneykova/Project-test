import React from "react"
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function TourItem({ tour }) {
  const { _id, tour_name, img_src, description, price} = tour;

  return (
    <Card style={{ width: "600px", margin: "10px", backgroundColor: "beige"}}>
      <Link to={`/home/${_id}`} style={{ color: "black" }}>
        
        {img_src ? (
          <Card.Img style={{ height:'230px', width: '200'}} variant ='top' src={img_src} alt={tour_name} />
        ) : (
          <Card.Img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          /> )}
          <Card.Body>
              <Card.Title>{tour_name}</Card.Title>
                <Card.Text style={{decoration:'None'}}>{description}</Card.Text>
                <Card.Text>Price: {price}</Card.Text>
            <button variant="primary">Learn more</button>
          </Card.Body>
       
      </Link>
    </Card>
  );
}

export default TourItem;