import Cart from '../../../assets/cart_white.png'
import styles from './button.module.css'
export default()=>{
    return(
        <>
            <button className={styles.green_button_green}><img src={Cart} /> Big Button</button>
        </>
    )
}