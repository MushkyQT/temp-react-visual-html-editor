import {put, takeEvery, all} from 'redux-saga/effects'
import helloSaga from "./helloSaga";

//Workers

//Watchers

export default function* rootSaga() {
  yield all([
    helloSaga(),
  ])
  // after all-effect
}