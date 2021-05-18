import {FaClipboardList,FaDollarSign,FaUserCheck} from "react-icons/fa"
import './style.css'
export default function Content(){
  return(
    <>
     <div className="content">
       <span className="content-title">App Dashboard</span>

       <section className="content-itens">

        <div className="content-products">
          <div className="content-products-block">
            <h5 className="content-products-title">PRODUCTS IN DATABASE</h5>
            <span className="content-products-value">135</span>
          </div>
          
          <div className="content-icons"><FaClipboardList/></div>
        </div>

        <div className="content-amount">
          <div className="content-amount-block">
            <h5 className="content-amount-title">AMOUNT IN PRODUCTS</h5>
            <span className="content-amount-value">$546.456</span>
          </div>
          
          <div className="content-icons"><FaDollarSign/></div>
        </div>

        <div className="content-users">
          <div className="content-users-block">
            <h5 className="content-users-title">USERS QUANTITY</h5>
            <span className="content-users-value">38</span>
          </div>
          
          <div className="content-icons"><FaUserCheck/></div>
        </div>

      </section>
     </div> 
     
    </>
  );
}