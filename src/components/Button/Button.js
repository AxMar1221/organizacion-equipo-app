import "./Button.css";

export const Button = (dataBtn) => {
  return (
    <>
      <button className="btn">{dataBtn.children}</button>
    </>
  );
};
