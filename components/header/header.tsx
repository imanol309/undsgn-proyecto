import Image from 'next/image';
import fondo from '../../public/img/s.png';
import header from './header.module.css';
import iphone from '../../public/img/iphone.webp'


const Header = () => {
    return(
        <div className={header.container}>
            <div>
                <Image 
                    src={fondo} 
                    className={header.fondo}
                    layout="responsive"
                    alt="Logo del proyecto"/>
                <div className={header.img}>
                    <Image 
                    src={iphone} 
                    alt=""
                    className={header.iphone}
                    />
                </div>
            </div>
            <div className={header.containerText}>
                <h2 className={header.textOne}>Eye catching design & sleek aesthetics</h2>
            </div>

        </div>
    )
}

export default Header;