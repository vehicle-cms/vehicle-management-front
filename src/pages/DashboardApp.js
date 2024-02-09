// material
import '../App.css';
import { Box, Grid, Container, Typography, Button } from '@mui/material';
import { Modal, DatePicker, Checkbox, Skeleton, Select } from 'antd';
import { Workbook } from 'exceljs';
import Page from '../components/Page';
import * as fs from 'file-saver';
import {
  AppWidgetSummary1,
  AppWidgetSummary2,
  AppWidgetSummary3,
  AppWidgetSummary4,
  AppWidgetSummary5,
  AppWidgetSummary6,
  AppWidgetSummary7,
  AppWidgetSummary8,
  AppWidgetSummary9,
  AppWidgetSummary10,
} from '../sections/@dashboard/app';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetCounts } from '../Actions/ManagerActions';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { GetMemerDetail } from '../utils/HandlerFunctions/MemerHandler';
import { emptyReportData } from '../Actions/VehicleActions';
import LoadOptions from '../utils/HandlerFunctions/loadOptions';
// ----------------------------------------------------------------------
// importing our common search and load more data methods from utils
import { loadMoreData } from '../utils/HandlerFunctions/LoadMoreDataHandler';
import { getCampaignSuccess } from '../Actions/OrderAction';
import { useNavigate } from 'react-router-dom';
import { AsyncPaginate } from 'react-select-async-paginate';
import Chart from 'react-apexcharts';

const { RangePicker } = DatePicker;
const dateFormat = 'MMMM Do YYYY';

