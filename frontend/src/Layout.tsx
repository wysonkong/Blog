import type {PropsWithChildren} from "react";
import {Toaster} from "sonner";
import {Nav} from "@/components/Nav.tsx";



const Layout = ({ children } : PropsWithChildren) => {
    return (
        <div>
        <Nav/>
        <div className={"bg-cover bg-center relative flex min-h-svh flex-col"}>
            <main className={"pt-16"}>{children}</main>
            <Toaster/>
        </div>
        </div>
    );
};

export default Layout;
