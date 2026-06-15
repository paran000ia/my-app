import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../page/Home.tsx";
import Discover from "../page/Discover.tsx";
import ProductDetail from "../page/ProductDetail.tsx";
import Profile from "../page/Profile.tsx";
import ProfileActivity from "../page/ProfileActivity.tsx";
import CreateNFT from "../page/CreateNFT.tsx";
import Leaderboard from "../page/Leaderboard.tsx";
import Creators from "../page/Creators.tsx";

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
                <Route path="/stats" element={<Leaderboard />} />
                <Route path="/btn" element={<Discover/>} />
                <Route path="/btn-home" element={<Home />} />
                <Route path="/btn-homee" element={<Home />} />
                <Route path="/btn-homeee" element={<Home />} />
                <Route path="/btn--homeee" element={<Home />} />
                <Route path="/btn-homeeee" element={<Home />} />
                <Route path="/btn-3" element={<Home />} />
                <Route path="/creators" element={<Creators />} />
            </Routes>

        </BrowserRouter>
    );
}