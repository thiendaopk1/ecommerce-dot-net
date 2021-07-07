import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import './style.scss';
import { useState } from 'react';
FormSearch.propTypes = {
    onSubmit: PropTypes.func,
    changeVPO: PropTypes.func,
    changeVPC: PropTypes.func,
};

function FormSearch({onSubmit=null,changeVPO=null,changeVPC=null}) {
  
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
                    value={searchTerm}
                    onFocus={()=>{
                        if(changeVPO) changeVPO();
                    }}
                    onBlur={()=>{
                        if(changeVPC) changeVPC();
                    }}
                    />
                </div>
            </div>
        </form>
    );
}

export default FormSearch;