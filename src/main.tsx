import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { RouterProvider, createHashRouter } from "react-router-dom"

const router = createHashRouter([
	{
		path: "/*",
		element: <App />,
	}
])
  

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
)
