import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AuthProvider from "@/provider/AuthProvider.tsx";
import {UserProvider} from "@/provider/UserProvider.tsx";
import Ack from "@/page/Ack.tsx";
import Layout from "@/Layout.tsx";
import Unauth from "@/page/Unauth.tsx";
import Home from "@/page/Home.tsx";
import Auth from "@/page/Auth.tsx";
import EntryPage from "@/page/EntryPage.tsx";

function App() {
    return (
        <Router>
            <AuthProvider>
                <UserProvider>

                    <Layout>
                        <Routes>
                            <Route path={"/"} element={<Ack/>}/>
                            <Route path={"/denied"} element={<Unauth/>}/>
                            <Route path={"/home"} element={<Home/>}/>
                            <Route path={"/auth"} element={<Auth/>}/>
                            <Route path={"/entry/:id"} element={<EntryPage/>}/>
                            <Route path={"/entry"} element={<EntryPage/>}/>
                        </Routes>
                    </Layout>
                </UserProvider>
            </AuthProvider>
        </Router>


    )
}

export default App
