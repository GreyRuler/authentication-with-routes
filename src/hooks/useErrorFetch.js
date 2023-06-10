import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useErrorFetch(isError, setToken) {
	const navigate = useNavigate()
	useEffect(() => {
		if (isError) {
			localStorage.removeItem('token')
			setToken(null)
			navigate('/')
		}
	}, [isError, setToken, navigate])
}
