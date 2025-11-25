import {Field, FieldLabel, FieldSet} from "@/components/ui/field.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";

const AddComment = () => {
    return (
        <div className={"p-8"}>
            <form>
                <FieldSet>
                    <Field>
                        <FieldLabel htmlFor={"comment"}>Comment</FieldLabel>
                        <Textarea id={"comment"} className={"min-w-lg"}/>
                    </Field>
                </FieldSet>
                <Field orientation={"horizontal"} className={"mt-4"}>
                    <Button type={"submit"}>Submit</Button>
                </Field>

            </form>
        </div>
    );
};

export default AddComment;
