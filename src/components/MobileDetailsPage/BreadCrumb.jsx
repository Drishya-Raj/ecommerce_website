import React from "react";
import { useLocation, Link } from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const routes = [
  {path:'/mobdetails',breadcrumb:'mobdetails'},
  {path:':/home',breadcrumb:'/home'}

]
export default function Breadcrumbs() {
  const location = useLocation();
  const breadcrumbs = useBreadcrumbs(routes);
  return(
    <div className="breadcrumbs">
      {breadcrumbs.map(({match,breadcrumb})=>(
        <Link key={match.url} to={match.url} className={match.pathname === location.pathname? "active":"not_active"}>{ breadcrumb}{' > '}</Link>
      ))}
    </div>
  )
}
