import {Field, FieldDescription, FieldGroup, FieldLabel, FieldSet} from "@/components/ui/field.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router";

const Ack = () => {
    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-card p-6 rounded-lg">
                <h2 className="text-2xl text-card-foreground font-bold text-center mb-6"></h2>
                <FieldSet className={""}>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="blog" className={"text-card-foreground"}>Camp 4 Us</FieldLabel>
                            <FieldDescription>
                                Wyson and Tylers' camping blog.
                            </FieldDescription>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="disclaimer" className={"text-card-foreground"}>Disclaimer</FieldLabel>
                            <FieldDescription>
                                <div className={"grid"}>
                                    <span className={"mb-2"}>By posting, uploading, or submitting any content on this website (“Site”), you acknowledge and agree that: </span>

                                    <ul className={"list-disc ml-4"}>
                                        <li>All content you share is public and may be viewed, recorded, moderated, or
                                            used by the Site administrators.
                                        </li>
                                        <li>Your posts may be used to enforce the Site’s rules, community standards, or
                                            to ensure safety and compliance with applicable laws.
                                        </li>
                                        <li>Do not post any confidential, sensitive, or private information.</li>
                                    </ul>
                                </div>

                            </FieldDescription>
                        </Field>
                        <Field>
                            <FieldDescription>
                                <div className={"grid"}>
                                    <span className={"mb-2"}>This Site is moderated by Wyson and Tyler (“Site Administrators”). By using this Site, you agree to: </span>

                                    <ul className={"list-disc ml-4"}>
                                        <li>Follow all instructions, rules, and moderation decisions made by Wyson and
                                            Tyler.
                                        </li>
                                        <li>Comply with any actions taken by the Site Administrators regarding your
                                            content, including edits, removals, warnings, or account restrictions.
                                        </li>
                                        <li>Treat all guidance from the Site Administrators as authoritative within the
                                            context of this Site.
                                        </li>
                                    </ul>
                                </div>

                            </FieldDescription>
                        </Field>
                        <Field orientation="horizontal">
                            <Button type="submit"
                                    onClick={() => navigate("/home")}
                                    className={"bg-accent text-accent-foreground"}>
                                Acknowledge
                            </Button>
                            <Button variant="outline"
                                    type="button"
                                    onClick={() => navigate("/denied")}
                                    className={"bg-foreground text-background"}>
                                Disagree
                            </Button>
                        </Field>
                    </FieldGroup>
                </FieldSet>
            </div>
        </div>
    )
        ;
}

export default Ack;