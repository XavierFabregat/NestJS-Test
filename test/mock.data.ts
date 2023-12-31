export const mockUsers = [
  {
    id: 'hello123-321olleh-hello123-321olleh',
    firstName: 'Mylena',
    lastName: 'Vendramini',
    username: 'Mylena',
    email: 'i_smile@live.co.uk',
    createdAt: new Date(),
    updatedAt: new Date(),
    password: 'test123',
  },
  {
    id: 'hello456-654olleh-hello456-654olleh',
    firstName: 'Thiago',
    lastName: 'Los',
    username: 'Thiago',
    email: 'cruisin@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date(),
    password: 'test1234',
  },
];

export const updateUserInput = {
  id: mockUsers[0].id,
  firstName: mockUsers[1].firstName,
  lastName: mockUsers[1].lastName,
  email: mockUsers[1].email,
};

export const updatedUser = {
  ...updateUserInput,
  createdAt: mockUsers[0].createdAt,
  updatedAt: new Date(),
};

export const seedUsers = [
  {
    id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    firstName: 'Diana',
    lastName: 'Marquez',
    email: 'diana.marquez@example.com',
    createdAt: new Date('2023-09-16T08:00:00Z'),
    updatedAt: new Date('2023-09-16T08:30:00Z'),
    password: 'test123',
  },
  {
    id: 'c0ec8857-e5bf-4b0a-bcef-6fa04277460e',
    firstName: 'Carlos',
    lastName: 'Santana',
    email: 'carlos.santana@example.com',
    createdAt: new Date('2023-09-15T14:45:00Z'),
    updatedAt: new Date('2023-09-15T15:15:00Z'),
    password: 'test123',
  },
  {
    id: '2c1e5b17-4f68-4b25-9b45-787c5c16ea99',
    firstName: 'Alejandro',
    lastName: 'Valentino',
    email: 'alejandro.valentino@example.com',
    createdAt: new Date('2023-09-14T12:30:00Z'),
    updatedAt: new Date('2023-09-14T13:00:00Z'),
    password: 'test123',
  },
  {
    id: '3a7d3a0e-ec84-4a07-bd1d-4d7b31d7d61c',
    firstName: 'Eva',
    lastName: 'Gonzalez',
    email: 'eva.gonzalez@example.com',
    createdAt: new Date('2023-09-13T18:15:00Z'),
    updatedAt: new Date('2023-09-13T18:45:00Z'),
    password: 'test123',
  },
  {
    id: 'fa02de74-8240-4e08-b4eb-7d90fda4b7f1',
    firstName: 'Diego',
    lastName: 'Rodriguez',
    email: 'diego.rodriguez@example.com',
    createdAt: new Date('2023-09-12T09:30:00Z'),
    updatedAt: new Date('2023-09-12T10:00:00Z'),
    password: 'test123',
  },
  {
    id: '7d4f4f12-87cd-4c62-bc18-9e8b64d3f72f',
    firstName: 'Sophia',
    lastName: 'Johnson',
    email: 'sophia.johnson@example.com',
    createdAt: new Date('2023-09-11T14:30:00Z'),
    updatedAt: new Date('2023-09-11T15:00:00Z'),
    password: 'test123',
  },
  {
    id: '82e1c2e5-663d-48ed-afdd-012b2c171b10',
    firstName: 'Liam',
    lastName: 'Martinez',
    email: 'liam.martinez@example.com',
    createdAt: new Date('2023-09-10T11:45:00Z'),
    updatedAt: new Date('2023-09-10T12:15:00Z'),
    password: 'test123',
  },
  {
    id: '9a8e0a8d-2c9b-45c7-b24c-3b3b1fe09b5f',
    firstName: 'Olivia',
    lastName: 'Taylor',
    email: 'olivia.taylor@example.com',
    createdAt: new Date('2023-09-09T17:20:00Z'),
    updatedAt: new Date('2023-09-09T17:50:00Z'),
    password: 'test123',
  },
  {
    id: 'bca891f9-47db-4bfe-8825-67a5e8698563',
    firstName: 'Mason',
    lastName: 'Garcia',
    email: 'mason.garcia@example.com',
    createdAt: new Date('2023-09-08T10:10:00Z'),
    updatedAt: new Date('2023-09-08T10:40:00Z'),
    password: 'test123',
  },
  {
    id: '6479f394-6e6b-4939-97d3-8edf92f005a8',
    firstName: 'Ava',
    lastName: 'Miller',
    email: 'ava.miller@example.com',
    createdAt: new Date('2023-09-07T16:55:00Z'),
    updatedAt: new Date('2023-09-07T17:25:00Z'),
    password: 'test123',
  },
  {
    id: 'ea915a91-6b3e-4d0a-8f25-7d8ca65d24d2',
    firstName: 'Noah',
    lastName: 'Thomas',
    email: 'noah.thomas@example.com',
    createdAt: new Date('2023-09-06T12:20:00Z'),
    updatedAt: new Date('2023-09-06T12:50:00Z'),
    password: 'test123',
  },
  {
    id: 'c51db999-f0a9-415c-b0e2-6b2a57d71c1b',
    firstName: 'Isabella',
    lastName: 'Brown',
    email: 'isabella.brown@example.com',
    createdAt: new Date('2023-09-05T09:45:00Z'),
    updatedAt: new Date('2023-09-05T10:15:00Z'),
    password: 'test123',
  },
  {
    id: 'f7e7ec18-ec41-4af6-9fb7-7e2b8b9a8a19',
    firstName: 'Liam',
    lastName: 'Clark',
    email: 'liam.clark@example.com',
    createdAt: new Date('2023-09-04T14:30:00Z'),
    updatedAt: new Date('2023-09-04T15:00:00Z'),
    password: 'test123',
  },
  {
    id: 'd3e8e502-5a95-421b-8a5d-5818e01ff7a2',
    firstName: 'Mia',
    lastName: 'Wilson',
    email: 'mia.wilson@example.com',
    createdAt: new Date('2023-09-03T18:45:00Z'),
    updatedAt: new Date('2023-09-03T19:15:00Z'),
    password: 'test123',
  },
];
