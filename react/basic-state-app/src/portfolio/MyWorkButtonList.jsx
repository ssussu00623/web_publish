import React from 'react';
import MyWorkButton from './MyWorkButton';

export default function MyWorkButtonList() {
    const handleClickButtonList =(categoty)=>{
        click(categoty);
    }

    return (
        <ul>
            <li>
                {list&&list.map((item)=>
                    <button className='category'>
                        <MyWorkButton 
                        name={item.name}
                        category={item.category}
                        count={item.count} 
                        click={handleClickButtonList}
                        />
                    </button>
            )}
            </li>
        </ul>
    );
}