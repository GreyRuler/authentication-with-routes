import NewsItem from './NewsItem';
import { useParams } from 'react-router-dom';
import useJsonFetch from '../hooks/useJsonFetch';
import Page404 from './Page404';

export default function NewsView({token}) {
	const {id} = useParams()
	const url = `${process.env.REACT_APP_URL}/private/news/${id}`
	const {data: item, isError} = useJsonFetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})

	if (isError) return <Page404/>

	return (
		<NewsItem item={item}/>
	)
}
