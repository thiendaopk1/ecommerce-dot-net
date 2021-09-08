import { makeStyles } from '@material-ui/core';

const FilterStyles = makeStyles(() => ({
  root: {
    padding: '16px',
    border: '1px solid #e4e4e4',
    marginBottom: '16px',
    '& > Button': {
      marginRight: '8px',
    },
  },

  title: {
    color: '#575757',
    fontStyle: 'bold',
    textAlign: 'center',
  },

  menu: {
    padding: 1,
    margin: '1px 8px',
    listStyleType: 'none',

    '& > li': {
      marginTop: '8px',
      transform: 'all .25s',
      marginLeft: '15px',

      '&:hover': {
        color: '#fa7272',
        cursor: 'pointer',
      },
    },
  },

  range: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',

    marginTop: '8px',
    marginBottom: '8px',

    '& > span': {
      marginLeft: '8px',
      marginRight: '8px',
    },
  },

  moreCompact: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    cursor: 'pointer',
  },
}));
export default FilterStyles;
