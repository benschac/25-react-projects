import React from 'react';


const Layout = ({children}) => (
    <div>
        <header>
            <h1>Pomodoro Clock!</h1>
        </header>
        <main>
        {children}
        </main>
        <footer>
            <small>Find this project's code on <a href="https://github.com/benschac/25-react-projects/tree/master/pClock">Github</a></small>
        </footer>
    </div>
);

export default Layout;