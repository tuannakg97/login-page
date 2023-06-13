import "./styles.scss";

interface DividerProps {
  label?: string;
}

const Divider = ({ label = "" }: DividerProps) => {
  return (
    <div className="divider">
      <span className="line" />
      <span className="label">{label}</span>
      <span className="line" />
    </div>
  );
};

export default Divider;
