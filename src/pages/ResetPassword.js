import React from 'react';
import { Container } from '@mui/material';
import Page from '../components/Page';
import { useEffect, useState } from 'react';
import { Input, Form, Button } from 'antd';
import IsLoggedIn from '../../src/utils/Hooks/isLoggedIn';
import jwtDecode from 'jwt-decode';
import { changePasswordHandler } from '../utils/HandlerFunctions/AdminHandler';

export default function ResetPassword() {
  const [admin, admin_id] = IsLoggedIn();
  const [OldPassword, setOldPassword] = useState('');
  const [decode, setDecode] = useState();
  const [NewPassword, setNewPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (admin != null && admin_id != null) {
      try {
        const decodetoken = jwtDecode(admin);
        setDecode(decodetoken);
      } catch (e) {
        console.log(e);
      }
    }
  }, [admin, admin_id]);

  return (
    <Page>
      <Container>
        <h2>Reset Password</h2>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          layout="horizontal"
          onFinish={() => {
            changePasswordHandler(decode?.adminName, OldPassword, NewPassword, ConfirmPassword);
            //   handleCancel()
          }}
          autoComplete="off"
        >
          <div
            style={{
              width: '400px',
              position: 'relative',
              marginLeft: '30px',
              marginTop: '30px',
              marginBottom: '20px',
            }}
          >
            <Form.Item label="old password">
              <Input value={OldPassword} type="password" onChange={(e) => setOldPassword(e.target.value)} />
            </Form.Item>
            <Form.Item label="new password">
              <Input value={NewPassword} type="password" onChange={(e) => setNewPassword(e.target.value)} />
            </Form.Item>
            <Form.Item label="confirm password">
              <Input value={ConfirmPassword} type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Container>
    </Page>
  );
}
