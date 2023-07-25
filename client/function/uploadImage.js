import Resizer from 'react-image-file-resizer'

export const resizeFile = (file) =>{
    return new Promise((resolve) => {
      Resizer.imageFileResizer(file, 720, 400, 'JPEG', 100, 0, (uri) =>{ resolve(uri); }, 'base64');
    });
  }
  
export  const uploadImage = async (file) =>{
    try {
      const image = await resizeFile(file);
      
      await axios.post('/upload-image', { image })
                  .then(response => {
                    console.log(response.data);
                  })
                  .catch(error => {
                    console.log(error);
                  });
    } catch (error) {
      console.log(error);
    }
  }