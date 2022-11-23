import classes from './MeetUpItem.module.css'
import Card from '../ui/Card'
import { useContext } from 'react'
import FavoriteContext from '../../store/favorite-context'

function MeetUpItem(props){
    const favoriteCtx = useContext(FavoriteContext)
    const itemIsFavorite = favoriteCtx.itemFavorite(props.id)
    console.log(itemIsFavorite)
    function toggleMeetUpHkandler(){
        if(itemIsFavorite){
            favoriteCtx.removeFavorite(props.id)
        }else{
            favoriteCtx.addFavorite({
                id:props.id,
                title:props.title,
                address:props.address,
                description:props.description,
                image:props.image

            })
        }

    }
    return <li className={classes.item}>
        <Card>
        <div className={classes.image}>'
            <img src={props.image}   alt={props.title}></img>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}> 
            <button onClick={toggleMeetUpHkandler}>{itemIsFavorite? 'Remove from Favorite':'add to Favorite'}</button>
        </div>

        </Card>

      
    </li>
}
export default MeetUpItem