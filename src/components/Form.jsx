import React, {useCallback ,useState} from 'react'
import { useDropzone } from 'react-dropzone';

const Form =()=> {
  const [files, setFiles]= useState([])
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles?.length){
      setFiles(previousFiles => [
        ...previousFiles,
        ...acceptedFiles.map(File =>
          Object.assign(File, {preview: URL.createObjectURL(File)})
          )
      ])
    }
    console.log(acceptedFiles)
    alert(`successfully droped the file ${acceptedFiles}`)
  },[])
  const {getRootProps, getInputProps, isDragActive}= useDropzone({onDrop})
   
    const [formData, setFormData] = useState({name: "",message: ""});
   
// const Dropzone =()=>{
//   const onDrop = useCallback(acceptedFiles => {
//     console.log(acceptedFiles)
//   },[])
//   const {getRootProps, getInputProps}= useDropzone({onDrop})

    

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

  //   const  [inputValue, setInputValue] =  useState('');

	// const  handleChange = (event) => {
	// 	setInputValue(event.target.value);
	// };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // alert(`Name: ${formData.name}, Modal: ${formData.message}`
      
      // );
      console.log (formData.name);
  };
  


  return (
    

    <>
    <div className='box'>
<form className='form'  onSubmit={handleSubmit}>
      <strong htmlFor="name">Name:</strong>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className='inputdet' placeholder='Name Of Modal'/><br/><br/>

      

      
      {/* <div >
      <input type='file' id="message" name="message" value={formData.message} onChange={handleChange} className='modal' placeholder='Link Of Modal'/><br/><br/>
      </div> */}

<strong htmlFor="message"
      
      >3D Modal:</strong> 
       <div {...getRootProps()}> 
      <input type='file' 
       {...getInputProps()} />
      {isDragActive ?(
        <p>drop file here ...</p>
      ): (
        <p>drag and drop file here or click to select files</p>
      )
    }
      </div>
      <button type="submit" className='button'>Submit</button>
    </form>
    
    </div>
    <div>
      <ul>
        {files.map(File =>(
          <li key={File.name}>{File.name}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Form
