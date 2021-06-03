import React from 'react'
import { Result } from 'antd'
import { FrownOutlined } from '@ant-design/icons'

// UI data null
export const DataNull = () => (
  <div>
    <Result icon={<FrownOutlined />} title="Không có dữ liệu !" />
  </div>
)
