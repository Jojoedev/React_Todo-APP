import { useState } from 'react';
import photo1 from '../Assets/images/photo1.jpg';
import photo2 from '../Assets/images/photo2.jpg';
import photo3 from '../Assets/images/photo3.jpg';
import photo4 from '../Assets/images/photo4.jpg';
import photo5 from '../Assets/images/photo5.jpg';
import photo6 from '../Assets/images/photo6.jpg';
import classes from '../style.module.css';
import { FaTimes } from "react-icons/fa";
import Photos from './Photos';

const About = () =>{
    
    const [items, setItem] = useState([
    {
        id: 1,
        photo: photo1,
        name: 'Family Photo',
        location: 'Australia',
        msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 2,
        photo: photo2,
        name: 'Family Meeting',
        location: 'Canada',
        msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },

    {
        id: 3,
        photo: photo3,
        name: 'Movie',
        location: 'Australia',
        msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
   },
   {
    id: 4,
    photo: photo4,
    name: 'Grey',
    location: 'USA',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
{
    id: 5,
    photo: photo5,
    name: 'Field',
    location: 'England',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
{
    id: 6,
    photo: photo6,
    name: 'Tree',
    location: 'Canada',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}
])
  
const [id, setId] = useState("")
const [photoo, setPhoto] = useState("")
const [name, setName] = useState("")
const [msg, setMsg] = useState("")
const [location, setLocation] = useState("")


const OnMoreInfo = (item) =>{

   setName(item.name) 
   setPhoto(item.photo)
   setLocation(item.location)
   setMsg(item.msg)

   console.log(item.name)
    setDisplay(!displayOne)
}

const [displayOne, setDisplay] = useState(false)




    return(
        <div>
            <h3>Picture Gallery</h3>
            <div>
            { !displayOne && items.map((item) => (
                    <div className={classes.container}>
                                <div  key={item.id} ><img  src={item.photo} className={classes.pic} alt='photo' /> 
                                    <div>
                                        <h3 className='btn btn-info' onClick={(() =>OnMoreInfo(item))}> More Info </h3>
                                    </div>
                                </div>
                    </div>          
                )                 
                )}
            </div>
              
                 <div className='card' style={{alignItems: 'center'}}>
                        {displayOne &&
                        <div className="card-body">
                                <img src= {photoo} className={classes.pic} /> 
                                <div>   
                                <h3><FaTimes onClick={(() => setDisplay(!displayOne))} className={classes.fa}/></h3>
                                <label className={classes.text}>Title : </label>
                                <input className={classes.input} type='text' readOnly value={name}  />
                                <label className={classes.text}>Text : </label>
                                <textarea style={{width: '300px', marginTop: '50px'}} className={classes.input} type='text' readOnly value={msg} />
                                <label className={classes.text}>Location : </label>
                                <input className={classes.input} type='text' readOnly value={location} />
                                </div>
                        </div>
                        }
                 </div>
                            
        </div>
    );
}

export default About;