import { useLoaderData, Form } from "react-router-dom";
import Post from "../components/Post";
function Index(props) {

    // grabbing the loaderdata
    const athletes = useLoaderData()

	return (
        <>
        <h2>Add an Athlete!</h2>
        <Form method="post" action="/create">
            <input type="text" name="name" placeholder="Name" required/>
            <input type="number" name="age" placeholder="Age" required/>
            <input type="text" name="sport"  placeholder="Sport" required/>
            <input type="text" name='team' placeholder="Team" required/>
            <input type="text" name="position" placeholder="Position" required/>
            <input type="number" name="year" placeholder="Year Started" required/>
            <input type='text' name="image" placeholder="Image of Athlete" required/>
            <button>Add new Athlete</button>
        </Form>
        {athletes.map((athlete) => <Post key={athlete.id} post={athlete}/>)}
        </>
    );
}

export default Index;
