import { Todo } from "../model"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDoneOutline } from "react-icons/md"
import "./styles.css"
import TodoList from "./TodoList"
import { useEffect, useRef, useState } from "react"
import { Draggable } from "react-beautiful-dnd"

type Props = {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ index, todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    // Handle Delete

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    // Handle Done

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }

    // Handle Edit

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map((todo) => (
            todo.id === id ? { ...todo, todo: editTodo } : todo
        )))

        setEdit(false)
    };

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])


    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {(provided) => (
                <form 
                className="todos__single" 
                onSubmit={(e) => handleEdit(e, todo.id)}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                >
                    {edit ? (
                        <input
                            value={editTodo}
                            ref={inputRef}
                            className="todos__single--text"
                            onChange={(e) => setEditTodo(e.target.value)} />
                    ) :
                        todo.isDone ? (
                            <s className="todos__single--text">{todo.todo}</s>
                        ) : (

                            <span className="todos__single--text">{todo.todo}</span>
                        )

                    }
                    <div>
                        <span className="icon" onClick={() => {
                            if (!edit && !todo.isDone) {
                                setEdit(!edit);
                            }
                        }}>
                            {<AiFillEdit />}
                        </span>
                        <span className="icon" onClick={() => handleDelete(todo.id)}>
                            {<AiFillDelete />}
                        </span>
                        <span className="icon" onClick={() => handleDone(todo.id)}>
                            {<MdDoneOutline />}
                        </span>
                    </div>
                </form>
            )}
        </Draggable>
    )
}

export default SingleTodo