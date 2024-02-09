import { Input,Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { ProductImageSearchHandler} from '../Actions/AdminActions'

export default function ProductSearch(){
    const dispatch = useDispatch();
    const [value,setValue] = useState("");

    return (
        <div style={{margin:"2rem 0",marginTop:"4rem"}}>
        <Input
          placeholder="Image name"
          style={{width:"55%"}}
          onChange={(e)=>setValue(e.target.value)}
          />
           <Button
        //    onClick={()=>dispatch(ProductImageSearchHandler(value))}
             style={{
                color: '#ffffff',
                background: '#21c980'
               }}
           >Search</Button>
        </div>
    )
}