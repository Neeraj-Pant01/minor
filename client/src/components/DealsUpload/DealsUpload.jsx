import React, { useState } from 'react'
import "./style.scss"
import { AiFillCloseSquare } from 'react-icons/ai'
import makeApiRequest from '../../utils/makeApiRequest'
import {useSelector} from "react-redux"
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import app from '../../firebase'

const DealsUpload = ({setOn}) => {
  const [file, setFile] = useState(false)
  const [deal, setDeal] = useState({
    usedTime:null,
    productName:"",
    productDesc:"",
    closingTime:null,
    price:null
  })
  const [loading , setLoading] = useState(false)

  const token = useSelector((state)=>state.user.currentUser.accesstoken)
  const api = makeApiRequest(token)


  const uploadItem = async () => {
    let url;
    setLoading(true)
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
          break;
    }
  }, 
  (error) => {
    console.log(error)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      url = downloadURL;
      deal.productImage = url;
      uploadDeal()
      setLoading(false)
    });
  }
);
return url;
  }
  

  const uploadDeal = async () =>{
    setLoading(true)
    try{
      const response = await api.post(`${import.meta.env.VITE_REACT_APP_URI}/deals/`,deal)
      console.log(response)
      setLoading(false)
      window.location.reload();
    }catch(err){
      console.log(err)
      setLoading(false)
    }
  }

  const handleChange = (e) =>{
    const {value, name} = e.target;
    setDeal((pre)=>{
      return {
        ...pre, [name]:value
      }
    })
  }

  return (
    <>
    {
      loading ?
      <div className='loader'>
        <div className='load-icon'></div>
        <span>uploading...</span>
      </div>
      :
      <div className='DealsUpload'>
      <AiFillCloseSquare className='AiFillCloseSquare' onClick={()=>setOn(false)} style={{cursor:"pointer"}}/>
      <div className='d-uploaded'>
        <label htmlFor='up-pp'>
          <img src={file ? URL.createObjectURL(file) :'https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png'} />
        </label>
        <input type="file" id='up-pp' style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
        <div className='upload-desc'>
          <textarea name='productDesc' onChange={handleChange} placeholder='enter the product description'/>
        </div>
      </div>
      <div className='product-details'>
        <input type='text' name='productName' onChange={handleChange} placeholder='enter product name' />
        <input type='number' name='price' onChange={handleChange} placeholder='enter product price' />
        <input type='number' name='usedTime' onChange={handleChange} placeholder='used time in months' />
        <input type='number' name='closingTime' onChange={handleChange} placeholder='enter deal closing time in minutes' />
        <button className='u-deal' onClick={uploadItem}>UPLOAD DEAL</button>
      </div>
    </div>
    }
    </>
  )
}

export default DealsUpload
