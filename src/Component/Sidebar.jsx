import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../redux/menuSlice';

const Sidebar = () => {
    
    const dispatch = useDispatch();
    const activeMenu = useSelector((state)=> state.menu.activeMenu);
    const menuItems = [
        {id: 'business', label: 'Business'},
        {id: 'cases', label: 'Cases'},
        {id: 'lab', label: 'Lab'},
        {id: 'usg', label: 'USG'},
        {id: 'digitalXRay', label: 'Digital ExRay'},
        {id: 'manage', label: 'Manage'}
    ];

    const handleToggle = (id)=>{
        dispatch(toggleMenu(id));
    };
    

   
  return (
    <div className='sidebar'>
      <div className="sidebar-header">
        <div className="logo">LAB Smart</div>
        <button className="add-case-btn">Add New Case</button>
      </div>
      <div className='sidebar-menu'>
        {menuItems.map((items)=>(
          <div key={items.id} className='menu-item'>
            <div className='menu-label' onClick={()=> handleToggle(items.id)}>
              {items.label} <span className='arrow'>{activeMenu===items.id? '▼' : '▶'}</span>
            </div>
            {activeMenu===items.id && (
              <div className='submenu'>
                <ul>
                  <li>
                    <Link> Option 1</Link>
                  </li>
                  <li>
                    <Link> Option 2</Link>
                  </li>
                  <li>
                    <Link> Option 3</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar