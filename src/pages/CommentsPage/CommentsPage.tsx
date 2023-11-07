import "./CommentsPage.scss"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { TComment } from "../../types"
import { getComment } from "../../api"
import Comment from "../../components/Comment/Comment"

export default function CommentsPage(){
	const [isLoaded, setIsLoaded] = useState<boolean>(false)
	const [comment, setComment] = useState<TComment | null>(null)
	const navigate = useNavigate()

    type CommentsParams = {
        id: string;
    }
    const { id } = useParams<CommentsParams>()

    useEffect(()=>{
    	async function initCommentsPage(){
    		const newComment:TComment|null = await getComment(id as string)
    		setComment(newComment)
    		setIsLoaded(true)
    	}

    	initCommentsPage()
    }, [id])

    const handleGoBack = ()=>{
    	navigate(-1)
    }

    const renderComment = ()=>{
    	if(isLoaded === false){
    		return <p className="p-10 text-medium support-color">Loading...</p>
    	}
    	else if(isLoaded && comment !== null){
    		return <Comment comment={comment}/>
    	} else if(isLoaded && comment === null){
    		return <p className="p-10 warning-color text-large">No such comment</p>
    	}
    }

    return (
    	<div className="comments-page">
    		<p className="go-back text-small support-color" onClick={handleGoBack}>{String.fromCharCode(8592)}Go Back</p>
    		<p className="comment-header text-large"><b>Comments</b></p>

    		{ renderComment() }
    	</div>
    )
}