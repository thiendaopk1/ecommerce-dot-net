import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useRouteMatch } from 'react-router';
import romsApi from '../../../../../api/romsApi';
import useRomDetail from '../../../../components/hook/useRomDetail';
import EditRomsForm from './EditRomsForm';

EditRoms.propTypes = {
    closeDialog: PropTypes.func,
};

function EditRoms(props) {
    const { params: {romId}, url } = useRouteMatch();
    const {rom} = useRomDetail(romId);
    const handleSubmit = async (value) => {
        (async () => {
            try {
                const res = await romsApi.edit(value);
            } catch (error) {
                console.log('error', error);
            }
        })();
    };
    return (
        <Box style={{width:'100%'}}>
            <EditRomsForm onSubmit={handleSubmit} rom={rom}/>
        </Box>
    );
}

export default EditRoms;