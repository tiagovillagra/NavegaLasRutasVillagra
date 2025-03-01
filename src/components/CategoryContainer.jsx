import { useParams, Link } from "react-router-dom"; 
import fetchProducts from "../utils/fetchProducts";

const CategoryContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchProducts().then((allProducts) => {
      setItems(allProducts.filter((item) => item.category === categoryId));
    });
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId.toUpperCase()}</h2>
      {items.map((item) => (
        <div key={item.id}>
          <Link to={`/item/${item.id}`}>{item.name}</Link> 
        </div>
      ))}
    </div>
  );
};

export default CategoryContainer;
