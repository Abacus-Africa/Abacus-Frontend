import React from "react";
import Dialog from "@mui/material/Dialog";
import "./InventoryModal.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, MenuItem } from "@mui/material";
import { addProduct } from "../../../redux/product";
import { useDispatch } from "react-redux/es/exports";
import TextField from '@mui/material/TextField';

const InventoryModal = (props) => {
  const dispatch = useDispatch();

  const [unit, setUnit] = React.useState("");

    
  const units = [
    {
      value: 'kg',
    },
    {
      value: 'g',
    },
    {
      value: 'cl',
    },
    {
      value: 'ltr',
    },
  ];
  

  return (
    <div>
      <Dialog
        onClose={props.handleCloseAddProduct}
        open={props.AddProductStatus}
        className="inventory-modal"
      >
        <p className="modal-top">Add new product</p>

        <Formik
          initialValues={{
            productname: "",
            costprice: "",
            sellingprice: "",
            quantity: "",
            unit: unit,
          }}
          validationSchema={Yup.object({
            productname: Yup.string().required("product name i required"),
            costprice: Yup.string().required("selling price is required"),
            sellingprice: Yup.string().required("cost price is required"),
            quantity: Yup.string().required("quantity price is required"),
            unit: Yup.string().required("unit price is required"),
          })}
          onSubmit={async (values) => {
            const body = {
              productname: values.productname,
              sellingprice: values.sellingprice,
              quantity: values.quantity,
            };
            dispatch(addProduct(body));
            // alert(JSON.stringify(body))
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="inventory-input-wrapper">
                <label htmlFor="productname"> Product name </label>
                <input
                  type="text"
                  id="productname"
                  name="productname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.productname}
                  className={
                    touched.productname && errors.productname
                      ? "info-error"
                      : null
                  }
                />
                {errors.productname && touched.productname && (
                  <span className="error">{errors.productname}</span>
                )}
              </div>

              <div className="inventory-input-wrapper">
                <label htmlFor="productname"> Cost Price </label>
                <input
                  type="number"
                  id="costprice"
                  name="costprice"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.costprice}
                  className={
                    touched.costprice && errors.costprice ? "info-error" : null
                  }
                />
                {errors.costprice && touched.costprice && (
                  <span className="error">{errors.costprice}</span>
                )}
              </div>

              <div className="inventory-input-wrapper">
                <label htmlFor="productname"> Selling Price </label>
                <input
                  type="number"
                  id="sellingprice"
                  name="sellingprice"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.sellingprice}
                  className={
                    touched.sellingprice && errors.sellingprice
                      ? "info-error"
                      : null
                  }
                />
                {errors.sellingprice && touched.sellingprice && (
                  <span className="error">{errors.sellingprice}</span>
                )}
              </div>

              <div className="inventory-input-wrapper">
                <label htmlFor="productname"> Quantity </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.quantity}
                  className={
                    touched.quantity && errors.quantity ? "info-error" : null
                  }
                />
                {errors.quantity && touched.quantity && (
                  <span className="error">{errors.quantity}</span>
                )}
              </div>

              <div className="inventory-input-wrapper">
                <label htmlFor="productname"> Unit </label>
                <TextField
                  id="outlined-select-currency"
                  select
                  // label="Select"
                  value={unit}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // className={
                  //   touched.quantity && errors.quantity ? "info-error" : null
                  // }
                >
                  {units.map((option) => (
                    <MenuItem key={option.value} value={option.value} onClick={()=>{setUnit(option.value)}}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.unit && touched.unit && (
                  <span className="error">{errors.unit}</span>
                )}
              </div>

              <Button
                type="submit"
                className="inventory-modal-button"
                onClick={props.handleCloseAddProduct}
              >
                Add Product
              </Button>
            </form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default InventoryModal;
