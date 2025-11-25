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
            onClick={() => navigate("/")}
             className={"flex flex-col items-center justify-center"}>
            <Card className={"p-2"}>
                <CardHeader>
                    <h2>entry.date</h2>
                </CardHeader>
                <CardTitle className={"flex justify-center items-center"}>
                    <h1>Title</h1>
                </CardTitle>
                <CardContent>
                    <div className={"flex justify-center items-center max-w-md"}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis cum deleniti,
                            deserunt
                            dolorum eveniet ex id in ipsam libero minus molestiae porro quae similique, sint suscipit
                            tempora velit
                            veniam!</p>
                    </div>
                </CardContent>
                <CardFooter className={"flex flex-col"}>
                    <div>Created By:</div>
                    <div>Written By:</div>
                </CardFooter>

            </Card>
        </div>
    );
};

export default EntryCard;
