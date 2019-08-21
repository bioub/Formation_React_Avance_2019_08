import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { useTranslation } from 'react-i18next';

import './TopBar.css';

export function TopBar() {
  const {t, i18n} = useTranslation();
  return (
    <div className="TopBar">
      <AppBar position="static" color="primary">
        <Toolbar className="TopBar-Toolbar">
          <Typography variant="h6" color="inherit">
            {t('MyApp')}
          </Typography>
          <Link component={RouterLink} to="/todos" color="inherit">
            {t('Todos')}
          </Link>
          <Link component={RouterLink} to="/users" color="inherit">
            {t('Users')}
          </Link>
          <div onClick={() => i18n.changeLanguage('fr')}>
            FR
          </div>
          <div onClick={() => i18n.changeLanguage('en')}>
            EN
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
