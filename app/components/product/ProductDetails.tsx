import Image from 'next/image';
import styles from './Product.module.css';

interface IProductDetailProps {
  product: {
    title: string,
    subtitle: string,
    image: string,
    tags: string[]
  }
}

interface IProductDetailTagsProps {
  tags: string[],
}

const ProductDetailTags = ({ tags } : IProductDetailTagsProps) => {
  return (
    <div className={styles.tagContainer}>
      {tags.map((tag) => (
        <span key={tag} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}

export const ProductDetails = ({ product } : IProductDetailProps) => {
  const { title, subtitle, image, tags } = product;
  return (
      <div className={styles.productDetails}>
       <Image src={image} alt={title} width={160} height={160} />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <ProductDetailTags tags={tags} />
      </div>
  );
};

export default ProductDetails;
