import "./Header.scss";

export function Header() {
  return (
    <header className="header">
        <h1 className="header__title">E-commerce Admin </h1>
        <form className="search-bar" action="">
        <input         
          className="search-bar__input" 
          type="text" 
          placeholder="Search..." 
         />
        <button         
          className="search-bar__button"
          aria-label="Search">
        </button>
        </form>
        <div className="header__actions">
          <div className="notification">
            <img className="notification__icon" src="" alt=""/>
            <p>notifications</p>
          </div>
          <div className="profile">
            <img className="profile__avatar" src="" alt="" />
            <p>profile__name</p>
          </div>
        </div>
    </header>
  );
}