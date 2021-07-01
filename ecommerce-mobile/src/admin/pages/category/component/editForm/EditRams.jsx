import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useRouteMatch } from 'react-router';
import ramsApi from '../../../../../api/ramsApi';
import useRamDetail from '../../../../components/hook/useRamDetail';
import EditRamsForm from './EditRamsForm';

EditRams.propTypes = {
    closeDialog: PropTypes.func,
};

function EditRams(props) {
    const { params: {ramId}, url } = useRouteMatch();
    const {ram} = useRamDetail(ramId);
    const handleSubmit = async (value) => {
        (async () => {
            try {
                const res = await ramsApi.edit(value);
            } catch (error) {
                console.log('error', error);
            }
        })();
    };
    return (
        <Box style={{width:'100%'}}>
            <EditRamsForm onSubmit={handleSubmit} ram={ram}/>
        </Box>
    );
}

export default EditRams;