import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Raiden from '../images/raiden.gif';

export default function MovieCard(props){
	const { name, text, imgalt } = props.moviecard;
	return(
			<>
				<Card id="Card">
				  <img variant="top" src={Raiden} className="Raiden" alt={imgalt}/>
				  <Card.Body>
				    <Card.Title>{name}</Card.Title>
				    <Card.Text>
						      {text}
				    </Card.Text>
				    <Button variant="outline-warning">Add</Button>
				  </Card.Body>
				</Card>
			</>
		)
}