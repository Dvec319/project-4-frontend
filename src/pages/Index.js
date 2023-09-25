import { useLoaderData, Form } from "react-router-dom";
import Post from "../components/Post";
import { useState } from "react";
function Index(props) {

    // grabbing the loaderdata
    const athletes = useLoaderData()

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        sport: '',
        team: '',
        position: '',
        year: '',
        image: ''
    })

    const handleChange = (event) => {
        const newState = {...formData}
        newState[event.target.name] = event.target.value
        setFormData(newState)
    }

    const handleSubmit = (event => {
        setFormData({
            name: '',
            age: '',
            sport: '',
            team: '',
            position: '',
            year: '',
            image: ''
        })
    })

	return (
        <>
        <h2 className="h2Index">Add an Athlete!</h2>
        <Form method="post" action="/create" onSubmit={handleSubmit} className="createForm">
            <fieldset>
                <label className="createLabel" for='nameField'>Name</label>
                <input type="text" name="name" placeholder="Name"  onChange={handleChange} id="nameField" className="createInput" required/>
                <label className="createLabel" for='ageField'>Age</label>
                <input type="number" name="age" placeholder="Age" onChange={handleChange} id="ageField" required/>
                <label className="createLabel" for='sportField'>Sport</label>
                <input type="text" name="sport"  placeholder="Sport" onChange={handleChange} id="sportField" required/>
                <label className="createLabel" for='teamField'>Team</label>
                <input type="text" name='team' placeholder="Team" onChange={handleChange} id="teamField" required/>
                <label className="createLabel" for='positionField'>Position</label>
                <input type="text" name="position" placeholder="Position" onChange={handleChange} id="positionField" required/>
                <label className="createLabel" for='yearField'>Year</label>
                <input type="number" name="year" placeholder="Year Started" onChange={handleChange} id="yearField" required/>
                <label className="createLabel" for='imageField'>Image</label>
                <input type='text' name="image" placeholder="Image of Athlete" onChange={handleChange} id="imageField" required/>
                <button className="buttonBlack">Add new Athlete</button>
            </fieldset>
        </Form>
        {athletes.map((athlete) => <Post key={athlete.id} post={athlete}/>)}
        </>
    );
}

export default Index;
