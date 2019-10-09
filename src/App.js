import React, { Component } from 'react';
import logo from './logo.svg';

import styles from './build/App.json'
import './build/App.css';

class App extends Component {

  render() {

    return (
      <div className={styles.App}>

        <header className={styles.AppHeader}>

          <h1>A Random React App</h1>

            <img src={logo} className={styles.AppLogo} alt="logo" />

            <p>
              The CSS is made with PostCSS Modules
            </p>

            <a
              className={styles.AppLink}
              href="https://github.com/ChristopherMcKay/postcss-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo
            </a>

        </header>

      </div>
    );
  }
}

export default App;
