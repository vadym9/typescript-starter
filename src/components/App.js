import React, {Component} from 'react';


@decorator
class App extends Component{
    
    render(){
        let {x,y, ...z} = {x:1, y:2, a:5, b:6};
        console.log(x);
        console.log(y);
        console.log(z);
        
        return (
            <div>
                <h1>My React AppcfxvHH</h1>
            </div>
        )
    }
}

export default App;