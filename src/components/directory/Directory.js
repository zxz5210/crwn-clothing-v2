import './Directory.styles.scss';
import CategoryItem from "../category-item/CategoryItem";

export default function Directory(props) {

  return (
    <div className='directory-container'>
      {props.categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />
      })}
    </div>
  );
};