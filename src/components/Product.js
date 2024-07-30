import { CartContext } from "../store"
import { useContext } from "react"
export default function Product({id, img, price, title}) {
    const [state , dispatch] = useContext(CartContext)
    return (
    <div className="col p-3">
        <div className="card rounded-0">
            <img src={img} className="card-img-top rounded-0" alt="..." />
            <div className="card-body">
            <h5 className="card-title">
            <div className="d-flex justify-content-between">
                <span className="fw-bold fs-5">{title}</span>
                <span className="fw-bold">$ {price}</span>
            </div></h5> 
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-light border-dark rounded-0 w-100"
                onClick={()=> {
                    dispatch({
                        type: 'ADD_TO_CART',
                        payload:{
                            ...{
                                id, img, price, title,
                                quantity : 1
                            }
                        }
                    })
                }}
                >加入購物車</button>
            </div>
            </div>
        </div>
    </div>)
}