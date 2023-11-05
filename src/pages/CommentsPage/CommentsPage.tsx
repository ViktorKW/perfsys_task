import "./CommentsPage.scss"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { TComment } from "../../types"
import { getComment } from "../../api"
import Comment from "../../components/Comment/Comment"

export default function CommentsPage(){
	const [isLoaded, setIsLoaded] = useState<boolean>(false)
	const [comment, setComment] = useState<TComment>({} as TComment)
	const navigate = useNavigate()

    type CommentsParams = {
        id: string;
    }
    const { id } = useParams<CommentsParams>()

    useEffect(()=>{
    	async function initCommentsPage(){
    		const newComment:TComment = await getComment(id as string)
    		setComment(newComment)
    		setIsLoaded(true)
    	}

    	initCommentsPage()
    }, [id])

    const handleGoBack = ()=>{
    	navigate(-1)
    }

    return (
    	<div className="comments-page">
    		<p className="go-back text-small support-color" onClick={handleGoBack}>{String.fromCharCode(8592)}Go Back</p>
    		<p className="comment-header text-large"><b>Comments</b></p>

    		{ isLoaded ? <Comment comment={comment}/> : <p className="loading text-medium support-color">Loading...</p> }
    	</div>
    )
}