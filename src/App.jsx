import React from 'react';
import Flower from './components/Flower';
import Message from './components/Message';

const App = () => {
    return (
        <>
            <Flower position={{ left: '-50%' }} light={true} />
            <Flower position={{ right: '-50%' }} light={true} />
            <Flower position={{ top: '-50%' }} light={true} />
            <Flower position={{ bottom: '-60%' }} light={false} />
            <Message />
        </>
    )
}

export default App;