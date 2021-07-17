import React from 'react'

import clsx from 'clsx';
import { connect } from "react-redux";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, AppBar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

import Logo from '../../assets/images/SteelDemonLogo.png';
import CryptoBladesLogo from '../../assets/icons/cryptoblades.png';
import { InfoRounded, MenuOpenRounded } from '@material-ui/icons';

const drawerWidth = 240; 

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
	},
	logo: {
		width: theme.spacing(3),
	},
	sidebarItemIcon: {
		color: theme.palette.secondary.main
	},
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
		}),
		backgroundColor: 'transparent', 
		boxShadow: 'none'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
		marginRight: theme.spacing(1),
		'&:hover' : {
			backgroundColor: 'transparent',
		} 
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
		overflowX: 'hidden'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing(7) + 1,
		// },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
	},
	appName: {
		marginLeft: theme.spacing(4)
	},
	activeMenu: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		'&:hover' :{			
			backgroundColor: theme.palette.primary.main,
		},
		'& .MuiSvgIcon-colorPrimary' : {
			color: '#ffffff !important'
		}
	},
	version: {
		alignSelf: 'flex-end',
		position: 'absolute',
		bottom: 0
	},
	menuList: {
		position: 'relative',
		height: '100%'
	}
}));

const ImageIcon = props => {
	const {params} = props;
	return (
		<img src={params.src} style={{maxWidth: 24}} alt={ params.alt }/>
	)
}

const MENU_ITEMS = [
	{ 
		id: 0,
		text: 'CryptoBlades',
		slug: '/',
		url: '/',
		icon: <ImageIcon params={{src: CryptoBladesLogo, alt: 'CB'}}/>,
		menuName: 'cryptoblades'
	},
	{ 
		id: 1,
		text: 'About Cryptools',
		slug: '/',
		url: '/',
		icon: <InfoRounded color={'primary'}/>,
		menuName: 'about'
	},
]

const Sidebar = props => {
	const classes = useStyles();
	const theme = useTheme();

	const {
		open,
		handleToggleDrawer,
		activeMenu,
		handleActiveMenu,
		appVersion
	} = props

	const iconsTransition = {
		opacity: open ? 1 : 0,
		transition: "all 0.3s ease-in"
	}

  return (
		<div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
				})}
      >
        {/* <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
						edge="start"						
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <img src={Logo} className={classes.logo}/>
          </IconButton>          
        </Toolbar> */}
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={()=> handleToggleDrawer(!open)}
							edge="start"
							disableRipple		
							disableFocusRipple			
							className={clsx(classes.menuButton)}
						>
							<img src={Logo} className={classes.logo} alt={'Cryptools'}/>
							<Typography variant={'h6'} color={'primary'} className={classes.appName} style={iconsTransition}>Cryptools</Typography>
						</IconButton>      					
						
						<IconButton onClick={()=> handleToggleDrawer(!open)} color={'secondary'}  style={{...iconsTransition, padding: theme.spacing(1), borderColor: theme.palette.secondary, borderWidth: 1, borderStyle: 'solid'}} variant={'outline'}>
							{theme.direction === 'rtl' ? <MenuOpenRounded/> : <MenuOpenRounded/>}
						</IconButton>
        </div>
        <Divider />
        <List className={classes.menuList}>
          {MENU_ITEMS.map((item, index) => (
            <ListItem button key={item.id}
							className={clsx({
								[classes.activeMenu] : activeMenu === item.menuName
							})}

							onClick={()=> handleActiveMenu(item.menuName)}
						
						>
              <ListItemIcon className={classes.sidebarItemIcon}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
					{appVersion && open &&
						<ListItem key={appVersion} {...{className: classes.version}}>
							<ListItemText primary={appVersion} />
						</ListItem>
					}
        </List>
        
      </Drawer>
      
    </div>

	)
}

const mapStateToProps = state => {
  return {    
  };
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

