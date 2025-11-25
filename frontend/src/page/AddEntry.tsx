import {useEffect, useState} from "react";
import {Field, FieldDescription, FieldGroup, FieldLabel, FieldSet} from "@/components/ui/field.tsx";
import {Input} from "@/components/ui/input.tsx";
import {getEntryById} from "@/client/Client.ts";
import {Button} from "@/components/ui/button.tsx";


interface EntryProps {
    entryId: number | null
}

const AddEntry = ({entryId}:EntryProps) => {
    const [title, setTitle] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [images, setImages] = useState<string[]>([]);
    const [files, setFiles] = useState<FileList>(new FileList);

    useEffect(() => {
        if (!entryId) return;
        const fetchEntry = async () => {
            const entry = await getEntryById(entryId);
            setTitle(entry.title);
            setMessage(entry.message);

            if (entry.images) {
                setImages(entry.images);
            }
        };
        fetchEntry();
    }, [entryId]);

    async function handleFileChange(e: React.ChangeEvent <HTMLInputElement>) {
        const images = e.target.files;
        if(!images) return;

        const dataTransfer = new DataTransfer();
        for ( const image of images) {
            const png = await convertToPng(image);
            const maxSizeInMB = 1;
            if (png.size > maxSizeInMB * 1024 * 1024) {
                alert(`${png.name} is too large. Max size is ${maxSizeInMB} MB.`);
            }
            else {
                dataTransfer.items.add(png);
            }
        }
        const newImageList = dataTransfer.files;
        setFiles(newImageList);

    }

    async function convertToPng(file: File): Promise<File> {
        const bitmap = await createImageBitmap(file);

        const canvas = document.createElement("canvas");
        canvas.width = bitmap.width;
        canvas.height = bitmap.height;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(bitmap, 0, 0);

        const pngBlob = await new Promise<Blob>((resolve) =>
            canvas.toBlob((blob) => resolve(blob!), "image/png")
        );

        return new File([pngBlob], file.name.replace(/\.[^.]+$/, "") + ".png", {
            type: "image/png",
        });
    }

    async function handleSubmit() {
        if(entryId) {
            addEntry(title, message, files);
        }
        else {
            editEntry(entryId, title, message, files);
        }
    }


    return (
        <FieldSet>
            <FieldGroup>
                <Field>
                    <FieldLabel>
                        Title:
                    </FieldLabel>
                    <Input
                        id={"title"}
                        placeholder={"Hike up Pike's Peak!"}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}/>
                    <FieldDescription>
                        Give a title for this entry!
                    </FieldDescription>
                </Field>
                <Field>
                    <FieldLabel>
                        Description:
                    </FieldLabel>
                    <Input
                        id={"message"}
                        placeholder={"We started on Barr trail at around 8 am..."}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>
                    <FieldDescription>
                        Give a description for this entry!
                    </FieldDescription>
                </Field>
                <Field>
                    <FieldLabel>
                        Description:
                    </FieldLabel>
                    <Input
                        id={"image"}
                        type={"file"}
                        placeholder={"jpg, jpeg, png"}
                        onChange={handleFileChange}/>
                    <FieldDescription>
                        Give a description for this entry!
                    </FieldDescription>
                </Field>
            </FieldGroup>
            {images.map(image =>
                <img src={image} alt={"entry image"} height={"200"} width={"200"}/>
            )}
            <Button onClick={handleSubmit}>
                Submit
            </Button>
        </FieldSet>
    );
};

export default AddEntry;