import "./App.css";
import Navbar from "./component/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/signup";
import Private from "./component/private";
import Login from "./component/login";
import AddProduct from "./component/addProduct";
import ListProduct from "./component/listProduct";
import UpdateProduct from "./component/updateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Private />}>
            <Route path="/" element={<ListProduct />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route
              path="/profile"
              element={<h1>this is the profile page</h1>}
            />
            <Route path="/logout" element={<h1>this is the logout page</h1>} />
          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
