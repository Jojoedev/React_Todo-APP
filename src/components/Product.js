import { useState } from "react";
import NewTask from "../NewTask";
import { FaTimes } from "react-icons/fa";
import classes from '../style.module.css';
import {FaMarker} from 'react-icons/fa';
import UpdateTodo from './UpdateTodo';

const Product = () =>{
    
    
    const [products, setProduct] = useState([
        {
            id: 1,
            name: 'Peak Milk',
            category: 'Beverages',
            quantity: 20,
            price: 3400
        },
        {
            id: 2,
            name: 'Bread',
            category: 'Staple',
            quantity: 120,
            price: 800
        },
        {
            id: 3,
            name: 'Orange',
            category: 'Fruits',
            quantity: 60,
            price: 40
        }
    ])
    
    const [text, setText] = useState(false)


    const ChangeText = () =>{
    setText(!text)
    }
  
    const AddTask = (product) =>{     

        setProduct([...products, product])
    }

const OnDelete = (id) =>{

setProduct(products.filter((product) =>product.id !== id))
}
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

const UpdateTodo = (product) =>{
    //To display input data on the UI.
    setId(product.id)
    setName(product.name)
    setCategory(product.category)
    setQuantity(product.quantity)
    setPrice(product.price)
}


const onUpdateSubmit = (e) =>{
    //This prevent submitting input data to the browser.
    e.preventDefault();

    //This is validating that form was duly completed.
if(!name ||!category ||!quantity || !price){
    return;
}
//This is calling UpdateTodo function and passing product properties.
UpdateTodo({name, category, quantity, price})

}

    return(
        <div>
            <h3>Todo Application</h3>
        
            <div className="products">
                
                <button style={{width: '100px'}} className={classes.NewBtn} onClick={ChangeText} class="btn btn-primary"> {text? "Add" : "List"}</button>               
                
                <NewTask onCreateTask = {AddTask} />
                <br></br>
                <h3>........................................................................ </h3>
                {!text &&  products.map((product) =>(
                    
                   <table> 
                    
                    <fieldset>
                        
                   <label>Name  : </label>  {product.name} <FaTimes className={classes.fa} onClick={(() => OnDelete(product.id))} /> <br></br>
                    <label>Category  :</label>  {product.category} <FaMarker className={classes.FaMarker} onClick={(() => UpdateTodo(product))} /> <br></br>
                   <label>Quantity  :</label>  {product.quantity} <br></br>
                    <label>Price  : </label>  {product.price}
                    </fieldset>
                    <h3>........................................................................ </h3>
                </table>
                    
                ))}
                <h3>Update Page</h3>
                <span></span>  <span></span>
            <form className={classes.form} onSubmit ={onUpdateSubmit}>
              <fieldset>
                
               <div>
                
                <label>Name</label>
                <input type="text" value={name} onChange={((e) => setName(e.target.value))} placeholder="Name" />
                </div>

                <div>
                <label>Category</label>
                <input type="text" value={category} onChange={((e) => setCategory(e.target.value))} placeholder="Category" />
                </div>

                <div>
                <label>Quantity</label>
                <input type="number" min="1" max="200" value={quantity} onChange={((e) => setQuantity(e.target.value))} placeholder="Quantity" />
                </div>
                <div>
                <label>Price</label>
                <input type="number" min="100"  value={price} onChange={((e) => setPrice(e.target.value))} placeholder="Price" />
                </div>
                <input type="submit" value="Submit" style={{width: '100px'}} class="btn btn-primary" />
                </fieldset>
            </form>
                    
                    
                     
            </div>
            </div>
    );
}

export default Product;