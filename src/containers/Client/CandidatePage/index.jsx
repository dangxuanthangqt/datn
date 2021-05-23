import useDocumentTitle from 'hooks/useDocumentTitle'
import React, { useState } from 'react'
import ListCandidates from './components/ListCandidates'
import Search from './components/Search'

export default function CandidatePages() {
  const [formState, setFormState] = useState({
    name: '',
    position: '',
  })
  const [current, setCurrent] = useState(1)
  const handleCurrent = (val) => {
    setCurrent(val)
  }
  const handleSubmit = (data) => {
    setFormState(() => ({
      name: data.name,
      position: data.position,
    }))
  }
  useDocumentTitle('Ứng viên')

  return (
    <>
      <Search handleCurrent={handleCurrent} handleSubmit={handleSubmit} />
      <ListCandidates
        current={current}
        handleCurrent={handleCurrent}
        formState={formState}
      />
    </>
  )
}
