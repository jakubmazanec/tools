import {type Meta, type StoryObj} from '@storybook/react-vite';

import {Table, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '../source/main.js';

const meta = {
  title: 'Components/Table',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

export const Example = {
  args: {
    children: (
      <>
        <TableCaption>Front-end web developer course 2021</TableCaption>
        <TableHead>
          <TableRow>
            <TableHeader scope="col">Person</TableHeader>
            <TableHeader scope="col">Most interest in</TableHeader>
            <TableHeader scope="col">Age</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          <TableRow>
            <TableHeader scope="row">James</TableHeader>
            <TableCell>TypeScript</TableCell>
            <TableCell>22</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">Emma</TableHeader>
            <TableCell>Web accessibility</TableCell>
            <TableCell>47</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">Clive</TableHeader>
            <TableCell>React frameworks</TableCell>
            <TableCell>29</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">Susan</TableHeader>
            <TableCell>Web performance</TableCell>
            <TableCell>35</TableCell>
          </TableRow>
        </tbody>
        <tfoot>
          <TableRow>
            <TableHeader colSpan={2} scope="row">
              Average age
            </TableHeader>
            <TableCell>33</TableCell>
          </TableRow>
        </tfoot>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} satisfies StoryObj<typeof meta>;
