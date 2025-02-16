import './ItemDetailsPageLayout.css'
import { useParams } from 'react-router-dom';

export default function ItemDetailsPageLayout() {
    const { itemId } = useParams<{ itemId: string }>();

    return (
        <div className="item-detail-view">
            <h1>Item Detail View</h1>
            <h1>ITEM ID: + {itemId}</h1>
            <p>Item Detail View Page Layout</p>
        </div>
    );
}