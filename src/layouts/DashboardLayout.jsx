import React from 'react';
import LeftAside from '../pages/RoleWIseDashboard/LeftAside';
import { Outlet } from 'react-router';

const DashboardLayout = () => {


    return (
        <div className='flex min-h-screen bg-gray-50'>
            <div className="hidden lg:block w-64 bg-white border-r border-gray-200">
                <LeftAside></LeftAside>
            </div>
            <div className='flex-1 p-4 overflow-y-auto  min-h-0 bg-[#F4F7FF]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;