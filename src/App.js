import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="login" element={<LoginPage login="1" />} />
                    <Route path="room" element={<LoginPage />} />
                    <Route path="" element={<Navigate to="/login" />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
