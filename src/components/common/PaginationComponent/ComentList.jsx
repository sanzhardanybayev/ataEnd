import React from 'react';
import Sanatoriums from '../Sanatoriums/Sanatoriums';
import Tours from '../Tours/Tours';
import Souvenir from '../Souvenir/Souvenir';
import style from './styles.scss';

const CommentList = (props) => {
    const data = props.data.map((item, index) => {
        console.log(item);
        switch (props.type) {
        case 'sanatoriums':
            return (
                <Sanatoriums
                    id={item._id}
                    key={index}
                    product={item.name}
                    boon={item.boon}
                    rating={item.rating}
                    shortDescription={item.shortDescription}
                    rooms={item.rooms}
                    imagePreview={item.imagePreview}
                />
            );
            break;
        case 'tours':
            return (
                <Tours
                    id={item._id}
                    key={index}
                    image={item.imagePreview}
                    boon={item.boon}
                    product={item.name}
                    rating={item.rating}
                    price={item.price}
                    choices={item.duration}
                    text={item.shortDescription}
                />
            );
            break;
        case 'souveniers':
            return(
                <Souvenir
                    id={item._id}
                    key={index}
                    image={item.image}
                    choiceses={[]}
                    rating={item.rating}
                    text={item.shortDescription}
                    product={item.name}
                    price={item.price}
                    description={item.description}
                />
            );
            break;
        }
    });
    
    return (
        <div className={['row', style.Info1].join(' ')}>
            {
                data
            }
        </div>
    );
};

export default CommentList;
