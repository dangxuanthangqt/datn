import React from 'react'
import PropTypes from 'prop-types'
import hash from 'helpers/hash32Fnv1a'
import isObject from 'lodash/isObject'

function Repeater({ component: Component, list, ...rest }) {
  const keyGenerator = (props) => hash(JSON.stringify(props))

  if (list.length === 0) return null

  return (
    <>
      {
        list.map(item => (
          <Component
            key={item?.key ?? keyGenerator(item)}
            {...(isObject(item) ? item : {})}
            {...rest}
          />
        ))
      }
    </>
  )
}

Repeater.propTypes = {
  component: PropTypes.element,
  list: PropTypes.array,
}

export default Repeater
