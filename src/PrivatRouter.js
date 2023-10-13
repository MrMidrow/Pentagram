import { Navigate, Outlet } from 'react-router-dom'

export default function PrivatRouter ({redirectPath = '/'}){
  if(!localStorage.getItem('token')){
    return <Navigate to={redirectPath} replace />
  }
  return <Outlet/>
}