
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget'
import style from './style.module.css'
import logo from '../../assets/img/logo.png'

const NavBar = () => {
    return (
        <div className={style['contenedor-navbar']}>
            <div className={style['contenedor-logo']}>
                <Link to='/'>
                    <img src={logo} alt="logo de la empresa" />
             
                </Link>
                <img style={{width:"150px", height:"50px"}} src="https://i.postimg.cc/CxnS1M8K/armado.png" alt="" />
            </div>
            <div className={style['contenedor-menu']}>
                <ul>
                    <li><Link className={style['categoria']} to='categoria/Oficina'>Oficina</Link></li>
                    <li><Link className={style['categoria']} to='categoria/Basica'>Basica</Link></li>
                    <li><Link className={style['categoria']} to='categoria/Medium'>Medium</Link></li>
                    <li><Link className={style['categoria']} to='categoria/Elite'>Elite</Link></li>
                    <li><Link className={style['categoria']} to='categoria/Extreme'>Extreme</Link></li>
                </ul>
                <div className='contenedor-carrito'>
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}


export default NavBar