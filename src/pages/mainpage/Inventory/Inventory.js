import { Box, Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import MainPageTopNav from '../../../components/mainpagetopnav/MainPageTopNav'
import "./Inventory.scss"
import searchIcon from "./../../../assets/icons/blueSearchIcon.svg"
import addIcon from "./../../../assets/icons/addIcon.svg"
import trashIcon from "./../../../assets/icons/trashIcon.svg"
import plusIcon from "./../../../assets/icons/plusIcon.svg"
import InventoryModal from '../../../components/modals/InventoryModal/InventoryModal'

const Inventory = () => {
  const [ listData ] = useState({

  })
  const [ AddProductStatus,setAddProductStatus ] = useState(false)

  function handleCloseAddProduct(){
    setAddProductStatus(false)
  }
  function handleOpenAddProduct(){
    setAddProductStatus(true)
  }

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
          {
            listData ? (
              <Box className="empty-list"> 
              <p>You do not have any items in your inventory yet.Start by adding a product now</p>
              <Button className="empty-list-button" onClick={handleOpenAddProduct}><Box component="img" src={plusIcon}/> Add Product</Button>
              </Box>
            ) : null
          }
        </Box>

        <InventoryModal handleCloseAddProduct={handleCloseAddProduct} AddProductStatus={AddProductStatus} />

    </div>
  )
}

export default Inventory