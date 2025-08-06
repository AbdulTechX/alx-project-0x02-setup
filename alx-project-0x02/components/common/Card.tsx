import { Cardprops } from "@/interfaces";

const CardPost: React.FC<Cardprops> =({title, content}) => {
    return (
        <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="mt-3 font-medium">{content}</p>
        </div>
    )
}
export default CardPost;