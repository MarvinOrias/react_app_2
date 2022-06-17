import React from 'react';
import {Carousel} from 'react-bootstrap';
import Snake404 from '../images/404.png'

export default function Error404(){
	return(
			<>
				<h3 className="H3">Page Not Found</h3>
				<Carousel>
				  <Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={Snake404}
				      alt="page not found"
				    />
				    <Carousel.Caption>
				      <h3 className="caption">404</h3>
				      <p className="caption">Page not found</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				</Carousel>
			</>
		)
}