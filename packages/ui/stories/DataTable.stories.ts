import {type Meta, type StoryObj} from '@storybook/react';

import {createColumnHelper, DataTable} from '../source/main.js';

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
} satisfies Meta<typeof DataTable>;

export default meta;

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
};

let columnHelper = createColumnHelper<Person>();

export const Example = {
  args: {
    columns: [
      columnHelper.accessor('firstName', {header: 'First name'}),
      columnHelper.accessor('lastName', {header: 'Last name'}),
      columnHelper.accessor('age', {header: 'Age'}),
      columnHelper.accessor('visits', {header: 'Visits'}),
      columnHelper.accessor('progress', {header: 'Progress'}),
    ],
    data: [
      {
        firstName: 'Keshawn',
        lastName: 'Nienow',
        age: 18,
        visits: 967,
        progress: 0.8319533329922706,
      },
      {
        firstName: 'Jessika',
        lastName: 'Hammes',
        age: 6,
        visits: 328,
        progress: 0.5358367217704654,
      },
      {
        firstName: 'Doyle',
        lastName: 'Bahringer',
        age: 10,
        visits: 209,
        progress: 0.9502009525895119,
      },
      {
        firstName: 'Dorcas',
        lastName: 'Veum',
        age: 20,
        visits: 687,
        progress: 0.1999788130633533,
      },
      {
        firstName: 'Lora',
        lastName: 'Stehr',
        age: 10,
        visits: 114,
        progress: 0.38429923285730183,
      },
      {
        firstName: 'Ashlynn',
        lastName: 'Cremin',
        age: 27,
        visits: 80,
        progress: 0.5231144968420267,
      },
      {
        firstName: 'Maurice',
        lastName: 'Carter',
        age: 7,
        visits: 79,
        progress: 0.03656844771467149,
      },
      {
        firstName: 'Koby',
        lastName: 'Lakin',
        age: 10,
        visits: 510,
        progress: 0.3844321088399738,
      },
      {
        firstName: 'Abel',
        lastName: 'Blick',
        age: 30,
        visits: 83,
        progress: 0.3772270390763879,
      },
      {
        firstName: 'Brody',
        lastName: 'Tremblay',
        age: 12,
        visits: 536,
        progress: 0.2540890504606068,
      },
      {
        firstName: 'Wyman',
        lastName: 'Bartoletti',
        age: 20,
        visits: 487,
        progress: 0.3690157849341631,
      },
      {
        firstName: 'Karl',
        lastName: 'Hauck',
        age: 20,
        visits: 303,
        progress: 0.8013321915641427,
      },
      {
        firstName: 'Zetta',
        lastName: 'Pacocha',
        age: 34,
        visits: 424,
        progress: 0.3230210489127785,
      },
      {
        firstName: 'Lavina',
        lastName: 'Dicki',
        age: 1,
        visits: 978,
        progress: 0.3348319777287543,
      },
      {
        firstName: 'Lori',
        lastName: 'Jast',
        age: 1,
        visits: 614,
        progress: 0.6883253722917289,
      },
      {
        firstName: 'Verner',
        lastName: 'Olson',
        age: 7,
        visits: 59,
        progress: 0.6476487128529698,
      },
      {
        firstName: 'Dave',
        lastName: 'Murray',
        age: 6,
        visits: 921,
        progress: 0.8405016609467566,
      },
      {
        firstName: 'Aisha',
        lastName: 'Ondricka',
        age: 25,
        visits: 567,
        progress: 0.4781352747231722,
      },
      {
        firstName: 'Deonte',
        lastName: 'Crist',
        age: 27,
        visits: 326,
        progress: 0.3692465734202415,
      },
      {
        firstName: "D'angelo",
        lastName: 'Langworth',
        age: 36,
        visits: 563,
        progress: 0.08297628839500248,
      },
    ],
  },
} satisfies StoryObj<typeof meta>;
