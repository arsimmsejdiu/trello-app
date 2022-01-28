import { CardContainer } from "../styles";

type CardProps = {
    text?: string; // (the ? property) CardProps.text?: string | undefined
}

export const Card = ({ text }: CardProps) => {
    return <CardContainer>{text}</CardContainer>;
}
