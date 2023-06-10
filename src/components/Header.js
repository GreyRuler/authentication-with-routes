import Authentication from './Authentication';

export default function Header({token, setToken}) {
	return (
		<div className='header-container'>
			<div className='header'>
				<h2>Neto Social</h2>
				<Authentication token={token} setToken={setToken}/>
			</div>
		</div>
	)
}
