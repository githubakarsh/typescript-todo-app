import { FunctionComponent } from 'react';
import ListStyler from './List.style';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import Divider from '@material-ui/core/Divider';
import './list.scss';

let dataObjType: Array<{ id: number, description: string, status: string }>;

const ListComponent:
    FunctionComponent<{ data: typeof dataObjType, listTitle: string }> = (props) => {
        const classes = ListStyler();
        return <div>
            <h2 style={{textAlign: 'center'}}>{props.listTitle}</h2>
            <div className="input-container">
                <input type="text" className="input-class"/>
            </div>
            <div className="button-container">
                <button className="button-class">Add</button>
            </div>
            <Divider/>
            <List className={classes.root}>
            {props?.data.map(listOfItems => {
                return <ListItem key={listOfItems.id}>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={listOfItems.description} secondary={<i>{listOfItems.status}</i>} />
                </ListItem>
            })}
        </List>
        </div>
    }

export default ListComponent;
