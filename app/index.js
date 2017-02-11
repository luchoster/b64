import React, { Component } from 'react'
import router from 'react-router'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router'

import R from 'ramda'
import Bluebird from 'bluebird'

import AppBar from 'material-ui/AppBar'
import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import FontIcon from 'material-ui/FontIcon'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader';
import LockOutline from 'material-ui/svg-icons/action/lock-outline';
import LockOpen from 'material-ui/svg-icons/action/lock-open';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './scss/style.scss'

injectTapEventPlugin();


const styleNav = {
  position: 'fixed',
  bottom: '0'
};
const styleNavItem = {
  alignItems: 'flex-end'
};

class Index extends Component {
  constructor() {
    super()
    this.state = ({
      open: false
    })
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleToggle() {
    this.setState({open: !this.state.open})
  }

  handleClick(e) {
    this.transitionTo(e)
  }

  render() {
    return(
      // Here we can add static components, like a Main Menu, or side Menu
      <div>
        <AppBar
          title={ 'B64 Translator' }
          className='navbar'
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
          <Subheader>Main Menu</Subheader>
          <Divider />
          <Link to='/encode' onClick={this.handleToggle}><MenuItem primaryText='Encode' leftIcon={<LockOutline />} /></Link>
          <Divider />
          <Link to='/decode' onClick={this.handleToggle}><MenuItem primaryText='Decode' leftIcon={<LockOpen />}  /></Link>
          <Divider />
        </Drawer>
        {this.props.children}
        <BottomNavigation style={styleNav}>
          <BottomNavigationItem
            style={styleNavItem}
            label="Encode"
            icon={<LockOutline />}
            onTouchTap={() =>   this.props.router.push({pathname: '/encode'})}
          />
          <BottomNavigationItem
            style={styleNavItem}
            label="Decode"
            icon={<LockOpen />}
            onTouchTap={() => this.props.router.push({pathname: '/decode'})}
          />
        </BottomNavigation>
      </div>
      // Here we would put the footer component since we use it on all the pages
    )
  }
}

export default connect()(Index)
