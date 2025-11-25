import {Separator} from "@/components/ui/separator.tsx";

const Comment = () => {
    return (
        <div className={"flex gap-2"}>
            <div className={"flex flex-col"}>
                <span>Username</span>
                <span>Date commented: </span>
            </div>
            <div className={"flex max-w-lg gap-4"}>
                <Separator orientation={"vertical"} className={""}/>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rerum soluta? At aut ducimus eum, explicabo facere perferendis unde vero voluptatibus. Beatae corporis facere, ipsum molestiae obcaecati quam repellendus repudiandae.</p>
            </div>
        </div>
    );
};

export default Comment;
