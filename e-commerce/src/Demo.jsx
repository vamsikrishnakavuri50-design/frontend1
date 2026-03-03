function Demo() {
  const arr = [1, 2, 3, 4, 5];
  const squared = arr.map((pt) => pt * pt);

  return (
    <div>
      <h3>This is Demo Page</h3>
      <p>Squares: {squared.join(", ")}</p>
    </div>
  );
}

export default Demo;
