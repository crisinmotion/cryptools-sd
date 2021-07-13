import React, { Fragment, useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import { useDispatch } from 'react-redux'


import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { PageContainer } from '../components/Wrapper'

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {

  toggleDrawer
} from "../store/actions"

const drawerWidth = 280;

const styles = theme => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    marginTop: theme.spacing(5),
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
  const dispatch = useDispatch()

  const {
    classes,
    children,
    settings,
    updateDrawerState,
  } = props;

  const [open, setOpen] = useState(settings.isDrawerOpen);
  

  useEffect(() => {
    updateDrawerState(open)
  },[open])

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  const routeChange = (path, data) => {
    children.props.history.push(path, data);
  }
  
  return(
    <Fragment>
      <div className={classes.root}>
        <Header
          handleToggleDrawer={handleToggleDrawer}
          open={settings.isDrawerOpen}
          routeChange={routeChange}
        />
        <Sidebar
          open={settings.isDrawerOpen}
          handleToggleDrawer={handleToggleDrawer}
          {...props.children.props}/>
          <main
            className={classNames(classes.content)}>
            <PageContainer>
              { children }
            </PageContainer>
          </main>
      </div>
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
      updateDrawerState: (params) => toggleDrawer(params),
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MainLayout));