import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ModalWIndow from './modalWIndow';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, searchUser } from '../redux-reducers/reducer/todo';
export default function Home() {
    const [modal, setModal] = useState(false);
    let [searchValue, setSearch] = useState('')
    let {value} = useSelector((state)=>state.todo);
    let dispatch = useDispatch();
    console.log(value);
    
    function Searching(){
        dispatch(searchUser(searchValue))
    }
  return (
    <div id='Home'>
      <section>
        <div className="home_search">
          <div className="search">
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Найти пользователя по ФИО' />
            <button onClick={Searching} ><SearchIcon/></button>
          </div>
          <button className='add' onClick={()=>setModal(true)}>Добавить</button>
        </div>
        <div className="home_users">
            <div className="home_users_title">
                <div className="home_users_name">
                    <h1>Дата регистраций <KeyboardArrowDownIcon/></h1>
                    <h1>ФИО</h1>
                </div>
                <div className="home_users_name">
                    <h1>Работа</h1>
                    <h1>Изменить</h1>
                </div>
            </div>
            <div className="users">
                {value?.map(el=>(
                    <div className="user" key={el.id}>
                    <div className="user_data">
                            <img src={el.URL} alt="logo" />
                            <h2>{el.date}</h2>
                    </div>
                    <div className="user_name">
                        <h2>{el.displayName}</h2>
                    </div>
                    <div className="user_jobs">
                        <h2>{el.job}</h2>
                        <button onClick={()=>dispatch(deleteUser(el.id))}><DeleteIcon/></button>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
      </section>
      <ModalWIndow modal={modal} setModal={setModal}/>
    </div>
  )
}
