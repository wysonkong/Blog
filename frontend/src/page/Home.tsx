import EntryCard from "@/components/EntryCard.tsx";
import {useEffect, useState} from "react";

const Home = () => {
    const [entries, setEntries] = useState<number[]>([]);

    useEffect(() => {
        setEntries([1,2,3,4,5,6])
    }, []);


    return (
        <div className={"w-screen h-screen flex flex-col items-center justify-center"}>
            <div className={"h-1/3 flex items-center justify-center"}>
                <h1 className={"text-4xl"}>Fancy a trip?</h1>
            </div>
            <div className={"h-2/3 flex items-center justify-center"}>
                <div className={"grid grid-cols-4 gap-2"}>
                    {entries.map((entry) => (
                        <EntryCard key={entry.id} entry={entry}/>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default Home;