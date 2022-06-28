import React from 'react';
import './BackDrop.css';

const Backdrop = (props) => {
    return (
        props.show ?
            <div className="Backdrop" onClick={props.click}>
                {props.children}
            </div>
            : null
    )
}

export default Backdrop