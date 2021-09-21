import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import Dialog from '@material-ui/core/Dialog';
import axios from "axios";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  CardText,
  NavLink,
  Nav,
  Container,
  Modal,
  NavbarToggler,
  ModalHeader,
} from "reactstrap";
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FormControl,InputLabel,FormHelperText,Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import swal from "sweetalert";

function Referral(props){
    
    const [final, setFinal]=React.useState("");
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [modalSearch, setmodalSearch] = React.useState(false);
  const [age, setAge]=React.useState('INRD');
  const [color, setcolor] = React.useState("navbar-transparent");
  const [ref,setref] = React.useState(true)
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("bg-white");
    } else {
      setcolor("navbar-transparent");
    }
  };
  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    if (collapseOpen) {
      setcolor("navbar-transparent");
    } else {
      setcolor("bg-white");
    }
    setcollapseOpen(!collapseOpen);
  };
  // this function is to open the Search modal
  const toggleModalSearch = () => {
    setmodalSearch(!modalSearch);
  };
  return (
    <>
      <Dialog open={ref} aria-labelledby="form-dialog-title">
       <DialogContent style={{margin:"10px",overflow:"hidden"}}>
      
       
         <CardText tag="h2" style={{color:"black"}}>
           Enter your referral code
         </CardText>
       <TextField
            autoFocus
            margin="dense"
            id="name"
            label="REFERRAL CODE"
            placeholder="CODE"
            
            onChange={(e)=>{
              setFinal(e.target.value)
              
            }}/>

<InputLabel tag="h3" id="demo-simple-select-outlined-label" style={{margin:"2rem 0 1rem"}}>Type of Coin </InputLabel>
       <Select
       disableUnderline
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
         value={age}
         onChange={(e)=>{
           setAge(e.target.value)
    
         }}
         label="Age"
       >
         <MenuItem value={'USDT'}>USDT</MenuItem>
         <MenuItem value={'INRD'}>INRD</MenuItem>
   
       </Select>
            
       </DialogContent>
       <button className="btn-lg btn-success" style={{width:"86%",borderRadius:"1rem",marginTop:"1rem",marginLeft:"2rem",border:"none",padding:"0.5rem 0"}} onClick={()=>{ 
         console.log(final,localStorage.getItem("userid"))
         console.log(typeof(final),final)
        
         axios({
        method:"POST",
        url:"https://api.anteagle.tech/referral",
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          referralcode: final,
          symbol:age
        }),

      }).then(res=>{console.log(res.data)
      
          if(res.data.success){
            const amt=res.data.success;
            const tem = age == "USDT" ? (parseFloat(localStorage.getItem(`${age}_Coins`)) + parseFloat((res.data.success)/75)).toFixed(3) : (parseFloat(localStorage.getItem(`${age}_Coins`)) + res.data.success)
            const c= age.toLowerCase()
            console.log(tem)
            axios({
            method:"post",
            url : `https://api.anteagle.tech/get${c}?coins=${tem}&userid=${localStorage.getItem("userid")}`,
            headers:{
              "Accept": "application/json"
              }
            }).then(res=>{
                console.log(res.data);
                swal(`${amt} ${age}`,`${amt} ${c} is succesfully appended in your wallet`,"success")
                setref(false)
                window.location.href = "/"
                })
           }
      else{
        swal("Invalid","The referral code entered is invalid: Please try with a different one",'error')
       setref(true)
      }
      
      })
         
         
         }}>APPLY</button>
         <button className="btn-lg btn-dark" style={{width:"86%",borderRadius:"1rem",marginTop:"1rem",marginBottom:"1rem",marginLeft:"2rem",border:"none",padding:"0.5rem 0"}} onClick={()=>{
           setref(false)
           window.location.href = "/"
         }}>Cancel</button>
     </Dialog>
      
     
    </>
  );
}

export default Referral;