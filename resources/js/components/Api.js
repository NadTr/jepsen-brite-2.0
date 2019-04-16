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
    url:'/api/me',
    headers: {'Content-Type' : "application/json","Authorization": "Bearer "+token}
  })
}

export const registerUser = (obj) => {
  console.log(obj);
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
  return axios({
  method: 'post',
  url:'/api/attend/'+eventId,
  headers: {'Content-Type' : "application/json","Authorization": "Bearer "+token}
  })
  .catch(err => console.log(err))
}

export const unregisterEvent = (eventId, token) => {
  return axios({
  method: 'delete',
  url:'/api/attend/'+eventId,
  headers: {'Content-Type' : "application/json","Authorization": "Bearer "+token}
  })
  .catch(err => console.log(err))
}

//crud events
export const createEvent = (obj, token) => {
  return axios({
  method: 'post',
  url:'/api/events',
  headers: {'Content-Type' : "application/json","Authorization": "Bearer "+token},
  data: obj
  })
  .catch(err => console.log(err))
}

export const getHomepage = () => {
  return axios
    .get('/api/homepage')
    .then(response => response.data)
    .catch(err => console.log(err))
}

export const getAllEvents = (page = 1) => {
  return axios
    .get('/api/events?page='+page)
    .then(response => response.data)
    .catch(err => console.log(err))
}

export const getOldEvents = (page = 1) => {
  console.log(page);
  return axios
    .get('/api/pastevents?page='+page)
    .then(response => response.data)
    .catch(err => console.log(err))
}

export const getOneEvent = (eventId) => {
  return axios
    .get('/api/event/'+eventId)
    .then(response => response.data)
    .catch(err => console.log(err))
}

export const searchEvent = (string) => {
  return axios
    .get('/api/search?param='+string)
    .then(response => response.data)
    .catch(err => console.log(err))
}

export const editEvent = (eventId, obj, token) => {
    return axios({
    method: 'put',
    url:'/api/events/'+eventId,
    headers: {'Content-Type' : "application/json","Authorization": "Bearer "+token},
    data: obj
    })
    .catch(err => console.log(err))
}

export const deleteEvent = (eventId, token) => {
  return axios({
  method: 'delete',
  url:'/api/events/'+eventId,
  headers: {'Content-Type' : "application/json","Authorization": "Bearer "+token}
  })
  .catch(err => console.log(err))
}
