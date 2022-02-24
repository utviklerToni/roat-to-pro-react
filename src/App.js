import { useState } from 'react';
import './App.css';

const App = () => {
	const stories = [
		{
			title: 'React',
			url: 'https://reactjs.org/',
			author: 'Jordan Walke',
			num_comments: 3,
			points: 4,
			objectID: 0,
		},
		{
			title: 'Redux',
			url: 'https://redux.js.org/',
			author: 'Dan Abramov, Andrew Clark',
			num_comments: 2,
			points: 5,
			objectID: 1,
		},
	];

	// callback function
	const handleSearch = (event) => {
		console.log(event.target.value);
	};

	return (
		<div>
			<h1>My Hacker Stories</h1>

			<Search onSearch={handleSearch} />

			<hr />

			<List list={stories} />
		</div>
	);
};

const Search = (props) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleChangeEvent = (event) => {
		// console.log(event.target.value);
		setSearchTerm(event.target.value);
		props.onSearch(event);
	};

	return (
		<div>
			<label htmlFor='search'>Search: </label>
			<input id='search' type='text' onChange={handleChangeEvent} />

			<p>{searchTerm}</p>
		</div>
	);
};

const List = (props) =>
	props.list.map((item) => (
		<div key={item.objectID}>
			<span>
				<a href={item.url}>{item.title}</a>
			</span>
			<span>{item.author}</span>
			<span>-{item.num_comments}</span>
			<span>-{item.points}</span>
		</div>
	));

export default App;
