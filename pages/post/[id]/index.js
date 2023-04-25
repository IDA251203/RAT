import {useRouter} from 'next/router'
import {Link} from 'next/link'

const Post = () => {
const router =useRouter()
const {id} =router.query

    return(
        <>
        <h1>Post:{id} </h1>
        <ul>
            <li>
                <Link href='/post/[id]/[blog]' as={`/post/${id}/1`}>Blog1</Link>
            </li>
            <li>
                <Link href='/post/[id]/[blog]' as={`/post/${id}/2`}>Blog2</Link>
            </li>
        </ul>
        </>
    )

}
export default Post;