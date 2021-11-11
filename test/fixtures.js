const fixtures = {
  product: {
    id: 59553,

  },
  styles: {
    'product_id': 59648,
    results: [
      {
        'style_id': 365413,
        name: 'Forest Green & Black',
        'original_price': '140.00',
        'sale_price': null,
        'default?': true,
        photos: [
          {
            'thumbnail_url': 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
          },
          {
            'thumbnail_url': 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80'
          },
        ],
        skus: {
          '2122777': {
            quantity: 8,
            size: 'XS'
          },
          '2122778': {
            quantity: 16,
            size: 'S'
          },
          '2122779': {
            quantity: 17,
            size: 'M'
          },
          '2122780': {
            quantity: 10,
            size: 'L'
          },
          '2122781': {
            quantity: 15,
            size: 'XL'
          },
          '2122782': {
            quantity: 4,
            size: 'XL'
          }
        }
      },
      {
        name: 'Style Two',
        photos: [
          {
            'thumbnail_url': 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
          }
        ]
      },
      {
        name: 'Style Three',
        photos: [
          {
            'thumbnail_url': 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
          }
        ]
      }
    ]
  },
  relatedProducts: [
    {
      id: 60012,
      category: 'Suit',
      name: 'Abigale Suit',
      features: [
        {feature: 'Frame', value: '"DuraResin"'},
        {feature: 'Non-GMO', value: null},
        {feature: 'Non-GMO', value: null}
      ],
      thumbnailUrl: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      defaultPrice: '896.00',
      originalPrice: '896.00',
      salePrice: null
    },
    {
      id: 60389,
      category: 'Sweater',
      name: 'Alberta Sweater',
      features: [ { feature: 'Stitching', value: '"Cross Stitch"' } ],
      thumbnailUrl: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      defaultPrice: '595.00',
      originalPrice: '595.00',
      salePrice: null
    },
    {
      id: 60123,
      category: 'Dress',
      name: 'The Evangeline Dress',
      features: [
        { feature: 'Sustainably Sourced', value: null },
        { feature: 'Fair Trade Certified', value: null },
        { feature: '5 Year Warranty', value: null }
      ],
      thumbnailUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      defaultPrice: '230.00',
      originalPrice: '230.00',
      salePrice: null
    },
    {
      id: 59930,
      category: 'Trousers',
      name: 'Julian Trousers',
      features: [
        { feature: 'Non-GMO', value: null },
        { feature: 'Frame', value: '"AllLight Composition Resin"' },
        { feature: 'Stitching', value: '"Double Stitch"' }
      ],
      thumbnailUrl: 'https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      defaultPrice: '881.00',
      originalPrice: '881.00',
      salePrice: '100.00'
    },
    {
      id: 60109,
      category: 'Shorts',
      name: 'Ezekiel Shorts',
      features: [ {feature: 'Cut', value: '"Striaght"'} ],
      thumbnailUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      defaultPrice: '906.00',
      originalPrice: '1024.00',
      salePrice: null
    },
    {
      id: 60156,
      category: 'Suit',
      name: 'Raymundo Suit',
      features: [
        {feature: 'Green Leaf Certified', value: null},
        {feature: 'Lens', value: '"Ultrasheen Basic"'}
      ],
      thumbnailUrl: 'https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      defaultPrice: '352.00',
      originalPrice: '352.00',
      salePrice: null
    },
    {
      id: 59772,
      category: 'Coat',
      name: 'Otho Coat',
      features: [ {feature: 'Fabric', value: '"Cashmere"'} ],
      thumbnailUrl: 'https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      defaultPrice: '400.00',
      originalPrice: '400.00',
      salePrice: null
    }
  ],
  reviews: [
    {
      reviewId: 1016925,
      rating: 5,
      summary: 'This product was great!',
      recommend: true,
      response: '',
      body: 'I really did or did not like this product based on whether it was sustainably sourced. Then I found out that its made from nothing at all.',
      date: '2019-01-01T00:00:00.000Z',
      reviewerName: 'funtime',
      helpfulness: 17,
      photos: []
    },
    {
      reviewId: 1016926,
      rating: 4,
      summary: 'This product was ok!',
      recommend: false,
      response: '',
      body: 'I really did not like this product solely because I am tiny and do not fit into it.',
      date: '2019-01-11T00:00:00.000Z',
      reviewerName: 'mymainstreammother',
      helpfulness: 2,
      photos: []
    },
    {
      reviewId: 1074951,
      rating: 5,
      summary: 'I love it!!',
      recommend: false,
      response: null,
      body: 'Just the best, I live for this product',
      date: '2021-10-30T00:00:00.000Z',
      reviewerName: 'Clayton',
      helpfulness: 0,
      photos: []
    },
    {
      reviewId: 1074950,
      rating: 5,
      summary: 'hello',
      recommend: false,
      response: null,
      body: 'a',
      date: '2021-10-30T00:00:00.000Z',
      reviewerName: 'Clayton',
      helpfulness: 0,
      photos: [Array]
    }
  ],
  meta: {
    productId: '59553',
    ratings: {
      '4': '1',
      '5': '10'
    },
    recommended: {
      false: '3',
      true: '8'
    },
    characteristics: {
      Fit: { id: 199845, value: '3.1818181818181818' },
      Length: { id: 199846, value: '3.0909090909090909' },
      Comfort: { id: 199847, value: '5.0000000000000000' },
      Quality: { id: 199848, value: '4.8181818181818182' }
    }
  }
};

export default fixtures;