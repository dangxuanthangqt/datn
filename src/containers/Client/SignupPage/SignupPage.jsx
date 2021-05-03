import { Tabs } from 'antd'
import React from 'react'
import SignupCandidate from './components/SignupCandidate'
import SignupEmployer from './components/SignupEmployer'
import './style.scss'

const { TabPane } = Tabs
function SignupPage() {
  return (
    <>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Ứng viên" key="1">
          <SignupCandidate />
        </TabPane>
        <TabPane tab="Nhà Tuyển Dụng" key="2">
          <SignupEmployer />
        </TabPane>
      </Tabs>
    </>
  )
}

export default SignupPage
