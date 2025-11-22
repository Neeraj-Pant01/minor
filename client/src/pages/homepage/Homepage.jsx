import React, { useEffect, useState } from 'react'
import "./homepage.scss"
import Product from '../../components/navbar/product/Product'
import Label from '../../components/navbar/label/Label'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AiFillCamera, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import SliderComponent from '../../components/slider/Slider'
import { posterData, sliderData, whatsnew } from '../../data'
import Loader from '../../components/loader/Loader'
import makeApiRequest from '../../utils/makeApiRequest'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase"
import { useSelector } from 'react-redux'
import Header from '../../components/Header/Header'
import Desc from '../../components/Description/Desc'
import Testimonials from '../../components/testimonials/Testimonials'
import Poster from '../../components/posters/Poster'
import More from '../../components/More/More'
import StarterComponent from '../../components/startercomponent/StarterComponent'
import Functionalities from '../../components/functionalities/Functionalities'


const Homepage = ({ setOpen, open }) => {
  const {pathname} = useLocation();
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [success, setSuccess] = useState(false)
  const [productsLoading, setProductsLoading] = useState(false)

  const navigate = useNavigate()

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
      <StarterComponent />
      <div className='flex mt-16 md:px-20 px-2 items-center justify-center md:gap-[50px] gap-4 md:flex-wrap'>
        {
          posterData.map((img,i)=><Poster img={img} key={i}/>)
        }
      </div>
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
                    <input type="text" name='productName' placeholder='enter your product Name' onChange={handleChange} />
                    <textarea name="productDesc" id="" cols="30" rows="10" placeholder='enter product description...' onChange={handleChange}></textarea>
                    <div className="price-add">
                      <input type="number" name='price' className='price' placeholder='price' onChange={handleChange} />
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
      {/* <Desc /> */}
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
        <div className='bg-[#FEBE10] mt-8 px-4 py-3 rounded-md'>LOTS MORE COMING SOON</div>
      </div>

      <Functionalities />

      <Testimonials />
      <div className='flex flex-col mt-20 items-center bg-[#f3f1f1] justify-center border'>
      <h1 className='text-center text-xl text-[#ffba00] pt-9 bg-[#f3f1f1]'>FIND WHAT'S NEW</h1>
        <h1 style={{lineHeight:"6rem"}} className='text-6xl font-bold'>WOW !</h1>
        <p style={{lineHeight:"2.5rem"}} className='md:text-3xl text-lg text-center w-[500px] font-semibold text-[rgba(0,0,0,0.7)]'>Shop New Products with direct easy Conversions with owner</p>
        <div className='allbtns flex items-center justify-center gap-6 mt-5 flex-wrap'>
          <button style={{backgroundColor:`${pathname === "/" ? "#ffba00" : "white"}`}} className='px-6 bg-[white] py-3 rounded-md'>HOMEPAGE</button>
          <button className='px-6 bg-[white] py-3 rounded-md' onClick={()=>navigate('/all')}>VIEW ALL</button>
          <button className='px-6 bg-[white] py-3 rounded-md' onClick={()=>navigate('/hot-deals')}>HOURLEY DEALS</button>
          {/* <button className='px-6 bg-[white] py-3 rounded-md'>UPLOAD PRODUCT</button> */}
        </div>
      </div>
      <div className='flex items-center justify-center md:px-[140px] flex-wrap border bg-[#f3f1f1] pb-9 pt-10'>
        {
          whatsnew.map((d,i)=><More d={d} key={i} />)
        }
      </div>
    </div>
  )
}

export default Homepage
