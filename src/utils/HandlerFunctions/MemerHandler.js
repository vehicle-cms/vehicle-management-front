import { failureNotifier, successNotifier } from '../notifications';
import api from '../../services/backendApi';
import { addReportData, GetMemers } from '../../Actions/VehicleActions';
import moment from 'moment';

export const updateStatus = async (navigate, dispatch, code, value) => {
  try {
    const updateMemer = await api.put('memerr', {
      memerrCode: code,
      isNotActive: value,
    });
    successNotifier(updateMemer?.data?.message);
    dispatch(GetMemers(navigate, 1, 8));
  } catch (e) {
    failureNotifier('failed to platform', e?.response?.data?.message);
  }
};
export const updatePrice = async (navigate, dispatch, code, value) => {
  try {
    const updateMemer = await api.put('memerr', {
      memerrCode: code,
      price: value,
    });
    successNotifier(updateMemer?.data?.message);
    dispatch(GetMemers(navigate, 1, 8));
  } catch (e) {
    failureNotifier('failed to platform', e?.response?.data?.message);
  }
};
export const GetMemerDetail = async (
  dispatch,
  selectedCampaign,
  startDate,
  endDate
) => {
  try {
    const queryParams = new URLSearchParams();
    console.log(selectedCampaign);

    queryParams.append('startDate', moment(startDate).format('YYYY-MM-DD'));
    queryParams.append('endDate', moment(endDate).format('YYYY-MM-DD'));
    console.log(selectedCampaign);
    if (selectedCampaign !== 'All Campaigns') {
      // console.log(selectedCampaign + 'clicked');
      queryParams.append('campaignCode', selectedCampaign);
    }
    // console.log('indise');
    const url = `/?${queryParams.toString()}`;
    console.log(url);
    const memerData = await api.get(`/meme/with-campaign-memerr${url}`);
    dispatch(addReportData(memerData?.data?.result));
    let string = '';
    if (memerData?.data?.result.length === 0) {
      string = 'No data to show';
    }
    successNotifier('fetched successfully' + ' ' + string);
    return memerData;
  } catch (e) {
    failureNotifier('failed to get', e?.response?.data?.message);
  }
};
