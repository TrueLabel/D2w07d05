import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./components/Cards";
import Books from "./components/Books";
import Library from "./components/Libraries";
import React from "react-bootstrap";
import { set } from "mongoose";

function App() {
	let [book, setBook] = useState([]);
	let [library, setLibrary] = useState([]);
	let [card, setCard] = useState([]);
	let [toggle, setToggle] = useState(false);
	let [locations, setLocations] = useState([]);
	let [on, setOn] = useState(false);
	let [next, setNext] = useState("");
	let [prev, setPrev] = useState("");

	const getLocations = () => {
		axios.get("").then((response) => {
			setLocations(response.data.results);
			setNext(response.data.info.next);
			setPrev(response.data.info.prev);
		});
		setOn(true);
		setToggle(false);
		setshow(false);
	};

	const getBooks = () => {
		axios.get("").then((response) => {
			setBook(response.data.book);
			setNext(response.data.info.next);
		});
		setToggle(true);
		setOn(false);
		setshow(false);
	};

	const getCharacters = () => {
		axios.get("").then((response) => {
			setCharacters(response.data.results);
			console.log(response.data.info.next);
			setNext(response.data.info.next);
			setPrev(response.data.info.prev);
		});
		setshow(true);
		setToggle(false);
		setOn(false);
	};
	const nextCharacter = () => {
		axios.get(next).then((response) => {
			setCharacters(response.data.results);
			setNext(response.data.info.next);
			setPrev(response.data.info.prev);
		});
	};
	const prevCharacter = () => {
		axios.get(prev).then((response) => {
			setCharacters(response.data.results);
			setNext(response.data.info.next);
			setPrev(response.data.info.prev);
		});
	};

	const nextLocation = () => {
		axios.get(next).then((response) => {
			setLocations(response.data.results);
			setNext(response.data.info.next);
			setPrev(response.data.info.prev);
		});
	};
	const prevLocation = () => {
		axios.get(prev).then((response) => {
			setLocations(response.data.results);
			setNext(response.data.info.next);
			setPrev(response.data.info.prev);
		});
	};

	const nextEpisode = () => {
		axios.get(next).then((response) => {
			setEpisodes(response.data.results);
			setNext(response.data.info.next);
			setPrev(response.data.info.prev);
		});
	};
	const prevEpisode = () => {
		axios.get(prev).then((response) => {
			setEpisodes(response.data.results);
			setNext(response.data.info.next);
			setPrev(response.data.info.prev);
		});
	};

	return (
		<div className='container'>
			<h1 className='header'>D2 Lore</h1>

			<nav className='nav navbar navbar--top'>
				<div>
					<button className='arrow' onClick={prevCharacter}>
						&#60;
					</button>
					<button className='btn btn-outline-warning' onClick={getCharacters}>
						Library
					</button>

					<button className='arrow-next' onClick={nextCharacter}>
						&#62;
					</button>
				</div>
				<div>
					<button className='arrow' onClick={prevEpisode}>
						&#60;
					</button>
					<button className='btn btn-outline-warning' onClick={getEpisodes}>
						Books
					</button>

					<button className='arrow-next' onClick={nextEpisode}>
						&#62;
					</button>
				</div>
				<div>
					<button className='arrow' onClick={prevLocation}>
						&#60;
					</button>
					<button className='btn btn-outline-warning' onClick={getLocations}>
						Cards
					</button>
					<button className='arrow-next' onClick={nextLocation}>
						&#62;
					</button>
				</div>
			</nav>

			<div className='main-content'>
				{libraries.map((library) => {
					return (
						<div key={library.id}>
							{show ? <Library library={library} /> : null}
						</div>
					);
				})}

				{books.map((book) => {
					return (
						<div key={book.id}>
							{toggle ? <Book book={book} /> : null}
						</div>
					);
				})}

				{cards.map((card) => {
					return (
						<div key={card.id}>
							{on ? <Card card={card} /> : null}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;