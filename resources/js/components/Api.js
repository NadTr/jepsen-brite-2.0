import axios from 'axios';

//gestion Users
export const logUser = (obj) => {
  return axios({
    method: 'post',
    url:'/api/login',
    config : {headers:{'Content-Type' : "application/json"}},
    data:obj
  })
    .catch(err => console.log(err))
}

//crud
export const createEvent = (obj) => {
  return axios
    .post('/api/events/create', obj)
    // .then(this.props.history.push('/'))
    .catch(err => console.log(err))
}

export const getAllEvents = () => {
  return axios
    .get('/api/events/')
    .then(response => response.data)
    .catch(err => console.log(err))
}

export const getOldEvents = () => {
  return axios
    .get('/api/events/1/5')
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
  return axios
    .put('/api/events/', obj)
    // .then(this.props.history.push('/'))
    .catch(err => console.log(err))
}

export const deleteEvent = (eventId) => {
  return axios
  .delete('/api/events/'+eventId)
  // .then(this.props.history.push('/'))
  .catch(err => console.log(err))
}
