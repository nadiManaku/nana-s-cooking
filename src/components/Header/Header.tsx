import Image from "next/image";
import { Icon } from "../Icon/Icon";
export default function Header({ onSearch }: { onSearch: (q: string) => void }) {

  return (
    <header className="header">
      <Image src="/images/logo.png" width={100} height={180} alt="Logo" className="header__logo" />
      <form className="search"  
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(e.currentTarget.search.value);
      }}>
        <input
          type="text"
          className="search__field"
          placeholder="Search over 1,000,000 recipes..."
          name="search"
        />
        <button className="btn search__btn" onClick={() => onSearch(document.querySelector('input')?.value || '')}>
          <Icon name="search" className="search__icon" />
          <span>Search</span>
        </button>
      </form>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <button className="nav__btn nav__btn--add-recipe">
              <Icon name="edit" className="nav__icon" />
              <span>Add recipe</span>
            </button>
          </li>
          <li className="nav__item">
            <button className="nav__btn nav__btn--bookmarks">
              <Icon name="bookmark" className="nav__icon" />
              <span>Bookmarks</span>
            </button>
            <div className="bookmarks">
              <ul className="bookmarks__list">
                <div className="message">
                  <div>
                    <Icon name="smile" />
                  </div>
                  <p>
                    No bookmarks yet. Find a nice recipe and bookmark it :)
                  </p>
                </div>
                {/** Here comes dynamic code */}
                {/**<li className="preview">
                  <a className="preview__link" href="#23456">
                    <figure className="preview__fig">
                      <img src="src/img/test-1.jpg" alt="Test" />
                    </figure>
                    <div className="preview__data">
                      <h4 className="preview__name">
                        Pasta with Tomato Cream ...
                      </h4>
                      <p className="preview__publisher">The Pioneer Woman</p>
                    </div>
                  </a>
                </li>*/}
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}
