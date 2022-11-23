import { useContext } from "react"
import FavoriteContext from "../store/favorite-context"
import MeetUpItem from "../component/meetup/MeetUpItem"

function FavoritePage (){
    const favoriteCtx = useContext(FavoriteContext)

    let content; 
    if(favoriteCtx.totalFavorite === 0){
        content = <p>there is no Favorite here.. make sure add one</p>
    }else{
        content = <MeetUpItem meetups={favoriteCtx.favorite}/>

    }


    return <section>
        <h1>My favorite</h1>
        {content}
        

    </section>
}
export default FavoritePage