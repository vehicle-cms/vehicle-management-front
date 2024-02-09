import api from '../../services/backendApi';
import { LogoutHandler } from './AdminHandler';
export const loadMoreData = async (
  page,
  pageSize,
  setPage,
  loading,
  setLoading,
  route,
  data,
  setData,
  setData1,
  dispatch,
  dispatchFunction,
  navigate
) => {
  if (loading) {
    return;
  }

  setPage(page + 1);

  const queryParams = new URLSearchParams();

  queryParams.append('limit', pageSize);
  queryParams.append('page', page);
  const url = `${route}?${queryParams.toString()}`;
  setLoading(true);

  try {
    const getData = await api.get(url);

    if (getData?.data?.result?.length > 0) {
      setData([...data, ...getData?.data.result]);
      setData1([...data, ...getData?.data.result]);
      dispatch(dispatchFunction([...data, ...getData?.data.result]));
      setLoading(false);
    } else {
      setData1([]);
      setLoading(false);
    }
  } catch (e) {
    if (e?.response?.status === 401) {
      LogoutHandler(navigate);
    }
    setLoading(false);
  }
};
