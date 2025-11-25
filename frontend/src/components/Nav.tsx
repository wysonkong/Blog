import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router";
import {useAuth} from "@/provider/AuthProvider.tsx";

export function Nav() {
    const navigate = useNavigate();
    const {user, handleLogout} = useAuth();

    return (
        <NavigationMenu className={"flex justify-center items-center mb-14"}>
            <NavigationMenuList className="flex-wrap">
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Button
                            variant={"link"}
                            onClick={() => navigate("/home")}>
                            Home
                        </Button>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Button variant={"link"}
                                onClick={() => navigate("/auth")}>
                        Auth
                        </Button>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {user && <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Button variant={"link"}
                                onClick={() => {handleLogout(); navigate("/auth")}}>
                            Log out
                        </Button>
                    </NavigationMenuLink>
                </NavigationMenuItem>}
            </NavigationMenuList>
        </NavigationMenu>
    )
}