import React, { useState } from 'react'
import ListEmployer from './components/ListEmployer'
import Search from './components/Search'

export default function EmployerPages() {
  const [formState, setFormState] = useState({
    company: '',
  })
  const [current, setCurrent] = useState(1)
  const handleCurrent = (val) => {
    setCurrent(val)
  }
  const handleSubmit = (data) => {
    setFormState(() => ({
      company: data.company,
    }))
  }

  return (
    <div>
      <Search handleCurrent={handleCurrent} handleSubmit={handleSubmit} />
      <ListEmployer
        current={current}
        handleCurrent={handleCurrent}
        formState={formState}
      />
    </div>
  )
}
