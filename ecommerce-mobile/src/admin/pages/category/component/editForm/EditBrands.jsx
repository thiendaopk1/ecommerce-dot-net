import React from 'react';
import PropTypes from 'prop-types';
import EditBrandsForm from './EditBrandsForm';
import brandsApi from '../../../../../api/brandsApi';

EditBrands.propTypes = {
    closeDialog: PropTypes.func,
};

function EditBrands(props) {
    const handleSubmit = async (value) => {
        (async () => {
            try {
                const res = await brandsApi.edit(value);
            } catch (error) {
                console.log('error', error);
            }
        })();
    };
    return (
        <div>
            <EditBrandsForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default EditBrands;