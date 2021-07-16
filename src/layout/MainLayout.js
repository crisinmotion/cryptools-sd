import React, { Fragment, useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import Sidebar from "../components/Sidebar/Sidebar";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  toggleDrawer,
	setActiveMenu,
	setUpdateStatus
} from "../store/actions"
import UpdateBoard from "../components/Updates/UpdateBoard";

const drawerWidth = 280;

const styles = theme => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    overflowX: "hidden",
    overflowY: "hidden",
    minHeight: 'calc(100vh - 50px)',
  },
  contentShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    // transition: theme.transitions.create(["width", "margin"], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.enteringScreen
    // })
  }
});

function MainLayout(props) {
  const {
    classes,
    children,
    settings,
    updateDrawerState,
		updateActiveMenu,
		requestUpdateStatus
  } = props;

  const [open, setOpen] = useState(settings.isDrawerOpen);
  const [activeMenu, setActiveMenu] = useState(settings.activeMenu);
  

  useEffect(() => {
    updateDrawerState(open)
  },[open, updateDrawerState])
  
	useEffect(() => {
    updateActiveMenu(activeMenu)
  },[activeMenu, updateActiveMenu])

  const handleToggleDrawer = () => {
    setOpen(!open);
  };
  
	const handleActiveMenu = (menu) => {
    setActiveMenu(menu)
  };

  return(
    <Fragment>
      <div className={classes.root}>       
        <Sidebar
          open={settings.isDrawerOpen}
          handleToggleDrawer={handleToggleDrawer}
					handleActiveMenu={handleActiveMenu}
					activeMenu={activeMenu}
          {...props.children.props}
				/>
          <main
            className={classNames(classes.content)}>
            <div>
              { children }
            </div>
          </main>
      </div>
			<UpdateBoard settings={settings && settings.updateStatus} requestUpdateStatus={requestUpdateStatus}/>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    settings: state.settings
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateDrawerState: (params) => dispatch(toggleDrawer(params)),
			updateActiveMenu: params => dispatch(setActiveMenu(params)),
			requestUpdateStatus: params => dispatch(setUpdateStatus(params))
    },
		dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MainLayout));