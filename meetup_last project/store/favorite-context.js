import { createContext } from "react";
import { useState } from "react";


const FavoriteContext =  createContext({
    favorite: [],
    totalFavorite : 0,
    addFavorite: (favoriteMeetUp)=>{},
    removeFavorite: (meetUpId)=>{},
    itemFavorite: (meetupId)=>{}
    

})

export function FavoriteContextProvider(props){
    const [isFavorite, setIsFavorite] = useState([])

    const addFavoriteHandler=(favoriteMeetUp)=>{
        setIsFavorite((prevIsFavorite)=>{
            return prevIsFavorite.concat(favoriteMeetUp)   
        })
    }
    const removeFavoriteHandler =(meetUpId) =>{
        setIsFavorite((prevIsFavorite)=>{
            return prevIsFavorite.filter((meetup)=>meetup.id !== meetUpId)
        })
    }
    const itemFavoriteHandler = (meetupId) =>{
        return isFavorite.some((meetup)=>meetup.id === meetupId)
    }

    const context = {
        favorite:isFavorite,
        totalFavorite:isFavorite.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemFavorite: itemFavoriteHandler
    }


    return <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
}

export default FavoriteContext