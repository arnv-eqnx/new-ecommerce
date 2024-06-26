const Nav = () => {
  return (
    <div className="nav flex flex-row items-center justify-between">
      <div className="navTitle">FlopKart</div>
      <ul className=" flex flex-row gap-6 justify-start cursor-pointer">
        <li>Shop</li>
        <li>Product</li>
        <li>Cart</li>
        <li>Orders</li>
        <li>Add roducts</li>
        <li>Admin Products</li>
      </ul>
    </div>
  );
};

export default Nav;
