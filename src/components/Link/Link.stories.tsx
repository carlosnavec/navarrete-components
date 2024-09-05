// Link.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Link from './Link';

const meta: Meta<typeof Link> = {
  title: "ReactComponentLibrary/Link",
  component: Link,
};

const Template: StoryFn<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: 'https://example.com',
  children: 'Visitar Ejemplo',
};

export default meta;