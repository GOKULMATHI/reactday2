import React from 'react'
import img1 from "../Images/cloth2.jpeg";
import img2 from "../Images/cloth1.jpeg";
import img3 from "../Images/Pant2.jpeg"
import img4 from "../Images/Pant.jpg";
import img5 from "../Images/SHIRT.jpeg"
import img6 from "../Images/Shirt1.jpeg"
import img7 from "../Images/Shirt2.jpeg"
import img8  from "../Images/Shirt-Transparent.png"
import "../Components/Card.css"

export default function Card() {
  return (
    <section id='header3'>
    <div className='divmain'>
     <div className='product'>
        <img src={img1} alt="" />
        <h2>Children Wear</h2>
        <h2>Price : 499</h2>
        <h2>Type : Cotton</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img2} alt="" />
        <h2>Kutties</h2>
        <h2>Price : 599</h2>
        <h2>Type : Cotton </h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img3} alt="" />
        <h2>Pant</h2>
        <h2>Price : 999</h2>
        <h2>Type: Rayon</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img4} alt="" />
        <h2>Pant Combo</h2>
        <h2>Price : 2999</h2>
        <h2>Type : Jean</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
    </div>



    <div className='divmain'>
     <div className='product'>
        <img src={img5} alt="" />
        <h2>Shirt</h2>
        <h2>Price : 299</h2>
        <h2>Type : Cotton</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img6} alt="" />
        <h2>Shirt Combo</h2>
        <h2>Price : 499</h2>
        <h2>Type : Rayon </h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img7} alt="" />
        <h2>Shirt Combo</h2>
        <h2>Price : 399</h2>
        <h2>Type : Cotton</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img8} alt="" />
        <h2>Shirt</h2>
        <h2>Price : 350</h2>
        <h2>Type : Cotton</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>

    </div>
    </section>
  )
}
