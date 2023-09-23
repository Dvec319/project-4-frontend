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
        <h2>Add an Athlete!</h2>
        <Form method="post" action="/create" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name"  onChange={handleChange} required/>
            <input type="number" name="age" placeholder="Age" onChange={handleChange} required/>
            <input type="text" name="sport"  placeholder="Sport" onChange={handleChange} required/>
            <input type="text" name='team' placeholder="Team" onChange={handleChange} required/>
            <input type="text" name="position" placeholder="Position" onChange={handleChange} required/>
            <input type="number" name="year" placeholder="Year Started" onChange={handleChange} required/>
            <input type='text' name="image" placeholder="Image of Athlete" onChange={handleChange} required/>
            <button>Add new Athlete</button>
        </Form>
        {athletes.map((athlete) => <Post key={athlete.id} post={athlete}/>)}
        </>
    );
}

export default Index;
