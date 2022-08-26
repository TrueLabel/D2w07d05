const Cards= (props) => {
	return (
		
		<div className='card'>
			<h2> {props.card.name}</h2>
			<img src={props.card.image}></img>
			<div className='card_info'>
				<p>Status: {props.card.status}</p>
				<p>Species: {props.card.species}</p>
				<p>Type: {props.card.type}</p>
				<p>Gender: {props.card.gender}</p>
				<p>Origin name:{props.card.origin.name}</p>
				<p>Location: {props.ccard.location.name}</p>
			</div>
		</div>
	);
};

export default Cards;