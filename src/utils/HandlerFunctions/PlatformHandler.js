import { failureNotifier, successNotifier } from '../notifications';
import api from '../../services/backendApi';
import { GetPlatforms } from '../../Actions/PlatformActions';

export const createPlatformHandler = async (
  dispatch,
  platformName,
  description,
  logo,
  background,
  inputList
) => {
  try {
    const data = await api.post('platform', {
      platformName,
      description,
      logo,
      background,
      formats: inputList,
    });

    successNotifier(data?.data?.message);
    dispatch(GetPlatforms(1, 8));
  } catch (e) {
    failureNotifier('failed to create', e?.response?.data?.message);
  }
};

export const updatePlatformHandler = async (
  navigate,
  dispatch,
  platformCode,
  platformName,
  description,
  logo,
  background,
  inputList1
) => {
  try {
    const updatePlatform = await api.put('/platform', {
      platformCode,
      platformName,
      description,
      logo,
      background,
      formats: inputList1,
    });
    successNotifier(updatePlatform?.data?.message);
    dispatch(GetPlatforms(1, 8));
  } catch (e) {
    failureNotifier('failed to platform', e?.response?.data?.message);
  }
};

export const deleteCategoryHandler = async categoryid => {
  try {
    const updatecategory = await api.post('/deletecategory', {});
    successNotifier(updatecategory?.data?.message);
  } catch (e) {
    failureNotifier('failed to delete category', e?.response?.data?.message);
  }
};
export const deletePlatformHandler = async (dispatch, platformCode) => {
  try {
    const deletePlatform = await api.put('platform', {
      platformCode: platformCode,
      isDeleted: true,
    });
    successNotifier(deletePlatform?.data?.message);
    dispatch(GetPlatforms(1, 8));
  } catch (e) {
    failureNotifier('failed to delete platform', e?.response?.data?.message);
  }
};
