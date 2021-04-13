import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    root: {
        backgroundColor: '#fff',
        padding: theme.spacing(1,0,1,2),
        maxWidth:1216,
        margin: 'auto',
        marginTop: 5,
    },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
    const classes = useStyles();
  return (
    <Breadcrumbs className={classes.root} aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Material-UI
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Core
      </Link>
      <Link
        color="textPrimary"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        aria-current="page"
      >
        Breadcrumb
      </Link>
    </Breadcrumbs>
  );
}
