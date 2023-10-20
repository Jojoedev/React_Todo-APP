import classes from './style.module.css';
import { useState } from "react";


const NewTask = ({ onCreateTask }) =>{

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    
    
const onSubmit = (e) =>{
    e.preventDefault()

    if(!name  || !category || !quantity || !price){
        alert("Complete all the fields")
        return;
    }
    const id = Math.floor(Math.random() * 1000) +1;
        
    //const newProduct = {id, ...product}

    onCreateTask({ id, name, category, quantity, price})
    
   //console.log(name)
    setName("")
    setCategory("")
    setQuantity("")
    setPrice("")
}


    return(
        <div>
            <span></span>  <span></span>
            <form className={classes.form} onSubmit ={onSubmit}>
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
    );
}

export default NewTask;