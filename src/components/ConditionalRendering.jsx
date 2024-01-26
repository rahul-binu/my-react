import React from 'react';
function ConditionalRendering() {
    let content;
    var isLoggedIn = false;
    if (isLoggedIn) {
        content = <p>Welcome</p>;
    } else {
        content = <p> log In pleace </p>;
    }
    { isLoggedIn ? (<p>conditional statement <br />you are welcome</p>) : (<p>please login </p>) }
    return (
        <div>
            {content}
        </div>
    );
}

export default ConditionalRendering;