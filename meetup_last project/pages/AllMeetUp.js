import MeetUpList from "../component/meetup/MeetUpList";
import { useEffect, useState } from "react";


function AllMeetUpsPage (){
  const [isLoading, setIsLoading] = useState(true)
  const [meetupStore, setmeetupStore] = useState([])

  useEffect(()=>{
    setIsLoading(true)
    fetch('https://react-http-256da-default-rtdb.firebaseio.com/meetup.json'
    ).then(response=>{
      return response.json()
    }).then((responseData)=>{
      const meetups = []; 
      for (const data in responseData){
        const meetupAdd = {
          id:data,
          ...responseData[data]
        };
        meetups.push(meetupAdd)
      }

     
       
      
      setIsLoading(false)
      setmeetupStore(meetups)
    })


  },[])



  if(isLoading){
    return (
      <section>
        <p>..isLoading</p>
      </section>
    );
  }
    return <section>
        <h1>All meetUp</h1>
       <MeetUpList meetup={meetupStore}/>
        
         
    
       
      
    </section>

}
export default AllMeetUpsPage