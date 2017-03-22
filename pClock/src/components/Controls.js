import React from 'react';


const Controls = () => (
    <div>
        <button>Start/Stop</button>
        <button>Reset</button>
        <form>
            <label>Timer Length</label>
            <input type="number" defaultValue="30"/>
        </form>
    </div>
);

export default Controls;