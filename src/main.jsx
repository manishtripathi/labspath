import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import App from "./App";
import "./index.css"
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toast";



const root = createRoot(document.getElementById("root")); // Ensure this is your entry point
root.render(
    
<BrowserRouter>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <ToastContainer 
        position="top-right" 
        autoClose={1000} 
        delay={1000}
        hideProgressBar={false} 
        newestOnTop={true} 
        closeOnClick 
        pauseOnHover
        draggable 
      />
    </PersistGate>
  </Provider>
  </BrowserRouter>
);
