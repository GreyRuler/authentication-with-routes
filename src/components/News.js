import useJsonFetch from '../hooks/useJsonFetch';
import NewsItem from './NewsItem';
import useErrorFetch from '../hooks/useErrorFetch';
import { Link } from 'react-router-dom';

export default function News({token, setToken}) {
	const urlLogin = `${process.env.REACT_APP_URL}/private/news`
	const options = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const {data: news, isError, isLoading} = useJsonFetch(urlLogin, options)
	useErrorFetch(isError, setToken)
	return (
		<ul className="news">
			{news.map(item => (
				<Link to={`/news/${item.id}`} key={item.id}>
					<NewsItem item={item}/>
				</Link>
			))}
		</ul>
	)
}
