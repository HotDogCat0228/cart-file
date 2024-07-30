import { useContext } from "react"
import { CartContext } from "../store"

export default function Navbar() {

const [state] = useContext(CartContext);
    return (<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">香香麵攤</a>
        <button type="button" className="d-flex btn btn-outline-dark border-0 align-items-center">購物車<span className="badge rounded-pill bg-danger">{state.cartList.length}</span></button>
    </div>
  </nav>)
}