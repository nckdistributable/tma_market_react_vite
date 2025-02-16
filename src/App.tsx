import './App.css';
import Items from './Components/ItemsListView/ItemsPage/ItemsPage.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ItemDetailsPageLayout from './Components/ItemDetailView/PageLayout/ItemDetailsPageLayout.tsx';

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
      element: <div>Cart page</div>
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
