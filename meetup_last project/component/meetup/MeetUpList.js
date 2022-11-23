import classes from './MeetUpList.module.css'
import MeetUpItem from './MeetUpItem'


function MeetUpList(props){
    return <ul className={classes.list}>
        {props.meetup.map((meetup)=>(
        <MeetUpItem 
        key={meetup.id}
        id={meetup.id}
        title={meetup.title}
        image={meetup.image}
        address={meetup.address}
        description={meetup.description}
        />))}
    </ul>
}
export default MeetUpList