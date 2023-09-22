import { Link, useLoaderData } from "react-router-dom";

function Show(props) {
    const athlete = useLoaderData()

	return <div>
        <h1>{athlete.name}</h1>
        <h2>{athlete.age}</h2>
        <h2>{athlete.sport}</h2>
        <h2>{athlete.team}</h2>
        <h2>{athlete.position}</h2>
        <h2>{athlete.year}</h2>
        <Link to='/athletes/'><button>Back Home</button></Link>
    </div>;
}

export default Show;
