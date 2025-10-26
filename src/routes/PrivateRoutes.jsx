import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                    <div className="w-12 h-12 border-4 border-t-[#38a3a5] border-gray-200 rounded-full animate-spin"></div>
                </div>;
    }

    if (!user) {
        return <Navigate to="/signin" state={location.pathname}> </Navigate>;
    }
  
    return children;
};

export default PrivateRoutes;