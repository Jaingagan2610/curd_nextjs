import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-700 p-4 ">
      <div className="container mx-auto flex justify-between items-center text-lg text-white ">
        <div className="logo">
          <Link href="/">
            
          </Link>
        
        <nav className="navigation">
          <ul className="flex space-x-4 ">
            <li>
              <Link href="/movies">
               movies
              </Link>
            </li>
            <li>
              <Link href="/events">
                events
              </Link>
            </li>
            <li>
              <Link href="/sports">
              sports
              </Link>
            </li>
            <li>
              <Link href="/offers">
               offers
              </Link>
            </li>
            <li>
              <Link href="/gift-cards">
                gift/cards
              </Link>
            </li>
          </ul>
        </nav>
        </div>
        <div className="user-actions">
          <Link href="/signin">
           signin
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

