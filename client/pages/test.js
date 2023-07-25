import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const MyComponent = () => {
  const [editorHtml, setEditorHtml] = useState('');
  const editorRef = useRef();

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const apiPostNewsImage = async (formData) => {
    try {
      // Implement your API post here to upload the image and get its URL
      // You can use axios or fetch to make the API call
      // Example:
      // const response = await axios.post('/upload-image', formData);
      // return response.data.imageURL;

      // For now, we'll return a placeholder URL
      return 'https://example.com/images/foo.png';
    } catch (error) {
      console.error('Error uploading image', error);
      throw error;
    }
  };

  const imageHandler = () => {
    if (typeof window === 'undefined') return; // Check if we are in the browser environment

    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();

      formData.append('image', file);

      if (!editorRef.current) return;

      // Save current cursor state
      const quill = editorRef.current.getEditor();
      const range = quill.getSelection(true);

      // Insert temporary loading placeholder image
      quill.insertEmbed(range.index, 'image', `${window.location.origin}/images/loaders/placeholder.gif`);

      // Move cursor to the right side of the image (easier to continue typing)
      quill.setSelection(range.index + 1);

      try {
        // Call the API to upload the image
        const imageURL = await apiPostNewsImage(formData);

        // Remove placeholder image
        quill.deleteText(range.index, 1);

        // Insert the uploaded image
        quill.insertEmbed(range.index, 'image', imageURL);
      } catch (error) {
        console.error('Error uploading image', error);
        // Handle error if needed
      }
    };
  };

  return (
    <div className="text-editor">
      {JSON.stringify(editorHtml)}
      <hr />
      <ReactQuill
        ref={editorRef}
        onChange={handleChange}
        placeholder="Type something..."
        modules={{
          toolbar: {
            container: [
              [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
              [{ size: [] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link', 'video'],
              ['link', 'image', 'video'],
              ['clean'],
              ['code-block'],
            ],
            handlers: {
              image: imageHandler,
            },
          },
        }}
      />
    </div>
  );
};

export default MyComponent;
