const ButtonProps = {
  text: "",
  color: "btn btn-primary",
  onClick: () => {},
};

const Button = ({ text, color, onClick }) => {
  return (
    <button type="button" text="button" className={color} onClick={onClick}>
      Dark
    </button>
  );
};

export default Button;
