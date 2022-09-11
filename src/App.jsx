const App = () => {
  const categories = [
    {
      id: 1,
      title: "Shirts",
    },
    {
      id: 2,
      title: "Hoodies",
    },
    {
      id: 3,
      title: "Tank-tops",
    },
    {
      id: 4,
      title: "Jewelry",
    },
    {
      id: 5,
      title: "accessories",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="category-container">
          {/* <img src="" alt="" /> */}
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
