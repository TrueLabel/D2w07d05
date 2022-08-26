const Books = (props) => {
	return (
		<div className='books'>
			<div>
				<p>{props.book.name}</p>
			</div>

			<p>Air: {props.book.}</p>
			<p>Episode: {props.book.}</p>
			<p>Created: {props.book.}</p>
		</div>
	);
};

export default Books;