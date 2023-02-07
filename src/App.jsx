import { CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Layout from "./Layout/Layout";
import Dashboard from "./container/Dashboard";
import Products from "./container/Product";
import Customers from "./container/Customers";
import Transactions from "./container/Transactions";
import Geography from "./container/Geography";
import Overview from "./container/Overview";
import Daily from "./container/Daily";
import Monthly from "container/Monthly";
import Breakdown from "container/Breakdown";
import Admin from "container/Admin";
import Performance from "./container/Performance";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="App">
      <BrowserRouter> 
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/customers" element={<Customers/>}/>
            <Route path="/transactions" element={<Transactions/>}/>
            <Route path="/geography" element={<Geography/>}/>
            <Route path="/overview" element={<Overview/>}/>
            <Route path="/daily" element={<Daily/>}/>
            <Route path="/monthly" element={<Monthly/>}/>
            <Route path="/breakdown" element={<Breakdown/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/performance" element={<Performance/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
