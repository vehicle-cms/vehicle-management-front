import api from '../../services/backendApi';

const LoadOptions = async (search, loadedOptions, { page }) => {
  const queryParams = new URLSearchParams();

  queryParams.append('limit', 10);
  queryParams.append('page', page);

  if (search) {
    queryParams.append('search', search);
  }

  const url = `campaign?${queryParams.toString()}`;

  const response = await api.get(url);

  const data = response?.data?.result?.map((d, i) => ({
    value: i + 1,
    label: d?.campaignName,
    code: d?.campaignCode,
  }));

  data.unshift({
    value: 0,
    label: 'All Campaigns',
    code: 'All Campaigns',
  });
  // console.log(data);
  // const data1 = data.splice(1, data.length)
  // .filter(d => d.label !== 'All Campaigns');
  // const finalData = data2.concat(data1);
  return {
    options: data,
    hasMore: response?.data?.result?.length === 0 ? false : true,
    additional: {
      page: page + 1,
    },
  };
};
export default LoadOptions;
