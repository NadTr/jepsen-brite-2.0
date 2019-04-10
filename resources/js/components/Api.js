import axios from 'axios';

//Users
export const logUser = (obj) => {
  console.log("Logging in")
  return axios({
    method: 'post',
    url:'/api/login',
    config : {headers:{'Content-Type' : "application/json"}},
    data: obj
  })
    .catch(err => console.log(err))
}

export const logUserOut = (token) => {
  console.log("Logging out")
  return axios({
    method: 'post',
    url:'/api/logout',
    headers: {'Content-Type' : "application/json","Authorization": "Bearer "+token}
  })
}

export const userSession = (token) => {
  return axios({
    method: 'get',
    url:'/api/user',
    headers: {'Content-Type' : "application/json","Authorization": "Bearer "+token}
  })
}

export const registerUser = (obj) => {
  return axios({
  method: 'post',
  url:'/api/register',
  config : {headers:{'Content-Type' : "application/json"}},
  data: obj
  })
  .catch(err => console.log(err))
}

//Events participation
export const registerEvent = (eventId, token) => {
  console.log("id ",eventId," token ", token);
  return axios({
  method: 'put',
  url:'/api/events/'+eventId+'/inscription',
  headers: {'Content-Type' : "application/json","Authorization": "Bearer "+token}
  })
  .catch(err => console.log(err))
}

export const unregisterEvent = (eventId, token) => {
  console.log("id ",eventId," token ", token);
  return axios({
  method: 'delete',
  url:'/api/events/'+eventId+'/desinscription',
  headers: {'Content-Type' : "application/json","Authorization": "Bearer "+token}
  })
  .catch(err => console.log(err))
}

//crud events
export const createEvent = (obj, token) => {
  return axios({
  method: 'post',
  url:'/api/events/create',
  headers: {'Content-Type' : "application/json","Authorization": "Bearer "+token},
  data: obj
  })
  .catch(err => console.log(err))
}

export const getAllEvents = () => {
  return axios
    .get('/api/events')
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

export const editEvent = (eventId, obj, token) => {
  // return axios
  //   .put('/api/events/'+eventId, obj)
    return axios({
    method: 'put',
    url:'/api/events/'+eventId,
    headers: {'Content-Type' : "application/json","Authorization": "Bearer "+token},
    data: obj
    })
    .catch(err => console.log(err))
}

export const deleteEvent = (eventId, token) => {
  // return axios
  // .delete('/api/events/'+eventId)
  return axios({
  method: 'delete',
  url:'/api/events/'+eventId,
  headers: {'Content-Type' : "application/json","Authorization": "Bearer "+token}
  })
  .catch(err => console.log(err))
}
