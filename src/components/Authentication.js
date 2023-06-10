import { useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import useErrorFetch from '../hooks/useErrorFetch';
import { useNavigate } from 'react-router-dom';

export default function Authentication({token, setToken}) {
	const navigate = useNavigate()
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [isError, setError] = useState(null)
	const [isLoading, setLoading] = useState(true)
	const urlAuth = `${process.env.REACT_APP_URL}/auth`
	const options = {
		method: 'POST',
		body: JSON.stringify({login, password})
	}

	const onChangeLogin = (event) => {
		setLogin(event.target.value)
	}

	const onChangePassword = (event) => {
		setPassword(event.target.value)
	}

	const handleLogin = async () => {
		try {
			const response = await fetch(urlAuth, options)
			if (!response.ok) throw new Error(response.statusText)
			const {token} = await response.json()
			localStorage.setItem('token', token)
			setToken(token)
			navigate('/news')
		} catch (e) {
			setError(e.message)
		} finally {
			setLoading(false)
		}
	};

	const handleLogout = () => {
		setError(true)
	}

	useErrorFetch(isError, setToken)

	return (
		token ? <Logout token={token} handleLogout={handleLogout} setToken={setToken}/> :
				<Login handleLogin={handleLogin} onChangeLogin={onChangeLogin}
					   onChangePassword={onChangePassword}/>
	)
}
