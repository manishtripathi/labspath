import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import App from "./App";
import "./index.css"
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";



const root = createRoot(document.getElementById("root")); // Ensure this is your entry point
root.render(
    
<BrowserRouter>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  </BrowserRouter>
);
