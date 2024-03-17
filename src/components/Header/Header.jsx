import bgImage from '../../assets/image/bg.png';
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mx-1 px-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
              <li>
              <input
              type="text"
              placeholder="Search" 
              className="input input-bordered w-48 md:w-auto rounded-3xl"
            />
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl mx-0 px-0">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
            
          </ul>
        </div>
        <div className="navbar-end gap-3 md:flex ">
          <div className="form-control relative md:block hidden">
            <input
              type="text"
              placeholder="Search" 
              className="input input-bordered w-24 md:w-auto rounded-3xl"
            />
            <IoSearchOutline className='absolute left-[87%] top-[35%]'  />
          </div>
          <a className=""><CgProfile className='text-3xl bg-[#0BE58A] rounded-full' /></a>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${bgImage})` }} className='bg-cover rounded-xl'>
        <div className='text-white lg:py-12'>
          <h1 className="lg:text-5xl md:text-2xl text-xl lexend-bold py-8 pt-20 ">
          Embark on a Culinary Adventure <br /> with Our Cooking Classes!
          </h1>
          <p className="lg:text-lg text-sm lexend-normal py-4">
          Join us in mastering the art of cooking! Whether you&apos;re a novice or a seasoned chef, our expertly crafted <br /> cooking classes offer something for everyone. Get ready to unleash your inner chef and impress <br /> your friends and family with delicious meals!
          </p>
          <div className='lg:py-10 pb-20  flex-col '>
          <button className="btn px-8 bg-[#0BE58A] lexend-semi-bold rounded-3xl text-[#150B2B lg:mx-8 my-5">Explore Now</button>
          <button className="btn bg-transparent text-white rounded-3xl lexend-semi-bold">Our Feedback</button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
