import "./App.css";
import Navbar from "./component/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/signup";
import Private from "./component/private";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Private />}>
            <Route path="/" element={<h1>this is the product page</h1>} />
            <Route path="/add" element={<h1>this is add page</h1>} />
            <Route path="/update" element={<h1>this is the update page</h1>} />
            <Route
              path="/profile"
              element={<h1>this is the profile page</h1>}
            />
            <Route path="/logout" element={<h1>this is the logout page</h1>} />
          </Route>

          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
