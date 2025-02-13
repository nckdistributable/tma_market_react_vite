import { useState } from 'react';
import teaImage from '../../assets/homa.jpg';
import { ItemObject } from '../itemsPage/ItemsPage';
import './Item.css'

interface ItemProps {
    index: number;
    itemObject: ItemObject;
}


export default function Item(props: Readonly<ItemProps>) {

    const [clickedIndices, setClickedIndices] = useState<number[]>([]);

    const handleItemClick = (index: number) => {
        setClickedIndices([...clickedIndices, index]);
        setTimeout(() => {
            setClickedIndices(clickedIndices.filter(i => i !== index));
        }, 300);
    };

    return (
        <div key={props.index} className="inner-market-list-element-container">
            <div className="outer-container-list-element" >
                <img src={teaImage} alt="description" />
                <h3 role="button"
                    className={`inner-market-list-element-title ${clickedIndices.includes(props.index) ? 'clicked' : ''}`}
                    onClick={() => handleItemClick(props.index)}
                >
                    {props.itemObject.title}
                </h3>
                <div className="inner-market-list-element-description-container">
                    <p className="inner-market-list-element-description">
                        {props.itemObject.description}
                    </p>
                </div>
                <div className="seller-name-container">
                    <p className="seller-name">seller name: {props.itemObject.seller}</p>
                </div>
                <p className="price">Price: {props.itemObject.price}</p>
            </div>
        </div>
    )
}