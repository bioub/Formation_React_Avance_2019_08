import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import './TopBar.css';

export function TopBar() {
  return (
    <div className="TopBar">
      <AppBar position="static" color="primary">
        <Toolbar className="TopBar-Toolbar">
          <Typography variant="h6" color="inherit">
            MyApp
          </Typography>
          <Link component={RouterLink} to="/todos" color="inherit">
            Todos
          </Link>
          <Link component={RouterLink} to="/users" color="inherit">
            Users
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
