import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import NewsPage from "./pages/NewsPage"
import ShowsPage from "./pages/ShowsPage"
import JobsPage from "./pages/JobsPage"
import NavBar from "./components/NavBar"
import CommentsPage from "./pages/CommentsPage"

export default function App() {
	const empty_space = <canvas className='empty-space' height={"20px"}></canvas>
  
	return (
		<div className='app'>
			<NavBar />
			{empty_space}
			<Routes>
				<Route index element={<HomePage />} />
        
				<Route path='news' element={<NewsPage />}></Route>
				<Route path='shows' element={<ShowsPage />} />
				<Route path='jobs' element={<JobsPage />} />

				<Route path="news/comments/:id" element={<CommentsPage/>} />
				<Route path="shows/comments/:id" element={<CommentsPage/>} />
				<Route path="jobs/comments/:id" element={<CommentsPage/>} />

				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</div>
	)
}
