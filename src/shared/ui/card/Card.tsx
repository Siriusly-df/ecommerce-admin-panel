import type { ReactNode } from "react";
import "./Card.scss";

type CardProps = {
    children: ReactNode;
}

export function Card(props: CardProps) {
   return(
    <div className="card">
        {props.children}
    </div>
   )
}