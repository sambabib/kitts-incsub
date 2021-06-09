import { useState } from 'react';
import arrow from '../Images/arrow-down.svg';
import './DropDown.scss';

const DropDown = ({ title, list }) => {
  const [state, setState] = useState({
    isListOpen: false,
    dropdownTitle: title,
  });

  const toggleList = () => {
    setState({
      isListOpen: !state.isListOpen,
      dropdownTitle: title,
    });
    console.log('setting state');
  };

  const selectItem = (item) => {
    const { title } = item;
    setState({
      isListOpen: false,
      dropdownTitle: title,
    });
  };

  return (
    <div className='dropdown'>
      <div className='dropdown-description'>
        <p>{state.dropdownTitle}</p>
        <img src={arrow} alt='arrow' onClick={toggleList} />
      </div>
      {state.isListOpen && (
        <div className='dropdown-list'>
          {list.map((item) => {
            return (
              <div
                className='dropdown-list-items'
                key={item.id}
                onClick={() => selectItem(item)}
              >
                <p className='list-title'>{item.title}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;
