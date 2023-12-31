import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<nav className='nav'>
			<Link to='/'>
				<div>
					<h1 className='headerH1'>Favorite Athletes</h1>
				</div>
			</Link>
		</nav>
	);
}

export default Header;
