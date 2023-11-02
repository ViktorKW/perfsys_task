import axios from "axios"
import { TResource } from "./types"

const JOBS_URL = "https://api.hnpwa.com/v0/jobs/1.json"
const SHOWS_URL = "https://api.hnpwa.com/v0/show/1.json"
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"

export async function getJobs():Promise<TResource[]>{
	try{
		const response = await axios.get(JOBS_URL)
		console.log(response.data as TResource[])
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
		console.error("Error at getJobs api", e)
		return [] as TResource[]
	}
}