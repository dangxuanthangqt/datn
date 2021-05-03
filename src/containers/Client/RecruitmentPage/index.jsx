import useDocumentTitle from 'hooks/useDocumentTitle'
import React, { useState, useLayoutEffect } from 'react'
import ListRecruitment from './RecruitmentDetail'

import Search from './Search'

export default function RecruitmentPages() {
  const [formState, setFormState] = useState({
    vacancy: '',
    city: '',
    rank: '',
    career: '',
  })

  useLayoutEffect(() => {
    useDocumentTitle('Việc làm')
  })
  const [current, setCurrent] = useState(1)

  const handleCurrent = (val) => {
    setCurrent(val)
  }

  const handleSubmit = (data) => {
    setFormState(() => ({
      vacancy: data.vacancy,
      city: data.city,
      rank: data.rank,
      career: data.career,
    }))
  }

  return (
    <div>
      <Search handleCurrent={handleCurrent} handleSubmit={handleSubmit} />
      <ListRecruitment
        current={current}
        handleCurrent={handleCurrent}
        formState={formState}
      />
    </div>
  )
}
