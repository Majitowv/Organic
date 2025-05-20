import React, { useContext, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { OrganContext } from '../../context';
import OurProduct from '../ui/OurProduct';

const Category = () => {
    const { catName} = useParams()
    const { product } = useContext(OrganContext)

    useEffect(() => {
        window.scroll(0,0)
    },[])
    return (
        <div>
            <div className="container">
                {
                    product.map((el) => {
                        return el.category === catName ? <OurProduct el={el} key={el.id}/> : null

                    })
                }
            </div>
        </div>
    );
};

export default Category;