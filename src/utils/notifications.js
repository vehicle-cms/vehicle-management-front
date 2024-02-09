import { notification } from 'antd';

export const successNotifier = (msg) => {
  notification.config({
    placement: 'bottomRight',
    bottom: 20,
    duration: 3,
  });
  notification.open({
    message: msg,
    // icon: <Icon icon="fa-solid:smile-beam" width="40" height="40" color="green" />,
  });
};
export const failureNotifier = (msg, e) => {
  notification.config({
    placement: 'bottomRight',
    bottom: 20,
    duration: null,
  });
  notification.open({
    message: msg,
    description: e,
    // icon: <Icon icon="gg:smile-sad" width="40" height="40" color="red" />
  });
};
