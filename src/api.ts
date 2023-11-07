import axios from "axios"
import { TComment, TResource } from "./types"

const BASIC_URL = "https://api.hnpwa.com/v0"
const JOBS_URL = `${BASIC_URL}/jobs/1.json`
const SHOWS_URL = `${BASIC_URL}/show/1.json`
const NEWS_URL = `${BASIC_URL}/news/1.json`

export async function getJobs():Promise<TResource[]>{
	try{
		const response = await axios.get(JOBS_URL)
		return response.data as TResource[]
	} catch(e){
		console.error("Error at getJobs api", e)
		return [] as TResource[]
	}
}

export async function getShows():Promise<TResource[]>{
	try{
		const response = await axios.get(SHOWS_URL)
		return response.data as TResource[]
	} catch(e){
		console.error("Error at getShows api", e)
		return [] as TResource[]
	}
}

export async function getNews():Promise<TResource[]>{
	try{
		const response = await axios.get(NEWS_URL)
		return response.data as TResource[]
	} catch(e){
		console.error("Error at getNews api", e)
		return [] as TResource[]
	}
}

export async function getComment(id:string|number):Promise<TComment | null>{
	const COMMENTS_URL = `${BASIC_URL}/item/${id}.json`

	try{
		const response = await axios.get(COMMENTS_URL) 
		return response.data ? response.data as TComment : null
	} catch(e){
		console.error("Error at getComment api", e)
		return null
	}
}