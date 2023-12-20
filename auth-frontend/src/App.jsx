import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import UserPortal from "./pages/UserPortal";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import Login from "./pages/Login";
import "./App.css";
import SignUp from "./pages/SignUp";
import PublicRoute from "./components/utils/PublicRoute";
import { Reset } from 'styled-reset'
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
		<>
			<Reset />
			<Router>
				<Routes>
          <PublicRoute path='/login' component={ <Login /> }></PublicRoute>
					<PublicRoute path='/signup' component={<SignUp />}></PublicRoute>
					<Route path='/' component={<UserPortal />}></Route>
          <ProtectedRoute path='/users/:id/profile'></ProtectedRoute>
				</Routes>
			</Router>
		</>
	);
}

export default App;
