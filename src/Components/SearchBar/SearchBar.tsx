import { useState } from "react";

import './SearchBar.css'
interface SearchBarOptions {

}

export default function SearchBar(options: SearchBarOptions) {
    const [searchButtonClicked, setSearchButtonClicked] = useState(false);

    const handleSearchButtonClick = () => {
        setSearchButtonClicked(true);
        setTimeout(() => {
            setSearchButtonClicked(false);
        }, 300);
    }

    return (
        <div className="search-bar-wrapper">
            <input type="text" className="search-bar" placeholder="Search..." />
            <button className={`search-button ${searchButtonClicked ? 'clicked' : ''}`} onClick={handleSearchButtonClick}>
                <svg viewBox="0 0 23 23 " width="12" height="12">
                    <path d="M10 2a8 8 0 105.293 14.293l5.414 5.414a1 1 0 001.414-1.414l-5.414-5.414A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
                </svg>
            </button>
        </div>
    )
}