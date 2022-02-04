import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Users from './Component/Users/Users';
import AddUser from './Component/AddUser/AddUser';
import UpdateUser from './Component/UpdateUser/UpdateUser';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={ <Users />} />
          <Route path="/users/add" element={<AddUser></AddUser>} />
          <Route path="/users/update/:id" element={<UpdateUser></UpdateUser>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
