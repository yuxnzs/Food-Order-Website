interface NavbarProps {
  categories: string[];
  onCategoryClick: (category: string) => void; // Scrolling to the specific category section
}

const Navbar = ({ categories, onCategoryClick }: NavbarProps) => {
  return (
    <nav className="Navbar">
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button onClick={() => onCategoryClick(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
