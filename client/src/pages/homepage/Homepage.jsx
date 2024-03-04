import React, { useEffect, useState } from 'react'
import "./homepage.scss"
import Product from '../../components/navbar/product/Product'
import Label from '../../components/navbar/label/Label'
import { Link } from 'react-router-dom'
import { AiFillCamera, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import SliderComponent from '../../components/slider/Slider'
import { sliderData } from '../../data'
import Loader from '../../components/loader/Loader'
import makeApiRequest from '../../utils/makeApiRequest'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase"
import { useSelector } from 'react-redux'
import Header from '../../components/Header/Header'
import Desc from '../../components/Description/Desc'
import Testimonials from '../../components/testimonials/Testimonials'


const Homepage = ({ setOpen, open }) => {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [success, setSuccess] = useState(false)
  const [productsLoading, setProductsLoading] = useState(false)

  const [productDetails, setProductDetails] = useState({
    productName: "",
    productDesc: "",
    price: "",
    cat: "",
    usedTime: "",
    address: "",
    image:""
  })

  const token = useSelector((state)=>state.user.currentUser.accesstoken)

  const api = makeApiRequest(token)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((pre) => {
      return {
        ...pre, [name]: value
      }
    })
  }

  const handleSelect = (e) => {
    productDetails.cat = e.target.value;
  }

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
      console.log(downloadURL)
      productDetails.image = downloadURL;
      uploadProduct()
      setSuccess(true)
      setTimeout(() => {
      window.location.reload();
      }, 3000);
    });
  }
);
  }

  const uploadProduct = async () =>{
    try{
      const response = await api.post(`${import.meta.env.VITE_REACT_APP_URI}/products/add`,productDetails)
      console.log(response)
      setLoading(false)
    }catch(err){
      console.log(err)
    }
  }


  useEffect(() => {
    const fetchLatest = async () => {
      setProductsLoading(true)
      try {
        const resPonse = await api.get(`${import.meta.env.VITE_REACT_APP_URI}/products?latest=true`)
        setProducts(resPonse.data)
        setProductsLoading(false)
      } catch (err) {
        console.log(err)
        setProductsLoading(false)
      }
    }
    fetchLatest()
  }, [])

  return (
    <div className={`homepage`}>
      <Header />
      <div className={`homepage-wrapper`}>
        {/* <SliderComponent /> */}
        {
          open &&
          <div className="sell">
            {
              loading ?
                <Loader />
                :
                success ?
                <div className="uploaded">
                <b>product uploaded successfully redirecting to homepage <AiOutlineCheck className='tick' /></b>
                <b className='wait'>please wait...</b>
                </div>
                :
                <>
                  <div className="sell-top">
                    <b>UPLOAD AN ITEM NOW</b>
                    <AiOutlineClose className='AiOutlineClose' onClick={() => setOpen(false)} />
                  </div>
                  <div className="sell-mid">
                    <h2>ADD PRODUCT IMAGE</h2>
                    <div className="div-img">
                      <label htmlFor='file'>
                        <AiFillCamera />
                      </label>
                      <img src={file ? URL.createObjectURL(file) : "https://cdn-icons-png.flaticon.com/512/4211/4211763.png"} alt="" />
                    </div>
                    <input id='file' type="file" onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }} />
                  </div>
                  <div className="sell-bottom">
                    <select className='cat-options' name='cat' onChange={handleSelect}>
                      <option value={null}>Select Category</option>
                      <option value="select category">Mobile</option>
                      <option value="laptop">Laptop</option>
                      <option value="electronics">Electronics</option>
                      <option value="charger">Charger</option>
                      <option value="matrices">Matrices</option>
                      <option value="kitchen">Kitchen</option>
                      <option value="gym">Gym Eqipments</option>
                      <option value="others">Others</option>
                    </select>
                    <input type="text" name='productName' placeholder='enter your product complete Name' onChange={handleChange} />
                    <textarea name="productDesc" id="" cols="30" rows="10" placeholder='enter product description...' onChange={handleChange}></textarea>
                    <div className="price-add">
                      <input type="number" name='price' className='price' placeholder='enter price' onChange={handleChange} />
                      <input type="text" name='address' className='price-input' placeholder='enter address' onChange={handleChange} />
                    </div>
                    <div className="upload-product">
                      <input type='number' name='usedTime' className="price" placeholder='used months' onChange={handleChange}></input>
                      <button onClick={uploadItem}>UPLOAD</button>
                    </div>
                  </div>
                </>
            }
          </div>
        }
      </div>
      <Desc />
      <div id='PRODUCTS' className="products">
        <p className='p-head'>Featured Items</p>
        {
          productsLoading ?
          <p>Loading....</p>
          :
          <div className="products-wrapper">
          {
            products.map((p) => {
              return (
                <Product p={p} key={p._id} />
              )
            })
          }
        </div>
        }
      </div>
      <Testimonials />
    </div>
  )
}

export default Homepage
