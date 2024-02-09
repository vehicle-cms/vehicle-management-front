import api from '../../services/backendApi';
import { failureNotifier } from '../notifications';
import { LogoutHandler } from './AdminHandler';

export const SearchHandler = async (
  setSearchData,
  setLoading,
  Name,
  route,
  dispatchFunction,
  dispatch,
  navigate
) => {
  if (Name === '') {
    setSearchData([]);
    setLoading(false);
    return;
  }
  const queryParams = new URLSearchParams();

  queryParams.append('search', Name);
  const url = `/${route}/?${queryParams.toString()}`;

  try {
    const data = await api.get(url);
    if (data?.data?.result?.length === 0) {
      setLoading(false);
      setSearchData([]);
      failureNotifier('Not Found');
      return;
    }
    if (data?.data?.result.length > 0) {
      setLoading(true);
    }
    setSearchData([...data?.data.result]);
    dispatch(dispatchFunction([...data?.data.result]));
  } catch (e) {
    if (e?.response?.status === 401) {
      LogoutHandler(navigate);
    }
    setLoading(false);
  }
};
export const SearchHandler1 = async (
  setSearchData,
  setLoading,
  Name,
  route,
  dispatchFunction,
  dispatch,
  navigate
) => {
  if (Name === '') {
    setSearchData([]);
    setLoading(false);
    return;
  }
  const queryParams = new URLSearchParams();

  queryParams.append('search', Name);
  const url = `/${route}/?${queryParams.toString()}`;

  try {
    const data = await api.get(url);
    if (data?.data?.result?.length === 0) {
      setLoading(false);
      setSearchData([]);
      return;
    }
    if (data?.data?.result.length > 0) {
      setLoading(true);
    }
    setSearchData([...data?.data.result]);
    dispatch(dispatchFunction([...data?.data.result]));
  } catch (e) {
    if (e?.response?.status === 401) {
      LogoutHandler(navigate);
    }
    setLoading(false);
  }
};
