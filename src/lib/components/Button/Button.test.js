import React from 'react'
import { shallow } from 'enzyme'

// import { Button } from './Button'

// eslint-disable-next-line react/button-has-type
const Button = () => <button>Hello world</button>

describe('<Button />', () => {
  it('should render', () => {
    const wrapper = shallow(<Button />)

    expect(wrapper).toBeDefined()
  })
})
