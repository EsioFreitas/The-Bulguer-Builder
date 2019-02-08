import React from 'react'

import './BurgerIngredients.css';

const burgerIngredients = props => {
    let ingredients = null 

    switch (props.type) {
        case ('bread-botton'):
            ingredients = <div className='BreadBotton'></div>
            break;
        case ('bread-top'):
            ingredients = (
                <div className='BreadTop'>
                    <div className='Seeds1'></div>
                    <div className='Seeds2'></div>
                </div>
            );
            break;
        case ('salad'):
            ingredients = <div className='Salad'></div>
            break;
        case ('bacon'):
            ingredients = <div className='Bacon'></div>
            break;
        case ('meat'):
            ingredients = <div className='Meat'></div>
            break;
        case ('cheese'):
            ingredients = <div className='Cheese'></div>
            break;
    
        default:
            break;
    }

    return ingredients;
}

export default burgerIngredients;