
import { useParams } from "react-router-dom"
import styles from './desk.module.css'
import { cards } from "../../data/cards"; 

export default ()=>{
    const{ id }= useParams()
    const card = cards.find(item => item.id === Number(id))
    return(
        <>
        <h1>Product {id}</h1>
        {card && (
            <div className={styles.card}>
                <img src={card.photo} alt={card.text} />
                <h2>{card.text}</h2>
            </div>
        )}
        </>
    )
}