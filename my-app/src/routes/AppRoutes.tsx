import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../page/Home.tsx";
import Discover from "../page/Discover.tsx";
import ProductDetail from "../page/ProductDetail.tsx";
import Profile from "../page/Profile.tsx";
import ProfileActivity from "../page/ProfileActivity.tsx";
import CreateNFT from "../page/CreateNFT.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/Details" element={<ProductDetail />} />
                <Route path="/logo" element={<Profile />} />
                <Route path="/activity" element={<ProfileActivity />} />
                <Route path="/sell" element={<CreateNFT />} />
            </Routes>

        </BrowserRouter>
    );
}