import axios from 'axios';

//crud
export const createEvent = (obj) => {
  axios
    .post('/api/events/create', obj)
    // .then(this.props.history.push('/'))
    .catch(err => console.log(err))
}

export const getAllEvents = () => {
  return axios
    .get('/api/events')
    .then(response => response.data)
    .catch(err => console.log(err))
}

export const getOneEvent = (eventId) => {
  return axios
    .get('/api/events/'+eventId)
    .then(response => response.data)
    .catch(err => console.log(err))
}

export const editEvent = (obj) => {
  axios
    .put('/api/events/', obj)
    // .then(this.props.history.push('/'))
    .catch(err => console.log(err))
}

export const deleteEvent = (eventId) => {
  axios
  .delete('/api/events/'+eventId)
  // .then(this.props.history.push('/'))
  .catch(err => console.log(err))
}
