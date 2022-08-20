import { Box, Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainPageTopNav from "../../../components/mainpagetopnav/MainPageTopNav";
import "./Inventory.scss";
import searchIcon from "./../../../assets/icons/blueSearchIcon.svg";
import addIcon from "./../../../assets/icons/addIcon.svg";
import trashIcon from "./../../../assets/icons/trashIcon.svg";
import plusIcon from "./../../../assets/icons/plusIcon.svg";
import editIcon from "./../../../assets/icons/editIcon.svg";
import InventoryModal from "../../../components/modals/InventoryModal/InventoryModal";
import { useSelector } from "react-redux";

const Inventory = () => {
  const { products } = useSelector((state) => state.product);
  const [AddProductStatus, setAddProductStatus] = useState(false);

  function handleCloseAddProduct() {
    setAddProductStatus(false);
  }
  function handleOpenAddProduct() {
    setAddProductStatus(true);
  }
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="inventory">
      <MainPageTopNav name="Inventory" />
      <Box className="inventory-top">
        <Box className="inventory-total">
          <p className="total-amount">0 </p>
          <p className="total-summary">Stock Count </p>
        </Box>
        <Box className="inventory-total">
          <p className="total-amount">0 </p>
          <p className="total-summary">Incoming Stock </p>
        </Box>
        <Box className="inventory-total">
          <p className="total-amount">$0.00</p>
          <p className="total-summary">Stock Amount </p>
        </Box>
      </Box>

      <Box className="inventory-functions">
        <p className="functions-text">items</p>
        <Box className="function-icons">
          <IconButton>
            <img src={searchIcon} alt="search" />
          </IconButton>
          <IconButton onClick={handleOpenAddProduct}>
            <img src={addIcon} alt="add" />
          </IconButton>
          <IconButton>
            <img src={trashIcon} alt="delete" />
          </IconButton>
        </Box>
      </Box>

      <Box className="inventory-list">
        {products.length === 0 ? (
          <Box className="empty-list">
            <p>
              You do not have any items in your inventory yet.Start by adding a
              product now
            </p>
            <Button
              className="empty-list-button"
              onClick={handleOpenAddProduct}
            >
              <Box component="img" src={plusIcon} /> Add Product
            </Button>
          </Box>
        ) : (
          <>
            {" "}
            {products.map((item) => (
              <Box className="inventory-list-item">
                <Box className="list-name">{item.productname}</Box>
                <Box className="list-count">
                  <p className="count">{item.quantity}</p>
                  <p className="name">Stock count</p>
                </Box>
                <Box className="list-price">
                  <p className="count">${item.sellingprice}</p>
                  <p className="name">Price</p>
                </Box>
                <Box className="list-edit">
                  <Box component="img" src={editIcon} />
                </Box>
              </Box>
            ))}
            <Box sx={{
              width:"100%",
              display:"flex",
              justifyContent:"flex-end"
            }}>
            <Button
              className="empty-list-button"
              onClick={handleOpenAddProduct}
              >
              <Box component="img" src={plusIcon} /> Add Product
            </Button>
              </Box>
          </>
        )}
      </Box>

      <InventoryModal
        handleCloseAddProduct={handleCloseAddProduct}
        AddProductStatus={AddProductStatus}
      />
    </div>
  );
};

export default Inventory;
