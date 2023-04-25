import {useRouter} from 'next/router'

const Blog = () =>{
   const router =useRouter()
   const {id, blog}= router.query

    return(
        <>
        <p>Blog:{id} {blog}</p>
        </>
    )
}

export default Blog;