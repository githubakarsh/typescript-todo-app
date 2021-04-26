import useHelmetHook from "../hooks/UseHelmentHook";
import { Card } from '@material-ui/core';
import useStyles from "./index.styler";
import ListComponent from "../components/List";
import { fetchTodo } from "../hooks/fetchTodo";
import './todo.scss';
import { useEffect } from "react";
import { addTodo, addProgress, addDone } from '../redux/reducer/todoReducer';
import { store, useAppDispatch } from '../redux/store';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';


const ToDoMain = (props: any) => {
    const dispatch = useDispatch();
    useHelmetHook("todo App Journey");
    const classes = useStyles();
    useEffect(() => {
        dispatch(fetchTodo());
    }, [])
    const { error, loading, done, progress, todo } = props.todoJourneyData;
    console.log(todo);
    return <div>
            {error ? <p>{error}</p> : <div>
                {loading ? <p>Loading ....</p> :
                <div className="todo-main">
                 <Card className={`${classes.root } ${classes.variantTodo}`} variant="outlined">
                    <ListComponent data={todo} listTitle={"To Do list"} />
                </Card>
                <Card className={`${classes.root} ${classes.variantProgress}`} variant="outlined">
                    <ListComponent data={progress} listTitle={"Progress"} />
                </Card>
                <Card className={`${classes.root} ${classes.variantDone}`} variant="outlined">
                    <ListComponent data={done} listTitle={"Done"} />
                </Card>
                </div>}
            </div> }
    </div>
}

export default connect(state => state)(ToDoMain);
