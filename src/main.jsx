import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { DataProvider } from "./context/DataContext.jsx";
import App from "./pages/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/React-Final-Project">
      <ChakraProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
