import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ContextProvider } from "./contex/AppContex";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <AppRoutes />
      </ContextProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}
