import React, { useEffect } from 'react'
import { Form, Upload } from 'antd'
import { get, head } from 'lodash'

export const UploadImage = (props) => {
  const { name, url } = props
  const [fileList, setFileList] = React.useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://ramenparados.com/wp-content/uploads/2019/03/no-avatar-png-8.png',
      thumbUrl: 'https://ramenparados.com/wp-content/uploads/2019/03/no-avatar-png-8.png',
    },
  ])
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }

  useEffect(() => {
    const thumbUrl = get(head(fileList), 'thumbUrl')
    // fileList.length > 0 && ((thumbUrl === undefined || thumbUrl === 'https://ramenparados.com/wp-content/uploads/2019/03/no-avatar-png-8.png'))
    if (fileList.length > 0 && ((thumbUrl === undefined || thumbUrl === 'https://ramenparados.com/wp-content/uploads/2019/03/no-avatar-png-8.png'))) {
      setFileList([
        {
          uid: '-1',
          name: 'avatar.img',
          status: 'done',
          url,
          thumbUrl: url,
        },
      ])
    }
  })

  const onPreview = async (file) => {
    let src = file.url
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow.document.write(image.outerHTML)
  }

  return (
    <Form.Item name={name} initialValue={url}>
      <Upload
        className="upload-img"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={[...fileList]}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
    </Form.Item>
  )
}
