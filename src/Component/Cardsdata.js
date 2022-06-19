import React,{useState} from 'react';
import Cart from '../Items/Cart';



const Cardsdata = () => {
    const[products]=useState([
        {
            id:"1",
            name:"Papaya Seeds",
            price:"150",
            image:"https://i.pinimg.com/564x/5a/c2/3a/5ac23a45f82214d1df07ef8050375b53.jpg",
        },
        {
            id:"2",
            name:"Watermelon Seeds",
            price:"160",
            image:" https://i.pinimg.com/564x/18/ce/ea/18ceea4a9f1acd606b4ed798b7016113.jpg",
        },
        {
            id:"3",
            name:"Avacado Seed",
            price:"200",
            image:"https://i.pinimg.com/564x/f2/d2/46/f2d24665c5b1d43b8b7726a7edc545bf.jpg",
        },
        {
            id:"4",
            name:"Cucumber Seeds",
            price:"90",
            image:" https://i.pinimg.com/564x/bc/3f/db/bc3fdb50c4813f48de4a1cf917ba477a.jpg",
        },
        {
            id:"5",
            name:"Apple Seeds",
            price:"250",
            image:" https://i.pinimg.com/564x/e7/25/6d/e7256d328c202aedbd1393738bb07cad.jpg",
        },
        
         
        
    ])
    const Addtocart=()=>{
        console.log("clicked!..")
    }
    return (
        <div className="products-page">
           
            {products.map((product,id)=>(
          <div className="products" key={id}>
              <img  className="size" src={product.image} alt={product.name} ></img>
              <h5>{product.name}</h5>
              <h5>Rs.{product.price}</h5>
              
              <button onClick={Addtocart}>Add to cart</button>

              </div>
            ))}
            
           
            
        </div>
    );
};

export default Cardsdata;