import { FunctionComponent } from 'react';
import ListStyler from './List.style';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';

let dataObjType: Array<{ id: number, description: string, status: string }>;

const ListComponent:
    FunctionComponent<{ data: typeof dataObjType, listTitle: string }> = (props) => {

        const classes = ListStyler();

        return <div>
            <h2>{props.listTitle}</h2>
            <List className={classes.root}>
            {props.data.map(listOfItems => {
                return <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={listOfItems.description} secondary={listOfItems.status} />
                </ListItem>
            })}
        </List></div>
    }

export default ListComponent;
