import {Field, FieldDescription, FieldGroup, FieldLabel, FieldSet} from "@/components/ui/field.tsx";

const MyComponent = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-card p-6 rounded-lg">
                <h2 className="text-2xl text-card-foreground font-bold text-center"></h2>
                <FieldSet className={""}>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="blog" className={"text-card-foreground"}>Access Denied</FieldLabel>
                            <FieldDescription>
                                Access is not available.
                            </FieldDescription>
                        </Field>
                    </FieldGroup>
                </FieldSet>
            </div>
        </div>
    );
};

export default MyComponent;
