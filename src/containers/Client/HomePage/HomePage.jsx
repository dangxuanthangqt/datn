import React from 'react'
// import { HandleChangeTitle } from '../../../../helper/handleTitle'
// import Advertisement from "./component/advertisement";
import Information from './components/Information'
import ListNewEmployer from './components/ListNewEmployer'
import ListNewJob from './components/ListNewJob'
import Sliders from './components/Slider'

function HomePage() {
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
