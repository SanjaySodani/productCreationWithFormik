import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function EditProduct() {
    let params = useParams();
    let baseURL = "https://61a32591014e1900176dead9.mockapi.io/products"
    let [tempVar, setTempVar] = useState({});

    let updateProduct = () => {
        axios.put(baseURL + `/${params.id}`, {
            name: formik.values.name,
            description: formik.values.description,
            price: formik.values.price,
            image: formik.values.image
        })
    }

    useEffect(() => {
        axios.get(baseURL + `/${params.id}`).then((response) => {
            let temp = response.data;
            setTempVar(temp);
        });
    }, [])

    const formik = useFormik({
        initialValues: {
            name: tempVar.name,
            description: tempVar.description,
            price: tempVar.price,
            image: tempVar.image
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, "Minimum 3 characters required")
                .max(20, "Maximum 20 characters allowed")
                .required("Required"),
            description: Yup.string()
                .min(3, "Minimum 10 characters required")
                .max(20, "Maximum 40 characters allowed")
                .required("Required"),
            price: Yup.number().min(50, "Must be atleast 50").required("Required"),
            image: Yup.string()
                .matches(
                    /((http?):\/\/)?(www.)?[a-z0-9]/,
                    'Enter correct url!'
                )
                .required('Required')
        }),
        enableReinitialize: true,
        onSubmit: () => {
            updateProduct();
        }
    });

    if (!tempVar) return null;

    return (
        <div className='container'>
            <h4 className='mt-3 mb-2 font-weight-normal'>Edit product</h4>
            <div className='row row-cols-1'>
                <div className='col'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='form-group'>
                            <label>Product name:</label>
                            <input type="text" placeholder='Name' className='form-control'
                                value={formik.values.name} onChange={formik.handleChange} name="name"
                                onBlur={formik.handleBlur} />
                            <small className='text-danger'>{formik.touched.name && formik.errors.name}</small>
                        </div>
                        <div className='form-group'>
                            <label>Product price (INR):</label>
                            <input type="number" placeholder='Price' className='form-control'
                                value={formik.values.price} onChange={formik.handleChange} name="price"
                                onBlur={formik.handleBlur} />
                            <small className='text-danger'>{formik.touched.price && formik.errors.price}</small>
                        </div>
                        <div className='form-group'>
                            <label>Product description:</label>
                            <input type="text" placeholder='Description' className='form-control'
                                value={formik.values.description} onChange={formik.handleChange} name="description"
                                onBlur={formik.handleBlur} />
                            <small className='text-danger'>{formik.touched.description && formik.errors.description}</small>
                        </div>
                        <div className='form-group'>
                            <label>Image link:</label>
                            <input type="text" placeholder='Link' className='form-control'
                                value={formik.values.image} onChange={formik.handleChange} name="image"
                                onBlur={formik.handleBlur} />
                            <small className='text-danger'>{formik.touched.image && formik.errors.image}</small>
                        </div>
                        <div className='form-group'>
                            <button type='submit'
                                className='btn btn-primary'>
                                Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProduct;