import React from 'react'
import HeaderImage from '../images/header.svg'
import injectSheet from 'react-jss'

const styles = theme => ({
  headerContent: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    color: 'green',
    fontSize: 22,
    position: 'absolute',
    top: '-60px',
    paddingLeft: '50px',
  },
  links: {
    color: 'green',
    fontSize: 22,
    position: 'absolute',
    top: '-60px',
    paddingRight: '50px',
  },
  header: {
    position: 'relative',
    overflowX: 'hidden',
  },
})

const Header = ({ classes }) => (
  <div>
    <div className={classes.header}>
      <HeaderImage />
    </div>
    <div className={classes.headerContent}>
      <p className={classes.logo}>Logo</p>
      <p className={classes.links}>links</p>
    </div>
  </div>
)

export default injectSheet(styles)(Header)
