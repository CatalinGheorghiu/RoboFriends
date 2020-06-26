import React, { useEffect } from "react";
import { robots } from "../robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

const App = () => {
    // Hooks
    const [robotState, setRobotState] = React.useState(robots);
    const [searchfieldState, setSearchfield] = React.useState("");

    const onSearchChange = (e) => {
        setSearchfield(e.target.value);
    };

    const filteredRobots = robotState.filter((robot) => {
        return robot.name
            .toLowerCase()
            .includes(searchfieldState.toLowerCase());
    });

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setRobotState(data));
    }, []);

    return (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>
        </div>
    );
};

export default App;
