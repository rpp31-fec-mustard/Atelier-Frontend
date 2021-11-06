const fixtures = {
  relatedProducts: [
    {
      id: 60012,
      category: 'Suit',
      name: 'Abigale Suit',
      rating: 3,
      thumbnailUrl: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      originalPrice: '896.00',
      salePrice: null
    },
    {
      id: 60389,
      category: 'Sweater',
      name: 'Alberta Sweater',
      rating: 2.9285714285714284,
      thumbnailUrl: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      originalPrice: '595.00',
      salePrice: null
    },
    {
      id: 60123,
      category: 'Dress',
      name: 'The Evangeline Dress',
      rating: 3,
      thumbnailUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      originalPrice: '230.00',
      salePrice: null
    },
    {
      id: 59930,
      category: 'Trousers',
      name: 'Julian Trousers',
      rating: 2.8461538461538463,
      thumbnailUrl: 'https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      originalPrice: '881.00',
      salePrice: '100.00'
    },
    {
      id: 60109,
      category: 'Shorts',
      name: 'Ezekiel Shorts',
      rating: 3.259259259259259,
      thumbnailUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      originalPrice: '1024.00',
      salePrice: null
    },
    {
      id: 60156,
      category: 'Suit',
      name: 'Raymundo Suit',
      rating: 3.466666666666667,
      thumbnailUrl: 'https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      originalPrice: '352.00',
      salePrice: null
    },
    {
      id: 59772,
      category: 'Coat',
      name: 'Otho Coat',
      rating: 3.3333333333333335,
      thumbnailUrl: 'https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
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