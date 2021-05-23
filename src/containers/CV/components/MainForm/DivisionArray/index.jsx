/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Controller, useFieldArray } from 'react-hook-form'
import {
  Button, DatePicker, Input, Rate, Tooltip,
} from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import moment from 'moment'
import { DeleteOutlined, PlusSquareOutlined } from '@ant-design/icons'
import { insertItemArray } from 'helpers/insertArray'
import { toastWarning } from 'helpers/toastify'

function DivisionArray(props) {
  const { RangePicker } = DatePicker
  const {
    nestedIndex, control, register, getValues, setValue,
  } = props
  let {
    // eslint-disable-next-line prefer-const
    fields, remove, insert,
  } = useFieldArray({
    control,
    name: `dataCV.[${nestedIndex}].divisions`,
  })

  const handleRemove = (index) => {
    const divisions = getValues(`dataCV[${nestedIndex}].divisions`)
    if (divisions.length > 1) { remove(index) } else toastWarning('Không thể xóa hết')
  }

  const handleAdd = (index) => {
    const description = getValues(`dataCV[${nestedIndex}].divisions[${index}].description`)
    const subdesc = getValues(`dataCV[${nestedIndex}].divisions[${index}].subdesc`)
    const detailInfo = getValues(`dataCV[${nestedIndex}].divisions[${index}].detailInfo`)
    const nameSkill = getValues(`dataCV[${nestedIndex}].divisions[${index}].nameSkill`)
    const timeRange = getValues(`dataCV[${nestedIndex}].divisions[${index}].timeRange`)
    const rate = getValues(`dataCV[${nestedIndex}].divisions[${index}].rate`)

    const initData = {
      description: (description || description === '') ? '' : null,
      subdesc: (subdesc || subdesc === '') ? '' : null,
      detailInfo: (detailInfo || detailInfo === '') ? '' : null,
      nameSkill: (nameSkill || nameSkill === '') ? '' : null,
      timeRange: timeRange ? [] : undefined,
      rate: rate ? 5 : null,
    }
    insert(index + 1, { ...initData })
  }
  return (
    <>
      {
      fields.map((item, index) => {
        return (

          <div key={item.id} className="division">
            { (item.description || item.description === '') && (
            <div className="division__title">
              <Controller
                control={control}
                defaultValue={item.description}
                name={`dataCV[${nestedIndex}].divisions[${index}].description`}
                render={({ field: { value, onChange } }) => (
                  <TextArea
                    autoSize
                    placeholder="Vui lòng nhập thông tin"
                    className="division__title-input"
                    value={value}
                    onChange={(e) => {
                      onChange(e.target.value)
                    }}
                  />
                )}
              />

            </div>
            )}
            {
               (item.timeRange) && (
               <Controller
                 control={control}
                 defaultValue={item.timeRange}
                 name={`dataCV[${nestedIndex}].divisions[${index}].timeRange`}
                 render={({ field: { value, onChange } }) => (
                   <RangePicker
                     className="data-picker-input"
                     picker="month"
                     value={value.length === 2 ? [
                       moment(value[0]),
                       moment(value[1]),
                     ] : []}
                     onChange={(selectedDates) => {
                       const dateStart = selectedDates[0].format('YYYY-MM')
                       const dateEnd = selectedDates[1].format('YYYY-MM')
                       onChange([dateStart, dateEnd])
                     }}
                   />
                 )}
               />
               )
            }

            { (item.subdesc || item.subdesc === '') && (
            <Controller
              control={control}
              defaultValue={item.subdesc}
              name={`dataCV[${nestedIndex}].divisions[${index}].subdesc`}
              render={({ field: { value, onChange } }) => (
                <Input
                  placeholder="Vui lòng nhập thông tin"
                  className="division__input"
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                />
              )}
            />
            )}
            {
            (item.nameSkill || item.nameSkill === '') && (
            <>
              <Controller
                control={control}
                defaultValue={item.nameSkill}
                name={`dataCV[${nestedIndex}].divisions[${index}].nameSkill`}
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="Vui lòng nhập thông tin"
                    className="division__input"
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                  />
                )}
              />
              <Controller
                control={control}
                name={`dataCV[${nestedIndex}].divisions[${index}].rate`}
                render={({ field: { value, onChange } }) => (
                  <Rate
                    allowHalf
                    defaultValue={item.rate}
                    style={{ margin: '0 10px' }}
                    value={value}
                    onChange={(e) => onChange(e)}
                  />
                )}
              />
            </>
            )
            }
            {
              (item.detailInfo || item.detailInfo === '') && (
              <Controller
                defaultValue={item.detailInfo}
                control={control}
                name={`dataCV[${nestedIndex}].divisions[${index}].detailInfo`}
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="Vui lòng nhập thông tin"
                    className="division__input"
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                  />
                )}
              />
              )
            }

            <div className="button-control">
              <Tooltip color="cyan" title="Thêm mục mới">
                <Button
                  className="button-control-btn"
                  type="primary"
                  onClick={() => handleAdd(index)}
                  icon={<PlusSquareOutlined />}
                />
              </Tooltip>
              <Tooltip color="orange" title="Xóa danh mục này">
                <Button
                  className="button-control-btn"
                  type="primary"
                  danger
                  onClick={() => handleRemove(index)}
                  icon={<DeleteOutlined />}
                />
              </Tooltip>
            </div>
          </div>

        )
      })
    }
    </>
  )
}

DivisionArray.propTypes = {
  control: PropTypes.object,
  register: PropTypes.func,
  nestedIndex: PropTypes.number,
  getValues: PropTypes.func,
  setValue: PropTypes.func,

}

export default DivisionArray
