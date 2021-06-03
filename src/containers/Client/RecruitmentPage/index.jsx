import React, { useState } from 'react'
import ListRecruitment from './ListRecruitment'
import Search from './Search'

export default function RecruitmentPages() {
  const [formState, setFormState] = useState({
    vacancy: '',
    city: '',
    rank: '',
    career: '',
    limit: 8,
    page: 1,
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
      limit: 8,
      page: current,
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
