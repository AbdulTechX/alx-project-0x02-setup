import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> =({title, content}) => {
    return (
        <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="mt-3 font-medium">{content}</p>
        </div>
    )
}
export default Card;