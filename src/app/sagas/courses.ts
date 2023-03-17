import { call, put, takeEvery } from 'redux-saga/effects';
import { getCourses } from '../../api/courses-service';
import { coursesLoadingStart, coursesSuccess } from '../../features/courses/courses-slice';
import { finishAction, setError } from '../../features/actions-info/actions-info-slice';
import { ICoursesResponse } from '../../types/course';

function* coursesWorker() {
  try {
    const { courses } = (yield call(getCourses)) as ICoursesResponse;

    yield put(coursesSuccess(courses));
  } catch (error) {
    yield put(setError(error));
  } finally {
    yield put(finishAction(coursesLoadingStart.type));
  }
}

function* coursesSaga() {
  yield takeEvery(coursesLoadingStart.type, coursesWorker);
}

export default coursesSaga;
