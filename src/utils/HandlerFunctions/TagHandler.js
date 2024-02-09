import { failureNotifier, successNotifier } from '../notifications';
import api from '../../services/backendApi';
import { GetTags } from '../../Actions/TagActions';

export const createTagHandler = async (dispatch, Name, Description) => {
  try {
    const data = await api.post('tag', {
      name: Name,
      description: Description,
    });

    successNotifier(data?.data?.message);
    dispatch(GetTags(1, 8));
  } catch (e) {
    failureNotifier('failed to create', e?.response?.data?.message);
  }
};

export const updateTagHandler = async (navigate, dispatch, tagCode, name, description) => {
  try {
    const updateTag = await api.put('/tag', {
      tagCode,
      name,
      description,
    });
    successNotifier(updateTag?.data?.message);
    dispatch(GetTags(1, 8));
  } catch (e) {
    failureNotifier('failed to update category', e?.response?.data?.message);
  }
};

export const deleteCategoryHandler = async (categoryid) => {
  try {
    const updatecategory = await api.post('/deletecategory', {});
    successNotifier(updatecategory?.data?.message);
  } catch (e) {
    failureNotifier('failed to delete category', e?.response?.data?.message);
  }
};
export const deleteTagHandler = async (dispatch, code) => {
  try {
    const deleteTag = await api.put('/tag', {
      tagCode: code,
      isDeleted: true,
    });
    successNotifier(deleteTag?.data?.message);
    dispatch(GetTags(1, 8));
  } catch (e) {
    failureNotifier('failed to delete', e?.response?.data?.message);
  }
};
