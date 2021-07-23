import Image from 'next/image'
import u from '../../public/img/u.png'
import navbar from './navbar.module.css'

const Navbar = () => {
    return ( 
        <div>
            <div className={navbar.container}>
                <div className={navbar.containerImg}>
                    <Image src={u} alt="Logo del proyecto"
                    className={navbar.Img}
                    height={30}
                    width={30} 
                    />
                </div>
                <div className={navbar.containerText}>
                    <p className={navbar.text}>Demos</p>
                    <p className={navbar.text}>Pages</p>
                    <p className={navbar.text}>Features</p>
                    <p className={navbar.text}>Works</p>
                    <p className={navbar.text}>Blog</p>
                    <p className={navbar.text}>Shop</p>
                    <p className={navbar.text}>Extra</p>
                </div>
                <div className={navbar.containerLogin}>
                    <p className={navbar.text}>Account</p>
                    <p className={navbar.text}>Languaje</p>
                </div>
            </div>
        </div> 
    );
}

export default Navbar;