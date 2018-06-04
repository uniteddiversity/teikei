import Alert from 'react-s-alert'
import request from '../common/request'
import config from '../configuration'
import { client } from '../App'

export const FETCH_ALL_PLACES_REQUESTED = 'FETCH_ALL_PLACES_REQUESTED'
export const FETCH_ALL_PLACES_SUCCESS = 'FETCH_ALL_PLACES_SUCCESS'
export const FETCH_ALL_PLACES_ERROR = 'FETCH_ALL_PLACES_ERROR'
export const FETCH_MY_PLACES_SUCCESS = 'FETCH_MY_PLACES_SUCCESS'
export const FETCH_MY_PLACES_ERROR = 'FETCH_MY_PLACES_ERROR'
export const SHOW_POSITION = 'SHOW_POSITION'
export const SET_COUNTRY = 'SET_COUNTRY'
export const SHOW_INFO = 'SHOW_INFO'
export const SHOW_MAP = 'SHOW_MAP'

const shouldFetchData = ({ isFetchingAll, places }) =>
  !isFetchingAll || places.length < 1

export const showPosition = payload => ({ type: SHOW_POSITION, payload })

const fetchAllPlacesRequested = () => ({ type: FETCH_ALL_PLACES_REQUESTED })

const fetchAllPlacesSuccess = payload => ({
  type: FETCH_ALL_PLACES_SUCCESS,
  payload
})

const fetchMyPlacesSuccess = payload => ({
  type: FETCH_MY_PLACES_SUCCESS,
  payload
})

const fetchAllPlacesError = payload => {
  Alert.error('Die Karte konnte nicht geladen werden.')
  return { type: FETCH_ALL_PLACES_ERROR, payload, error: true }
}

const fetchMyPlacesError = payload => {
  Alert.error('Die Einträge konnten nicht geladen werden.')
  return { type: FETCH_MY_PLACES_ERROR, payload, error: true }
}

const fetchAllPlaces = () => dispatch =>
  request
    .get(`${config.apiBaseUrl}/places`)
    .withCredentials()
    .end((err, res) => {
      if (res.body.errors) {
        dispatch(fetchAllPlacesError(res.body.errors))
      } else {
        dispatch(fetchAllPlacesSuccess(res.body))
      }
    })

export const fetchMyPlaces = () => dispatch =>
  request
    .get(`${config.apiBaseUrl}/places/mine`)
    .withCredentials()
    .end((err, res) => {
      if (res.body.errors) {
        dispatch(fetchMyPlacesError(res.body.errors))
      } else {
        dispatch(fetchMyPlacesSuccess(res.body))
      }
    })

export const requestAllPlaces = force => (dispatch, getState) => {
  // dispatch(fetchAllPlacesRequested())
  dispatch(client.entries.find())

  // if (force || shouldFetchData(getState().map)) {
  //   return dispatch(fetchAllPlaces())
  // }
  // return dispatch(fetchAllPlacesSuccess())
}

export const setCountry = country => ({ type: SET_COUNTRY, payload: country })

export const showInfo = () => ({ type: SHOW_INFO })

export const showMap = () => ({ type: SHOW_MAP })
