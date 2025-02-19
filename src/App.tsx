import './App.css';
import Items from './Components/ItemsListView/ItemsPage/ItemsPage.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ItemDetailsPageLayout from './Components/ItemDetailView/PageLayout/ItemDetailsPageLayout.tsx';
import Cart from './Components/Cart/Cart.tsx';

export default function Home() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Items></Items>,
      children: [
        // Add more routes here
      ]
    },
    {
      path: '/profile',
      element: <div>About page</div>
    },
    {
      path: '/cart',
      element: <Cart></Cart>
    },
    {
      path: '/item/:itemId',
      element: <ItemDetailsPageLayout></ItemDetailsPageLayout>
    },
    {
      path: '*',
      element: <div>Page not found</div>
    }
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}
