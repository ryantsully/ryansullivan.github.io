import React from 'react';

function App() {

    const handleButtonClick = () => {
        console.log('Button clicked');
    };


    return (
        <div>
            <div className="my-header">Header</div>
            <p className="my-body">Test body
                <br />
                <button onClick={handleButtonClick}>My button</button>
            </p>
        </div >
    );
}

export default App;
