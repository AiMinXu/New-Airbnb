import React, { memo, useEffect, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo(() => {
  const [slectItems, setSlectItems] = useState([])//定义选中数组状态记录选择项

  //点击操作
  const itemClickHandle = (item) => {
    const newItems = [...slectItems]
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex(filterItem => filterItem === item)//找到对应索引
      newItems.splice(itemIndex, 1)//移除操作
    } else {
      newItems.push(item)
    }
    setSlectItems(newItems)
  }

  useEffect(() => {
    //发送网络请求获取相应条件的数据
  }, [])

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map(item => {
            return (
              <div
                className={classNames('item', { active: slectItems.includes(item) })}
                key={item}
                onClick={e => itemClickHandle(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter
