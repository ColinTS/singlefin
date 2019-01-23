import React from 'react'
import HeaderImage from '../images/header.svg'
import injectSheet from 'react-jss'

const styles = theme => ({
  text: {
    color: 'green',
    fontSize: 22,
    position: 'absolute',
    top: '25px',
    left: '20px',
  },
  header: {
    position: 'relative',
  },
  links: {
    width: 300,
    height: 200,
  },
})

const Header = ({ classes }) => (
  <div>
    <div className={classes.header}>
      <HeaderImage />
    </div>
    <div className={classes.links}>
      <p className={classes.text}>Hey</p>
    </div>
  </div>
)

export default injectSheet(styles)(Header)
