import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {Card, CardContent} from "@/components/ui/card.tsx";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {Entry} from "@/interface/Entry.tsx";

const EntryPage = () => {
    const {id} = useParams();
    const [entry, setEntry] = useState<Entry>()

    useEffect(() => {
        setEntry(await getEntryById(id))
    }, [id]);

    return (
        <div className={"flex flex-col justify-center items-center"}>
            <div className={"pb-10"}>
                <h1>Title</h1>
            </div>
            <Carousel className="w-full max-w-md">
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci debitis eaque eligendi facilis
                fugiat harum id labore libero minima nam non, nulla odit pariatur quam quo sequi tempora velit?
            </div>

        </div>
    );
};

export default EntryPage;
