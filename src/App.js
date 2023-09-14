import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="login" element={<LoginPage login="1" />} />
                    <Route path="room">
                        <Route path="" element={<LoginPage />} />
                        <Route path=":id" element={<RoomPage />} />
                    </Route>
                    <Route path="" element={<Navigate to="/login" />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
