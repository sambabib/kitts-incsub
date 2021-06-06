import arrow from '../Images/arrow-down.svg';
import './DropDown.scss';

const DropDown = () => {
  return (
    <div className='dropdown'>
      <div className='dropdown-description'>
        <p>I would describe my user type as</p>
        <img src={arrow} alt='arrow' />
      </div>
    </div>
  );
};

export default DropDown;
