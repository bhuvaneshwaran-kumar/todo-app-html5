import React from "react";

type TodoPageProps = {
    message: string;
};


const TodoPage: React.FC<TodoPageProps> = ({ message }) => {
    console.log("1 in TodoPage:", message);
    return (
        <div>
            <h1>Todo Page</h1>
            <p>{message}</p>
        </div>
    );
};

export default TodoPage;
