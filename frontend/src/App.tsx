import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AuthProvider} from "@/provider/AuthProvider.tsx";
import {UserProvider} from "@/provider/UserProvider.tsx";
import Ack from "@/page/Ack.tsx";
import Layout from "@/Layout.tsx";
import Unauth from "@/page/Unauth.tsx";
import Home from "@/page/Home.tsx";

function App() {

    return (
        <AuthProvider>
            <UserProvider>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path={"/"} element={<Ack/>}/>
                            <Route path={"/denied"} element={<Unauth/>}/>
                            <Route path={"/home"} element={<Home/>}/>
                        </Routes>
                    </Layout>
                </Router>
            </UserProvider>
        </AuthProvider>

    )
}

export default App
