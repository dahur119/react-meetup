import NewMeetForm from "../component/meetup/NewMeetForm";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function NewMeetUpPage (){
    const [meetup, setmeetup] = useState([])
    // it make kuse navaigate away 
    const history = useHistory()

    function addNewMeetupPage(meetupData){
        fetch('https://react-http-256da-default-rtdb.firebaseio.com/meetup.json', {
            method: 'POST',
            body: JSON.stringify(meetupData), 
            header: {
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            history.replace('/')

            
        })
      

    }

    return <section>
       <h1>Add New Meet</h1>
       <NewMeetForm addOnMeetupData={addNewMeetupPage} />
    </section>
}
export default NewMeetUpPage; 