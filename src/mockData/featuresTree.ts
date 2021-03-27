export interface IFeature {
  /* assuming the name is unique relative to the current branch and level. We should use Guid on prod 
  to ensure uniqueness */
  name: string;
  // recursive interface, the price can be sub-features or just a price
  children: IFeature[] | null;
  price: null | number;
}

// export const mockFeatures: IFeature[] = [
//   {
//     name: "A",
//     price: 50,
//   },
//   {
//     name: "B",
//     price: 50,
//   },
// ];
export const mockFeatures: IFeature[] = [
  {
    name: "A",
    price: null,
    children: [
      {
        name: "1",
        price: null,
        children: [
          {
            name: "1",
            price: 50,
            children: null,
          },
        ],
      },
      {
        name: "2",
        price: null,
        children: [
          {
            name: "1",
            price: 30,
            children: null,
          },
          {
            name: "2",
            price: 20,
            children: null,
          },
        ],
      },
      {
        name: "3",
        price: null,
        children: [
          {
            name: "1",
            price: 50,
            children: null,
          },
        ],
      },
    ],
  },
  {
    name: "B",
    price: null,
    children: [
      {
        name: "1",
        price: null,
        children: [
          {
            name: "1",
            price: 50,
            children: null,
          },
        ],
      },
      {
        name: "2",
        price: null,
        children: [
          {
            name: "1",
            price: 30,
            children: null,
          },
          {
            name: "2",
            price: 20,
            children: null,
          },
        ],
      },
      {
        name: "3",
        price: null,
        children: [
          {
            name: "1",
            price: 50,
            children: null,
          },
        ],
      },
    ],
  },
  {
    name: "C",
    price: null,
    children: [
      {
        name: "1",
        price: null,
        children: [
          {
            name: "1",
            price: 50,
            children: null,
          },
        ],
      },
      {
        name: "2",
        price: null,
        children: [
          {
            name: "1",
            price: null,
            children: [
              {
                name: "1",
                price: 30,
                children: null,
              },
              {
                name: "2",
                price: 30,
                children: null,
              },
            ],
          },
          {
            name: "2",
            price: 20,
            children: null,
          },
        ],
      },
      {
        name: "3",
        price: null,
        children: [
          {
            name: "1",
            price: 50,
            children: null,
          },
        ],
      },
    ],
  },
];
