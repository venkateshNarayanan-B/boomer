import React, { useContext, useEffect, useState } from 'react';
import { PlusCircleOutlined, CloudOutlined, UserOutlined, LoginOutlined, LogoutOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import ToggleTheme from './ToggleTheme';
import { ThemeContext } from '../context/theme';
import Link from 'next/link';
import { AuthContext } from '../context/auth';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';



const TopNav = () => {
  const router                = useRouter();
  const [current, setCurrent] = useState('mail');
  const [auth, setAuth]       = useContext(AuthContext);
  
 
  function getItem(itempath = null, itemlabel = null, itemkey = null, itemicon = null, itemchildren = null, itemtype = null, itemclick = null, itemstyle = null){
    const items = {};
    !itempath ? null : items.path = itempath;
    !itemlabel ? null : items.label = itemlabel;
    !itemkey ? null : items.key = itemkey;
    !itemicon ? null : items.icon = itemicon;
    !itemchildren ? null : items.children = itemchildren;
    !itemtype ? null : items.type = 'group';
    !itemclick ? null : items.onClick = itemclick;
    !itemstyle ? null : items.style = itemstyle;
     return items;
  };

  const roleBasedLink = () =>{
    if(auth?.user?.role === "Admin"){
      return '/admin';
      }else if(auth?.user?.role === "Author"){
      return '/author';
      }else{
      return '/subscriber';
      }
  }
  const items = [
    getItem('/', <Link href='/'>Boomer</Link>, 'home', <CloudOutlined />),
    //----connents----
    auth && auth.user === null && getItem('/signup', <Link href='/signup'>Signup</Link>, 'signup', <PlusCircleOutlined />,'','','',{marginLeft: "auto"}),
    //----profile----
    auth && auth.user === null && getItem('/signin', <Link href='/signin'>Signin</Link>, 'signin', <LoginOutlined />),
    
    //----customize----
    //----users----
    auth && auth.user !== null &&  getItem('',auth.user.name, 'sub3', <UserOutlined />, [
      getItem('', <Link href={roleBasedLink()}>Dashboard</Link>, 'adminUsersNew'),

    ],'','',{marginLeft: "auto"}),
    auth && auth.user !== null && getItem('', 'Signout', 'signout', <LogoutOutlined />,'','',()=>signOut()),
    getItem('', <ToggleTheme />),
  ];
 
  const signOut = ()  =>  {
    
    setAuth({user:null,token:''});
    localStorage.removeItem('auth');
    toast.success('Signed Out Successfully');
    router.push('/signin');
    
  }

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const [theme, setTheme]   =   useContext(ThemeContext);
  
  return  <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal"  theme={theme} items={items}/>;
};

export default TopNav;
/* 

*/