import { ExclamationCircleOutlined } from '@ant-design/icons'
import {
  Checkbox, Modal, Switch, Table,
} from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  dispatchChangeActiveEmployerRequest,
  dispatchChangeOderEmployerRequest,
  dispatchFetchEmployerAdminRequest,
} from 'stores/moduleAdmin/thunks'
import { employerAdminSelector } from 'stores/moduleAdmin/selectors'

function ListEmployer() {
  const dispatch = useDispatch()
  const employeradmin = useSelector(employerAdminSelector)

  useEffect(() => {
    dispatch(dispatchFetchEmployerAdminRequest())
  }, [dispatch])

  const data = employeradmin

  const newData = data.map((item) => {
    const obj = { key: `${item.id}` }
    const result = { ...item, ...obj }
    return result
  }).sort((a, b) => a.active - b.active)

  const SwitchChange = (id) => {
    dispatch(dispatchChangeActiveEmployerRequest(id))
  }

  const handleSwitchChange = (record) => {
    if (record.active === 1) {
      Modal.confirm({
        title: 'Thông báo',
        icon: <ExclamationCircleOutlined />,
        content: `Hũy kích hoạt tài khoản nhà tuyển dụng ${record.company}`,
        okText: 'Xác nhận',
        onOk: () => SwitchChange(record.id),
        cancelText: 'Hủy',
      })
    } else if (record.active === 0) {
      Modal.confirm({
        title: 'Thông báo',
        icon: <ExclamationCircleOutlined />,
        content: `Xác nhận kích hoạt tài khoản nhà tuyển dụng ${record.company}`,
        okText: 'Xác nhận',
        onOk: () => SwitchChange(record.id),
        cancelText: 'Hủy',
      })
    }
  }
  const OrderChange = (id) => {
    dispatch(dispatchChangeOderEmployerRequest(id))
  }

  const handleOrderChange = (record) => {
    if (record.order === 0) {
      Modal.confirm({
        title: 'Thông báo',
        icon: <ExclamationCircleOutlined />,
        content: `Thêm nhà tuyển dụng ${record.company} vào nhà tuyển dụng HOT`,
        okText: 'Xác nhận',
        onOk: () => OrderChange(record.id),
        cancelText: 'Hủy',
      })
    } else if (record.order === 1) {
      Modal.confirm({
        title: 'Thông báo',
        icon: <ExclamationCircleOutlined />,
        content: `Hũy thêm nhà tuyển dụng ${record.company} vào nhà tuyển dụng HOT`,
        okText: 'Xác nhận',
        onOk: () => OrderChange(record.id),
        cancelText: 'Hủy',
      })
    }
  }

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar) => (
        <img style={{ height: '100px' }} alt={avatar} src={avatar} />
      ),
    },
    { title: 'Tên liên hệ', dataIndex: 'contact', key: 'contact' },
    { title: 'Tên công ty', dataIndex: 'company', key: 'company' },
    { title: 'Số điện thoại', dataIndex: 'phone', key: 'phone' },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active',
      render: (e, record) => (
        <Switch
          onChange={() => handleSwitchChange(record)}
          defaultChecked={e}
        />
      ),
    },
    {
      title: 'Order',
      dataIndex: 'order',
      key: 'order',
      render: (e, record) => (
        <Checkbox
          onChange={() => handleOrderChange(record)}
          defaultChecked={e}
        />
      ),
    },
  ]

  const expandedRowRender = (record) => {
    const columns1 = [
      {
        title: 'Ảnh bìa',
        dataIndex: 'photo',
        key: 'photo',
        render: (avatar) => (
          <img style={{ height: '100px' }} alt={avatar} src={avatar} />
        ),
      },
      { title: 'Địa chỉ', dataIndex: 'address', key: 'address' },
      { title: 'Website', dataIndex: 'website', key: 'website' },
      { title: 'Mô tả', dataIndex: 'description', key: 'description' },
    ]

    const data1 = []
    data1.push({
      key: record.address,
      photo: record.photo ? record.photo : 'Đang cập nhật',
      address: record.address ? record.address : 'Đang cập nhật',
      website: record.website ? record.website : 'Đang cập nhật',
      description: record.description ? record.description : 'Đang cập nhật',
    })

    return <Table columns={columns1} dataSource={data1} pagination={false} />
  }

  return (
    <Table
      style={{ margin: '10px 10px 0 0' }}
      columns={columns}
      expandable={{
        expandedRowRender,
      }}
      dataSource={newData}
      pagination={{ position: ['bottomCenter'] }}
    />
  )
}
export default ListEmployer
