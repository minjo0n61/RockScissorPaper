import HandIcon from './HandIcon';

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button type="button" onClick={handleClick} aria-label="Like Button">
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;
