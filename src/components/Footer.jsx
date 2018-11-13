import React from 'react'
import { Link } from 'gatsby'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Lock, LockOpen } from '@material-ui/icons'

const Footer = () => {
  return (
    <div>
      <BottomNavigation showLabels style={styles.bottomNav}>
        <Link to="/">
          <BottomNavigationAction
            label="Encode"
            style={styles.bottomNavBtn}
            icon={<Lock />}
          />
        </Link>
        <Link to="/decode">
          <BottomNavigationAction
            label="Decode"
            icon={<LockOpen />}
            style={styles.bottomNavBtn}
          />
        </Link>
      </BottomNavigation>
    </div>
  )
}

const styles = {
  bottomNav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  bottomNavBtn: {
    alignItems: 'flex-end',
  },
}

export default Footer
