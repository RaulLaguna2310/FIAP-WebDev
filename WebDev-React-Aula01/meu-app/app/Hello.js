function Hello(props) {
  return (
    <>
      <h1>Olá, {props.nome}!</h1>
      <div>{Date.now()}</div>
    </>
  );
}

export default Hello;
