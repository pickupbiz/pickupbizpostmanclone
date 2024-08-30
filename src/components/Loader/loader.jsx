import React from 'react';
import { helix } from 'ldrs'

helix.register()


const Loader = () => {
    return (
        <div>
            <l-helix
                size="45"
                speed="2.5"
                color="#F97316"
            ></l-helix>
        </div>
    );
}

export default Loader;
