import React, { useContext, useEffect, useState } from 'react'
import { CloseCircleOutlined, InboxOutlined } from '@ant-design/icons';
import { AuthContext } from '../../context/auth';
import { Badge, Image, Upload, message } from 'antd';
import { SERVERURL } from '../../config';
import { MediaContext } from '../../context/media';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const MediaLibrary = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [media, setMedia] = useContext(MediaContext);
  const [viewPreview, setViewPreview] = useState(false);

  useEffect(()=>{
    fetchMedia();
  }, []);

  const fetchMedia = async()=>{
    try {
      await axios.get('/media')
      .then(response =>{
        const { data } = response;
        setMedia((prev)=>({...prev, images: data}));
      })
      .catch(error =>{
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }

  const { Dragger } = Upload;  
  const props = {
        name: 'file',
        multiple: true,
        action: `${SERVERURL}/upload-image-file`,
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
            setMedia({
              images: [...media.images, info.file.response],
              selected: info.file.response,
              showMediaModal: false,
            });
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    const handleDelete = async(id) =>{
      try {
        await axios.delete(`media/${id}`)
        .then(response =>{
          const { data } = response;
          if(data.ok){
            setMedia({...media, images: media.images.filter((image)=> image._id !== id), selected: ""});
            toast.success('Media Deleted Succesfully!');
          }
        })
        .catch(error =>{
          console.log(error);
          toast.error('Delete Media Failed!');
        });
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <>
    <Dragger {...props}>
      <p className="ant-upload-drag-icon"><InboxOutlined /></p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
    </Dragger>
    <div style={{textAlign: "center"}}>
      {media?.images?.map((image) =>(
        <Badge>
        <Image 
        onClick={()=>setMedia({...media, selected: image})}
        src={image.url} 
        style={{
          paddingTop: 5,
          paddingRight: 10,
          height: "100px",
          width: "100px",
          objectFit: "cover",
          cursor: "pointer"
        }} 
        key={image._id} 
        preview={viewPreview} 
        /><br />
        <CloseCircleOutlined style={{marginTop: "5px", color: "red"}} onClick={()=>handleDelete(image._id)}/>
        </Badge>
      ))}
      
    </div>
    </>
  )
}

export default MediaLibrary