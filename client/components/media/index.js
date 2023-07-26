import { Tabs } from 'antd'
import React from 'react'
import UploadFile from './UploadFile';
import MediaLibrary from './MediaLibrary';

const index = () => {

    const TabPane = Tabs;
    const items = [
        { key: '1', label: 'Upload Files', children: <UploadFile />},
        { key: '2', label: 'Media Library', children: <MediaLibrary />},
    ]
    return (
        <Tabs defaultActiveKey="1" items={items} />
            
    )
}

export default index