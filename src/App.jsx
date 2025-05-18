import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import routes from "./routes/Routes";
import AppProviders from "./contexts/AppProvider";
import GlobalStyle from "./styles/styles";
import Spinner from "./ui/Spinner";

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <GlobalStyle />
      <AppProviders>
        <Suspense fallback={<Spinner />}>
          <RouterProvider router={router} />
        </Suspense>
      </AppProviders>
    </>
  );
}

export default App;
