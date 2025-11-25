import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {useNavigate} from "react-router";
import type {Entry} from "@/interface/Entry.tsx";

type EntryCardProp = {
    entry: Entry
}

const EntryCard = ({entry}: EntryCardProp )=> {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/entry/${entry.id}`)}
             className={"flex flex-col items-center justify-center"}>
            <Card className={"p-2 min-h-48"}>
                <CardHeader>
                    <h2></h2>
                </CardHeader>
                <CardTitle className={"flex justify-center items-center"}>
                    <h1>{entry.title}</h1>
                </CardTitle>
                <CardContent>
                    <div className={"flex justify-center items-center max-w-md"}>
                        <p>{entry.message}</p>
                    </div>
                </CardContent>
                <CardFooter className={"flex flex-col"}>
                    <div>Created By: {entry.createdBy.username}</div>
                </CardFooter>

            </Card>
        </div>
    );
};

export default EntryCard;
