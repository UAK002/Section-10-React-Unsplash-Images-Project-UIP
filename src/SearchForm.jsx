const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          search
          https://api.unsplash.com/search/photos?client_id=ZpHERRZLFMcptAlGTYga5y0P3lz4hP1slFkQXQeq9Wo&
          query=office
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
