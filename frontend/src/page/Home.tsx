import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {Card, CardContent} from "@/components/ui/card.tsx";

const Home = () => {



    return (
        <div className={"w-screen h-screen flex flex-col items-center justify-center"}>
            <div className={"h-1/3 flex items-center justify-center"}>
                <h1 className={"text-4xl"}>Fancy a trip?</h1>
            </div>
            <div className={"h-2/3 flex items-center justify-center"}>
            <Carousel className="w-full max-w-md">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
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
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            </div>

        </div>
    );
};

export default Home;