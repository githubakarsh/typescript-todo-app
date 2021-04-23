import useHelmetHook from "../hooks/UseHelmentHook";
import { Card } from '@material-ui/core';
import useStyles from "./index.styler";
import ListComponent from "../components/List";


const ToDoMain = () => {
    useHelmetHook("todo App Journey");
    const classes = useStyles();

    const todo = [
        { id: 1, description: "Learn Typsescript with react", status: 'todo' },
        { id: 2, description: "Learn Node js microservices using Next", status: 'todo' },
        { id: 3, description: "Learn Relay, GraphQL, SQL", status: 'todo' },
    ];

    return <Card className={classes.root} variant="outlined">
            <ListComponent data={todo} listTitle={"To Do list"} />
            <ListComponent data={todo} listTitle={"Progress"} />
            <ListComponent data={todo} listTitle={"Done"} />
    </Card>
}

export default ToDoMain;
