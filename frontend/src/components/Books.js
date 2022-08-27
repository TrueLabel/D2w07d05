const Book = (props) => {
	return (
		<div className='books'>

				<p> book: {props.book.name}</p>

		</div>
	);
};

export default Book;