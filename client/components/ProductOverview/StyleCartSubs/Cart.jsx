import React, {useState, useEffect} from 'react';

const Cart = ({style, addToCart, order}) => {
  const [contents, setContents] = useState([]);


  const handleOrderClick = (index) => {
    var tempArr = [...contents];
    tempArr.splice(index, 1);
    setContents(tempArr);
  };

  //when order updated, add to contents
  useEffect(()=> {
    if (order !== '') {
      let tempArr = [...contents];
      tempArr.push(order);
      setContents(tempArr);
    }
  }, [order]);

  if (contents.length > 0) {


    return (
      <React.Fragment>
        <div className='cart_po'>
          <p className='cart_text_po'>Your Bag</p>
          {
            contents.map((order, index) => {
              return (
                <div key={`${index}`} className={'order_po'}
                  onClick={(index => { handleOrderClick(index); })}>
                  <p className={'cart_order_text_po'}>{order}</p>
                </div>
              );
            })
          }
        </div>
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default Cart;