function Input(props) {
  return (
    <div>
      <label>
        Number of States:
        <input
          type="text"
          name="name"
          value={props.numState}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
}
export default Input;
