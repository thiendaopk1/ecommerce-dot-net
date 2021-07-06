import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import EditInfomation from './EditInfomation';
import NewInfomation from './NewInfomation';
import { makeStyles } from '@material-ui/core';
Infomation.propTypes = {
    informations: PropTypes.array,
};
const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    flexFlow:'column'
  },
  newInfo: {

    borderRadius: '5px',
    width: '100%',
    marginLeft: '5px'
  },
  editInfo:{
    // border: '1px solid black',

    width: '100%',
    marginRight: '5px',
    padding: '15px 0px',
    height: '550px'
  },
}))
function Infomation({informations}) {
  const classes = useStyles();
    console.log('informations', informations);
  const [arrInfo, setArrInfo] = useState(informations);
  console.log('arrInfo', arrInfo);
  const handleAddInfo = (data) => {
    setArrInfo([...arrInfo, data]);
  }
    return (
        <div className={classes.root}>
          <h2>Infomation</h2>
           <div className={classes.newInfo}>
            <NewInfomation onSubmit={handleAddInfo}/>
          </div>
          <div className={classes.editInfo}>
            <EditInfomation arrInfos={arrInfo}/>
          </div> 
        </div>
        
    );
}

export default Infomation;