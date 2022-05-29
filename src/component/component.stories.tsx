import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Component } from './component'

type Meta = ComponentMeta<typeof Component>
type Story = ComponentStory<typeof Component>

export default {
  title: 'Component',
  component: Component
} as Meta

const Template: Story = (args) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}

export const WithContent = Template.bind({})
WithContent.args = {
  className: 'bg-red-600',
  children: 'Component'
}
