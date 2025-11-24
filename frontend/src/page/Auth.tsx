import {Field, FieldDescription, FieldGroup, FieldLabel, FieldSet} from "@/components/ui/field.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";
import {useAuth} from "@/provider/AuthProvider.tsx";
import React, {useEffect, useState} from "react";
import {toast} from "sonner";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";

const Auth = () => {
    const {login} = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [feedback, setFeedback] = useState("");
    const [isValid, setIsValid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
    }, [username]);

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-card p-6 rounded-lg">
                <Tabs defaultValue={"login"}>
                    <TabsList>
                        <TabsTrigger value={"login"}>Log In</TabsTrigger>
                        <TabsTrigger value={"signup"}>Sign Up</TabsTrigger>
                    </TabsList>

                    <TabsContent value={"login"}>
                        <h2 className="text-2xl text-card-foreground font-bold text-center mb-6">Log In To Your
                            Account</h2>
                        <form onSubmit={() => console.log("clicked login")}>
                            <FieldSet className={""}>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="username"
                                                    className={"text-card-foreground"}>Username</FieldLabel>
                                        <Input
                                            id="username"
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="user123"
                                            className={"text-card-foreground"}/>
                                        <FieldDescription>
                                            Enter your username for your account.
                                        </FieldDescription>
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="password"
                                                    className={"text-card-foreground"}>Password</FieldLabel>
                                        <Input
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="********"
                                            className={"text-card-foreground"}/>
                                        <FieldDescription>
                                            Enter your password.
                                        </FieldDescription>
                                    </Field>
                                    <Field orientation="horizontal">
                                        <Button type="submit"
                                                className={"bg-accent text-accent-foreground"}>Submit</Button>
                                        <Button variant="outline" type="button"
                                                className={"bg-foreground text-background"}>Cancel</Button>
                                    </Field>
                                </FieldGroup>
                            </FieldSet>
                        </form>
                    </TabsContent>
                    <TabsContent value={"signup"}>
                        <h2 className="text-2xl text-card-foreground font-bold text-center mb-6">Create an Account</h2>
                        <form onSubmit={() => console.log("clicked signup")}>
                            <FieldSet className={""}>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="username"
                                                    className={"text-card-foreground"}>Username</FieldLabel>
                                        <Input
                                            id="username"
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="newuser123"
                                            className={"text-card-foreground"}
                                        />
                                        <FieldDescription>
                                            {feedback}
                                        </FieldDescription>
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="password"
                                                    className={"text-card-foreground"}>Password</FieldLabel>
                                        <Input
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="********"
                                            className={"text-card-foreground"}
                                        />
                                        <FieldDescription>
                                            Must be at least 8 characters long.
                                        </FieldDescription>
                                    </Field>
                                    <Field orientation="horizontal">
                                        <Button type="submit" disabled={!isValid}
                                                className={"bg-accent text-accent-foreground"}>Submit</Button>
                                        <Button variant="outline" type="reset"
                                                className={"bg-foreground text-background"}>Reset</Button>
                                    </Field>
                                </FieldGroup>
                            </FieldSet>
                        </form>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Auth;