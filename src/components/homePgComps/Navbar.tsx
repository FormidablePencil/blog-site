import React from 'react'
import { Grid, Paper, AppBar, Toolbar, IconButton, Typography, Link, Box, Theme, makeStyles, createStyles, ListItemText, List, ListItem, useTheme, Divider } from '@material-ui/core'
import { Menu } from '@material-ui/icons';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { purple100 } from 'material-ui/styles/colors';
import { purple } from '@material-ui/core/colors';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fixedLinkWidth: { width: 150, },
    menuListCol: { display: 'flex', flexDirection: 'row', },
    menuListRow: { display: 'flex', flexDirection: 'column', flex: 1 },
    toolbarCol: { flexDirection: 'column', display: 'flex', margin: 0, padding: 0 },
    toolbarRow: { flexDirection: 'row', display: 'flex' },
    logoMenuRow: { justifyContent: 'space-between', display: 'flex', width: '100%', paddingLeft: 10, paddingRight: 10 },
    hamburgerLayoutItem: { position: "absolute", right: 20, top: 20 },
    logoMarginSm: { marginTop: 20, marginLeft: 20, },
    containerSurroundingItem: { width: 200, height: 30, alignItems: 'flex-end' },
    containerForBorder: {
      flex: 1, borderBottomColor: theme.palette.secondary.light, borderBottomWidth: 1, borderBottomStyle: 'solid'
    },
    positionBottom: { position: 'absolute', bottom: -5 },
  }))


function Navbar() {
  const classes = useStyles()
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  const smScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const theme: Theme = useTheme()

  const navLinks = [
    'Mnumonics', 'Technologies', 'Personal Projects'
  ]

  return (
    <AppBar position='fixed' color='transparent'>
      <Toolbar className={!smScreen ? classes.toolbarRow : classes.toolbarCol}>
        <Grid container direction='row'>
          <Grid container justify={'flex-start'} xs={4}>
            <div className={!smScreen ? '' : classes.containerForBorder}>
              <Typography className={!smScreen ? '' : classes.logoMarginSm} variant="h6">
                Logo
              </Typography>
            </div>
            {smScreen &&
              <div className={classes.hamburgerLayoutItem}>
                <Menu />
              </div>
            }
          </Grid>
        </Grid>

        <Grid justify={!smScreen ? 'flex-end' : 'flex-start'} container alignItems='center'>
          <List className={!smScreen ? classes.menuListCol : classes.menuListRow}>
            {navLinks.map((link, index) =>
              <>
                <ItemInList text={link} />
                {index + 1 !== navLinks.length &&
                  <Divider light style={{ backgroundColor: theme.palette.secondary.light }} />
                }
              </>
            )}
          </List>
        </Grid>
      </Toolbar>
    </AppBar >
  )
}

const ItemInList = ({ text }) => {
  const classes = useStyles()

  return (
    <ListItemLink href="TestPg">
      <div className={classes.containerSurroundingItem}>
        <Typography style={{ color: purple[50] }} variant='h6'>
          <div className={classes.positionBottom}>
            {text}
          </div>
        </Typography>
      </div>
    </ListItemLink>
  )
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default Navbar
