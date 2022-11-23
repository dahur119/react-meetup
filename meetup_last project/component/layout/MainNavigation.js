import { Link } from "react-router-dom"
import classes from  './MainNavigation.module.css';
import { useContext } from "react";
import FavoriteContext from "../../store/favorite-context";

function MainNavigation (){
    const favoriteCtx = useContext(FavoriteContext)
    return <header className={classes.header}>
        <div className={classes.logo}>logos</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All MeetUp</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New MeetUp</Link>
                </li>
                <li>
                    <Link to='/favorite'>
                        Favorite
                        <span className={classes.badge}>{favoriteCtx.totalFavorite}</span>
                        </Link>
                </li>

            </ul>
        </nav>
    </header>
}
export default MainNavigation