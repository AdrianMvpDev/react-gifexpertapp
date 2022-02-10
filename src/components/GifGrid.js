import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

 const GifGrid = ({ category }) => {

//     const [images, setImages] = useState([]);
    const { data:images } = useFetchGifs( category );

//     useEffect( () => {
//         getGifs( category )
//             .then ( setImages );
//     }, [ category ]);


  return (
    <>
        <h3 className='animate__animated animate__lightSpeedInRight'>{ category }</h3>
        <div className='card-grid animate__animated animate__backInLeft'>
        {
            images.map( img => (
                <GifGridItem
                key= { img.id } 
                {... img}
                />
            ))
        }
        </div>
    </>
  );
}

export default GifGrid
