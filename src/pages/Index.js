import { useLoaderData } from "react-router-dom";
import Post from "../components/Post";
function Index(props) {

    // grabbing the loaderdata
    const athletes = useLoaderData()

	return (
        athletes.map((athlete) => <Post key={athlete.id} post={athlete}/>)
    );
}

export default Index;
