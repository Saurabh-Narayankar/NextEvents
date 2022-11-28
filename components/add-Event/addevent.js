import { useRef } from "react";
import classes from './addevent.module.css'

const AddEvent = () => {

    const titleRef = useRef()
    const descriptionRef = useRef()
    const locationRef = useRef()
    const isFeaturedRef = useRef()

    const submitHandler = (event) => {

        event.preventDefault()
        const eventDetails = { title: titleRef.current.value, description: descriptionRef.current.value, location: locationRef.current.value, date: event.target.date.value, isFeatured: isFeaturedRef.current.value }
        
        fetch('/api/addevents', {
            method: 'POST',
            body: JSON.stringify(eventDetails),
            headers: {
                'Content-Type' : 'application/json'
            }
        })        
    }



    return(
        <div className={classes.addevent}>
            <h1>Add Event</h1>
            <div className={classes.form}>
            <div className={classes.innerForm}>
            <form onSubmit={submitHandler}>
            <br />
            <div className={classes.eventDescription}>
                <label className={classes.label} htmlFor="title">Title :</label> 
                <textarea className={classes.textarea} rows="2" cols="100" id="title" maxLength='200' required ref={titleRef}></textarea>
            </div>
            <br />
            <div className={classes.eventDescription}>
                <label className={classes.label} htmlFor="description">Description : </label>
                <textarea className={classes.textarea} id="description" maxLength='600' required ref={descriptionRef}></textarea>
            </div>
            <br />
            <div className={classes.eventDescription}>
                <label className={classes.label} htmlFor="location">Location : </label>
                <textarea className={classes.textarea} id="location" maxLength='50' required ref={locationRef}></textarea>
            </div>
            <br />
            <div className={classes.eventDescription}>
                <label className={classes.label} htmlFor="date">Date : </label>
                <input className={classes.input} id="date" type='date'></input>
            </div>
            <br />
            <div className={classes.eventDescription}>
                <label className={classes.label} htmlFor="isfeatured">Featured : </label>
                <select className={classes.textarea} id="isfeatured" ref={isFeaturedRef}>
                    <option value='DEFAULT' disabled>Select if event is featured or not</option>
                    <option value='true'>True</option>
                    <option value='false'>False</option>
                </select>
            </div>
            <br />
            <button className={classes.Button} type="submit">Submit</button>
            </form>
            </div>
            </div>
        </div>
    )
}

export default AddEvent;