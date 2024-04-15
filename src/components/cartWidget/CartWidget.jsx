import { TbBrandElectronicArts } from "react-icons/tb"
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = ({ counter }) => {
    const {  cartQuantity } = useContext(CartContext)
    

    return (
        <div >
            <TbBrandElectronicArts color="#800080 " fontSize={'3.0rem'} />
            {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        </div>
    )
}
export default CartWidget