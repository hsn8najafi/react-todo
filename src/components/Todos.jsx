import { Fragment } from "react";
import Todo from "./Todo";

const Todos = ({ todos }) => {
    return (
        <Fragment>
            {todos.map((t) => (
                <Todo text={t.text} key={t.id} />
            ))}
        </Fragment>
    );
};

export default Todos;