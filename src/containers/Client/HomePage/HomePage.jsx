import React from 'react'
import Sliders from './components/Slider'
import ListNewJob from './components/ListNewJob'
import ListNewEmployer from './components/ListNewEmployer'
// import { HandleChangeTitle } from '../../../../helper/handleTitle'
// import Advertisement from "./component/advertisement";
import Information from './components/Information'

function HomePage() {
  console.log('hompage')
  return (
    <>
      {/* <HandleChangeTitle title="Trang chủ" /> */}
      <Sliders />
      <ListNewJob />
      <ListNewEmployer />
      {/* <Advertisement /> */}
      <Information />
    </>
  )
}
export default HomePage
