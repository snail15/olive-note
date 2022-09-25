import React, { Fragment } from 'react';
import { FaFire, FaHome } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <Fragment>
      <div className='fixed top-0 left-0 w-24 h-screen m-0 flex flex-col bg-primary text-white shadow-lg'>
        <SideBarIcon text='전체노트' icon={<FaHome size='28' />} />
        <SideBarIcon text='노트 추가' icon={<FaFire size='28' />} />
      </div>
    </Fragment>
  );
};

export default Sidebar;

const SideBarIcon: React.FC<any> = ({ icon, text }) => (
  <div className='sidebar-icon group'>
    {icon}
    <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
  </div>
);
