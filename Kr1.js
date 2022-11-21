// import Kr1 from "./App";
import "./Kr1.css";
import {Link} from 'react-router-dom'
function Kr1(){
    return(
        <>
        <div className="body2">
        <div className="krhib">
            <img className="krhi" />
        </div>
        <div className="krdeb">
            <img className="kri1" />
            <img className="kri2" />
            <img className="kri3 " />
            <div className="krhead">
            <h1>KRK MESS</h1></div>
            <div className="rating">
                <div className="rati">
                 <h3>3</h3></div>
                 <div className="strimg">
                    <img className="str1"/>
                    <img className="str2"/>
                    <img className="str3"/>
                </div>
            </div>
            <div className="opcl">
        <h3>open.closes 23.00</h3></div>
        <div className="add">
            <div className="address">
                <p>ADDRESS:<br></br>4696/B,KUNIYAMUTHUR,WEST STREET,PK PUDUR,COIMBATORE.
                </p>
                <p>PHONE NUMBER:9498125917</p>
            </div>
            <div className="review">
                <div className="reviewwri">
                    <h3>REVIEW</h3>
                </div>
            </div>
        </div>
        <div className="submit">
            <div className="submitwri">
                <h3>SUBMIT</h3>
            </div>
        </div>
        </div>
        </div>
        </>
    );
}
export default Kr1;