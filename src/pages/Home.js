import React from 'react';
import MovieCard from '../components/MovieCard';
import {Row, Col} from 'react-bootstrap';

export default function Home(props){

	const card = props.home.map((product) => {
		return(
				<Col xs={12} md={4}>
					<MovieCard key={product.title} moviecard={product}/>
				</Col>
			)
	});

	return(
			<>
				{/*{localStorage.getItem('name') === null ? <h1 className="H1" style={{textAlign: 'center'}}>Welcome Soldier!</h1>
				  : <h1 className="H1" style={{textAlign: 'center'}}>Welcome {localStorage.getItem('name')}!</h1>}*/}
				<h1 className="H1" style={{textAlign: 'center'}}>Welcome Soldier!</h1>
				<Row className="justify-content-center">
					{card}
				</Row>
			</>
		)
}