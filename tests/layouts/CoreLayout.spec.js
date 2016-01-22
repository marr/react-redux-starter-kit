/* global createTest */
import React from 'react'
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
// import { shallow } from 'enzyme'

describe('(Layout) Core', function () {
  const it = createTest(<CoreLayout><h1 className='child'>Child</h1></CoreLayout>)

  it('Should render as a <div>.', (wrapper) => {
    expect(wrapper.type).to.equal('div')
  })
})
