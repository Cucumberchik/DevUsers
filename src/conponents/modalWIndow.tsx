import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux-reducers/reducer/todo';
export default function ModalWIndow({modal, setModal}:{modal:boolean,setModal?: any }) {
    const [values, setValues] = useState({displayName: "", job: "", URL:""})
    let dispatch = useDispatch()
    const handleUser = async() =>{
       if(!values.URL && !values.displayName, !values.job){
            alert("поле не заполнено")
       }else{
            let dates:string = Date().split(' ');
            let date:string = `${dates[2]}.${dates[1]}.${dates[3].slice(2)} в ${dates[4].slice(0, 5)}`;
            let user:TypeUser = {...values, date, id: Date.now() }
            dispatch(addUser(user));
            setModal(false);
            setValues({displayName: "", job: "", URL:""});
       }
    }
    
  return (
    <div id='modal_window' style={{display: modal ? "flex": "none"}}>
      <div className="container">
        <div className="back">
            <h1><ArrowBackIcon onClick={()=>setModal(false)} />Добавить нового пользователя</h1>
        </div>
        <div className="forms">
            <div className="form">
                <h2>ФИО*</h2>
                <input onChange={(e)=>setValues({...values, displayName: e.target.value})} type="text" placeholder='ФИО'/>
            </div>
            <div className="form">
                <h2>РАБОТА*</h2>
                <input onChange={(e)=>setValues({...values, job: e.target.value})} type="text" placeholder='Работа'/>
            </div>
            <div className="form">
                <h2>Аватар*</h2>
                <input onChange={(e)=>setValues({...values, URL: e.target.value})} type="text" placeholder='Ссылка на изображение'/>
            </div>
        </div>
        <button className='add' onClick={handleUser}>ДОБАВИТЬ</button>
      </div>
    </div>
  )
}
