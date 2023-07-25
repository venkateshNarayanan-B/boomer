import React, { useContext, useEffect, useState } from 'react';
import {
  PictureOutlined,
  ContainerOutlined,
  SettingOutlined,
  MessageOutlined,
  DashboardOutlined,
  TeamOutlined,
  FormatPainterOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { ThemeContext } from '../../context/theme';
import Link from 'next/link';
import { useWindowWidth } from '@react-hook/window-size';


const { Sider } =   Layout;
function getItem(itempath = null, itemlabel = null, itemkey = null, itemicon = null, itemchildren = null, itemtype = null){
    const items = {};
    !itempath ? null : items.path = itempath;
    !itemlabel ? null : items.label = itemlabel;
    !itemkey ? null : items.key = itemkey;
    !itemicon ? null : items.icon = itemicon;
    !itemchildren ? null : items.children = itemchildren;
    !itemtype ? null : items.type = 'group';

     return items;
};

const items = [
  getItem('/admin', <Link href='/admin'>Dashboard</Link>, 'adminDashboard', <DashboardOutlined />),
 //----posts----
  getItem('','Posts', 'sub1', <ContainerOutlined />, [
    getItem('/admin/posts', <Link href='/admin/posts'>All Posts</Link>, 'adminAllPosts'),
    getItem('/admin/posts/new', <Link href='/admin/posts/new'>New Post</Link>, 'adminNewPost'),
    getItem('/admin/categories', <Link href='/admin/categories'>Categories</Link>, 'adminCategories'),
  ]),
//----media----
  getItem('','Media', 'sub2', <PictureOutlined />, [
    getItem('/admin/media/library', <Link href='/admin/media/library'>Library</Link>, 'adminMediaLibrary'),
    getItem('/admin/media/new', <Link href='/admin/media/new'>Add New</Link>, 'adminMediaNew'),

  ]),
//----connents----
getItem('/admin/comments', <Link href='/admin/comments'>Comments</Link>, 'adminComments', <MessageOutlined />),
//----users----
getItem('','Users', 'sub3', <TeamOutlined />, [
  getItem('/admin/users', <Link href='/admin/users'>All Users</Link>, 'adminUsers'),
  getItem('/admin/users/new', <Link href='/admin/users/new'>Add New</Link>, 'adminUsersNew'),

]),
//----profile----
getItem('/admin/userId', <Link href='/admin/userId'>Profile</Link>, 'adminProfile', <SettingOutlined />),
//----customize----
getItem('/admin/customize', <Link href='/admin/customize'>Customize</Link>, 'adminCustomized', <FormatPainterOutlined />),
];

const AdminNav = () => {
 //----states----
 
  const [theme, setTheme] = useContext(ThemeContext);
  

  const onlyWidth   = useWindowWidth();
 
  //--- get the key value from items ----
  function getKeyFromPathname(pathname, items) {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.path === pathname) {
        return item.key;
      } else if (item.children && item.children.length > 0) {
        const childKey = getKeyFromPathname(pathname, item.children);
        if (childKey) {
          return childKey;
        }
      }
    }
    return null;
  }
  //----Current link active----
  const [current,setCurrent] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    const key  = getKeyFromPathname(path, items);
    process.browser && setCurrent(key);
  }, [process.browser && window.location.pathname]);
  //----sider collapse when window screen reduces ----
  const[collapsed, setCollapsed]  = useState(false);

  useEffect(() =>{
    if(onlyWidth < 800){
      setCollapsed(true);
    }else if(onlyWidth > 800){
      setCollapsed(false);
    }
  }, [onlyWidth < 800])
  return (
    
    <Sider theme = {theme} collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
     <Menu
        selectedKeys={current}
        defaultOpenKeys={['sub1','sub2','sub3']}
        mode="inline"
        theme={theme}
        items={items}
      />
    </Sider>
    
  );
};

export default AdminNav;