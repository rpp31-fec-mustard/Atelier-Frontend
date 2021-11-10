const fixtures = {
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
  },
  questions: [
    {
      "question_id": 513729,
      "question_body": "What fabric is the bottom made of?",
      "question_date": "2018-02-18T00:00:00.000Z",
      "asker_name": "iluvcatz",
      "question_helpfulness": 6,
      "reported": false,
      "answers": {
        "4811908": {
          "id": 4811908,
          "body": "Some kind of recycled rubber, works great!",
          "date": "2018-03-18T00:00:00.000Z",
          "answerer_name": "iluvdogz",
          "helpfulness": 3,
          "photos": []
        },
        "4811931": {
          "id": 4811931,
          "body": "Rubber",
          "date": "2018-03-18T00:00:00.000Z",
          "answerer_name": "iluvdogz",
          "helpfulness": 8,
          "photos": [
            "https://images.unsplash.com/photo-1477823986828-5aff156284aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
          ]
        },
        "4811934": {
          "id": 4811934,
          "body": "Its a rubber sole",
          "date": "2018-03-18T00:00:00.000Z",
          "answerer_name": "iluvbirds",
          "helpfulness": 1,
          "photos": [
            "https://images.unsplash.com/photo-1528318269466-69d920af5dad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          ]
        },
        "4811961": {
          "id": 4811961,
          "body": "The rubber on the bottom wears thin quickly",
          "date": "2018-02-18T00:00:00.000Z",
          "answerer_name": "iluvdogz",
          "helpfulness": 46,
          "photos": []
        }
      }
    },
    {
      "question_id": 513725,
      "question_body": "Why is this product cheaper here than other sites?",
      "question_date": "2018-11-28T00:00:00.000Z",
      "asker_name": "jbilas",
      "question_helpfulness": 6,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 513735,
      "question_body": "What fabric is the top made of?",
      "question_date": "2018-11-08T00:00:00.000Z",
      "asker_name": "wonderwoman",
      "question_helpfulness": 5,
      "reported": false,
      "answers": {
        "4811919": {
          "id": 4811919,
          "body": "Something pretty soft but I can't be sure",
          "date": "2018-01-08T00:00:00.000Z",
          "answerer_name": "superman",
          "helpfulness": 5,
          "photos": []
        },
        "4811977": {
          "id": 4811977,
          "body": "Suede",
          "date": "2018-11-08T00:00:00.000Z",
          "answerer_name": "Seller",
          "helpfulness": 8,
          "photos": []
        },
        "4811990": {
          "id": 4811990,
          "body": "Its the best! Seriously magic fabric",
          "date": "2018-11-08T00:00:00.000Z",
          "answerer_name": "superman",
          "helpfulness": 4,
          "photos": []
        },
        "4811991": {
          "id": 4811991,
          "body": "Supposedly suede, but I think its synthetic",
          "date": "2018-12-08T00:00:00.000Z",
          "answerer_name": "superman",
          "helpfulness": 5,
          "photos": []
        }
      }
    },
    {
      "question_id": 513733,
      "question_body": "What fabric is the back made of?",
      "question_date": "2018-04-12T00:00:00.000Z",
      "asker_name": "wildchild",
      "question_helpfulness": 5,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 513724,
      "question_body": "Can I wash it?",
      "question_date": "2018-07-06T00:00:00.000Z",
      "asker_name": "jbilas",
      "question_helpfulness": 5,
      "reported": false,
      "answers": {
        "4811924": {
          "id": 4811924,
          "body": "I wouldn't machine wash it",
          "date": "2018-08-06T00:00:00.000Z",
          "answerer_name": "dschulman",
          "helpfulness": 1,
          "photos": []
        },
        "4811925": {
          "id": 4811925,
          "body": "Only if you want to ruin it!",
          "date": "2018-08-06T00:00:00.000Z",
          "answerer_name": "dschulman",
          "helpfulness": 2,
          "photos": []
        },
        "4811926": {
          "id": 4811926,
          "body": "I've thrown it in the wash and it seems fine",
          "date": "2018-08-06T00:00:00.000Z",
          "answerer_name": "dschulman",
          "helpfulness": 3,
          "photos": []
        },
        "4811927": {
          "id": 4811927,
          "body": "It says not to",
          "date": "2018-08-06T00:00:00.000Z",
          "answerer_name": "dschulman",
          "helpfulness": 4,
          "photos": []
        },
        "4811949": {
          "id": 4811949,
          "body": "Yes",
          "date": "2018-09-06T00:00:00.000Z",
          "answerer_name": "dschulman",
          "helpfulness": 6,
          "photos": []
        }
      }
    },
    {
      "question_id": 513736,
      "question_body": "Why is this product cheaper here than other sites?",
      "question_date": "2018-07-28T00:00:00.000Z",
      "asker_name": "l33tgamer",
      "question_helpfulness": 4,
      "reported": false,
      "answers": {
        "4812008": {
          "id": 4812008,
          "body": "This site is awesome!",
          "date": "2018-09-28T00:00:00.000Z",
          "answerer_name": "n00bgamer",
          "helpfulness": 7,
          "photos": []
        },
        "4812009": {
          "id": 4812009,
          "body": "I can't find it cheaper anywhere else?",
          "date": "2018-09-28T00:00:00.000Z",
          "answerer_name": "n00bgamer",
          "helpfulness": 8,
          "photos": []
        },
        "4812010": {
          "id": 4812010,
          "body": "The other sites are marking it up!",
          "date": "2018-09-28T00:00:00.000Z",
          "answerer_name": "Seller",
          "helpfulness": 9,
          "photos": []
        }
      }
    },
    {
      "question_id": 513726,
      "question_body": "What fabric is the front made of?",
      "question_date": "2018-11-08T00:00:00.000Z",
      "asker_name": "internethistorian",
      "question_helpfulness": 1,
      "reported": false,
      "answers": {}
    },
  ]
};

export default fixtures;