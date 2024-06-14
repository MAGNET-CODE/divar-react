import { Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";

import AuthPage from "pages/AuthPage";
import HomePage from "pages/HomePage";
import AdminPage from "pages/AdminPage";
import DashboardPage from "pages/DashboardPage";
import PageNotFound from "pages/404";

function Router() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["profile"],
        queryFn: getProfile
      });
    console.log({data, isLoading,  error})

    if(isLoading) return <h1>loading...</h1>
  return (
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Router