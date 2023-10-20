import classes from '../style.module.css'
import { Link } from 'react-router-dom';


const Nav = () =>{
    return(
        <div>
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    <Link to="/" className={classes.li}> Home </Link>
                    <Link to="/Picture" className={classes.li}> Picture </Link>
                    <Link to="/Todo" className={classes.li}> Todo </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;