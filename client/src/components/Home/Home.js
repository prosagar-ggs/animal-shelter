import React,{useState} from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiSittingDog } from "react-icons/gi";
import {GrFormLocation,GrMail,GrTwitter,GrFacebook,GrYoutube} from "react-icons/gr";


const Home = () => {
    const [pettype,setPettype] = useState("");
    const [breed,setBreed] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobilenumber,setMobilenumber] = useState("");

    const PostData=()=>{
        fetch("http://localhost:5000/giveaway",{
            method:"post",
            header:{
                "content-type": "application/json"
            },
            body:JSON.stringify({
                pettype,
                breed,
                name,
                email,
                mobilenumber
            })
        }).then(res => res.json())
            .then(data => {
                if(data.error){
                    console.log(data.error);
                }
                else{
                    console.log("Giveaway form submitted");
                }
            }).catch(err => {
                console.log(err);
            })
    }
    const PostDetails=()=>{
        fetch("http://localhost:5000/adopt",{
            method:"post",
            header:{
                "content-type": "application/json"
            },
            body:JSON.stringify({
                pettype,
                breed,
                name,
                email,
                mobilenumber
            })
        }).then(res => res.json())
            .then(data => {
                if(data.error){
                    console.log(data.error);
                }
                else{
                    console.log(data.message);
                }
            }).catch(err => {
                console.log(err);
            })
    }
    const [popup, setPopup] = useState(false);
    const [popup2, setPopup2] = useState(false);
    const [popup3, setPopup3] = useState(false);
    const handleClickOpen=()=>{
        setPopup(!popup);
    }
    const handleClickOpen2=()=>{
        setPopup2(!popup2);
    }
    const handleClickOpen3 = () => {
        setPopup3(!popup3);
    }
    
    const closePopup=()=>{
        setPopup(false);
    }
    
    const closePopup2 = () => {
        setPopup2(false);
    }

    const closePopup3 = () => {
        setPopup3(false);
    }
    
    

    return (
    <>
        <Navbar />
        <div className="content">
            <div className="content-1">
                <div className="content-1_text">
                    <h1 >We do take in pets if you can't take care of them !</h1><br/>
                    <p>Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef wef 
                    efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe bfewufb efb ebf
                    uewbfiuwefbwefweiuf wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf
                    ksjdnf kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes efjebsf beskdb efkjebf kjbejk 
                    fbwekjsf bkewb</p><br/>
                        <button onClick={handleClickOpen2} className="btn" >Give Away</button>
                    <div>
                        {popup2?
                        <div className="main">
                            <div className="popup popup2">
                                <div className="title">
                                    <h1>Give Away</h1>
                                    <h1 onClick={closePopup2}>X</h1>
                                </div>
                                <div className="content">
                                <h1>What pet do you want to give away ?</h1><br/>
                                    <div className="first-form">
                                        <form>
                                            <p>Pet Type *</p>
                                                <input className="one" 
                                                    type="text"
                                                    value={pettype}
                                                    onChange={(e) => setPettype(e.target.value)}
                                                    />
                                        </form>
                                        <form>
                                            <p>Breed *</p>
                                                <input className="one" 
                                                    type="text"
                                                    value={breed}
                                                    onChange={(e) => setBreed(e.target.value)}
                                                    />
                                                    
                                        </form>
                                    </div><br/>
                                <h1> Please fill in your details</h1><br/>
                                    <div className="second-form">
                                            <form>
                                                <p>Full Name *</p>
                                                <input className="one"
                                                    type="text" 
                                                    placeholder="fullName"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    />
                                                <p>E-mail *</p>
                                                <input className="one" 
                                                    type="email" 
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                <p>Mobile Number *</p>
                                                <input className="one" 
                                                    type="digit" 
                                                    placeholder="Mobile number"
                                                    value={mobilenumber}
                                                    onChange={(e) => setMobilenumber(e.target.value)}
                                                    />
                                            </form>
                                    </div><br/><br/>
                                    <button className="btn" style={{float:"right"}} onClick={()=>PostData()}>REQUEST FOR GIVEAWAY</button>
                                </div>
                            </div>
                        </div>:""}
                    </div>
                </div> 
                    <div className="content-1_image">
                    <br/><br/>
                        <img src="https://images.pexels.com/photos/1909802/pexels-photo-1909802.jpeg" alt="welcome"/>
                    </div>
            </div>
                <div className="content-2">
                    <div className="content-2_image">
                        <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" alt="pets"/>
                    </div>
                    <div className="content-2_text">
                        <h1>Interested in Adoption?</h1><br/>
                        <p>Glad that you care for the animals so much. We make sure that you'll 
                        not repent your decision of adopting your favorite pet !!</p>
                        <div className="content-btn btns">
                        <div >
                        <button onClick={handleClickOpen} className="btn btn-1">Adopt</button>
                        <div>
                        {popup?
                        <div className="main">
                            <div className="popup">
                                <div className="title">
                                    <h1>Adopt a pet</h1>
                                    <h1 onClick={closePopup}>X</h1>
                                </div>
                                <div className="content">
                                <h1>What pet do you want to adopt ?</h1><br/>
                                    <div className="first-form">
                                        <form>
                                            <p>Pet Type *</p>
                                                    <input className="one" 
                                                    list="pettype"
                                                    value={pettype}
                                                    onChange={(e) => setPettype(e.target.value)}
                                                    />
                                                    
                                        </form>
                                        <form>
                                            <p>Breed *</p>
                                                    <input className="one" 
                                                    list="breed"
                                                    value={breed}
                                                    onChange={(e) => setBreed(e.target.value)}
                                                    />
                                                    
                                        </form>
                                    </div><br/>
                                <h1> Please fill in your details</h1><br/>
                                    <div className="second-form">
                                            <form>
                                            <p>Full Name *</p>
                                            <input className="one"
                                                type="text" 
                                                placeholder="fullName"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                />
                                            <p>E-mail *</p>
                                            <input className="one" 
                                                type="email" 
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                />
                                            <p>Mobile Number *</p>
                                            <input className="one" 
                                                type="digit" 
                                                placeholder="Mobile number"
                                                value={mobilenumber}
                                                onChange={(e) => setMobilenumber(e.target.value)}
                                                />
                                            </form>
                                    </div><br/><br/>
                                    <button className="btn" style={{float:"right"}} onClick={()=>PostDetails()}>REQUEST FOR ADOPTION</button>
                                </div>
                            </div>
                        </div>:""}
                    </div>
                        </div>
                            <div>
                            <button onClick={handleClickOpen3} className="btn">What all pets do we have?</button>
                            <div>
                        {popup3?
                        <div className="main">
                            <div className="popup popup3">
                                <div className="title">
                                    <h1>What all pets do we have ? </h1>
                                    <h1 onClick={closePopup3}>X</h1>
                                </div>
                                <div className="bloc-tabs">
                                    <div onClick={{}} className="tabs tab-1"><p>DOGS</p></div>
                                    <div className="tabs"><p>CATS</p></div>
                                </div>
                                <div className="content-tabs">
                                    <div className="content active-content">
                                        <table>
                                        <thead>
                                        <tr>
                                            <th><p>Name</p></th>
                                            <th><p>Breed</p></th>
                                            <th><p>Age( months )</p></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><p>Lyka</p></td>
                                            <td><p>Dasch</p></td>
                                            <td><p>12</p></td>
                                        </tr>
                                        <tr>
                                            <td><p>Albie</p></td>
                                            <td><p>Beagle</p></td>
                                            <td><p>3</p></td>
                                        </tr>
                                        <tr>
                                            <td><p>Happy</p></td>
                                            <td><p>Lab</p></td>
                                            <td><p>5</p></td>
                                        </tr>
                                        <tr>
                                            <td><p>Ramu</p></td>
                                            <td><p>Golden Retriever</p></td>
                                            <td><p>6</p></td>
                                        </tr>
                                        <tr>
                                            <td><p>Pinky</p></td>
                                            <td><p>Lab</p></td>
                                            <td><p>7</p></td>
                                        </tr>
                                        <tr>
                                            <td><p>Sweetie</p></td>
                                            <td><p>Beagle</p></td>
                                            <td><p>21</p></td>
                                        </tr>
                                        <tr>
                                            <td><p>Blacky</p></td>
                                            <td><p>Dasch</p></td>
                                            <td><p>11</p></td>
                                        </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>:""}
                    </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div>
        <footer className="page-footer">
            <div className="first-part">
                <h2 className="white-text"><GiSittingDog className="dog"/>ANIMAL SHELTER</h2>
                <p className="grey-text text-lighten-4">One of the best animal shelter places in India.
                We're recognized by the government. Please take a pledge to take care of these lovely pets !</p>
                <button onClick={handleClickOpen} className="btn">Adopt <AiOutlineArrowRight/></button>
                
            </div>
            <div className="middle-part">
                <h2>GET IN TOUCH</h2>
                <p> <GrFormLocation className="icon"/>llesfnee cnu efoin eoifn oewifnewo inf sdc
                csdcneno ie woiwemfwokm fwe
                w ecen cloenwo we - 355233</p>
                <p><GrMail/> cisubdcusb@gmail.com</p>
                <h2> FOLLOW US</h2>
                <GrTwitter className="icon"/>  <GrFacebook className="icon"/>  <GrYoutube className="icon"/>
                
            </div>
            <div className="links">
                <h2 className="white-text">Links</h2>
                <ul>
                    <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                </ul>
            </div>
            
        </footer>
        <hr/>
        <div className="footer-copyright">
                <div className="container">
                © 2014 Copyright Text
           
                </div>
                <a className="grey-text text-lighten-4 right" href="#!">terms of services</a>
            </div>
    
    </>
    );
};
export default Home;