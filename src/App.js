import {useState} from "react";

function App() {
    const [state, setState] = useState(0)

    const increment = () => setState(prev => prev + 1);

    return (
        <div className="App">
            <h1 style={{fontSize: 22, color: 'green'}}>value = {state}</h1>
            <button
                style={{background: 'gray', color: "green", padding: 15}}
                onClick={increment}
            >
                increment
            </button>
        </div>
    );
}

export default App;
