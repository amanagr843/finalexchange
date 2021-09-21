import axios from "axios";
import React, { useEffect } from "react";
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormTextProps,
  FormFeedback,
  Label,
  InputGroup,
  InputGroupAddon,
  Input,
  FormText,
  Form,
  Row,
  Col,
  CardFooter,
} from "reactstrap";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import QRCode from "react-qr-code";
import swal from "sweetalert";
const Withdraw = () => {
const [bank,setban] = React.useState([])
const [dropdownOpen, setDropdownOpen] = React.useState(false);
const [splitButtonOpen, setSplitButtonOpen] = React.useState(false);
const [wallet,setwallet] = React.useState(true);
const [butnWal,setbutnWal]=React.useState(false);
const [walletPer,setwalletPer]=React.useState(true)
const [amount,setamount] = React.useState('')
const [currency,setcurrency] = React.useState('');

useEffect(()=>{
    axios({
        method : "get",
        url : `https://api.anteagle.tech/bankdetails?userid=${localStorage.getItem("userid")}`,
        headers : {
            'Accept' : "Application/json",
            'Content-type' : "Application/JSON"
        }
    }).then(res=>{
        setban(res.data.res[0])
        console.log(res.data.res[0])
    })
       

},[])

    const notificationAlertRef = React.useRef(null);
    const notify = (place) => {
      var color = Math.floor(Math.random() * 5 + 1);
      var type;
      switch (color) {
        case 1:
          type = "primary";
          break;
        case 2:
          type = "success";
          break;
        case 3:
          type = "danger";
          break;
        case 4:
          type = "warning";
          break;
        case 5:
          type = "info";
          break;
        default:
          break;
      }
      var options = {};
      options = {
        place: place,
        message: (
          <div>
            <div>
            Successfully Copied to Clipboard
            </div>
          </div>
        ),
        type: type,
        icon: "tim-icons icon-bell-55",
        autoDismiss: 7,
      };
      notificationAlertRef.current.notificationAlert(options);
    };
    return(
        <>
        
        <div className="content" style={{marginLeft:"29rem",padding:"5rem 0 7rem 0",width:"50%"}}>
          <Row style={{marginLeft:"0.5rem"}}>
            <Col md="8">
              <Card style={{borderRadius:"2rem",backgroundColor:localStorage.getItem("dark")!="false"?"#161c2d":"white",color:localStorage.getItem("dark")!="false" ?"white":"black"}}>
              
                  <h3 style={{textAlign:"center"}} className="title">Withdraw Your Amount</h3>
                  <h3 style={{textAlign:"center"}} className="title">Total Amount : {localStorage.getItem("INRD_Coins")}</h3>
               
                <CardBody>
                  <Form>
                    <Label>Account Number</Label>    
                    <Input placeholder="Copy & Paste Your Address here to withdraw your coins" disabled="true" style={{marginBottom:"0.3rem",borderRadius:"1.5rem"}} value={bank.Acc_no}></Input>
                    <Label>Account Holder Name</Label>
                    <Input placeholder="Enter Name"  disabled="true" style={{marginBottom:"0.3rem",borderRadius:"1.5rem"}} value={bank.Acc_name}></Input>

                    <Label>Enter Amount</Label>
                    <Input  style={{marginBottom:"0.3rem",borderRadius:"1.5rem",border: amount<5000 || amount> parseFloat(localStorage.getItem("INRD_Coins"))?"3px solid red":"1px solid grey"}} value={ amount} placeholder="Minimum Withdraw Amount 5000 INR" onChange={(e)=>{
     
                      setamount(e.target.value)

                  
                    }}>
                     
                    </Input>
                    <button style={{marginRight:"0.5rem",borderRadius:"1.5rem",width:"60px"}} className="btn btn-sm btn-outline-warning" onClick={()=>{
         
                       
                        setamount(parseFloat(localStorage.getItem("INRD_Coins"))*0.25)
                       
                    }}>25%</button>
                    <button style={{marginRight:"0.5rem",borderRadius:"1.5rem",width:"60px"}} className="btn btn-sm btn-outline-warning" onClick={()=>{
                          setamount(parseFloat(localStorage.getItem("INRD_Coins"))*0.5)
                       
                    }}>50%</button>
                    <button style={{marginRight:"0.5rem",borderRadius:"1.5rem",width:"60px"}} className="btn btn-sm btn-outline-warning" onClick={()=>{
                           setamount(parseFloat(localStorage.getItem("INRD_Coins")))
                    
                    }}>100%</button><br/>
                    <FormText>*Your Withdraw amount will be refunded back to this Account only in 10-15 mins</FormText>
                  </Form>
                 
  
                </CardBody>
                {/* disabled={!butnWal} */}
                  <button disabled={amount <5000 || amount> parseFloat(localStorage.getItem("INRD_Coins")) }   className="btn-lg" style={{color:"black",width:"96%",borderRadius:"2rem",marginLeft:"0.6rem",backgroundColor:"rgb(253, 239, 239)",border:"none",padding:"1rem 0"}}  type="submit" onClick={()=>{
                      
                  
                       var end = parseFloat(localStorage.getItem("INRD_Coins")) - amount
                      axios({
                        method:"post",
                        url : `https://api.anteagle.tech/getinrd?coins=${end}&userid=${localStorage.getItem("userid")}`,
                        headers:{
                          "Accept": "application/json",
                        }
                      }).then(res=>{
                        console.log(res.data)
                      })
                       axios({
                        method:"post",
                        url: `https://api.anteagle.tech/requestbank?userid=${localStorage.getItem("userid")}&amount=${amount}`,
                        headers:{
                          'Accept' : 'Application/json',
                          'Content-type' : 'application/json'
                        }
                      }).then(res=>{
                        console.log(res.data)
                        if(res.data.message){
                          swal(`Submitted !!`,`Your request for withdraw has been submitted Successfully. Entered will be transfered to your Account in 15-20 mins \n Your Req ID is ${res.data.id}`,"success");
                          setInterval(()=>{
                            axios({
                              method: "post",
                              url : `https://api.anteagle.tech/checkbank?id=${res.data.id}`,
                              headers:{
                                "Accept" : "Application/json",
                                'Content-type' : "application/json"
                              }
                            }).then(res=>{
                              if(res.data.success){
                                const temp = parseFloat(localStorage.getItem(`INRD_Coins`))+parseFloat(this.state.final); 
                                console.log(temp)
                                  axios({
                                    method : "post",
                                    url : `https://api.anteagle.tech/get${this.state.curr.toLowerCase()}?coins=${temp}&userid=${localStorage.getItem("userid")}`,
                                    headers:{
                                      "Accept" : "Application/json",
                                      'Content-type' : "application/json"
                                    }
                                  }).then(res=>{
                                    window.location.href = "/"
                                  })
                                 
                              }
                            })
                          },1000)
                        }
                      })
                  }}><b>
                    WITHDRAW AMOUNT</b>
                  </button>
              
              </Card>
            </Col>
            
          </Row>
        </div>
      <br/><br/><br/>
      </>
)
}
export default Withdraw;