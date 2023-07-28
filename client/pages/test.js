import axios from 'axios';
import { useEffect, useState } from 'react';


const MyComponent = () => {
  const [mail, setMail] = useState();

  useEffect(()=>{
    sendMail();
  },[]);

  const sendMail = async() =>{
    try {
      const input = {
        from: '"Code Z Spring" <codezspring@gmail.com>', // sender address
        to: "mail2boomer@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      };

      await axios.post('/send-mail', input)
      .then(response =>{
       const { data } = response;
       console.log(data);
       setMail(data);
      })
      .catch(error =>{
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <pre>{JSON.stringify(mail, null, 4)}</pre>
  );
};

export default MyComponent;
