import { Input, Tooltip, Button } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import {
  CalendarOutlined,
  FormOutlined,
  BarsOutlined,
  WindowsOutlined,
  CommentOutlined,
  FileDoneOutlined,
} from '@ant-design/icons'
import { Controller } from 'react-hook-form'
import DivisionArray from './DivisionArray'

export default function MainForm(props) {
  const {
    fields,
    control,
    register,
    getValues,
    setValue,
  } = props

  const icons = (icon) => {
    if (icon === '<WindowsOutlined />') return <WindowsOutlined />
    if (icon === '<CalendarOutlined />') return <CalendarOutlined />
    if (icon === '<FormOutlined />') return <FormOutlined />
    if (icon === '<BarsOutlined />') return <BarsOutlined />
    if (icon === '<CommentOutlined />') return <CommentOutlined />
    if (icon === '<FileDoneOutlined />') return <FileDoneOutlined />
    return null
  }
  return (
    <>
      {
      fields.map((item, index) => {
        register(`dataCV.${index}.check`) // đóng modal mất register nên reigster lại
        register(`dataCV.${index}.icon`)
        setValue(`dataCV.${index}.icon`, item.icon)
        return (
        // thay doi trong value, nhung fiedl chua thay doi, nên get ra sẽ tháy đồng bộ checked
          <div
            key={item.id}
            style={{ display: getValues(`dataCV.${index}.check`) ? 'block' : 'none' }}
            className="knowledge"
          >
            <div className="knowledge__title">
              <span className="knowledge__title-icon">{icons(item.icon)}</span>
              <Controller
                control={control}
                name={`dataCV[${index}].title`}
                render={({ field: { value, onChange } }) => (
                  <Input
                    className="knowledge__title-head"
                    value={value}
                    onChange={(e) => {
                      onChange(e.target.value)
                    }}
                  />
                )}
              />

            </div>
            <DivisionArray
              register={register}
              getValues={getValues}
              control={control}
              nestedIndex={index}
              setValue={setValue}
            />
          </div>

        )
      })
    }

    </>
  )
}

MainForm.propTypes = {
  control: PropTypes.object,
  register: PropTypes.func,
  getValues: PropTypes.func,
  setValue: PropTypes.func,
  fields: PropTypes.array,
}
