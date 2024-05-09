import listIconImg from "../images/icon-list.svg";

const products = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

const ListItem = () => {
  return (
    <div className="my-4">
      {products.map((product, index) => {
        return (
          <div key={index} className="flex sm:gap-6 gap-2 sm:my-2 my-1">
            <img src={listIconImg} alt="" />
            <p>{product}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ListItem;
