const Product = ({post}) => {
  const {title, description, image, price} = post;
  return (
    <div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <img src={image} alt="image" />
      </div>
      <div>
        <p>{price}</p>
      </div>
      <button>
        {
          false ? <p>Remove Item</p> : <p>Add to Cart</p>
        }
      </button>
    </div>
  );
};

export default Product;