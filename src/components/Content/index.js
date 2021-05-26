import { FaClipboardList, FaDollarSign, FaUserCheck } from "react-icons/fa";
import product from '../../assets/product_dummy.svg'

import "./style.css";

export default function Content() {
  return (
    <>
      <div className="content">
        <span className="content-title">App Dashboard</span>

        <section className="content-itens">
          <div className="content-products">
            <div className="content-products-block">
              <h5 className="content-products-title">PRODUCTS IN DATABASE</h5>
              <span className="content-products-value">135</span>
            </div>

            <div className="content-icons">
              <FaClipboardList />
            </div>
          </div>

          <div className="content-amount">
            <div className="content-amount-block">
              <h5 className="content-amount-title">AMOUNT IN PRODUCTS</h5>
              <span className="content-amount-value">$546.456</span>
            </div>

            <div className="content-icons">
              <FaDollarSign />
            </div>
          </div>

          <div className="content-users">
            <div className="content-users-block">
              <h5 className="content-users-title">USERS QUANTITY</h5>
              <span className="content-users-value">38</span>
            </div>

            <div className="content-icons">
              <FaUserCheck />
            </div>
          </div>
        </section>

        <section className="content-center">
          <div className="content-center-last">
            <div className="content-center-last-title">
              <h4>Last Product in Data Base</h4>
            </div>
            
            <section className="content-center-lastSection">
              <div className="content-center-last-img">
                <img src={product} alt=""/>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat iste voluptate, inventore laboriosam tempore aliquid quia quibusdam blanditiis nesciunt officiis optio fugit expedita suscipit architecto ullam soluta, in magni asperiores!</p>
              <a href="#" className="content-center-lastLink">View product detail</a>
            </section>
          </div>

          <div className="content-center-categories">
            <div className="content-center-last-title">
              <h4>Categories in Data Base</h4>
            </div>
            
            <section className="content-center-catSection">
              <div className="content-center-categoriesCategs"><span>Category 01</span></div>
              <div className="content-center-categoriesCategs"><span>Category 02</span></div>
              <div className="content-center-categoriesCategs"><span>Category 03</span></div>
              <div className="content-center-categoriesCategs"><span>Category 04</span></div>
              <div className="content-center-categoriesCategs"><span>Category 05</span></div>
              <div className="content-center-categoriesCategs"><span>Category 06</span></div>
            </section>
          </div>
        </section>

      </div>
    </>
  );
}
