function FunctionEvent() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div>
      Functional components
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default FunctionEvent;
