import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {Card, CardContent} from "@/components/ui/card.tsx";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {Entry} from "@/interface/Entry.tsx";
import {getEntryById} from "@/client/Client.ts";
import Comment from "@/components/Comment.tsx";
import AddComment from "@/components/AddComment.tsx";

const EntryPage = () => {
    const {id} = useParams();
    const [entry, setEntry] = useState<Entry>()

    useEffect(() => {
        if (!id) return;
        getEntryData(Number(id));
    }, [id]);

    const getEntryData = async (id: number) => {
        try {
            setEntry(await getEntryById(id));
        } catch (error) {
            throw error;
        }
    }

    const getComments = async (id: number) => {

    }

    return (
        <div className={"flex flex-col justify-center items-center"}>
            <div className={"flex flex-col justify-center items-center mb-14"}>
                <div className={"pb-10"}>
                    <h1>{entry?.title}</h1>
                </div>
                <Carousel className="w-full max-w-md mb-10">
                    <CarouselContent>
                        {Array.from({length: 5}).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
                <div className={"max-w-xl"}>
                    <span>{entry?.message}</span>
                </div>
            </div>
            <Comment/>
            <AddComment/>
        </div>
    );
};

export default EntryPage;
