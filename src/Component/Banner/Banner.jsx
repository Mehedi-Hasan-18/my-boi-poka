import banarImg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banarImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-xl font-bold m-7">Books To Freshen Up Your BookShelf</h1>
          <button className="btn btn-primary m-7">Visite The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
