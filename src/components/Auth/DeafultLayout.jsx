import React from 'react';
import { useStateContext } from '../../assets/Context/ContextProvide';
import { Navigate, Outlet } from 'react-router-dom';

function DefaultLayout() {
  // const { access_token, allusers } = useStateContext();
  // const currentUser = allusers.find(user => user.access_token === access_token);
  // if (currentUser) {
  //   if (currentUser.Role === 'admin') {
  //     return <Navigate to='/admin'/>
  //   } else if (currentUser.Role === 'user') {
  //     return <Navigate to='/'/>
  // }
  // }
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
