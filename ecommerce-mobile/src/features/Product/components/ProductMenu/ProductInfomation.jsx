import { Box, makeStyles, TableBody, TableCell, TableContainer, TableRow, withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import PropTypes from 'prop-types';
import { default as React } from 'react';
ProductInfomation.propTypes = {
    product: PropTypes.object,
};
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
const useStyle = makeStyles(theme =>({
    root: {
      
    },

    title: {
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: '50px',

    },

    content: {
        // width: '800px',
        // marginLeft: '220px',
    },

    Right: {
        // textAlign: 'left',
        fontWeight: '700'
    },

    Left: {
        // fontWeight: '700'
    }

}));
function ProductInfomation({product = {}}) {
    const classes = useStyle();
    const {informations} = product;
   
    console.log('aaa',informations);
    return (
        <Box className={classes.root}>
           
                <Box className={classes.title}>
                    <h2>Thông số kỹ thuật</h2>
                </Box>
                <Box className={classes.content}>
                <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableBody>
                                {informations && informations.map((information) => (
                                    <StyledTableRow key={information.id}>
                                        <StyledTableCell component="th" scope="row" className={classes.Left}>{information.name}</StyledTableCell>
                                        <StyledTableCell align="right" className={classes.Right}>{information.content}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                </TableContainer>
                </Box>
       
        </Box>
    );
}

export default ProductInfomation;