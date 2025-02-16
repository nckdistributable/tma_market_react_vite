import { useState } from "react";
import './Items.css';
import Item from "../Item/Item";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";

export interface ItemObject {
  title: string;
  description: string;
  price: string;
  seller: string;
  link?: string;
}

export default function Items() {
  const [cartButtonClicked, setCartButtonClicked] = useState(false);
  const [menuButtonClicked, setMenuButtonClicked] = useState(false);
  const [accountButtonClicked, setAccountButtonClicked] = useState(false);

  const handleCartButtonClick = () => {
    setCartButtonClicked(true);
    setTimeout(() => {
      setCartButtonClicked(false);
    }, 300);
  };

  const handleMenuButtonClick = () => {
    setMenuButtonClicked(true)
    setTimeout(() => {
      setMenuButtonClicked(false);
    }, 300);
  }

  const handleAccountButtonClick = () => {
    setAccountButtonClicked(true);
    setTimeout(() => {
      setAccountButtonClicked(false);
    }, 300);
  }

  const items: ItemObject[] = [
    {
      title: "2010 TAETEA Classic 7542 Shen Pu'er Tea Dayi Raw Puer Tea 357g",
      description: "Dayi \" 7542\" has been reg \" 7542\" has been regarded as the most successful blended raw Pu Er tea  \" 7542\" has been regarded as the most successful blended raw Pu Er tea  \" 7542\" has been regarded as the most successful blended raw Pu Er tea  \" 7542\" has been regarded as the most successful blended raw Pu Er tea  \" 7542\" has been regarded as the most successful blended raw Pu Er tea  \" 7542\" has been regarded as the most successful blended raw Pu Er tea  \" 7542\" has been regarded as the most successful blended raw Pu Er tea  \" 7542\" has been regarded as the most successful blended raw Pu Er tea  \" 7542\" has been regarded as the most successful blended raw Pu Er tea arded as the most successful blended raw Pu Er tea and the criteria for all the blended raw Pu Er in the tea market. Well-selected the Maocha from Menghai areas, 3-4 grades of tender Maocha are spreaded on the surface with 5-8 grades inside of the cakes.",
      price: "100$",
      seller: "NAME",
      link: "1"
    },
    {
      title: "2010 TAETEA Classic 7542 Shen Pu'er Tea Dayi Raw Puer Tea 357g",
      description: "Dayi \" 7542\" has been regarded as the most successful blended raw Pu Er tea and the criteria for all the blended raw Pu Er in the tea market. Well-selected the Maocha from Menghai areas, 3-4 grades of tender Maocha are spreaded on the surface with 5-8 grades inside of the cakes.",
      price: "100$",
      seller: "NAME",
      link: "1"
    },
    {
      title: "2010 TAETEA Classic 7542 Shen Pu'er Tea Dayi Raw Puer Tea 357g",
      description: "Dayi \" 7542\" has been regarded as the most successful blended raw Pu Er tea and the criteria for all the blended raw Pu Er in the tea market. Well-selected the Maocha from Menghai areas, 3-4 grades of tender Maocha are spreaded on the surface with 5-8 grades inside of the cakes.",
      price: "100$",
      seller: "NAME",
      link: "1"
    },
    {
      title: "2010 TAETEA Classic 7542 Shen Pu'er Tea Dayi Raw Puer Tea 357g",
      description: "Dayi \" 7542\" has been regarded as the most successful blended raw Pu Er tea and the criteria for all the blended raw Pu Er in the tea market. Well-selected the Maocha from Menghai areas, 3-4 grades of tender Maocha are spreaded on the surface with 5-8 grades inside of the cakes.",
      price: "100$",
      seller: "NAME",
      link: "1"
    },
    {
      title: "2010 TAETEA Classic 7542 Shen Pu'er Tea Dayi Raw Puer Tea 357g",
      description: "Dayi \" 7542\" has been regarded as the most successful blended raw Pu Er tea and the criteria for all the blended raw Pu Er in the tea market. Well-selected the Maocha from Menghai areas, 3-4 grades of tender Maocha are spreaded on the surface with 5-8 grades inside of the cakes.",
      price: "100$",
      seller: "NAME",
      link: "1"
    },
    {
      title: "2010 TAETEA Classic 7542 Shen Pu'er Tea Dayi Raw Puer Tea 357g",
      description: "Dayi \" 7542\" has been regarded as the most successful blended raw Pu Er tea and the criteria for all the blended raw Pu Er in the tea market. Well-selected the Maocha from Menghai areas, 3-4 grades of tender Maocha are spreaded on the surface with 5-8 grades inside of the cakes.",
      price: "100$",
      seller: "NAME",
      link: "1"
    },
    {
      title: "2010 TAETEA Classic 7542 Shen Pu'er Tea Dayi Raw Puer Tea 357g",
      description: "Dayi \" 7542\" has been regarded as the most successful blended raw Pu Er tea and the criteria for all the blended raw Pu Er in the tea market. Well-selected the Maocha from Menghai areas, 3-4 grades of tender Maocha are spreaded on the surface with 5-8 grades inside of the cakes.",
      price: "100$",
      seller: "NAME",
      link: "1"
    },
    {
      title: "2010 TAETEA Classic 7542 Shen Pu'er Tea Dayi Raw Puer Tea 357g",
      description: "Dayi \" 7542\" has been regarded as the most successful blended raw Pu Er tea and the criteria for all the blended raw Pu Er in the tea market. Well-selected the Maocha from Menghai areas, 3-4 grades of tender Maocha are spreaded on the surface with 5-8 grades inside of the cakes.",
      price: "100$",
      seller: "NAME",
      link: "1"
    },
  ];

  return (
    <div>
      <div className="main-container">
        <Logo></Logo>
        <SearchBar></SearchBar>
        <div className="items-container">
          {
            items.map((item, index) => (<Item key={index} index={index} itemObject={item}></Item>))
          }
        </div>
      </div>
      <div className="sticky-menu">
        <nav className="menu-navbar">
          <button
            type="button"
            className={`${cartButtonClicked ? 'menu-svg-button clicked' : 'menu-svg-button'}`}
            onClick={handleCartButtonClick}
          >
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                opacity="0.1"
                d="M5.60464 11.4417C5.79269 13.1343 5.88672 13.9805 6.45624 14.4903C7.02576 15 7.87723 15 9.58017 15H9.70588H13.4706H14.827C16.0002 15 16.5867 15 17.0627 14.7134C17.5387 14.4268 17.8132 13.9084 18.3621 12.8716L20.8303 8.20947C21.361 7.207 20.6343 6 19.5 6H9.70588H9.46906C7.38336 6 6.34051 6 5.74427 6.66616C5.14803 7.33231 5.2632 8.36878 5.49353 10.4417L5.60464 11.4417Z"
                fill="#323232"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <path
                d="M5.60464 11.4417C5.79269 13.1343 5.88672 13.9805 6.45624 14.4903C7.02576 15 7.87723 15 9.58017 15H9.70588H13.4706H14.827C16.0002 15 16.5867 15 17.0627 14.7134C17.5387 14.4268 17.8132 13.9084 18.3621 12.8716L20.8303 8.20947C21.361 7.207 20.6343 6 19.5 6V6H9.70588H9.46906C7.38336 6 6.34051 6 5.74427 6.66616C5.14803 7.33231 5.2632 8.36878 5.49353 10.4417L5.60464 11.4417Z"
                stroke="#323232"
                strokeWidth="1"
                strokeLinejoin="round"
              />
              <path
                d="M3 3H3.5V3C4.1642 3 4.72218 3.49942 4.79553 4.15955L5.55558 11"
                stroke="#323232"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18C8.32843 18 9 18.6716 9 19.5Z"
                stroke="#323232"
              />
              <path
                d="M18 19.5C18 20.3284 17.3284 21 16.5 21C15.6716 21 15 20.3284 15 19.5C15 18.6716 15.6716 18 16.5 18C17.3284 18 18 18.6716 18 19.5Z"
                stroke="#323232"
              />
            </svg>
          </button>

          <button
            type="button"
            className={`${menuButtonClicked ? 'menu-svg-button clicked' : 'menu-svg-button'}`}
            onClick={handleMenuButtonClick}
          >
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                opacity="0.1"
                d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                fill="#323232"
              />
              <path
                d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                stroke="#323232"
              />
              <path
                d="M12.0049 16.005L12.0049 15.995"
                stroke="#323232"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0049 12.005L12.0049 11.995"
                stroke="#323232"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0049 8.005L12.0049 7.995"
                stroke="#323232"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className={`${accountButtonClicked ? 'menu-svg-button clicked' : 'menu-svg-button'}`}
            onClick={handleAccountButtonClick}
          >
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                opacity="0.1"
                d="M13 9.5C13 11.433 11.433 13 9.5 13C7.567 13 6 11.433 6 9.5C6 7.567 7.567 6 9.5 6C11.433 6 13 7.567 13 9.5Z"
                fill="#323232" />
              <path
                d="M15.6309 7.15517C15.9015 7.05482 16.1943 7 16.4999 7C17.8806 7 18.9999 8.11929 18.9999 9.5C18.9999 10.8807 17.8806 12 16.4999 12C16.1943 12 15.9015 11.9452 15.6309 11.8448"
                stroke="#323232"
                strokeLinecap="round" />
              <path
                d="M3 19C3.69137 16.6928 5.46998 16 9.5 16C13.53 16 15.3086 16.6928 16 19"
                stroke="#323232"
                strokeLinecap="round" />
              <path
                d="M17 15C19.403 15.095 20.5292 15.6383 21 17"
                stroke="#323232"
                strokeLinecap="round" />
              <path
                d="M13 9.5C13 11.433 11.433 13 9.5 13C7.567 13 6 11.433 6 9.5C6 7.567 7.567 6 9.5 6C11.433 6 13 7.567 13 9.5Z"
                stroke="#323232" />
            </svg>
          </button>
        </nav>
      </div>

    </div>
  );
}
