import type {PropsWithChildren} from "react";
import {Toaster} from "sonner";

const Layout = ({ children } : PropsWithChildren) => {
    return (
        <div className={"bg-cover bg-center relative flex min-h-svh flex-col"}>
            <main className={"pt-16"}>{children}</main>
            <Toaster/>
        </div>
    );
};

export default Layout;
