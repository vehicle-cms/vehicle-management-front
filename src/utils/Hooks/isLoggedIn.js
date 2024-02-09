import React, { useEffect, useState } from 'react';


const IsLoggedIn = (navigation) => {
  const [admin, setadmin] = useState(null)
  const [admin_id, setadminId] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const admin = localStorage.getItem('admin')
        const admin_id = localStorage.getItem('admin_id')
        if (admin !== null && admin_id !== null) {
          setadmin(admin)
          setadminId(admin_id)
        }
      } catch (e) {
        console.log('🚀 -------------------------------------------------')
        console.log('🚀 ~ file: Dashboard.js ~ line 44 ~ getData ~ e', e)
        console.log('🚀 -------------------------------------------------')
      }
    }
    getData();
  }, [admin, admin_id])

  return [admin, admin_id];
};

export default IsLoggedIn;