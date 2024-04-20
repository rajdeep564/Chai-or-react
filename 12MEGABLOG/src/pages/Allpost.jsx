import React ,{useState,useEffect}from 'react'

import appwriteService from '../appwrite/config'
import {Container,PostCard} from '../components/index'

function Allpost() {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        appwriteService.getPosts([]).then((posts)=>{
            if (posts) {
                // console.log("posts ", posts.documents)
                setPosts(posts.documents)
            }
        })
    }, [])
  return (
    <div className='w-full py-8'>
    <Container>
    <div>
        {posts.map((post) =>{
            <div key = {post.$id}>
                <PostCard post = {post} className = 'p-2 w-1/4'/>
            </div>
        })}
    </div>
    </Container>
      
    </div>
  )
}

export default Allpost
