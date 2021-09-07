const Person=(props)=>{


    return(
        <div>
            <p>Learn More About this person!</p>
            <p>Name: <strong>{props.name}</strong></p>
            <p>Age: <strong>{props.age}</strong></p>
            <div>
                <p><b>Hobbies:</b></p>
                <ul>
                    {props.hobbies.map((hobb)=><li>{hobb}</li>)}
                </ul>
            </div>
            {props.age>=18 ? <h3>Please go vote!</h3>: null}
        </div>
    )

}