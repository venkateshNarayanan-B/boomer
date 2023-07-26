import React, { useContext, useEffect, useState } from 'react'
import AdminLayout from '../../../components/layout/AdminLayout'
import dynamic from 'next/dynamic'
import { Button, Col, Image, Input, Modal, Row, Select } from 'antd'
import axios from 'axios'
import "react-quill/dist/quill.snow.css";
import { modules, formats } from '../../../components/Editor'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
import { UploadOutlined } from '@ant-design/icons'
import Media from '../../../components/media'
import { MediaContext } from '../../../context/media'



const Editor = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const { Option } = Select;
const New = () => {
  const router = useRouter();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState([]);
  const [loadedCategories, setLoadedCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleMedia, setVisibleMedia] = useState(false);
  const [media, setMedia] = useContext(MediaContext);

  useEffect(()=>{
    loadCategories();
  }, []);

 
 
 
  const loadCategories = async()=>{
    try {
      
      await axios.get('/categories')
            .then(response => {
                const { data } = response;
                setLoadedCategories(data);
            })
            .catch(error => {
                console.log(error);
            });
    } catch (error) {
      console.log(error);
    }
  }

  const handlePublish = async () =>{
    setLoading(true);
    try {
      await axios.post('/create-post', {title, content,categories, featuredImage: media?.selected?._id,})
      .then(response =>{
        
        const { data } = response;
        if(data?.error){
          toast.error(data.error);
          setLoading(false);
        }else{
          toast.success('Poast Created Successfully!');
          setLoading(false);
          setMedia({...media, selected: ""})
          router.push('/admin/posts');
        }
        
      })
      .catch(error =>{
        console.log(error);
        toast.error('Creat Poast Failed!');
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      toast.error('Creat Poast Failed!');
      setLoading(false);
    }
  }
  
  return (
    <AdminLayout>
        
        <Row style={{height: '100vh'}}>
          <Col offset={1} lg={16} sm={22} xs={22}>
            <h1>Create New Post</h1>
            <Input size='large' value={title} placeholder='Give your post title...' onChange={(e)=> setTitle(e.target.value)}/><br/><br/>
            <Editor 
            modules={modules} 
            formats={formats} 
            style={{backgroundColor: "white", height: "60vh"}}  
            value={content} 
            onChange={(value)=> 
            setContent(value)} 
            />
          </Col>

          <Col offset={1} lg={4} sm={22} xs={22}>
            {/*--Media section --*/}
           <Button type='dashed' style={{margin: '15px 0px 10px 0px', width: '100%'}} icon={<UploadOutlined />} onClick={()=> setMedia({...media, showMediaModal: true})}>Featured Image</Button>
           
           <Modal 
           open={media?.showMediaModal} 
           title='Media' 
           onOk={()=>setMedia({...media, showMediaModal: false})} 
           onCancel={()=>setMedia({...media, showMediaModal: false})} 
           width={800} 
           footer={null} >
              <Media />
           </Modal>
           
           <h4>Categories</h4>
            <Select mode="multiple"  allowClear={true} placeholder="Select Categories" style={{width: "100%"}} onChange={(e) => setCategories(e)}>
              {loadedCategories.map((item)=> <Option key={item.name}>{item.name}</Option>)}
            </Select>
            <br /><br />
            {media?.selected && ( <Image width="100%" src={media?.selected.url}/>)}
            <Button type='primary' style={{margin: '15px 0px 10px 0px', width: '100%'}} onClick={handlePublish} loading={loading}>Publish</Button>
            
          </Col>
        </Row>
        
    </AdminLayout>
  )
}

export default New