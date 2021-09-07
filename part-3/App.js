const App = ()=>{
    let people = [{
        name:'James',
        age:32,
        hobbies:['knitting','sky-diving']
    },
    {
        name:'Amy',
        age:'17',
        hobbies:['riding bike','cooking']
    },
    {
        name:'Albert',
        age:18,
        hobbies:['backflip','skateboarding','surfing']
    }]
    return(
        <div>
            {people.map((p)=><Person name={p.name} age={p.age} hobbies={p.hobbies}/>)}
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))