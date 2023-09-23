import { Link, useLoaderData, Form } from "react-router-dom";

function Show(props) {
    const athlete = useLoaderData()

	return <div>
        <h1>Name: {athlete.name}</h1>
        <h2>Age: {athlete.age}</h2>
        <h2>Sport: {athlete.sport}</h2>
        <h2>Team: {athlete.team}</h2>
        <h2>Position: {athlete.position}</h2>
        <h2>Year Started: {athlete.year}</h2>
        <div>
            <Form method="post" action={`/update/${athlete.id}`}>
                <input type="text" name="name" placeholder="Name" defaultValue={athlete.name} required/>
                <input type="number" name="age" placeholder="Age" defaultValue={athlete.age} required/>
                <input type="text" name="sport"  placeholder="Sport" defaultValue={athlete.sport} required/>
                <input type="text" name='team' placeholder="Team" defaultValue={athlete.team} required/>
                <input type="text" name="position" placeholder="Position" defaultValue={athlete.position} required/>
                <input type="number" name="year" placeholder="Year Started" defaultValue={athlete.year} required/>
                <button>Update {athlete.name}</button>
            </Form>
        </div>
        <Form method="delete" action={`/delete/${athlete.id}`}>
            <button>Delete {athlete.name}</button>
        </Form>
        <Link to='/'><button>Back Home</button></Link>
    </div>;
}

export default Show;
