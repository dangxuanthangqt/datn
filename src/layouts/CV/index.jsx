import { Skeleton } from 'antd'
import 'antd/dist/antd.css'
import PropTypes from 'prop-types'
import useDocumentTitle from 'hooks/useDocumentTitle'
import Header from 'layouts/ClientLayout/components/Header/Header'
import React, { Suspense } from 'react'

function CV(props) {
  const { children } = props
  useDocumentTitle('Tạo CV')
  return (
    <div>
      <Header />
      <Suspense fallback={<Skeleton active />}>{children}</Suspense>
    </div>
  )
}

CV.propTypes = {
  children: PropTypes.element,
}

export default CV
