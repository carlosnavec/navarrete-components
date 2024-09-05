import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Table, { TableProps } from './Table';

const meta: Meta<typeof Table> = {
  title: "ReactComponentLibrary/Table",
  component: Table,
};

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

export const TableDefault: StoryFn<TableProps> = Template.bind({});

TableDefault.args = {
  headers: ['Name', 'Actions'],
  data: [
    ['juan', 'https://example.com/juan1'],
    ['María', 'https://example.com/maria2'],
    ['Pedro', 'https://example.com/pedro'],
  ],
  onContentCellClick: (cellText) => {
   console.log(cellText)
  }
};

export const TableOneRow: StoryFn<TableProps> = Template.bind({});

TableOneRow.args = {
  headers: ['Name'],
  data: [
    ['juan'],
    ['maría'],
    ['pedro'],
  ],
};

export default meta;