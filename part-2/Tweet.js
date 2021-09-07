const Tweet = (props) => {
    return(
        <div>
            <p><b>{props.username}</b><br/><small>-{props.name}</small></p>
            
            <div>
                <p>{props.message}</p>
            </div>
            <small>{props.date}</small>
        </div>
    )
}