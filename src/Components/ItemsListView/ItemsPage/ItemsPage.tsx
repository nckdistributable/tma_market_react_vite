import { useState } from "react";
import './Items.css';
import Item from "../Item/Item";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";
import StickyBottomMenu from "../../StickyBottomMenu/StickyBottomMenu";

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
      <StickyBottomMenu></StickyBottomMenu>
    </div>
  );
}
