import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar"
import ChatItems from "./Components/Chat-Items";
import Footer from "./Components/Footer";
import '../src/Components/index.css';
import { height } from "@fortawesome/free-regular-svg-icons/faAddressBook";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<>
<Navbar></Navbar>
<SearchBar></SearchBar>
<div className="Chat-Index">
<ChatItems></ChatItems>
</div>
<Footer></Footer>


</>);


