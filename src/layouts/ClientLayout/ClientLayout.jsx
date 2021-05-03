import { Skeleton } from 'antd'
import { PropTypes } from 'prop-types'
import 'antd/dist/antd.css'
import NProgress from 'nprogress'
import React, { Suspense } from 'react'
import Container from 'react-bootstrap/Container'
import Footer from './components/Footer'
import Header from './components/Header/Header'

const LazyLoad = () => {
  const loadingEf = {
    height: '100vh',
  }
  return (
    <Container style={loadingEf}>
      <Skeleton active />
      <Skeleton.Avatar active />
      <Skeleton active />
      <Skeleton.Avatar active />
      <Skeleton active />
    </Container>
  )
}
const LazyLoading = () => {
  React.useEffect(() => {
    NProgress.configure({ easing: 'ease', speed: 1500, showSpinner: false })
    NProgress.start()
    return () => {
      NProgress.done()
    }
  })

  return ''
}

function ClientLayout(props) {
  const { children } = props
  return (
    <div>
      <Header />
      <Suspense
        fallback={(
          <div>
            <LazyLoading />
            <LazyLoad />
          </div>
        )}
      >
        {children}
      </Suspense>
      <Footer />
    </div>
  )
}
ClientLayout.propTypes = {
  children: PropTypes.element,
}
export default ClientLayout
