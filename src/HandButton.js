import HandIcon from './HandIcon';
import './HandButton.css';

// CSS 파일로 스타일을 적용해 주세요
function HandButton({ value, onClick }) {
  const handleClick = () => {
    onClick(value);
  };

  return (
    // eslint-disable-next-line
    <button type="button" onClick={handleClick} className="HandButton">
      <HandIcon value={value} className="HandButton-icon" />
    </button>
  );
}

export default HandButton;
