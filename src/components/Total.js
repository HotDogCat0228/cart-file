import { CartContext } from "../store"
import { useContext } from "react"
export default function Total() {
    const [state , dispatch] = useContext(CartContext); 
    return (<>
        <div className="bg-light p-3 rounded-0 border">
            <table className="table align-middle">
                <tbody>
                {state.cartList.length ? state.cartList.map(d=>
                <tr key={d.id} className=" bg-light">
                    <td><button type="button" className="btn btn-sm" onClick={(e)=>{
                        dispatch({
                            type:'DELETE_PRODUCT',
                            payload:{...d}
                        })
                    }}>x</button></td>
                    <td><img src={d.img} className="table-img" alt="" /></td>
                    <td>
                        {d.title}
                        <br/>
                        <small className="text-muted">
                            $NT {d.price}
                        </small>
                    </td>
                    <td>
                        <select name="" className="form-select" id=""
                        value={d.quantity}
                        onChange={(e)=>{
                            e.preventDefault();
                            const quantity = parseInt(e.target.value);
                            dispatch({
                                type: 'UPDATE_QUANTITY',
                                payload:{
                                    ...d,
                                    quantity
                                }
                            })
                        }}>
                            {[...Array(20)].map((_,index) => <option key={index} value={index+1}>{index+1}</option>)}
                        </select>
                    </td>
                    <td className="text-end">
                        $NT {d.quantity * d.price}
                    </td>
                </tr>
                ): <tr><td>沒有品項</td></tr>}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5} className="text-end">
                            總金額 NT $ {state.total || 0}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </>)
}