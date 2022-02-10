import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = props => {
    
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Samurai X']);

    // const handleAdd = ()=> {
    //     // setCategories(['HuntexXHunter', ...categories])
    //     setCategories( ctgs => [ ...categories, 'HuntexXHunter' ])

    // };


  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories= { setCategories }/>
        <hr />

        <ol>
            {
                categories.map( category =>
                    <GifGrid 
                    category={ category }
                    key = { category }
                    />
                )
            }
        </ol>
    </>
  );
};

GifExpertApp.propTypes = {

}

export default GifExpertApp
