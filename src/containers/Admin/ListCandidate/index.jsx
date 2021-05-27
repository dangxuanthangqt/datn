import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Modal, Switch, Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { candidateAdminSelector } from 'stores/moduleAdmin/selectors'
import { dispatchChangeActiveCandidateRequest, dispatchFetchCandidateAdminRequest } from 'stores/moduleAdmin/thunks'

function ListCandidate() {
  const dispatch = useDispatch()
  const candidateadmin = useSelector(candidateAdminSelector)

  useEffect(() => {
    dispatch(dispatchFetchCandidateAdminRequest())
  }, [dispatch])

  const data = candidateadmin

  const newData = data.map((item) => {
    const obj = { key: `${item.id}` }
    const result = { ...item, ...obj }
    return result
  }).sort((a, b) => a.active - b.active)

  const SwitchChange = (id) => {
    dispatch(dispatchChangeActiveCandidateRequest(id))
  }
  const handleSwitchChange = (record) => {
    if (record.active === 1) {
      Modal.confirm({
        title: 'Thông báo',
        icon: <ExclamationCircleOutlined />,
        content: `Hũy kích hoạt tài khoản ứng viên ${record.name}`,
        okText: 'Xác nhận',
        onOk: () => SwitchChange(record.id),
        cancelText: 'Hủy',
      })
    } else if (record.active === 0) {
      Modal.confirm({
        title: 'Thông báo',
        icon: <ExclamationCircleOutlined />,
        content: `Xác nhận kích hoạt tài khoản ứng viên ${record.name}`,
        okText: 'Xác nhận',
        onOk: () => SwitchChange(record.id),
        cancelText: 'Hủy',
      })
    }
  }

  // const handleOrderChange = (record) => {
  //   dispatch(changeOrderRequest(record.id));
  // };

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar) => (
        <img style={{ height: '100px' }} alt={avatar} src={avatar} />
      ),
    },
    { title: 'Họ và Tên', dataIndex: 'name', key: 'name' },
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
    // {
    //   title: "Order",
    //   dataIndex: "order",
    //   key: "order",
    //   render: (e, record) => (
    //     <Checkbox
    //       onChange={() => handleOrderChange(record)}
    //       defaultChecked={e}
    //     />
    //   ),
    // },
  ]

  const expandedRowRender = (record) => {
    const columns1 = [
      { title: 'Địa chỉ', dataIndex: 'address', key: 'address' },
      { title: 'Vị trí', dataIndex: 'position', key: 'position' },
      { title: 'Kinh nghiệm', dataIndex: 'experience', key: 'experience' },
    ]

    const data1 = []
    data1.push({
      key: record.address,
      address: record.address ? record.address : 'Đang cập nhật',
      position: record.position ? record.position : 'Đang cập nhật',
      experience: record.experience ? record.experience : 'Đang cập nhật',
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
export default ListCandidate
