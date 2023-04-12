// El Square es cada uno de los cuadrados del tablero
export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`; // Si isSelected es true, agrega la clase is-selected
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};
