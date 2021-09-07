const App=() => {
    let tweets=[{
        username:'ObamaIsDaBomba',
        name:'Bardock Obunga',
        date:"9/10/2005",
        message:'Wake up america time to get your taxes risen'
    },{
        username:'TrumpertTheRUmpert',
        name:'Orang Man',
        date:"9/6/2021",
        message:'I like hairspray more than teh enviornment'
    },
    {
        username:'DelawareMenace',
        name:'George Washington',
        date:"12/25/1776",
        message:'You guys are about to get my username finally'
    }]
    return(
        <ul>
            {tweets.map((t)=> <Tweet username={t.username} name={t.name} date={t.date} message={t.message}/>)}

        </ul>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))