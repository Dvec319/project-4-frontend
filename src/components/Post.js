import { Link } from "react-router-dom";

function Post({post}) {
	return <div>
        <Link to={`/athletes/post/${post.id}`}>
            <h1 className="h1Post">{post.name}</h1>
        </Link>
    </div>;
}

export default Post;
