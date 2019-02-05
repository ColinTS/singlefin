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
    color: theme.logo.fontColor,
    fontSize: theme.logo.fontSize,
    fontFamily: theme.logo.fontFamily,
    position: 'absolute',
    top: '-66px',
    paddingLeft: '50px',
  },
  links: {
    color: theme.logo.fontColor,
    fontSize: theme.logo.fontSize,
    fontFamily: theme.logo.fontFamily,
    position: 'absolute',
    top: '-66px',
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
      <div style={{ width: '50%' }}>
        <p className={classes.logo}>Logo</p>
      </div>
      <div
        style={{
          width: '50%',
          display: 'flex',
          borderStyle: 'solid',
          borderWidth: '5px',
          justifyContent: 'flex-end',
        }}
      >
        <p className={classes.links}>links</p>
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(Header)
