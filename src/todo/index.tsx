import useHelmetHook from "../hooks/UseHelmentHook";
import { Card } from '@material-ui/core';
import useStyles from "./index.styler";
import ListComponent from "../components/List";
import useFetch from "../hooks/useFetch";



const ToDoMain = () => {

    useHelmetHook("todo App Journey");
    const classes = useStyles();
    const fetchData = useFetch();
    const {data, loading, error} = fetchData;
    
    return <Card className={classes.root} variant="outlined">
            {error ? <p>{error}</p> : <div>
                {loading ? <p>Loading ....</p> :
                <div><ListComponent data={data.todo} listTitle={"To Do list"} />
                <ListComponent data={data.progress} listTitle={"Progress"} />
                <ListComponent data={data.done} listTitle={"Done"} />
                </div>}
            </div> }
    </Card>
}

export default ToDoMain;
