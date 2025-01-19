// SSG - Static Site Generation

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getPosts } from "./Atomic";

export default function Postspage({postsData}) {
    const [post, setPost] = useRecoilState(getPosts)
    useEffect(() => {
        setPost(postsData)
    },[post, postsData, setPost])


    return(
        <div className="bg-red-300 p-4 rounded">
            <h1 className="text-black">Post List</h1><br/>
            <div>
                {post.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    ))}
            </div>
        </div>
    )
}


export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsData = await response.json();
  
    return {
      props: {postsData}
    };
  }