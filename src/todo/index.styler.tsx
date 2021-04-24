import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: 400,
      padding : 20,
      color: 'white',
      boxShadow: '0px 4px 8px 0px lightgray',
      borderRadius: 15
    },
    subcard : {
      margin: 50,
    },
    variantTodo: {
    //  backgroundColor: '#05B815',
      backgroundImage: 'linear-gradient(to right top, #24f580, #1ee26a, #18cf55, #0fbd40, #02ab29)',
      borderColor: 'green'
    },
    variantProgress: {
     // backgroundColor: '#F9E331',
     backgroundImage: 'linear-gradient(to right top, #e5f256, #d7e246, #c8d336, #bac424, #acb509)',
     borderColor: 'yellow',
      color: 'black'
    },
    variantDone: {
      backgroundImage: 'linear-gradient(to right top, #f67166, #f85f52, #f84b3d, #f73325, #f40805)',
      borderColor: 'red'
    }
  });

  export default useStyles;
  