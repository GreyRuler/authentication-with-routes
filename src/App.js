import './App.css'
import './assets/css/google-icons.css'
import { Route, Routes } from 'react-router-dom';
import News from './components/News';
import Header from './components/Header';
import { useState } from 'react';
import HomePage from './components/HomePage';
import NewsView from './components/NewsView';
import Page404 from './components/Page404';

function App() {
	const [token, setToken] = useState(localStorage.getItem('token'))
	return (
		<div className="app">
			<Header token={token} setToken={setToken}/>
			<Routes>
				<Route path='*' element={<Page404/>}/>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/news"
					   element={<News token={token} setToken={setToken}/>}
				/>
				<Route path='/news/:id' element={<NewsView token={token}/>}/>
			</Routes>
		</div>
	);
}

export default App;
