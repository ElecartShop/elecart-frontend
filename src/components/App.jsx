import React from 'react';
import { createUseStyles } from 'react-jss';
import Shop from 'components/Shop';

const useStyles = createUseStyles({
  '@global': {
    body: {
      '-moz-osx-font-smoothing': 'grayscale',
      '-webkit-font-smoothing': 'antialiased',
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
      margin: 0,
    },

    code: {
      fontFamily: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`,
    },
  },
  app: {},
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Shop />
    </div>
  );
};

export default App;
