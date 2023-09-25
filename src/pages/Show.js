import { Link, useLoaderData, Form } from "react-router-dom";

function Show(props) {
    const athlete = useLoaderData()
    console.log(athlete)
	return <div>
        <h1 className="showDisplay">Name: {athlete.name}</h1>
        <h2 className="showDisplay">Age: {athlete.age}</h2>
        <h2 className="showDisplay">Sport: {athlete.sport}</h2>
        <h2 className="showDisplay">Team: {athlete.team}</h2>
        <h2 className="showDisplay">Position: {athlete.position}</h2>
        <h2 className="showDisplay">Year Started: {athlete.year}</h2>
        <img src={athlete.image} alt={athlete.name}/>
        <div>
            <Form className="updateForm" method="post" action={`/update/${athlete.id}`}>
                <fieldset>
                    <label className="updateLabel" for='nameField'>Name</label>
                    <input type="text" name="name" placeholder="Name" defaultValue={athlete.name} id="nameField" required/>
                    <label className="updateLabel" for='ageField'>Age</label>
                    <input type="number" name="age" placeholder="Age" defaultValue={athlete.age} id="ageField" required/>
                    <label className="updateLabel" for='sportField'>Sport</label>
                    <input type="text" name="sport"  placeholder="Sport" defaultValue={athlete.sport} id="sportField" required/>
                    <label className="updateLabel" for='teamField'>Team</label>
                    <input type="text" name='team' placeholder="Team" defaultValue={athlete.team} id="teamField" required/>
                    <label className="updateLabel" for='positionField'>Position</label>
                    <input type="text" name="position" placeholder="Position" defaultValue={athlete.position} id="positionField" required/>
                    <label className="updateLabel" for='yearField'>Year</label>
                    <input type="number" name="year" placeholder="Year Started" defaultValue={athlete.year} id="yearField" required/>
                    <label className="updateLabel" for='imageField'>Image</label>
                    <input type="text" name="image" placeholder="Image of Athlete" defaultValue={athlete.image} id="imageField" required/>
                    <button className="buttonBlack">Update {athlete.name}</button>
                </fieldset>
            </Form>
        </div>
        <Form method="delete" action={`/delete/${athlete.id}`}>
            <button className="buttonBlack">Delete {athlete.name}</button>
        </Form>
        <Link to='/'><button className="buttonBlack">Back Home</button></Link>
    </div>;
}

export default Show;
