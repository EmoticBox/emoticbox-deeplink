import React from 'react';
import {Link} from 'react-router-dom';

const App = () => {
  let message;
  if (navigator.userAgent.match(/iPad/i)){
    message = "ipad";
  } else if (navigator.userAgent.match(/Tablet/i)){
    message = "Tablet";
  } else if (navigator.userAgent.match(/Android/i)){
    message = "Android";
  } else if (navigator.userAgent.match(/iPhone|iPod/i)){
    message = "Iphone";
  } else {
    message = "PC";
  }
  return (
    <div className="App">
        <Link to="emoticbox://">{message}</Link>
    </div>
  );
}

export default App;
