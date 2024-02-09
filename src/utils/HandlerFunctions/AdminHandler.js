import { GetAdmins } from '../../Actions/ManagerActions';
import api from '../../services/backendApi';
import { failureNotifier, successNotifier } from '../notifications';

export const registerAdminHandler = async (
  FirstName,
  LastName,
  Email,
  PhoneNo,
  Password,
  dispatch
) => {
  try {
    const registerUser = await api.post('/admin/register', {
      firstName: FirstName,
      lastName: LastName,
      email: Email,
      phoneNo: PhoneNo,
      password: Password,
    });
    successNotifier(registerUser?.data?.message);
    dispatch(GetAdmins());
  } catch (e) {
    failureNotifier('failed to create admin', e?.response?.data?.message);
  }
};

export const loginAdminHandler = async (e, email, password, navigate) => {
  e.preventDefault();
  try {
    const registerUser = await api.post('admin/login', {
      adminName: email,
      password: password,
    });
    //  console.log(registerUser)

    localStorage.setItem('admin', registerUser?.data?.result?.token);
    localStorage.setItem(
      'admin_id',
      registerUser?.data?.result?.adminPresent?._id
    );
    const token = localStorage.getItem('admin');

    if (token !== 'undefined') {
      navigate('/dashboard/app');
      successNotifier('you are logged in');
    } else {
      failureNotifier('failed to login');
    }
  } catch (e) {
    // console.log(e)
    failureNotifier('failed to login', e?.response?.data?.message);
  }
};

export const LogoutHandler = navigate => {
  localStorage.removeItem('admin');
  localStorage.removeItem('admin_id');
  navigate('/login');
};
export const updateAdminHandler = async (
  FirstName,
  LastName,
  Email,
  PhoneNo
) => {
  try {
    const updateAdmin = await api.put('/admin', {
      firstName: FirstName,
      lastName: LastName,
      email: Email,
      phoneNo: PhoneNo,
    });
    console.log(updateAdmin);
    successNotifier('Updated successfully.');
  } catch (e) {
    failureNotifier('failed to update', e?.response?.data?.message);
  }
};
export const deleteAdminHandler = async (dispatch, adminCode) => {
  try {
    await api.put('/admin', {
      adminCode: adminCode,
      isDeleted: true,
    });
    successNotifier('Deleted successfully.');
    dispatch(GetAdmins());
  } catch (e) {
    failureNotifier('failed to delete', e?.response?.data?.message);
  }
};
export const changePasswordHandler = async (
  adminName,
  OldPassword,
  NewPassword,
  ConfirmPassword
) => {
  try {
    await api.post('/admin/change-password', {
      adminName: adminName,
      oldPassword: OldPassword,
      password: NewPassword,
      confirmPassword: ConfirmPassword,
    });
    successNotifier('Updated successfully.');
  } catch (e) {
    failureNotifier('failed to Update', e?.response?.data?.message);
  }
};