export default function DashboardApp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [SearchData, setSearchData] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const data = {
      options: {
        chart: {
          id: 'date',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },
      series: [
        {
          name: 'orders',
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };

    setOptions(data);
  }, []);

  const [value, setValue] = useState({
    value: 0,
    label: 'All Orders',
    code: 'All Orders',
  });
  const reportData = useSelector(state => state.MemerReducer.reportData);

  const disabledDate = current => {
    return (
      moment().add(-1, 'days') <= current ||
      moment().add(-365, 'days') >= current
    );
  };

  const onChange1 = e => {
    setDate1(moment(e[0]?._d));
    setDate2(moment(e[1]?._d));
  };

  const onChange2 = e => {
    setChecked(e.target.checked);
    setChecked1(false);
  };
  const onChange3 = e => {
    setChecked1(e.target.checked);
    setChecked(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = event => {
    // console.log(event);
    setValue({ value: event?.value, label: event?.label, code: event?.code });
  };

  const GenerateCsvFile = () => {
    GetMemerDetail(dispatch, value?.code, date1, date2);
  };

  const GenerateCsvFile1 = () => {
    let workbook = new Workbook();

    let worksheet1 = workbook.addWorksheet('Campaigns Report');
    const campaignHeaders = [
      'Memer Name',
      'Contact No',
      'Campaign',
      'Platform',
      'Status',
      'Date',
    ];

    worksheet1.addRow(campaignHeaders);
    reportData.forEach(d => {
      d?.Campaigns?.platform.forEach(d1 => {
        worksheet1.addRow([
          d?.Memerrs?.firstName + ' ' + d?.Memerrs?.lastName,
          d?.Memerrs?.phoneNo,
          d?.Campaigns?.campaignName,
          d1?.platformName,
          d?.status,
          moment(d?.updatedAt).format('MMMM Do YYYY'),
        ]);
      });
    });

    var fileName =
      moment(date1).format('MMMM Do YYYY') +
      '-' +
      moment(date2).format('MMMM Do YYYY');
    workbook.xlsx.writeBuffer().then(data => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, fileName + '-' + new Date().getTime() + '.xlsx');
    });
    dispatch(emptyReportData());
  };

  useEffect(() => {
    dispatch(GetCounts());
  }, []);

  useEffect(() => {
    if (reportData.length > 0) {
      GenerateCsvFile1();
    }
  }, [reportData]);

  useEffect(() => {
    const currentDate = new Date();
    if (checked) {
      const weekDate = moment(currentDate, 'MMMM Do YYYY').add(-7, 'days');
      setDate1(weekDate?._d);
      setDate2(moment(currentDate, 'MMMM Do YYYY').add(-1, 'days')._d);
      setChecked1(false);
    } else if (checked1) {
      const monthDate = moment(currentDate, 'MMMM Do YYYY').add(-30, 'days');
      setDate1(monthDate?._d);
      setDate2(moment(currentDate, 'MMMM Do YYYY').add(-1, 'days')?._d);
      setChecked(false);
    } else {
      setDate1(moment(currentDate));
      setDate2(moment(currentDate));
    }
  }, [checked, checked1]);

  useEffect(() => {
    loadMoreData(
      page,
      pageSize,
      setPage,
      loading,
      setLoading,
      'campaign',
      data,
      setData,
      setData1,
      dispatch,
      getCampaignSuccess,
      navigate
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (SearchData?.length === 0) {
      setData(data);
      setData1(data);
      setLoading(false);
    } else if (SearchData?.length >= 1 && SearchData[0] !== undefined) {
      setData(SearchData);
      setData1([]);
      setLoading(false);
    } else {
      setData(data);
      setLoading(false);
    }
  }, [data, SearchData]);
  return (
    <Page title="Memerr / Memedd CMS">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }} style={{ display: 'flex' }}>
          <div style={{ width: '80%' }}>
            <Typography variant="h4">
              Hi, Welcome back To Vehicle Management System{' '}
            </Typography>
          </div>
          <div style={{ width: '20%' }}>
            <Button onClick={() => setIsModalVisible(true)}>
              Generate Report
            </Button>
          </div>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <Chart
              options={{
                chart: {
                  id: 'date',
                },
                xaxis: {
                  categories: [
                    1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
                  ],
                },
              }}
              series={[
                {
                  name: 'orders',
                  data: [30, 40, 45, 50, 49, 60, 70, 91],
                },
              ]}
              type="bar"
              width="500"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} style={{ marginLeft: '150px' }}>
            <Chart
              options={{
                chart: {
                  height: 350,
                  type: 'area',
                },
                dataLabels: {
                  enabled: false,
                },
                stroke: {
                  curve: 'smooth',
                },
                xaxis: {
                  type: 'datetime',
                  categories: [
                    '2018-09-19T00:00:00.000Z',
                    '2018-09-19T01:30:00.000Z',
                    '2018-09-19T02:30:00.000Z',
                    '2018-09-19T03:30:00.000Z',
                    '2018-09-19T04:30:00.000Z',
                    '2018-09-19T05:30:00.000Z',
                    '2018-09-19T06:30:00.000Z',
                  ],
                },
                tooltip: {
                  x: {
                    format: 'dd/MM/yy HH:mm',
                  },
                },
              }}
              series={[
                {
                  name: 'profit',
                  data: [31, 40, 28, 62, 142, 109, 100],
                },
                {
                  name: 'loss',
                  data: [11, 32, 45, 12, 14, 120, 42],
                },
              ]}
              type="area"
              width="600"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <AppWidgetSummary1
              title="Managers"
              color="info"
              icon={'eva:people-fill'}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <AppWidgetSummary2
              title="Vehicles"
              color="info"
              icon={'logos:active-campaign-icon'}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <AppWidgetSummary3
              title="Orders"
              color="info"
              icon={'ant-design:windows-filled'}
            />
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} md={3}>
            <AppWidgetSummary4
              title="Active Vehicles"
              total={234}
              color="info"
              icon={'icon-park:tag'}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <AppWidgetSummary5
              title="Inactive Vehicles"
              total={234}
              color="info"
              icon={'logos:google-marketing-platform'}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <AppWidgetSummary6
              title="Maintenance"
              total={234}
              color="info"
              icon={'eva:people-fill'}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <AppWidgetSummary7
              title="Drivers"
              total={234}
              color="info"
              icon={'eva:people-fill'}
            />
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <AppWidgetSummary8
              title="Approved"
              total={234}
              icon={'eva:people-fill'}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <AppWidgetSummary9
              title="Pending"
              total={234}
              color="warning"
              icon={'eva:people-fill'}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <AppWidgetSummary10
              title="Rejected"
              total={234}
              color="error"
              icon={'eva:people-fill'}
            />
          </Grid>
        </Grid>
        <Modal
          title={`Generate Report`}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          maskClosable={false}
          footer={false}
          width="60%"
        >
          <div
            style={{
              display: 'flex',
              alignItem: 'centre',
              justifyContent: 'centre',
            }}
          >
            <AsyncPaginate
              value={value}
              loadOptions={LoadOptions}
              onChange={e => onChange(e)}
              additional={{
                page: 1,
              }}
              className="css-b62m3t-container"
            />
            <div
              style={{
                marginLeft: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <RangePicker
                value={[moment(date1, dateFormat), moment(date2, dateFormat)]}
                disabledDate={disabledDate}
                format={dateFormat}
                onChange={onChange1}
              />
            </div>
            <div
              style={{
                marginLeft: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Checkbox checked={checked} onChange={onChange2}>
                Weekly
              </Checkbox>
              <Checkbox checked={checked1} onChange={onChange3}>
                Monthly
              </Checkbox>
            </div>
          </div>
          <br></br>
          <div
            style={{
              height: '50px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'centre',
            }}
          >
            <Button onClick={() => GenerateCsvFile()}>Generate</Button>
          </div>
        </Modal>
      </Container>
    </Page>
  );
}
