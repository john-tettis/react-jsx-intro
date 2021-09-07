const App=(props)=>{
    return(
        <div>
            <FirstComponent />
            <NamedComponent name={props.name}/>

        </div>
    )
}
ReactDOM.render(<App name='John'/>,document.getElementById('root'))