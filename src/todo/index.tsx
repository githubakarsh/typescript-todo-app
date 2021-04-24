import useHelmetHook from "../hooks/UseHelmentHook";
import { Card } from '@material-ui/core';
import useStyles from "./index.styler";
import ListComponent from "../components/List";
import useFetch from "../hooks/useFetch";
import './todo.scss';


const ToDoMain = () => {

    useHelmetHook("todo App Journey");
    const classes = useStyles();
    const fetchData = useFetch();
    const {data, loading, error} = fetchData;
    
    return <div>
            {error ? <p>{error}</p> : <div>
                {loading ? <p>Loading ....</p> :
                <div className="todo-main">
                <Card className={`${classes.root } ${classes.variantTodo}`} variant="outlined">
                    <ListComponent data={data.todo} listTitle={"To Do list"} />
                </Card>
                <Card className={`${classes.root} ${classes.variantProgress}`} variant="outlined">
                    <ListComponent data={data.progress} listTitle={"Progress"} />
                </Card>
                <Card className={`${classes.root} ${classes.variantDone}`} variant="outlined">
                    <ListComponent data={data.done} listTitle={"Done"} />
                </Card>
                </div>}
            </div> }
    </div>
}

export default ToDoMain;
