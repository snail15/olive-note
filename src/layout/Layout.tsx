import { Fragment } from 'react';
import Sidebar from '../components/side-bar/Sidebar';
import './Layout.style.css';

const Layout: React.FC<any> = (props) => {
  return (
    <Fragment>
      <Sidebar />
      <main className='main'>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
