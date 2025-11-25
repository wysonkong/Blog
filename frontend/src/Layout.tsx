import type {PropsWithChildren} from "react";
import {Toaster} from "sonner";
import {Nav} from "@/components/Nav.tsx";
import {useLocation} from "react-router";


const Layout = ({children}: PropsWithChildren) => {
    const location = useLocation();
    const hideNavbarPaths = ['/', '/denied'];

    return (
        <div>
            {!hideNavbarPaths.includes(location.pathname) && <Nav/>}
            <div className={"bg-cover bg-center relative flex min-h-svh flex-col"}>
                <main className={""}>{children}</main>
                <Toaster/>
            </div>
        </div>
    );
};

export default Layout;
