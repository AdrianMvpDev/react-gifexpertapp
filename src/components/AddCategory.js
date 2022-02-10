import React from 'react'
import { useState } from 'react/cjs/react.development'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = ( e ) => {
        setinputValue( e.target.value );

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2){
            setCategories( ctgs => [ inputValue, ...ctgs ]);
            setinputValue('');

        }

    }

  return (
    <form onSubmit={ handleSubmit }>
        {/* <h1>{ inputValue }</h1> */}
        <input 
            type="Text"
            value={ inputValue }
            onChange={ handleInputChange }
        />

    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
