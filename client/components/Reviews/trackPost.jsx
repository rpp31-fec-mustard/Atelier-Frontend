import axios from 'axios';


const trackPost = (data) => {
  console.log(data)
  axios.post('/interactions', {
    time: data.time,
    element: data.element,
    widget: data.widget
  })
    .catch((error) => {
      console.log('Client unable to post interaction: ', error);
    });
};

export default trackPost;