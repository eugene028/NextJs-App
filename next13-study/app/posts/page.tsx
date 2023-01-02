import Link from "next/link";
import CreatePost from "./CreatePost";

async function getPost() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records', {cache : 'no-store'});
    const data = await res.json();
    return data?.items as any[]; //data가 있을때는 items 가져옵니다. 
}

const PostPage = async() => {
    const posts = await getPost();
    console.log(posts);
    return (
        <div>
            <h1>Posts</h1>
                {posts?.map((post) => {
                    return <PostItem key = {post.id} post = {post} />
                })}
                <CreatePost />
        </div>
    );
};

export default PostPage;

const PostItem = ({post} : any ) => {
    const {id, title, created} = post || {}
    return (
        <>
            <Link href = {`/posts/${id}`}>
            <h3>
                {title}
            </h3>
            <p>{created}</p>
            </Link>
        </>
    )
}