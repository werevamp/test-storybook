import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TestChild from './TestChild'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Default/TestChild',
  component: TestChild,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      description: 'overwritten description',
      table: {
        type: {
          summary: 'something short',
          detail: 'something really really long',
        },
      },
    },
  },
} as ComponentMeta<typeof TestChild>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TestChild> = (args) => <TestChild {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  test: 'Button',
}
