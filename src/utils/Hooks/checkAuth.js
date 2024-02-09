import isLoggedIn from '../../utils/Hooks/isLoggedIn';
import { failureNotifier } from '../notifications';
export const checkAuth =(next)=>{
    // const [admin, admin_id] = isLoggedIn();
    const admin=localStorage.getItem('admin')
    const admin_id=localStorage.getItem('admin_id')
    try{
        if(admin && admin_id){
            next()
        }else{
             failureNotifier("you must login first")
             return
        }
    }catch(e){
         console.log(e);
    }
}