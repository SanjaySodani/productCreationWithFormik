import { Link } from 'react-router-dom';
import './App.css';

function Product(props) {

    let handleDelete = () => {
        props.removeProduct(props.item.id);
    }

    return (
        <div className='col my-2'>
            <div className='card'>
                <div className='imgContainer'>
                    <img src={props.item.image} alt="image" className='card-img-top img-fluid' />
                </div>
                <div className='card-body'>
                    <h5 className='card-title'>{props.item.name}</h5>
                    <h6 className='card-subtitle mb-2'>Price: {props.item.price} Rs</h6>
                    <p className='card-text'>{props.item.description}</p>
                    <Link to={`/edit-product/${props.item.id}`} className="btn btn-outline-primary btn-sm">Edit</Link>
                    <button type="button" className='btn btn-sm btn-danger ml-2' onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Product;