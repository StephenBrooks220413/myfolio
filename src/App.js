import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span class="App App-logo">
          <img src="logo192.png" width="100%"/>
        </span>
        <h1>My WebFolio</h1>
        <h3>My Artwork and Game Designs</h3>
      </header>
      <h2>All Members are considered for all game publishings</h2>
      <content>
        <div class="content">
          <img src="https://greaterdanetag.org/wp-content/uploads/2019/11/game-design.jpg" width="70%" height="300px"/>
        </div>
        <h2>About Me</h2>
        <p class="text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p> <br/>
        <p class="text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p> <br/>
        <p class="text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p> <br/>
      </content>


      <div class="social-media-icons">
        <img src="https://cdn.pixabay.com/photo/2016/11/18/11/17/social-1834016__340.png" id="img1" width="90px" height="90px"/>
        <img src="https://cdn.pixabay.com/photo/2016/11/18/11/16/social-1834007__340.png" id="img2" width="90px" height="90px"/>
        <img src="https://cdn.pixabay.com/photo/2016/11/18/11/16/social-1834011__340.png" id="img3" width="100px" height="100px"/>
        <img src="https://cdn.pixabay.com/photo/2016/11/23/09/40/social-1852361__340.png" id="img4" width="90px" height="90px"/>
        <img src="https://cdn.pixabay.com/photo/2016/11/18/11/16/social-1834010__340.png" id="img5" width="90px" height="90px"/>
      </div>


      <nav>
        <div class="linkNavs">
        <a href="#">home</a> <a href="#">about</a> <a href="#">contact</a>
        </div>
      </nav>
      <div class="gallery-block">
        <h1>MY Previous Projects</h1>
        <span class="content-1">
        <label>Maps <br/> <a href="#">source code</a> </label> <br/>
          <img src="logo192.png" width="60%"/>
        </span>
        <span class="content-2">
        <label>Pieces <br/> <a href="#">source code</a></label> <br/>
          <img src="logo192.png" width="60%"/>
        </span>
        <span class="content-3">
        <label>Characters <br/> <a href="#">source code</a></label> <br/>
          <img src="logo192.png" width="60%"/>
        </span>
        <span class="content-4">
        <label>Extras <br/> <a href="#">source code</a></label> <br/>
          <img src="logo192.png" width="60%"/>
        </span>
      </div>

      <footer>
      <div class="bottom-content">
        <h3>Designs & Art</h3>
        <ul>
          <li>game boards</li>
          <li>game pieces</li>
          <li>game matches</li>
          <li>Updates</li>
        </ul>
        <span class="copyRight">
        <p>copyright@2020 Joshua Brooks</p>
        </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
