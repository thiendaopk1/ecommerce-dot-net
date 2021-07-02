import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import './style.scss';
import { useState } from 'react';
FormSearch.propTypes = {
    onSubmit: PropTypes.func,
};

function FormSearch({onSubmit}) {
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    const handleSearchTermChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value)

        if(!onSubmit) return;

        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        };

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value
            };
            onSubmit(formValues)
        },300)
        
    }
    return (
        <form>
            <div className="search">
                <div>
                    <input type="text" 
                    placeholder="Search . . ."
                    onChange={handleSearchTermChange}
                    />
                </div>
            </div>
        </form>
    );
}

export default FormSearch;