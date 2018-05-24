import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.scss';


const FirstText = ({ name }) => {

  return (
    <div className={styles.title} >
      <p > {name} </p >
    </div >
  )

}

FirstText.propTypes = {
  name: PropTypes.string.isRequired
}

export default FirstText