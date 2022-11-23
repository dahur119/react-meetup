import Card from "../ui/Card"
import classes from './NewMeetForm.module.css'
import { useRef } from "react"


function NewMeetForm (props){
    const titleInputRef  = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()


    

    const submitHandler =(event)=>{
        event.preventDefault()
        
        const enterTitle = titleInputRef.current.value;
        const enterImage = imageInputRef.current.value
        const enterAdress = addressInputRef.current.value;
        const enterDescription = descriptionInputRef.current.value;

        const meetUpData = {
            title:enterTitle,
            image:enterImage,
            address:enterAdress,
            description:enterDescription
        }

        props.addOnMeetupData(meetUpData)


    }
    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">MeetUp Title</label>
                <input type='text' required id="title"  ref={titleInputRef }></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">meetUp Image</label>
                <input type='url' required id="image" ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="Address">meetUp Address</label>
                <input type='url' required id="Address" ref={addressInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="description">meetUp image</label>
                <textarea id="description" required rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>su</button>

            </div>

        </form>
    </Card>

}
export default NewMeetForm