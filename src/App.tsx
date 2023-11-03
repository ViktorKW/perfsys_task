import "./scss/index.scss"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import NavBar from "./components/NavBar/NavBar"
import CommentsPage from "./pages/CommentsPage/CommentsPage"
import ResourcePage from "./pages/ResourcePage"
import { getJobs, getNews, getShows } from "./api"

export default function App() {
	const empty_space = <canvas className='empty-space' height={"20px"}></canvas>
  
	return (
		<div className='app'>
			<NavBar />
			{empty_space}
			<Routes>
				<Route index element={<HomePage />} />
        
				<Route path='/perfsys_task/news' element={<ResourcePage resourceName="News" getResources={getNews}/>} />
				<Route path='/perfsys_task/shows' element={<ResourcePage resourceName="Shows" getResources={getShows}/>}/>
				<Route path='/perfsys_task/jobs' element={<ResourcePage resourceName="Jobs" getResources={getJobs}/>} />

				<Route path="/perfsys_task/news/comments/:id" element={<CommentsPage/>} />
				<Route path="/perfsys_task/shows/comments/:id" element={<CommentsPage/>} />
				<Route path="/perfsys_task/jobs/comments/:id" element={<CommentsPage/>} />

				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</div>
	)
}
