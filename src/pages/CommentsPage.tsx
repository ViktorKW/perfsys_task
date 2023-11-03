import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { TComment } from "../types"
import { getComment } from "../api"
import Comment from "../components/Comment"

export default function CommentsPage(){
	const [comment, setComment] = useState<TComment>({} as TComment)

    type CommentsParams = {
        id: string;
    }
    const { id } = useParams<CommentsParams>()

    useEffect(()=>{
    	async function initCommentsPage(){
    		const newComment:TComment = await getComment(id as string)
    		setComment(newComment)
    	}

    	initCommentsPage()
    }, [id])

    return (
    	<div>
    		<h1>Comments</h1>
    		<Comment comment={comment}/>
    	</div>
    )
}