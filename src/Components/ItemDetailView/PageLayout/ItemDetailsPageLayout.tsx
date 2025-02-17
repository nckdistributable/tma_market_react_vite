import './ItemDetailsPageLayout.css'
import { useParams } from 'react-router-dom';
import image from '../../../assets/homa.jpg'
import { useState } from 'react';
import StickyBottomMenu from '../../StickyBottomMenu/StickyBottomMenu';

export default function ItemDetailsPageLayout() {
    const { itemId } = useParams<{ itemId: string }>();

    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className="item-detail-view">
            <img src={image} alt="description" />
            <h1 className='item-name'>Item Name</h1>

            <div className='item-description-wrapper'>
                <h2>Description:</h2>
                <div className={`item-description ${isExpanded ? 'expanded' : ''}`}>
                    description description  description description description description  description descriptiondescription description  description descriptiondescription description  description descriptiondescription description  description descriptiondescription description  description descriptiondescription description  description descriptiondescription description  description descriptiondescription description  description descriptiondescription description  description descriptiondescription description  description descriptiondescription description  description descriptiondescription description  description descriptiondescription description  description descriptiondescription description  description descriptiondescription description  description description
                </div>
                <button className="expand-button" onClick={handleExpandClick}>
                    {isExpanded ? 'Show Less' : 'Show More'}
                </button>
            </div>


            <div className='seller-name-wrapper'>
                <img className='seller-profile-pic' src={image} alt="description" />
                <p className='seller-name'>Seller Name</p>
            </div>

            <div className='price-wrapper'>
                <p className='price'>Price: 1000</p>
                <button className='buy-button'>Buy Now</button>
            </div>

            <StickyBottomMenu></StickyBottomMenu>
        </div>
    );
}