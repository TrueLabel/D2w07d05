const Library = (props) => {
	return (
		<div className='library'>
			<h2> Categories: {props.library.category}</h2>
		</div>
	);
};

export default Library;