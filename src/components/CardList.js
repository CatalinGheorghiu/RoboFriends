import React from "react";
import Card from "./Card";
import { v4 as uuid } from "uuid";

const CardList = ({ robots }) => {
    // Loop the cards and store them in new array
    const cardsArray = robots.map((robot, index) => {
        return (
            <Card
                key={uuid()}
                id={robots[index].id}
                name={robots[index].name}
                email={robots[index].email}
            />
        );
    });

    return <div>{cardsArray}</div>;
};

export default CardList;
