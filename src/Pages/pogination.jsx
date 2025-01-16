// eslint-disable-next-line react/prop-types
const Next = ({ setNextPage }) => {
  const handlePage = () => {
    setNextPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <div className="btn-group flex justify-center mb-7 gap-4">
        <button className="btn" onClick={() => setNextPage(prevPage => Math.max(prevPage - 1, 0))}>
          « Previous
        </button>
        <button className="btn" onClick={() => setNextPage(prevPage => 1)}>1</button>
        <button className="btn" onClick={() => setNextPage(prevPage => 2)}>2</button>
        <button className="btn" onClick={() => setNextPage(prevPage => 3)}>3</button>
        <button className="btn" onClick={handlePage}>Next »</button>
      </div>
    </>
  );
};

export default Next;
