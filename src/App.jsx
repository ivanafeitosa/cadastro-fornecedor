import Paths from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services";


import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";




const App = () => {
  

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Paths />
      </QueryClientProvider>
      
    </>
  );
}

export default App;
