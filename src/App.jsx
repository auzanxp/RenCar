import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ContextProvider } from "./contex/AppContex";

export default function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <AppRoutes />
      {/* <ToastContainer /> */}
      </ContextProvider>
    </BrowserRouter>
  );
}
