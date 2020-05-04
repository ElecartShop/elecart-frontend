import React from 'react';
import { createUseStyles } from 'react-jss';
import 'styles/App.css';
import Shop from 'components/Shop';

const useStyles = createUseStyles({
  app: {},
});

const App = () => {
  const classes = useStyles();

  return <Shop className={classes.app} />;
};

export default App;
