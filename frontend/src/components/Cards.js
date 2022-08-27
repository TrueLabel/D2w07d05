const Card= (props) => {
	return (
		
		<div className='card'>
			<h2> {props.card.name}</h2>
			<img src={props.card.image}></img>
			<div className='card_info'>
				<p>Name: {props.card.name}</p>
				<p>Description: {props.card.description}</p>
				<p>Image: {props.card.image}</p>
			</div>
		</div>
	);
};

export default Card;