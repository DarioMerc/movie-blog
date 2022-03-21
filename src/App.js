import { Header } from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Components/Home";
import { Blog } from "./Components/Blog";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Post } from "./Components/Post";
import { Create } from "./Components/Create";
import { Edit } from "./Components/Edit";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/blog" element={<Blog />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/create" element={<Create />} />
                <Route exact path="/post/:id" element={<Post />} />
                <Route exact path="/edit/:id" element={<Edit />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
