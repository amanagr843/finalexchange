
import 'react-tabs/style/react-tabs.css';
import './App.css';
import React, { Component, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Button, Nav, NavDropdown } from 'react-bootstrap';
import sun from "./sun.png";
import moon from "./moon.png"
import Chart from 'chart.js';
import logout from "./logout.png"
import 'react-vertical-timeline-component/style.min.css';
import LoadDashMobile from "./loadDash_mobile";
import { TVChartContainer } from "./components/TVChartContainer";
// import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import logobtc from "./assets/logobtc.svg";
import bnb from "./assets/bnb.svg";
import eth from "./assets/eth.svg";
import dot from "./assets/dot.svg";
import usdt from './assets/usdt.png'
import tfuel from './assets/tfuel.png'
import uni from './assets/uni.png'
import vet from './assets/vet.png'
import ftt from './assets/ftt.png'
import ftm from './assets/ftm.png'
import ruppee from './assets/ruppee.png'
import alice from './assets/alice.png'
import gtc from './assets/gtc.png'
import axs from './assets/axs.png'
import ata from './assets/ata.png'
import rune from './assets/rune.png'
import fil from './assets/fil.png'
import link from './assets/link.png'
import luna from './assets/luna.png'
import theta from './assets/theta.png'
import mana from './assets/mana.png'
import matic from './assets/matic.png'
import ada from './assets/ada.png'
import sol from './assets/sol.png'
import dgb from './assets/dgb.png'
import grt from './assets/grt.png'
import ksm from './assets/ksm.png'
import xrp from './assets/xrp.png'
import doge from './assets/doge.png'
import usdc from './assets/usdc.png'
import avax from './assets/avax.png'
import busd from './assets/busd.png'
import ltc from './assets/ltc.png'
import bch from './assets/bch.png'
import algo from './assets/algo.png'
import atom from './assets/atom.png'
import icp from './assets/icp.png'
import trx from './assets/trx.png'
import xlm from './assets/xlm.png'
import etc from './assets/etc.png'
import xtz from './assets/xtz.png'
import eos from './assets/eos.png'
import cake from './assets/cake.png'
import egld from './assets/egld.png'
import xmr from './assets/xmr.png'
import aave from './assets/aave.png'
import qnt from './assets/qnt.png'
import xec from './assets/xec.png'
import hbar from './assets/hbar.png'
import shib from './assets/shib.png'
import near from './assets/near.png'
import neo from './assets/neo.png'
import klay from './assets/klay.png'
import waves from './assets/waves.png'
import btt from './assets/btt.png'
import mkr from './assets/mkr.png'
import sushi from './assets/sushi.png'
import ar from './assets/ar.png'
import snx from './assets/snx.png'
import comp from './assets/comp.png'
import dash from './assets/dash.png'
import dcr from './assets/dcr.png'
import hnt from './assets/hnt.png'
import chz from './assets/chz.png'
import one from './assets/one.png'
import hot from './assets/hot.png'
import xem from './assets/xem.png'
import zec from './assets/zec.png'
import iost from './assets/iost.png'
import enj from './assets/enj.png'
import stx from './assets/stx.png'
import tusd from './assets/tusd.png'
import zil from './assets/zil.png'
import flow from './assets/flow.png'
import qtum from './assets/qtum.png'
import mina from './assets/mina.png'
import icx from './assets/icx.png'
import omg from './assets/omg.png'
import btg from './assets/btg.png'
import bat from './assets/bat.png'
import audio from './assets/audio.png'
import zen from './assets/zen.png'
import rvn from './assets/rvn.png'
import mdx from './assets/mdx.png'
import bnt from './assets/bnt.png'
import zrx from './assets/zrx.png'
import sc from './assets/sc.png'
import ont from './assets/ont.png'
import ray from './assets/ray.png'
import dydx from './assets/dydx.png'
import perp from './assets/perp.png'
import gala from './assets/gala.png'
import nano from './assets/nano.png'
import celo from './assets/celo.png'
import uma from './assets/uma.png'
import c98 from './assets/c98.png'
import sand from './assets/sand.png'
import poly from './assets/poly.png'
import fet from './assets/fet.png'
import _1inch from './assets/1inch.png'
import lrc from './assets/lrc.png'
import kava from './assets/kava.png'
import wrx from './assets/wrx.png'
import rsr from './assets/rsr.png'
import logo from  './FInalCryptologo.png'
import ankr from './assets/ankr.jpg'
import celr from './assets/celr.jpg'




import axios from 'axios';
import swal from "sweetalert";
import {ButtonGroup,ButtonToggle,ToggleButton,ToggleButtonGroup, TabPane,Table, NavbarBrand, NavItem} from 'react-bootstrap';


import Referral from './referral'


import Slider from "@material-ui/core/Slider";
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardFooter,
  CardSubtitle,
  Form,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
  DropdownItem,
  UncontrolledDropdown,
  CardText,
  Collapse,
  NavbarToggler,
  Modal
  
} from 'reactstrap'
import Add from './add'
import Switch from 'react-switch'
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import 'react-tabs/style/react-tabs.css';
import {Tabs,TabList,Tab,TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import NotificationAlert from "react-notification-alert";
import QRCode from "react-qr-code";
import { setRef } from '@material-ui/core';
import Withdraw from './Withdraw'


function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return 'Unknown step';
  }
}
const steps = ['Pay to the merchant', 'Create an ad group', 'Create an ad']
function getFinishIcon() {
  const path = 'M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.' +
  '5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139' +
  '.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5' +
  '-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 ' +
  '55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33' +
  '.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99' +
  '.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.' +
  '7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 10' +
  '1.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 ' +
  '20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z';
return (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    style={{ verticalAlign: '-.125em' }}
  >
    <path d={path} />
  </svg>
);
}

function getErrorIcon() {
  const path1 =
    'M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229' +
    '.2 512-512S794.8 0 512 0zm311.1 823.1c-40.4 40.4-87.5 72.2-139.9 9' +
    '4.3C629 940.4 571.4 952 512 952s-117-11.6-171.2-34.5c-52.4-22.2-99' +
    '.4-53.9-139.9-94.3-40.4-40.4-72.2-87.5-94.3-139.9C83.6 629 72 571.' +
    '4 72 512s11.6-117 34.5-171.2c22.2-52.4 53.9-99.4 94.3-139.9 40.4-4' +
    '0.4 87.5-72.2 139.9-94.3C395 83.6 452.6 72 512 72s117 11.6 171.2 3' +
    '4.5c52.4 22.2 99.4 53.9 139.9 94.3 40.4 40.4 72.2 87.5 94.3 139.9C' +
    '940.4 395 952 452.6 952 512s-11.6 117-34.5 171.2c-22.2 52.4-53.9 9' +
    '9.5-94.4 139.9z';
  const path2 =
    'M640.3 765.5c-19.9 0-36-16.1-36-36 0-50.9-41.4-92.3-92' +
    '.3-92.3s-92.3 41.4-92.3 92.3c0 19.9-16.1 36-36 36s-36-16.1-36-36c0' +
    '-90.6 73.7-164.3 164.3-164.3s164.3 73.7 164.3 164.3c0 19.9-16.1 36' +
    '-36 36zM194.2 382.4a60 60 0 1 0 120 0 60 60 0 1 0-120 0zM709.5 382' +
    '.4a60 60 0 1 0 120 0 60 60 0 1 0-120 0z';
  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 1024 1024"
      style={{ verticalAlign: '-.125em' }}
    >
      <path d={path1} />
      <path d={path2} />
    </svg>
  );
}
const icons = {
  finish: getFinishIcon(),
  error: getErrorIcon(),
};
// const steps = [{
//   title:"Step 1",
//   description: "Download MetaMask Wallet and Singup/Signin to open your account"
// },
// {
//   title : "Step 2",
//   description: "Select your Currency and Pay to the below Merchant"
// },
// {title : "Step 3",  description: "Go to pancake exhange swap to exchange your currency to AntNet (ANTEAG)"},
// {
//   title : "Step 4"
// }]

const useStyles = makeStyles((theme) => ({
  root: {

    backgroundColor: theme.palette.background.paper,
  },
}));

let context;
let upis = ['anteagle.tech@icici']
const tempupi = upis[0]
const all_socket = new WebSocket(`wss://stream.binance.com:9443/ws/!miniTicker@arr`);
const useStyles1 = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  fab1: {
    margin: 0,
    top: 'auto',
    borderRadius:5,
    background:"green",
    color:"white",
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    height:'50px',
    width:'8.5rem'
  },
  fab2: {
    margin: 0,
    top: 'auto',
    borderRadius:5,
    right: 'auto',
    background:"red",
    color:"white",
    bottom: 20,
    left: 20,
    position: 'fixed',
    height:'50px',
    width:'8.5rem'
  },
}));

function App() {
  const wal=[]
   Object.entries(localStorage).forEach(([key,value])=>{
    
    if(key.includes("Coins") && value>0){
      // console.log(key,value)
      wal.push([key,value])
      
    }
  })
  const [stopTypes,setStopTypes]=React.useState([])
  const [fullStop_market_trig,setfullStop_market_trig]=React.useState(0)
  const [fullStop_market_stop,setfullStop_market_stop]=React.useState(0)
  const [fullStop_limit_trig,setfullStop_limit_trig]=React.useState(0)
  const [fullStop_limit_stop,setfullStop_limit_stop]=React.useState(0)
  const [fullStop_market_quantity, setfullStop_market_quantity]=React.useState(0)
  const [fullStop_limit_quantity, setfullStop_limit_quantity]=React.useState(0)
  const [fullStop_limit_profit1,setfullStop_limit_profit1]=React.useState(0)
  const [fullStop_market_profit1,setfullStop_market_profit1]=React.useState(0)

  const [withdrawAmt,setWithdrawAmt]=React.useState(false)
  const [referral , setReferral]=React.useState(false)
  const [fullValue,setFullValue]=React.useState(false)
  const [isDarkDes,setDarkDes]=React.useState(localStorage.getItem("dark")=="true")
  const [todiag,setToDiag]=React.useState(false)
  const [diag, setOpenDiag]=React.useState(false)
  const [isDropdownOpend , setDropdownOpenn ] = React.useState(false);
  const [butnval,setButnVal]=React.useState("BTC")
  const [settings,setSettings]=React.useState(false)
  const [BTC_per,setBTC_per] = React.useState(0)
  const [BNB_per,setBNB_per] = React.useState(0);
  const [ETH_per,setETH_per] = React.useState(0);
  const [LINK_per,setLINK_per] = React.useState(0)
  const [LUNA_per,setLUNA_per] = React.useState(0);
  const [THETA_per,setTHETA_per] = React.useState(0)
  const [GRT_per,setGRT_per] = React.useState(0);
  const [TFUEL_per,setTFUEL_per] = React.useState(0);
  const [KSM_per,setKSM_per] = React.useState(0)
  const [ADA_per,setADA_per] = React.useState(0);
  const [VET_per,setVET_per] = React.useState(0);
  const [DOT_per,setDOT_per] = React.useState(0)
  const [UNI_per,setUNI_per] = React.useState(0);
  const [RUNE_per,setRUNE_per] = React.useState(0);
  const [SOL_per,setSOL_per] = React.useState(0)
  const [FTT_per,setFTT_per] = React.useState(0);
  const [AXS_per,setAXS_per] = React.useState(0);  
  const [MATIC_per,setMATIC_per] = React.useState(0)
  const [GTC_per,setGTC_per] = React.useState(0);
  const [ALICE_per,setALICE_per] = React.useState(0);
  const [FIL_per,setFIL_per] = React.useState(0)
  const [ATA_per,setATA_per] = React.useState(0);
  const [FTM_per,setFTM_per] = React.useState(0)
  const [DGB_per,setDGB_per] = React.useState(0);
  const [MANA_per,setMANA_per] = React.useState(0);
  const [XRP_per,setXRP_per]=React.useState(0);
  const [DOGE_per,setDOGE_per]=React.useState(0);
  const [USDC_per,setUSDC_per]=React.useState(0);
  const [AVAX_per,setAVAX_per]=React.useState(0);
  const [BUSD_per,setBUSD_per]=React.useState(0);
  const [LTC_per,setLTC_per]=React.useState(0);
  const [BCH_per,setBCH_per]=React.useState(0);
  const [ALGO_per,setALGO_per]=React.useState(0);
  const [ATOM_per,setATOM_per]=React.useState(0);
  const [ICP_per,setICP_per]=React.useState(0);
  const [TRX_per,setTRX_per]=React.useState(0);
  const [XLM_per,setXLM_per]=React.useState(0);
  const [ETC_per,setETC_per]=React.useState(0);
  const [XTZ_per,setXTZ_per]=React.useState(0);
  const [EOS_per,setEOS_per]=React.useState(0);
  const [CAKE_per,setCAKE_per]=React.useState(0);
  const [EGLD_per,setEGLD_per]=React.useState(0);
  const [XMR_per,setXMR_per]=React.useState(0);
  const [AAVE_per,setAAVE_per]=React.useState(0);
  const [QNT_per,setQNT_per]=React.useState(0);
  const [XEC_per,setXEC_per]=React.useState(0);
  const [HBAR_per,setHBAR_per]=React.useState(0);
  const [SHIB_per,setSHIB_per]=React.useState(0);
  const [NEAR_per,setNEAR_per]=React.useState(0);
  const [NEO_per,setNEO_per]=React.useState(0);
  const [WAVES_per,setWAVES_per]=React.useState(0);
  const [BTT_per,setBTT_per]=React.useState(0);
  const [MKR_per,setMKR_per]=React.useState(0);
  const [SUSHI_per,setSUSHI_per]=React.useState(0);
  const [AR_per,setAR_per]=React.useState(0);
  const [SNX_per,setSNX_per]=React.useState(0);
  const [COMP_per,setCOMP_per]=React.useState(0);
  const [DASH_per,setDASH_per]=React.useState(0);
  const [HNT_per,setHNT_per]=React.useState(0);
  const [CHZ_per,setCHZ_per]=React.useState(0);
  const [ONE_per,setONE_per]=React.useState(0);
  const [HOT_per,setHOT_per]=React.useState(0);
  const [XEM_per,setXEM_per]=React.useState(0);
  const [KLAY_per,setKLAY_per]=React.useState(0);
  const [DCR_per,setDCR_per]=React.useState(0);
  const [ZEC_per,setZEC_per]=React.useState(0);
  const [IOST_per,setIOST_per]=React.useState(0);
  const [ENJ_per,setENJ_per]=React.useState(0);
  const [STX_per,setSTX_per]=React.useState(0);
  const [TUSD_per,setTUSD_per]=React.useState(0);
  const [ZIL_per,setZIL_per]=React.useState(0);
  const [FLOW_per,setFLOW_per]=React.useState(0);
  const [QTUM_per,setQTUM_per]=React.useState(0);
  const [MINA_per,setMINA_per]=React.useState(0);
  const [ICX_per,setICX_per]=React.useState(0);
  const [OMG_per,setOMG_per]=React.useState(0);
  const [BTG_per,setBTG_per]=React.useState(0);
  const [BAT_per,setBAT_per]=React.useState(0);
  const [AUDIO_per,setAUDIO_per]=React.useState(0);
  const [ZEN_per,setZEN_per]=React.useState(0);
  const [RVN_per,setRVN_per]=React.useState(0);
  const [MDX_per,setMDX_per]=React.useState(0);
  const [BNT_per,setBNT_per]=React.useState(0);
  const [ZRX_per,setZRX_per]=React.useState(0);
  const [ONT_per,setONT_per]=React.useState(0);
  const [RAY_per,setRAY_per]=React.useState(0);
  const [DYDX_per,setDYDX_per]=React.useState(0);
  const [PERP_per,setPERP_per]=React.useState(0);
  const [GALA_per,setGALA_per]=React.useState(0);
  const [ANKR_per,setANKR_per]=React.useState(0);
  const [NANO_per,setNANO_per]=React.useState(0);
  const [CELO_per,setCELO_per]=React.useState(0);
  const [UMA_per,setUMA_per]=React.useState(0);
  const [C98_per,setC98_per]=React.useState(0);
  const [CELR_per,setCELR_per]=React.useState(0);
  const [SAND_per,setSAND_per]=React.useState(0);
  const [POLY_per,setPOLY_per]=React.useState(0);
  const [FET_per,setFET_per]=React.useState(0);
  const [_1INCH_per,set1INCH_per]=React.useState(0);
  const [LRC_per,setLRC_per]=React.useState(0);
  const [KAVA_per,setKAVA_per]=React.useState(0);
  const [WRX_per,setWRX_per]=React.useState(0);
  const [RSR_per,setRSR_per]=React.useState(0);
  const [SC_per,setSC_per]=React.useState(0);



  

  const [open_btc,setopen_btc] = React.useState(false)
  const [open_eth,setopen_eth] = React.useState(false)
  const [open_BNB,setopen_BNB] = React.useState(false)
  const [open_LUNA,setopen_LUNA] = React.useState(false)
  const [open_MATIC,setopen_MATIC] = React.useState(false)
  const [open_ADA,setopen_ADA] = React.useState(false)
  const [open_ATA,setopen_ATA] = React.useState(false)
  const [open_ALICE,setopen_ALICE] = React.useState(false)
  const [open_LINK,setopen_LINK] = React.useState(false)
  const [open_DGB,setopen_DGB] = React.useState(false)
  const [open_GTC,setopen_GTC] = React.useState(false)
  const [open_KSM,setopen_KSM] = React.useState(false)
  const [open_VET,setopen_VET] = React.useState(false)
  const [open_DOT,setopen_DOT] = React.useState(false)
  const [open_UNI,setopen_UNI] = React.useState(false)
  const [open_RUNE,setopen_RUNE] = React.useState(false)
  const [open_SOL,setopen_SOL] = React.useState(false)
  const [open_FTT,setopen_FTT] = React.useState(false)
  const [open_AXS,setopen_AXS] = React.useState(false)
  const [open_FIL,setopen_FIL] = React.useState(false)
  const [open_FTM,setopen_FTM] = React.useState(false)
  const [open_TFUEL,setopen_TFUEL] = React.useState(false)
  const [open_GRT,setopen_GRT] = React.useState(false)
  const [open_THETA,setopen_THETA] = React.useState(false)
  const [open_MANA,setopen_MANA] = React.useState(false)
  const [open_XRP,setopen_XRP]=React.useState(false);
  const [open_DOGE,setopen_DOGE]=React.useState(false);
  const [open_USDC,setopen_USDC]=React.useState(false);
  const [open_AVAX,setopen_AVAX]=React.useState(false);
  const [open_BUSD,setopen_BUSD]=React.useState(false);
  const [open_LTC,setopen_LTC]=React.useState(false);
  const [open_BCH,setopen_BCH]=React.useState(false);
  const [open_ALGO,setopen_ALGO]=React.useState(false);
  const [open_ATOM,setopen_ATOM]=React.useState(false);
  const [open_ICP,setopen_ICP]=React.useState(false);
  const [open_TRX,setopen_TRX]=React.useState(false);
  const [open_XLM,setopen_XLM]=React.useState(false);
  const [open_ETC,setopen_ETC]=React.useState(false);
  const [open_XTZ,setopen_XTZ]=React.useState(false);
  const [open_EOS,setopen_EOS]=React.useState(false);
  const [open_CAKE,setopen_CAKE]=React.useState(false);
  const [open_EGLD,setopen_EGLD]=React.useState(false);
  const [open_XMR,setopen_XMR]=React.useState(false);
  const [open_AAVE,setopen_AAVE]=React.useState(false);
  const [open_QNT,setopen_QNT]=React.useState(false);
  const [open_XEC,setopen_XEC]=React.useState(false);
  const [open_HBAR,setopen_HBAR]=React.useState(false);
  const [open_SHIB,setopen_SHIB]=React.useState(false);
  const [open_NEAR,setopen_NEAR]=React.useState(false);
  const [open_NEO,setopen_NEO]=React.useState(false);
  const [open_WAVES,setopen_WAVES]=React.useState(false);
  const [open_BTT,setopen_BTT]=React.useState(false);
  const [open_MKR,setopen_MKR]=React.useState(false);
  const [open_SUSHI,setopen_SUSHI]=React.useState(false);
  const [open_AR,setopen_AR]=React.useState(false);
  const [open_SNX,setopen_SNX]=React.useState(false);
  const [open_COMP,setopen_COMP]=React.useState(false);
  const [open_DASH,setopen_DASH]=React.useState(false);
  const [open_HNT,setopen_HNT]=React.useState(false);
  const [open_CHZ,setopen_CHZ]=React.useState(false);
  const [open_ONE,setopen_ONE]=React.useState(false);
  const [open_HOT,setopen_HOT]=React.useState(false);
  const [open_XEM,setopen_XEM]=React.useState(false);
  const [open_KLAY,setopen_KLAY]=React.useState(false);
  const [open_DCR,setopen_DCR]=React.useState(false);
  const [open_ZEC,setopen_ZEC]=React.useState(false);
  const [open_IOST,setopen_IOST]=React.useState(false);
  const [open_ENJ,setopen_ENJ]=React.useState(false);
  const [open_STX,setopen_STX]=React.useState(false);
  const [open_TUSD,setopen_TUSD]=React.useState(false);
  const [open_ZIL,setopen_ZIL]=React.useState(false);
  const [open_FLOW,setopen_FLOW]=React.useState(false);
  const [open_QTUM,setopen_QTUM]=React.useState(false);
  const [open_MINA,setopen_MINA]=React.useState(false);
  const [open_ICX,setopen_ICX]=React.useState(false);
  const [open_OMG,setopen_OMG]=React.useState(false);
  const [open_BTG,setopen_BTG]=React.useState(false);
  const [open_BAT,setopen_BAT]=React.useState(false);
  const [open_AUDIO,setopen_AUDIO]=React.useState(false);
  const [open_ZEN,setopen_ZEN]=React.useState(false);
  const [open_RVN,setopen_RVN]=React.useState(false);
  const [open_MDX,setopen_MDX]=React.useState(false);
  const [open_BNT,setopen_BNT]=React.useState(false);
  const [open_ZRX,setopen_ZRX]=React.useState(false);
  const [open_SC,setopen_SC]=React.useState(false);
  const [open_ONT,setopen_ONT]=React.useState(false);
  const [open_RAY,setopen_RAY]=React.useState(false);
  const [open_DYDX,setopen_DYDX]=React.useState(false);
  const [open_PERP,setopen_PERP]=React.useState(false);
  const [open_GALA,setopen_GALA]=React.useState(false);
  const [open_ANKR,setopen_ANKR]=React.useState(false);
  const [open_NANO,setopen_NANO]=React.useState(false);
  const [open_CELO,setopen_CELO]=React.useState(false);
  const [open_UMA,setopen_UMA]=React.useState(false);
  const [open_C98,setopen_C98]=React.useState(false);
  const [open_CELR,setopen_CELR]=React.useState(false);
  const [open_SAND,setopen_SAND]=React.useState(false);
  const [open_POLY,setopen_POLY]=React.useState(false);
  const [open_FET,setopen_FET]=React.useState(false);
  const [open_1INCH,setopen_1INCH]=React.useState(false);
  const [open_LRC,setopen_LRC]=React.useState(false);
  const [open_KAVA,setopen_KAVA]=React.useState(false);
  const [open_WRX,setopen_WRX]=React.useState(false);
  const [open_RSR,setopen_RSR]=React.useState(false);

  const [isDark,setDark]=React.useState(true)

  const [mobileport,setmobile_port] = React.useState(false)
  const [show_sell,setshow_sell] = React.useState(false)
  const [show_buy,setshow_buy] = React.useState(false)
  const [showModal, setShow] = React.useState(false);
  const [showModal1,setShow1]=React.useState(false);
  const [showModal2, setShow2] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1= () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [anteagle_pro,setanteagle_pro] = React.useState(false);
  const [mobileswitch1,setmobileswitch1] = React.useState(true)

  const [i,seti] = React.useState(1)  
  const classes = useStyles1();
  //fulltrade
  const [fulltradeType,setfulltradeType]=React.useState('')
  const [fulltradeSellType,setFulltradeSellType]=React.useState('')
  
  const [users_USDT,setUsers_USDT]= React.useState([])
  const [users_BTC,setUsers_BTC]= React.useState([])
  const [users_BNB,setUsers_BNB]= React.useState([])
  const [users_ETH,setUsers_ETH]= React.useState([])
  const [value,setValue] =React.useState(2) 
  const [users_INRD,setUsers_INRD]= React.useState([])
  const [users_ANTEAG,setUsers_ANTEAG]= React.useState([])
  
  const[visible,setVisible ]=React.useState(localStorage.getItem("bank") ? true : false) 
  const [visible_1 ,setVisible_1]=React.useState(localStorage.getItem("bank") ? false :true)
  const [loading,setLoading]=React.useState( true)
  const [upi,setUpi] =React.useState(null) 
  const [amount1,setAmount1] =React.useState(null)
  const [recieve,setReceive]=React.useState(null)
  const [orig_amount,setOrig_amount ]=React.useState(null) 
  const [ upi_buy,setUpi_buy] =React.useState(false)
  const [accnumber_1,setAccno_1] =React.useState('')
  const [acnumber_2,setAccno_2] =React.useState('')
  const [bankname,setBankname] =React.useState('')
  const [validity,setValidity] =React.useState(false)
  const [accname,setAccname] =React.useState('')
  const [ifsc,setIfsc] =React.useState('')
  const [curr,setCurr] =React.useState('INRD')
  const [reqpay,setReqpay] =React.useState(false)
  const [payment,setPayment] =React.useState(false)
  const [final1,setFinal1] =React.useState(null)
  const [antlive,setAntlive] =React.useState(0)
  const [currentStep,setCurrentStep] =React.useState(0)
  const [activeSteps,setActiveSteps] =React.useState(0)
  const [sendername,setSendername] =React.useState('')
  const [senderupi,setSenderupi] =React.useState('')
  const [wallet2,setwallet2] = React.useState(null);
  const [amount2,setamount2] = React.useState(0)
  const [currency2,setcurrency2] =React.useState(0)
 
  
const [allorder,setallorders] = React.useState([])
  const [bank,setban] = React.useState([])
  const [splitButtonOpen, setSplitButtonOpen] = React.useState(false);
  const [wallet,setwallet] = React.useState(true);
  const [amount,setamount] = React.useState(0)
  const [currency,setcurrency] = React.useState('');


  const [liveusd, setliveusd] = React.useState(0)
  const [ANTEAG, setANTEAG] = React.useState(0)
  const [from, setfrom] = React.useState("BTC")
  const [to, setto] = React.useState("INRD")
  const [valid1, setvalid1] = React.useState(true)
  const [fromvalue, setfromvalue] = React.useState(0)
  const [tovalue, settovalue] = React.useState(0);
  const [enteredText, setEnteredText] = React.useState('');
  const [tocurr, settocurr] = React.useState(null);
  const [ETH, setETH] = React.useState(0)
  const [BNB, setBNB] = React.useState(0)
  const [BTC, setBTC] = React.useState(0)
  const [final, setfinal] = React.useState(0)

  const [deposit, setDeposit]=React.useState(false);
  const [withdraw,setWithdraw]=React.useState(false);
  const [swap,setSwap]=React.useState(false);
  const [home,sethome] = React.useState(true);
  const [portfolio,setportfolio] = React.useState(false)
  const types=["BUY","SELL"];
  const [activeB, setActiveB] =React.useState(true)
  const [add,setadd] = React.useState(false)
  const [activeE, setActiveE] =React.useState(true)
  const [buy,setBuy]=React.useState('Stop-limit')
  const [sell,setSell]=React.useState('Stop-limit')
  const [exit,setExit]=React.useState(false)
  const [ stop_buy_trig ,setStop_buy_trig]=React.useState(0);
  const [stop_buy_stop,setStop_buy_stop]=React.useState(0);
  const [stop_buy_amount,setStop_buy_amount]=React.useState(0);
  const [stopTake_sell_trig,setStopTake_sell_trig]=React.useState(0);
  const [stopTake_sell_take,setStopTake_sell_take]=React.useState(0);
  const [stopTake_sell_amount,setStopTake_sell_amount]=React.useState(0);
  const [stopTake_sell_total,setStopTake_sell_total]=React.useState(0);

 
  const [buy_total_full ,setbuy_total_full]=React.useState(0);
  const [quant,setQuant]=React.useState([]);
  const [pricee,setPrice]=React.useState([]);
  const [finalQuants,setFinalQuants]=React.useState([]);
  const [finalPrices,setFinalPrices]=React.useState([]);
  const [trade_quantity,settrade_quantity]=React.useState(0);
  const [trade_price,settrade_price]=React.useState(0);
  const [age, setAge] = React.useState('');
  const [trade_symbol,settrade_symbol]=React.useState(0);
  const [trade_type,settrade_type]=React.useState(0);
  const [sell_quantity,setsell_quantity]=React.useState(0);
  const [continueselling,setcontinueselling] = React.useState(false)
  const [switchtrade,setswitchtrade] = React.useState(true)
  const [sell_price,setsell_price]=React.useState(0);
  const [width,setwidth] = React.useState(window.innerWidth)
  const [isOpen, setIsOpen] = React.useState(false);
  const [pair,setpair] = React.useState('BTC/USDT')
  const [tradingvalue,settradingvalue] = React.useState('BTCUSDT');
  const [buy_limit_amount,setbuy_limit_amount] = React.useState(0);
  const [coin_limit_amount,setcoin_limit_amount]=React.useState(0);
  const [buy_limit_price,setbuy_limit_price] = React.useState(0);
  const [buy_market_amount,setbuy_market_amount] = React.useState(0);
  const [buy_market_price,setbuy_market_price] = React.useState(0);
  const [ limit_buy_total,  setlimit_buy_total]=React.useState(0);
  const [market_buy_total,setmarket_buy_totol]=React.useState(0);
  const [sell_limit_price,setsell_limit_price] = React.useState(0);
  const [full_trade_sell,set_full_trade_sell] = React.useState(0)
  const [sell_limit_amount,setsell_limit_amount] = React.useState(0);

  const [sell_market_price,setsell_market_price] = React.useState(0);
  const [sell_market_amount,setsell_market_amount] = React.useState(0);
  const [sell_limit_total,  setsell_limit_total]=React.useState(0);
  const [sell_market_total,  setsell_market_total]=React.useState(0);
  const [valid,setvalid] = React.useState(true)
  const [valid_s,setvalid_s] = React.useState(true)
  const [btc_u_vol,setbtc_u_vol] = React.useState(0)
  const [btc_vol,setbtc_vol] = React.useState(0)
  const [eth_u_vol,seteth_u_vol] = React.useState(0)
  const [eth_vol,set_eth_vol] = React.useState(0)
  const [bnb_u_vol,setbnb_u_vol] = React.useState(0)
  const [bnb_vol,setbnb_vol] = React.useState(0)
  const [ant_u_vol,setant_u_vol] = React.useState(0)
  const [loadin_cont,setloadin_cont] = React.useState(false)
  const [ant_vol,setant_vol] = React.useState(0)
  const [live_vol,setlivevol] = React.useState(0)
  const [liveprice_BTC,setlive_BTC] = React.useState(0)
  const [liveprice_BTC_u,setlive_BTC_u] = React.useState(0)
  
  const [liveprice_KSM,setlive_KSM] = React.useState(0)
  const [liveprice_KSM_u,setlive_KSM_u] = React.useState(0)

  
  const [liveprice_ATA,setlive_ATA] = React.useState(0)
  const [liveprice_ATA_u,setlive_ATA_u] = React.useState(0)

  const [liveprice_MANA,setlive_MANA] = React.useState(0)
  const [liveprice_MANA_u,setlive_MANA_u] = React.useState(0)

  const [liveprice_DGB,setlive_DGB] = React.useState(0)
  const [liveprice_DGB_u,setlive_DGB_u] = React.useState(0)

  const [liveprice_FTM,setlive_FTM] = React.useState(0)
  const [liveprice_FTM_u,setlive_FTM_u] = React.useState(0)

  const [liveprice_ALICE,setlive_ALICE] = React.useState(0)
  const [liveprice_ALICE_u,setlive_ALICE_u] = React.useState(0)

  const [liveprice_GTC,setlive_GTC] = React.useState(0)
  const [liveprice_GTC_u,setlive_GTC_u] = React.useState(0)

  const [liveprice_MATIC,setlive_MATIC] = React.useState(0)
  const [liveprice_MATIC_u,setlive_MATIC_u] = React.useState(0)
  
  const [liveprice_AXS,setlive_AXS] = React.useState(0)
  const [liveprice_AXS_u,setlive_AXS_u] = React.useState(0)
  
  const [liveprice_FTT,setlive_FTT] = React.useState(0)
  const [liveprice_FTT_u,setlive_FTT_u] = React.useState(0)
  
  const [liveprice_SOL,setlive_SOL] = React.useState(0)
  const [liveprice_SOL_u,setlive_SOL_u] = React.useState(0)
  
  const [liveprice_RUNE,setlive_RUNE] = React.useState(0)
  const [liveprice_RUNE_u,setlive_RUNE_u] = React.useState(0)
  
  const [liveprice_UNI,setlive_UNI] = React.useState(0)
  const [liveprice_UNI_u,setlive_UNI_u] = React.useState(0)

  const [liveprice_DOT,setlive_DOT] = React.useState(0)
  const [liveprice_DOT_u,setlive_DOT_u] = React.useState(0)
  
  const [liveprice_VET,setlive_VET] = React.useState(0)
  const [liveprice_VET_u,setlive_VET_u] = React.useState(0)
  
  const [liveprice_TFUEL,setlive_TFUEL] = React.useState(0)
  const [liveprice_TFUEL_u,setlive_TFUEL_u] = React.useState(0)

  const [liveprice_GRT,setlive_GRT] = React.useState(0)
  const [liveprice_GRT_u,setlive_GRT_u] = React.useState(0)

  const [liveprice_ADA,setlive_ADA] = React.useState(0)
  const [liveprice_ADA_u,setlive_ADA_u] = React.useState(0)

  const [liveprice_FIL,setlive_FIL] = React.useState(0)
  const [liveprice_FIL_u,setlive_FIL_u] = React.useState(0)

  const [liveprice_LINK,setlive_LINK] = React.useState(0)
  const [liveprice_LINK_u,setlive_LINK_u] = React.useState(0)
  
  const [liveprice_LUNA,setlive_LUNA] = React.useState(0)
  const [liveprice_LUNA_u,setlive_LUNA_u] = React.useState(0)

  const [liveprice_THETA,setlive_THETA] = React.useState(0)
  const [liveprice_THETA_u,setlive_THETA_u] = React.useState(0)
  
  const [liveprice_XRP,setlive_XRP] = React.useState(0)
  const [liveprice_XRP_u,setlive_XRP_u] = React.useState(0)
  
  const [liveprice_DOGE,setlive_DOGE] = React.useState(0)
  const [liveprice_DOGE_u,setlive_DOGE_u] = React.useState(0)

  const [liveprice_USDC,setlive_USDC] = React.useState(0)
  const [liveprice_USDC_u,setlive_USDC_u] = React.useState(0)

  const [liveprice_AVAX,setlive_AVAX] = React.useState(0)
  const [liveprice_AVAX_u,setlive_AVAX_u] = React.useState(0)

  const [liveprice_BUSD,setlive_BUSD] = React.useState(0)
  const [liveprice_BUSD_u,setlive_BUSD_u] = React.useState(0)

  const [liveprice_LTC,setlive_LTC] = React.useState(0)
  const [liveprice_LTC_u,setlive_LTC_u] = React.useState(0)

  const [liveprice_BCH,setlive_BCH] = React.useState(0)
  const [liveprice_BCH_u,setlive_BCH_u] = React.useState(0)

  const [liveprice_ALGO,setlive_ALGO] = React.useState(0)
  const [liveprice_ALGO_u,setlive_ALGO_u] = React.useState(0)

  const [liveprice_ATOM,setlive_ATOM] = React.useState(0)
  const [liveprice_ATOM_u,setlive_ATOM_u] = React.useState(0)

  const [liveprice_ICP,setlive_ICP] = React.useState(0)
  const [liveprice_ICP_u,setlive_ICP_u] = React.useState(0)

  const [liveprice_TRX,setlive_TRX] = React.useState(0)
  const [liveprice_TRX_u,setlive_TRX_u] = React.useState(0)

  const [liveprice_XLM,setlive_XLM] = React.useState(0)
  const [liveprice_XLM_u,setlive_XLM_u] = React.useState(0)

  const [liveprice_ETC,setlive_ETC] = React.useState(0)
  const [liveprice_ETC_u,setlive_ETC_u] = React.useState(0)

  const [liveprice_XTZ,setlive_XTZ] = React.useState(0)
  const [liveprice_XTZ_u,setlive_XTZ_u] = React.useState(0)

  const [liveprice_EOS,setlive_EOS] = React.useState(0)
  const [liveprice_EOS_u,setlive_EOS_u] = React.useState(0)

  const [liveprice_CAKE,setlive_CAKE] = React.useState(0)
  const [liveprice_CAKE_u,setlive_CAKE_u] = React.useState(0)

  const [liveprice_EGLD,setlive_EGLD] = React.useState(0)
  const [liveprice_EGLD_u,setlive_EGLD_u] = React.useState(0)

  const [liveprice_XMR,setlive_XMR] = React.useState(0)
  const [liveprice_XMR_u,setlive_XMR_u] = React.useState(0)

  const [liveprice_AAVE,setlive_AAVE] = React.useState(0)
  const [liveprice_AAVE_u,setlive_AAVE_u] = React.useState(0)

  const [liveprice_QNT,setlive_QNT] = React.useState(0)
  const [liveprice_QNT_u,setlive_QNT_u] = React.useState(0)

  const [liveprice_XEC,setlive_XEC] = React.useState(0)
  const [liveprice_XEC_u,setlive_XEC_u] = React.useState(0)

  const [liveprice_HBAR,setlive_HBAR] = React.useState(0)
  const [liveprice_HBAR_u,setlive_HBAR_u] = React.useState(0)

  const [liveprice_SHIB,setlive_SHIB] = React.useState(0)
  const [liveprice_SHIB_u,setlive_SHIB_u] = React.useState(0)

  const [liveprice_NEAR,setlive_NEAR] = React.useState(0)
  const [liveprice_NEAR_u,setlive_NEAR_u] = React.useState(0)

  const [liveprice_NEO,setlive_NEO] = React.useState(0)
  const [liveprice_NEO_u,setlive_NEO_u] = React.useState(0)

  const [liveprice_WAVES,setlive_WAVES] = React.useState(0)
  const [liveprice_WAVES_u,setlive_WAVES_u] = React.useState(0)

  const [liveprice_BTT,setlive_BTT] = React.useState(0)
  const [liveprice_BTT_u,setlive_BTT_u] = React.useState(0)

  const [liveprice_MKR,setlive_MKR] = React.useState(0)
  const [liveprice_MKR_u,setlive_MKR_u] = React.useState(0)

  const [liveprice_SUSHI,setlive_SUSHI] = React.useState(0)
  const [liveprice_SUSHI_u,setlive_SUSHI_u] = React.useState(0)

  const [liveprice_AR,setlive_AR] = React.useState(0)
  const [liveprice_AR_u,setlive_AR_u] = React.useState(0)

  const [liveprice_SNX,setlive_SNX] = React.useState(0)
  const [liveprice_SNX_u,setlive_SNX_u] = React.useState(0)

  const [liveprice_COMP,setlive_COMP] = React.useState(0)
  const [liveprice_COMP_u,setlive_COMP_u] = React.useState(0)

  const [liveprice_DASH,setlive_DASH] = React.useState(0)
  const [liveprice_DASH_u,setlive_DASH_u] = React.useState(0)

  const [liveprice_HNT,setlive_HNT] = React.useState(0)
  const [liveprice_HNT_u,setlive_HNT_u] = React.useState(0)
  
  const [liveprice_CHZ,setlive_CHZ] = React.useState(0)
  const [liveprice_CHZ_u,setlive_CHZ_u] = React.useState(0)

  const [liveprice_ONE,setlive_ONE] = React.useState(0)
  const [liveprice_ONE_u,setlive_ONE_u] = React.useState(0)

  const [liveprice_HOT,setlive_HOT] = React.useState(0)
  const [liveprice_HOT_u,setlive_HOT_u] = React.useState(0)

  const [liveprice_XEM,setlive_XEM] = React.useState(0)
  const [liveprice_XEM_u,setlive_XEM_u] = React.useState(0)

  const [liveprice_KLAY,setlive_KLAY] = React.useState(0)
  const [liveprice_KLAY_u,setlive_KLAY_u] = React.useState(0)

  const [liveprice_DCR,setlive_DCR] = React.useState(0)
  const [liveprice_DCR_u,setlive_DCR_u] = React.useState(0)

  const [liveprice_ZEC,setlive_ZEC] = React.useState(0)
  const [liveprice_ZEC_u,setlive_ZEC_u] = React.useState(0)

  const [liveprice_IOST,setlive_IOST] = React.useState(0)
  const [liveprice_IOST_u,setlive_IOST_u] = React.useState(0)

  const [liveprice_ENJ,setlive_ENJ] = React.useState(0)
  const [liveprice_ENJ_u,setlive_ENJ_u] = React.useState(0)

  const [liveprice_STX,setlive_STX] = React.useState(0)
  const [liveprice_STX_u,setlive_STX_u] = React.useState(0)

  const [liveprice_TUSD,setlive_TUSD] = React.useState(0)
  const [liveprice_TUSD_u,setlive_TUSD_u] = React.useState(0)

  const [liveprice_ZIL,setlive_ZIL] = React.useState(0)
  const [liveprice_ZIL_u,setlive_ZIL_u] = React.useState(0)

  const [liveprice_FLOW,setlive_FLOW] = React.useState(0)
  const [liveprice_FLOW_u,setlive_FLOW_u] = React.useState(0)

  const [liveprice_QTUM,setlive_QTUM] = React.useState(0)
  const [liveprice_QTUM_u,setlive_QTUM_u] = React.useState(0)

  const [liveprice_MINA,setlive_MINA] = React.useState(0)
  const [liveprice_MINA_u,setlive_MINA_u] = React.useState(0)

  const [liveprice_ICX,setlive_ICX] = React.useState(0)
  const [liveprice_ICX_u,setlive_ICX_u] = React.useState(0)

  const [liveprice_OMG,setlive_OMG] = React.useState(0)
  const [liveprice_OMG_u,setlive_OMG_u] = React.useState(0)

  const [liveprice_BTG,setlive_BTG] = React.useState(0)
  const [liveprice_BTG_u,setlive_BTG_u] = React.useState(0)

  const [liveprice_BAT,setlive_BAT] = React.useState(0)
  const [liveprice_BAT_u,setlive_BAT_u] = React.useState(0)

  const [liveprice_AUDIO,setlive_AUDIO] = React.useState(0)
  const [liveprice_AUDIO_u,setlive_AUDIO_u] = React.useState(0)

  const [liveprice_ZEN,setlive_ZEN] = React.useState(0)
  const [liveprice_ZEN_u,setlive_ZEN_u] = React.useState(0)

  const [liveprice_RVN,setlive_RVN] = React.useState(0)
  const [liveprice_RVN_u,setlive_RVN_u] = React.useState(0)

  const [liveprice_MDX,setlive_MDX] = React.useState(0)
  const [liveprice_MDX_u,setlive_MDX_u] = React.useState(0)

  const [liveprice_BNT,setlive_BNT] = React.useState(0)
  const [liveprice_BNT_u,setlive_BNT_u] = React.useState(0)

  const [liveprice_ZRX,setlive_ZRX] = React.useState(0)
  const [liveprice_ZRX_u,setlive_ZRX_u] = React.useState(0)

  const [liveprice_SC,setlive_SC] = React.useState(0)
  const [liveprice_SC_u,setlive_SC_u] = React.useState(0)

  const [liveprice_ONT,setlive_ONT] = React.useState(0)
  const [liveprice_ONT_u,setlive_ONT_u] = React.useState(0)

  const [liveprice_RAY,setlive_RAY] = React.useState(0)
  const [liveprice_RAY_u,setlive_RAY_u] = React.useState(0)

  const [liveprice_DYDX,setlive_DYDX] = React.useState(0)
  const [liveprice_DYDX_u,setlive_DYDX_u] = React.useState(0)

  const [liveprice_PERP,setlive_PERP] = React.useState(0)
  const [liveprice_PERP_u,setlive_PERP_u] = React.useState(0)

  const [liveprice_GALA,setlive_GALA] = React.useState(0)
  const [liveprice_GALA_u,setlive_GALA_u] = React.useState(0)

  const [liveprice_ANKR,setlive_ANKR] = React.useState(0)
  const [liveprice_ANKR_u,setlive_ANKR_u] = React.useState(0)

  const [liveprice_NANO,setlive_NANO] = React.useState(0)
  const [liveprice_NANO_u,setlive_NANO_u] = React.useState(0)

  const [liveprice_CELO,setlive_CELO] = React.useState(0)
  const [liveprice_CELO_u,setlive_CELO_u] = React.useState(0)

  const [liveprice_UMA,setlive_UMA] = React.useState(0)
  const [liveprice_UMA_u,setlive_UMA_u] = React.useState(0)

  const [liveprice_C98,setlive_C98] = React.useState(0)
  const [liveprice_C98_u,setlive_C98_u] = React.useState(0)

  const [liveprice_CELR,setlive_CELR] = React.useState(0)
  const [liveprice_CELR_u,setlive_CELR_u] = React.useState(0)

  const [liveprice_SAND,setlive_SAND] = React.useState(0)
  const [liveprice_SAND_u,setlive_SAND_u] = React.useState(0)

  const [liveprice_POLY,setlive_POLY] = React.useState(0)
  const [liveprice_POLY_u,setlive_POLY_u] = React.useState(0)

  const [liveprice_FET,setlive_FET] = React.useState(0)
  const [liveprice_FET_u,setlive_FET_u] = React.useState(0)

  const [liveprice_1INCH,setlive_1INCH] = React.useState(0)
  const [liveprice_1INCH_u,setlive_1INCH_u] = React.useState(0)

  const [liveprice_LRC,setlive_LRC] = React.useState(0)
  const [liveprice_LRC_u,setlive_LRC_u] = React.useState(0)

  const [liveprice_KAVA,setlive_KAVA] = React.useState(0)
  const [liveprice_KAVA_u,setlive_KAVA_u] = React.useState(0)

  const [liveprice_WRX,setlive_WRX] = React.useState(0)
  const [liveprice_WRX_u,setlive_WRX_u] = React.useState(0)

  const [liveprice_RSR,setlive_RSR] = React.useState(0)
  const [liveprice_RSR_u,setlive_RSR_u] = React.useState(0)
  
  const [liveprice_BNB_u,setlive_BNB_u] = React.useState(0)
  const [liveprice_BNB,setlive_BNB] = React.useState(0)
  const [liveprice_ETH,setlive_ETH] = React.useState(0)
  const [liveprice_ETH_u,setlive_ETH_u] = React.useState(0)
  const [liveprice_ANTEAG,setlive_ANTEAG] = React.useState(0)
  const [liveprice_ANTEAG_u,setlive_ANTEAG_u] = React.useState(0)
  const [liveprice,setlive] = React.useState(0)
  const [conversion,setconversion] = React.useState(0);
  const [curr_quant,setcurr] = React.useState(0)
  const [bought_price,set_bought_price] = React.useState()
  const [myorders,setmyorder] = React.useState([]);
  const [fillorders,setfillorders] = React.useState([])
  const [book,setbook] = React.useState([]);
  const [book_s,setbook_s] = React.useState([]);
  const [port,setport] = React.useState(false)
  const [c_order,setc_order] = React.useState([]);
 const toggle = () => setIsOpen(!isOpen);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  all_socket.onmessage = evt => {
    const g = JSON.parse(evt.data)
    for(let i=0;i<g.length;i++){
      if(g[i]["s"] == "BTCUSDT"){
       setlive_BTC(parseFloat(g[i]["c"]).toFixed(2))
       const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
       setBTC_per(temp)
       
      }
      if(g[i]["s"] == "BNBUSDT"){
        setlive_BNB(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setBNB_per(temp)
       
      }
      if(g[i]["s"] == "ETHUSDT"){
        setlive_ETH(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setETH_per(temp)
       
      }
      if(g[i]["s"]=="KSMUSDT"){
        setlive_KSM(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setKSM_per(temp)
      }
      if(g[i]["s"]=="ATAUSDT"){
        setlive_ATA(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setATA_per(temp)
      }
      if(g[i]["s"]=="MANAUSDT"){
        setlive_MANA(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setMANA_per(temp)
      }
      if(g[i]["s"]=="FTMUSDT"){
        setlive_FTM(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setFTM_per(temp)
      }
      if(g[i]["s"]=="DGBUSDT"){
        setlive_DGB(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setDGB_per(temp)
      }
      if(g[i]["s"]=="ALICEUSDT"){
        setlive_ALICE(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setALICE_per(temp)
      }
      if(g[i]["s"]=="GTCUSDT"){
        setlive_GTC(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setGTC_per(temp)
      }
      if(g[i]["s"]=="MATICUSDT"){
        setlive_MATIC(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setMATIC_per(temp)
      }
      if(g[i]["s"]=="AXSUSDT"){
        setlive_AXS(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setAXS_per(temp)
      }
      if(g[i]["s"]=="FTTUSDT"){
        setlive_FTT(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setFTT_per(temp)
      }
      if(g[i]["s"]=="SOLUSDT"){
        setlive_SOL(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setSOL_per(temp)
      }
      if(g[i]["s"]=="RUNEUSDT"){
        setlive_RUNE(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setRUNE_per(temp)
      }
      if(g[i]["s"]=="UNIUSDT"){
        setlive_UNI(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setUNI_per(temp)
      }
      if(g[i]["s"]=="DOTUSDT"){
        setlive_DOT(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setDOT_per(temp)
      }
      if(g[i]["s"]=="VETUSDT"){
        setlive_VET(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setVET_per(temp)
      }
      if(g[i]["s"]=="TFUELUSDT"){
        setlive_TFUEL(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setTFUEL_per(temp)
      }
      if(g[i]["s"]=="GRTUSDT"){
        setlive_GRT(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setGRT_per(temp)
      }
      if(g[i]["s"]=="ADAUSDT"){
        setlive_ADA(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setADA_per(temp)
      }
      if(g[i]["s"]=="FILUSDT"){
        setlive_FIL(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setFIL_per(temp)
      }
      if(g[i]["s"]=="LINKUSDT"){
        setlive_LINK(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setLINK_per(temp)
      }
      if(g[i]["s"]=="LUNAUSDT"){
        setlive_LUNA(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setLUNA_per(temp)
      }
      if(g[i]["s"]=="THETAUSDT"){
        setlive_THETA(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setTHETA_per(temp)
      }

      if(g[i]["s"]=="XRPUSDT"){
        setlive_XRP(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setXRP_per(temp)
      }

      if(g[i]["s"]=="DOGEUSDT"){
        setlive_DOGE(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setDOGE_per(temp)
      }

      if(g[i]["s"]=="USDCUSDT"){
        setlive_USDC(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setUSDC_per(temp)
      }

      if(g[i]["s"]=="AVAXUSDT"){
        setlive_AVAX(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setAVAX_per(temp)
      }

      if(g[i]["s"]=="BUSDUSDT"){
        setlive_BUSD(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setBUSD_per(temp)
      }

      if(g[i]["s"]=="LTCUSDT"){
        setlive_LTC(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setLTC_per(temp)
      }

      if(g[i]["s"]=="BCHUSDT"){
        setlive_BCH(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setBCH_per(temp)
      }

      if(g[i]["s"]=="ALGOUSDT"){
        setlive_ALGO(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setALGO_per(temp)
      }

      if(g[i]["s"]=="ATOMUSDT"){
        setlive_ATOM(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setATOM_per(temp)
      }

      if(g[i]["s"]=="ICPUSDT"){
        setlive_ICP(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setICP_per(temp)
      }

      if(g[i]["s"]=="TRXUSDT"){
        setlive_TRX(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setTRX_per(temp)
      }

      if(g[i]["s"]=="XLMUSDT"){
        setlive_XRP(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setXRP_per(temp)
      }

      if(g[i]["s"]=="ETCUSDT"){
        setlive_ETC(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setETC_per(temp)
      }

      if(g[i]["s"]=="XTZUSDT"){
        setlive_XTZ(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setXTZ_per(temp)
      }

      if(g[i]["s"]=="EOSUSDT"){
        setlive_EOS(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setEOS_per(temp)
      }

      if(g[i]["s"]=="CAKEUSDT"){
        setlive_CAKE(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setCAKE_per(temp)
      }

      if(g[i]["s"]=="EGLDUSDT"){
        setlive_EGLD(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setEGLD_per(temp)
      }

     
      if(g[i]["s"]=="XMRUSDT"){
        setlive_XMR(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setXMR_per(temp)
      }
      
      
      if(g[i]["s"]=="AAVEUSDT"){
        setlive_AAVE(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setAAVE_per(temp)
      }

      
      if(g[i]["s"]=="QNTUSDT"){
        setlive_QNT(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setQNT_per(temp)
      }

      
      if(g[i]["s"]=="XECUSDT"){
        setlive_XEC(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setXEC_per(temp)
      }

      
      if(g[i]["s"]=="HBARUSDT"){
        setlive_HBAR(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setHBAR_per(temp)
      }

      
      if(g[i]["s"]=="SHIBUSDT"){
        setlive_SHIB(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setSHIB_per(temp)
      }

      
      if(g[i]["s"]=="NEARUSDT"){
        setlive_NEAR(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setNEAR_per(temp)
      }

      
      if(g[i]["s"]=="NEOUSDT"){
        setlive_NEO(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setNEO_per(temp)
      }

      
      if(g[i]["s"]=="WAVESUSDT"){
        setlive_WAVES(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setWAVES_per(temp)
      }

      
      if(g[i]["s"]=="BTTUSDT"){
        setlive_BTT(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setBTT_per(temp)
      }
      
      if(g[i]["s"]=="MKRUSDT"){
        setlive_MKR(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setMKR_per(temp)
      }

      if(g[i]["s"]=="SUSHIUSDT"){
        setlive_SUSHI(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setSUSHI_per(temp)
      }

      if(g[i]["s"]=="ARUSDT"){
        setlive_AR(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setAR_per(temp)
      }
       
      if(g[i]["s"]=="SNXUSDT"){
        setlive_SNX(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setSNX_per(temp)
      }

      if(g[i]["s"]=="COMPUSDT"){
        setlive_COMP(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setCOMP_per(temp)
      }

      if(g[i]["s"]=="DASHUSDT"){
        setlive_DASH(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setDASH_per(temp)
      }

      if(g[i]["s"]=="HNTUSDT"){
        setlive_HNT(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setHNT_per(temp)
      }

      if(g[i]["s"]=="CHZUSDT"){
        setlive_CHZ(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setCHZ_per(temp)
      }

      if(g[i]["s"]=="ONEUSDT"){
        setlive_ONE(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setONE_per(temp)
      }

      if(g[i]["s"]=="HOTUSDT"){
        setlive_HOT(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setHOT_per(temp)
      }

      if(g[i]["s"]=="XEMUSDT"){
        setlive_XEM(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setXEM_per(temp)
      }

      if(g[i]["s"]=="KLAYUSDT"){
        setlive_KLAY(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setKLAY_per(temp)
      }

      if(g[i]["s"]=="DCRUSDT"){
        setlive_DCR(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setDCR_per(temp)
      }

      if(g[i]["s"]=="ZECUSDT"){
        setlive_ZEC(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setZEC_per(temp)
      }

      if(g[i]["s"]=="ZECUSDT"){
        setlive_ZEC(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setZEC_per(temp)
      }

      if(g[i]["s"]=="IOSTUSDT"){
        setlive_IOST(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setIOST_per(temp)
      }

      if(g[i]["s"]=="ENJUSDT"){
        setlive_ENJ(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setENJ_per(temp)
      }

      if(g[i]["s"]=="STXUSDT"){
        setlive_STX(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setSTX_per(temp)
      }

      if(g[i]["s"]=="TUSDUSDT"){
        setlive_TUSD(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setTUSD_per(temp)
      }

      if(g[i]["s"]=="ZILUSDT"){
        setlive_ZIL(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setZIL_per(temp)
      }

      if(g[i]["s"]=="FLOWUSDT"){
        setlive_FLOW(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setFLOW_per(temp)
      }

      if(g[i]["s"]=="QTUMUSDT"){
        setlive_QTUM(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setQTUM_per(temp)
      }

      if(g[i]["s"]=="MINAUSDT"){
        setlive_MINA(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setMINA_per(temp)
      }

      if(g[i]["s"]=="ICXUSDT"){
        setlive_ICX(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setICX_per(temp)
      }

      if(g[i]["s"]=="OMGUSDT"){
        setlive_OMG(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setOMG_per(temp)
      }

      if(g[i]["s"]=="BTGUSDT"){
        setlive_BTG(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setBTG_per(temp)
      }

      if(g[i]["s"]=="BATUSDT"){
        setlive_BAT(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setBAT_per(temp)
      }

      if(g[i]["s"]=="AUDIOUSDT"){
        setlive_AUDIO(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setAUDIO_per(temp)
      }

      if(g[i]["s"]=="ZENUSDT"){
        setlive_ZEN(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setZEN_per(temp)
      }

      if(g[i]["s"]=="RVNUSDT"){
        setlive_RVN(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setRVN_per(temp)
      }

      if(g[i]["s"]=="MDXUSDT"){
        setlive_MDX(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setMDX_per(temp)
      }

      if(g[i]["s"]=="BNTUSDT"){
        setlive_BNT(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setBNT_per(temp)
      }

      if(g[i]["s"]=="ZRXUSDT"){
        setlive_ZRX(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setZRX_per(temp)
      }

      if(g[i]["s"]=="SCUSDT"){
        setlive_SC(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setSC_per(temp)
      }

      if(g[i]["s"]=="ONTUSDT"){
        setlive_ONT(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setONT_per(temp)
      }

      if(g[i]["s"]=="RAYUSDT"){
        setlive_RAY(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setRAY_per(temp)
      }

      if(g[i]["s"]=="DYDXUSDT"){
        setlive_DYDX(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setDYDX_per(temp)
      }

      if(g[i]["s"]=="PERPUSDT"){
        setlive_PERP(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setPERP_per(temp)
      }

      if(g[i]["s"]=="GALAUSDT"){
        setlive_GALA(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setGALA_per(temp)
      }

      if(g[i]["s"]=="ANKRUSDT"){
        setlive_ANKR(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setANKR_per(temp)
      }

      if(g[i]["s"]=="NANOUSDT"){
        setlive_NANO(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setNANO_per(temp)
      }

      if(g[i]["s"]=="CELOUSDT"){
        setlive_CELO(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setCELO_per(temp)
      }

      if(g[i]["s"]=="UMAUSDT"){
        setlive_UMA(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setUMA_per(temp)
      }

      if(g[i]["s"]=="C98USDT"){
        setlive_C98(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setC98_per(temp)
      }

      if(g[i]["s"]=="CELRUSDT"){
        setlive_CELR(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setCELR_per(temp)
      }

      if(g[i]["s"]=="SANDUSDT"){
        setlive_SAND(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setSAND_per(temp)
      }

      if(g[i]["s"]=="POLYUSDT"){
        setlive_POLY(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setPOLY_per(temp)
      }

      if(g[i]["s"]=="FETUSDT"){
        setlive_FET(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setFET_per(temp)
      }

      if(g[i]["s"]=="1INCHUSDT"){
        setlive_1INCH(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        set1INCH_per(temp)
      }

      if(g[i]["s"]=="LRCUSDT"){
        setlive_LRC(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setLRC_per(temp)
      }

      if(g[i]["s"]=="KAVAUSDT"){
        setlive_KAVA(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setKAVA_per(temp)
      }

      if(g[i]["s"]=="WRXUSDT"){
        setlive_WRX(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setWRX_per(temp)
      }
      
      if(g[i]["s"]=="RSRUSDT"){
        setlive_WRX(parseFloat(g[i]["c"]).toFixed(2))
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setWRX_per(temp)
      }
  
    }
  }
  const handleWindowSizeChange = () => {
    setwidth(window.innerWidth)
  };
  useEffect(()=>{ 
     window.addEventListener('resize', handleWindowSizeChange());
    setInterval(()=>{
     
    axios({
      method:"get",
      url: "https://api.exchangerate.host/convert?from=USD&to=INR"
    }).then(res=>{
      localStorage.setItem("conversion",res.data.info.rate)
      setconversion(res.data.info.rate)
      if(pair == "ANTEAG/USDT"){
        setlive(parseFloat(8.08/conversion).toFixed(2))
        setlive_ANTEAG_u(parseFloat(8.08/conversion).toFixed(2))
      }
      if(pair == "ANTEAG/INRD"){
        setlive(8.08)
        setlive_ANTEAG(8.08)
      }
     
    })

    axios({
      method:"get",
      url: "https://api.exchangerate.host/convert?from=USD&to=INR"
    }).then(res=>{
      //console.log(res.data.info.rate)
      setliveusd(res.data.info.rate)
    })

    axios({
      method: 'get',
      url: `https://api.anteagle.tech/liveprice?pair=ANTEAG/USDT`
    }).then(res => {
      if (res.data[0]) {
        setANTEAG(res.data[0].price)
      }

    })

    axios({
      method : "get",
      url : `https://api.anteagle.tech/bankdetails?userid=${localStorage.getItem("userid")}`,
      headers : {
          'Accept' : "Application/json",
          'Content-type' : "Application/JSON"
      }
  }).then(res=>{
  
     
  })

    axios({
      method : "get",
      url : `https://api.anteagle.tech/allwallet?userid=${localStorage.getItem("userid")}`,
      headers : {
        'Accept' : "application/json"
      }
    }).then(res1=>{
      // console.log(res1.data.data)
      // console.log(Object.keys(res1.data.data).length)
      var x=Object.entries(res1.data.data).forEach(([key,value])=>{
              if(key.includes("_Coins") && value>0){
                    wal.push([key,value])
              }
      })
      
      
      localStorage.setItem("BTC_Coins",res1.data.data.BTC_Coins)
    localStorage.setItem("BNB_Coins",res1.data.data.BNB_Coins)
    localStorage.setItem("ETH_Coins",res1.data.data.ETH_Coins)
    localStorage.setItem("ANTEAG_Coins",res1.data.data.ANT_Coins)
    localStorage.setItem("USDT_Coins",res1.data.data.USDT_Coins)
    localStorage.setItem("INRD_Coins",res1.data.data.INRD_Coins)
    localStorage.setItem("KSM_Coins",res1.data.data.KSM_Coins)
    localStorage.setItem("ATA_Coins",res1.data.data.ATA_Coins)
    localStorage.setItem("MANA_Coins",res1.data.data.MANA_Coins)
    localStorage.setItem("DGB_Coins",res1.data.data.DGB_Coins)
    localStorage.setItem("FTM_Coins",res1.data.data.FTM_Coins)
    localStorage.setItem("ALICE_Coins",res1.data.data.ALICE_Coins)
    localStorage.setItem("GTC_Coins",res1.data.data.GTC_Coins)
    localStorage.setItem("MATIC_Coins",res1.data.data.MATIC_Coins)
    localStorage.setItem("AXS_Coins",res1.data.data.AXS_Coins)
    localStorage.setItem("FTT_Coins",res1.data.data.FTT_Coins)
    localStorage.setItem("SOL_Coins",res1.data.data.SOL_Coins)
    localStorage.setItem("RUNE_Coins",res1.data.data.RUNE_Coins)
    localStorage.setItem("UNI_Coins",res1.data.data.UNI_Coins)
    localStorage.setItem("DOT_Coins",res1.data.data.DOT_Coins)
    localStorage.setItem("VET_Coins",res1.data.data.VET_Coins)
    localStorage.setItem("TFUEL_Coins",res1.data.data.TFUEL_Coins)
    localStorage.setItem("GRT_Coins",res1.data.data.GRT_Coins)
    localStorage.setItem("ADA_Coins",res1.data.data.ADA_Coins)
    localStorage.setItem("FIL_Coins",res1.data.data.FIL_Coins)
    localStorage.setItem("LINK_Coins",res1.data.data.LINK_Coins)
    localStorage.setItem("LUNA_Coins",res1.data.data.LUNA_Coins)
    localStorage.setItem("THETA_Coins",res1.data.data.THETA_Coins)
    localStorage.setItem("XRP_Coins",res1.data.data.XRP_Coins)
    localStorage.setItem("DOGE_Coins",res1.data.data.DOGE_Coins)
    localStorage.setItem("USDC_Coins",res1.data.data.USDC_Coins)
    localStorage.setItem("AVAX_Coins",res1.data.data.AVAX_Coins)
    localStorage.setItem("BUSD_Coins",res1.data.data.BUSD_Coins)
    localStorage.setItem("LTC_Coins",res1.data.data.LTC_Coins)
    localStorage.setItem("BCH_Coins",res1.data.data.BCH_Coins)
    localStorage.setItem("ALGO_Coins",res1.data.data.ALGO_Coins)
    localStorage.setItem("ATOM_Coins",res1.data.data.ATOM_Coins)
    localStorage.setItem("ICP_Coins",res1.data.data.ICP_Coins)
    localStorage.setItem("TRX_Coins",res1.data.data.TRX_Coins)
    localStorage.setItem("XLM_Coins",res1.data.data.XLM_Coins)
    localStorage.setItem("ETC_Coins",res1.data.data.ETC_Coins)
    localStorage.setItem("XTZ_Coins",res1.data.data.XTZ_Coins)
    localStorage.setItem("EOS_Coins",res1.data.data.EOS_Coins)
    localStorage.setItem("CAKE_Coins",res1.data.data.CAKE_Coins)
    localStorage.setItem("EGLD_Coins",res1.data.data.EGLD_Coins)
    localStorage.setItem("XMR_Coins",res1.data.data.XMR_Coins)
    localStorage.setItem("AAVE_Coins",res1.data.data.AAVE_Coins)
    localStorage.setItem("QNT_Coins",res1.data.data.QNT_Coins)
    localStorage.setItem("XEC_Coins",res1.data.data.XEC_Coins)
    localStorage.setItem("HBAR_Coins",res1.data.data.HBAR_Coins)
    localStorage.setItem("SHIB_Coins",res1.data.data.SHIB_Coins)
    localStorage.setItem("NEAR_Coins",res1.data.data.NEAR_Coins)
    localStorage.setItem("NEO_Coins",res1.data.data.NEO_Coins)
    localStorage.setItem("KLAY_Coins",res1.data.data.KLAY_Coins)
    localStorage.setItem("WAVES_Coins",res1.data.data.WAVES_Coins)
    localStorage.setItem("BTT_Coins",res1.data.data.BTT_Coins)
    localStorage.setItem("MKR_Coins",res1.data.data.MKR_Coins)
    localStorage.setItem("SUSHI_Coins",res1.data.data.SUSHI_Coins)
    localStorage.setItem("AR_Coins",res1.data.data.AR_Coins)
    localStorage.setItem("SNX_Coins",res1.data.data.SNX_Coins)
    localStorage.setItem("COMP_Coins",res1.data.data.COMP_Coins)
    localStorage.setItem("DASH_Coins",res1.data.data.DASH_Coins)
    localStorage.setItem("DCR_Coins",res1.data.data.DCR_Coins)
    localStorage.setItem("HNT_Coins",res1.data.data.HNT_Coins)
    localStorage.setItem("CHZ_Coins",res1.data.data.CHZ_Coins)
    localStorage.setItem("ONE_Coins",res1.data.data.ONE_Coins)
    localStorage.setItem("HOT_Coins",res1.data.data.HOT_Coins)
    localStorage.setItem("XEM_Coins",res1.data.data.XEM_Coins)
    localStorage.setItem("ZEC_Coins",res1.data.data.ZEC_Coins)
    localStorage.setItem("IOST_Coins",res1.data.data.IOST_Coins)
    localStorage.setItem("ENJ_Coins",res1.data.data.ENJ_Coins)
    localStorage.setItem("STX_Coins",res1.data.data.STX_Coins)
    localStorage.setItem("TUSD_Coins",res1.data.data.TUSD_Coins)
    localStorage.setItem("ZIL_Coins",res1.data.data.ZIL_Coins)
    localStorage.setItem("FLOW_Coins",res1.data.data.FLOW_Coins)
    localStorage.setItem("QTUM_Coins",res1.data.data.QTUM_Coins)
    localStorage.setItem("MINA_Coins",res1.data.data.MINA_Coins)
    localStorage.setItem("ICX_Coins",res1.data.data.ICX_Coins)
    localStorage.setItem("OMG_Coins",res1.data.data.OMG_Coins)
    localStorage.setItem("BTG_Coins",res1.data.data.BTG_Coins)
    localStorage.setItem("BAT_Coins",res1.data.data.BAT_Coins)
    localStorage.setItem("ZEN_Coins",res1.data.data.ZEN_Coins)
    localStorage.setItem("RVN_Coins",res1.data.data.RVN_Coins)
    localStorage.setItem("MDX_Coins",res1.data.data.MDX_Coins)  
    localStorage.setItem("BNT_Coins",res1.data.data.BNT_Coins)
    localStorage.setItem("ZRX_Coins",res1.data.data.ZRX_Coins)
    localStorage.setItem("AUDIO_Coins",res1.data.data.AUDIO_Coins)
    localStorage.setItem("SC_Coins",res1.data.data.SC_Coins)
    localStorage.setItem("ONT_Coins",res1.data.data.ONT_Coins)
    localStorage.setItem("RAY_Coins",res1.data.data.RAY_Coins)
    localStorage.setItem("DYDX_Coins",res1.data.data.DYDX_Coins)
    localStorage.setItem("PERP_Coins",res1.data.data.PERP_Coins)
    localStorage.setItem("GALA_Coins",res1.data.data.GALA_Coins)
    localStorage.setItem("ANKR_Coins",res1.data.data.ANKR_Coins)
    localStorage.setItem("NANO_Coins",res1.data.data.NANO_Coins)
    localStorage.setItem("CELO_Coins",res1.data.data.CELO_Coins)
    localStorage.setItem("UMA_Coins",res1.data.data.UMA_Coins)
    localStorage.setItem("C98_Coins",res1.data.data.C98_Coins)
    localStorage.setItem("CELR_Coins",res1.data.data.CELR_Coins)
    localStorage.setItem("SAND_Coins",res1.data.data.SAND_Coins)
    localStorage.setItem("POLY_Coins",res1.data.data.POLY_Coins)
    localStorage.setItem("FET_Coins",res1.data.data.FET_Coins)
    localStorage.setItem("1INCH_Coins",res1.data.data._1INCH_Coins)
    localStorage.setItem("LRC_Coins",res1.data.data.LRC_Coins)
    localStorage.setItem("KAVA_Coins",res1.data.data.KAVA_Coins)
    localStorage.setItem("WRX_Coins",res1.data.data.WRX_Coins)
    localStorage.setItem("RSR_Coins",res1.data.data.RSR_Coins)
    



    })




    axios({
      method:"post",
      url : `https://api.anteagle.tech/getorder?userid=${localStorage.getItem("userid")}`,
      headers:{
        'Accept' : 'application/json',
        Authtoken : "jkdhfjkdf"
      }
    }).then(({data})=>{

      var ans = []
      var ans1 = []
      var ans2 = []
      // console.log(data.data)
      for(let i=0;i<data.data.length;i++){
        var temp2 = []
        temp2.push(data.data[i].orderid)
        temp2.push(data.data[i].date)
        temp2.push(data.data[i].pair)
        temp2.push(data.data[i].type)
        temp2.push(data.data[i].side)
        temp2.push(data.data[i].price)
        temp2.push(data.data[i].Amount.toFixed(3))
        temp2.push(data.data[i].filled)
        temp2.push(data.data[i].total.toFixed(3))
        temp2.push(data.data[i].status)
 
        ans2.push(temp2)
        if(data.data[i].status == "FILLED"){
          var temp1 = []
        temp1.push(data.data[i].orderid)
        temp1.push(data.data[i].date)
        temp1.push(data.data[i].pair)
        temp1.push(data.data[i].type)
        temp1.push(data.data[i].side)
        temp1.push(data.data[i].price)
        temp1.push(data.data[i].Amount.toFixed(3))
        temp1.push(data.data[i].filled)
        temp1.push(data.data[i].total.toFixed(3))
       
        temp1.push(data.data[i].status)
        ans1.push(temp1)
        }
        else{
          var temp = []
        temp.push(data.data[i].orderid)
        temp.push(data.data[i].date)
        temp.push(data.data[i].pair)
        temp.push(data.data[i].type)
        temp.push(data.data[i].side)
        temp.push(data.data[i].price)
        temp.push(data.data[i].Amount.toFixed(3))
        temp.push(data.data[i].filled)
        temp.push(data.data[i].total.toFixed(3))
        temp.push(data.data[i].status)
        ans.push(temp)
        }
        
      } 
      setmyorder(ans)
      setfillorders(ans1)
      setallorders(ans2)
    })
    // setc_order(data.data)

  },1000)

  axios({
    method : "get",
    url : `https://api.anteagle.tech/bankdetails?userid=${localStorage.getItem("userid")}`,
    headers : {
        'Accept' : "Application/json",
        'Content-type' : "Application/JSON"
    }
}).then(res=>{
    setban(res.data.res[0])
    // console.log(res.data.res[0])
})
document.body.classList.remove("white-content");
},[])
 
useEffect(()=>{
  am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.legend = new am4charts.Legend();
    
    // chart.data = [
    //   {
    //     country: "Bitcoin (BTC)",
    //     litres: parseFloat(localStorage.getItem("BTC_Coins")*liveprice_BTC)
    //   },
    //   {
    //     country: "Ethereum (ETH)",
    //     litres: parseFloat(localStorage.getItem("ETH_Coins")*liveprice_ETH)
    //   },
    //   {
    //     country: "Binance (BNB)",
    //     litres: parseFloat(localStorage.getItem("BNB_Coins")*liveprice_BNB)
    //   },
      
    for(var i=0;i<wal.length;i++){
      var litres = 0;
      console.log(wal[i][0].replace("_Coins",""))
      if(wal[i][0].replace("_Coins","") == 'BTC') {
        litres = parseFloat(wal[i][1])*parseFloat(liveprice_BTC)
        console.log(litres)
      }
      else if(wal[i][0].replace("_Coins","") == "BNB"){
        litres = wal[i][1]*liveprice_BNB
      }
      else if(wal[i][0].replace("_Coins","") == "INRD"){
        litres = wal[i][1]/conversion
      }
      else{
        litres = wal[i][1]
      }
      console.log(wal[i][0])
      chart.data.push({ country:wal[i][0],litres:litres })
    }
    

    
    var series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    }); 



},[portfolio])
 
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
   
const isMobile = width <= 900;
if (isMobile) {
///  Calling API and modeling data for each chart ///
const btcData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  
  
  // const cosmosData = async () => {
  //   const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ATOM&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  //   const json = await response.json();
  //   const data = json.Data.Data
  //   const times = data.map(obj => obj.time)
  //   const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  //   return {
  //     times,
  //     prices
  //   }
  // }
  
  
  const ETHData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  
  
  
  const BNBData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BNB&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const LINKData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=LINK&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const LUNAData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=LUNA&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const THETAData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=THETA&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const GRTData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=GRT&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const TFUELData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=TFUEL&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const KSMData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=KSM&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const ADAData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ADA&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const VETData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=VET&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const DOTData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=DOT&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const UNIData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=UNI&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const RUNEData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=RUNE&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const SOLData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=SOL&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  
  const FTTData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=FTT&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const AXSData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=AXS&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const MATICData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=MATIC&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const GTCData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=GTC&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const ALICEData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ALICE&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const FILData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=FIL&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const FTMData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=FTM&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const DGBData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=DGB&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const MANAData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=MANA&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  const ATAData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ATA&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
  }
  
  // /// Error handling ///
  // function checkStatus(response) {
  //   if (response.ok) {
  //     return Promise.resolve(response);
  //   } else {
  //     return Promise.reject(new Error(response.statusText));
  //   }
  // }
  
  
  
  // /// Charts ///
  
  const refHandler_BTC = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
  seti(2)
  let btcChart = canvas.getContext( "2d" );
  
  let { times, prices } = await btcData()
  
  
  let gradient = btcChart.createLinearGradient(0, 0, 0, 100);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  
  
  
  let createBtcChart;
  

    createBtcChart = new Chart(btcChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 10
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 5,
          xPadding: 5,
          position: 'nearest',
          caretSize: 5,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 8,
          bodyFontColor: '#303030' 
        }
      }
    });
  
  
  // if()
  }
  
  const refHandler_ETH = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let ETHChart = canvas.getContext( "2d" );
  
  let { times, prices } = await ETHData()
  
  
  let gradient = ETHChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createETHChart
  if(i==1){
    createETHChart = new Chart(ETHChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_LINK = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let LINKChart = canvas.getContext( "2d" );
  
  let { times, prices } = await LINKData()
  
  
  let gradient = LINKChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createLINKChart
  if(i==1){
    createLINKChart = new Chart(LINKChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  
  const refHandler_LUNA = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
  
    seti(2)
  let LUNAChart = canvas.getContext( "2d" );
  
  let { times, prices } = await LUNAData()
  
  
  let gradient = LUNAChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createLUNAChart
  if(i==1){
    createLUNAChart = new Chart(LUNAChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  
  const refHandler_THETA = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let THETAChart = canvas.getContext( "2d" );
  
  let { times, prices } = await THETAData()
  
  
  let gradient = THETAChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createTHETAChart
  if(i==1){
    createTHETAChart = new Chart(THETAChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_GRT = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let GRTChart = canvas.getContext( "2d" );
  
  let { times, prices } = await GRTData()
  
  
  let gradient = GRTChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createGRTChart
  if(i==1){
    createGRTChart = new Chart(GRTChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_TFUEL = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let TFUELChart = canvas.getContext( "2d" );
  
  let { times, prices } = await TFUELData()
  
  
  let gradient = TFUELChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createTFUELChart
  if(i==1){
    createTFUELChart = new Chart(TFUELChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_KSM = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let KSMChart = canvas.getContext( "2d" );
  
  let { times, prices } = await KSMData()
  
  
  let gradient = KSMChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createKSMChart
  if(i==1){
    createKSMChart = new Chart(KSMChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_ADA = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let ADAChart = canvas.getContext( "2d" );
  
  let { times, prices } = await ADAData()
  
  
  let gradient = ADAChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createADAChart
  if(i==1){
    createADAChart = new Chart(ADAChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_VET = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let VETChart = canvas.getContext( "2d" );
  
  let { times, prices } = await VETData()
  
  
  let gradient = VETChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createVETChart
  if(i==1){
    createVETChart = new Chart(VETChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_DOT = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
  
    seti(2)
  let DOTChart = canvas.getContext( "2d" );
  
  let { times, prices } = await DOTData()
  
  
  let gradient = DOTChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  let createDOTChart
  if(i==1){
    createDOTChart = new Chart(DOTChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_BNB = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let BNBChart = canvas.getContext( "2d" );
  
  let { times, prices } = await BNBData()
  
  
  let gradient = BNBChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createBNBChart
  if(i==1){
    createBNBChart = new Chart(BNBChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_UNI = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let UNIChart = canvas.getContext( "2d" );
  
  let { times, prices } = await UNIData()
  
  
  let gradient = UNIChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createUNIChart
  if(i==1){
    createUNIChart = new Chart(UNIChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_RUNE = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let RUNEChart = canvas.getContext( "2d" );
  
  let { times, prices } = await RUNEData()
  
  
  let gradient = RUNEChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createRUNEChart
  if(i==1){
    createRUNEChart = new Chart(RUNEChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_SOL = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let SOLChart = canvas.getContext( "2d" );
  
  let { times, prices } = await SOLData()
  
  
  let gradient = SOLChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createSOLChart
  if(i==1){
    createSOLChart = new Chart(SOLChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_FTT = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let FTTChart = canvas.getContext( "2d" );
  
  let { times, prices } = await FTTData()
  
  
  let gradient = FTTChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createFTTChart
  if(i==1){
    createFTTChart = new Chart(FTTChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_AXS = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let AXSChart = canvas.getContext( "2d" );
  
  let { times, prices } = await AXSData()
  
  
  let gradient = AXSChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createAXSChart
  if(i==1){
    createAXSChart = new Chart(AXSChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_MATIC = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let MATICChart = canvas.getContext( "2d" );
  
  let { times, prices } = await MATICData()
  
  
  let gradient = MATICChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createMATICChart
  if(i==1){
    createMATICChart = new Chart(MATICChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_GTC = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
  
    seti(2)
  let GTCChart = canvas.getContext( "2d" );
  
  let { times, prices } = await GTCData()
  
  
  let gradient = GTCChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  let createGTCChart
  if(i==1){
    createGTCChart = new Chart(GTCChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_ALICE = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let ALICEChart = canvas.getContext( "2d" );
  
  let { times, prices } = await ALICEData()
  
  
  let gradient = ALICEChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createALICEChart
  if(i==1){
    createALICEChart = new Chart(ALICEChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_FIL = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let FILChart = canvas.getContext( "2d" );
  
  let { times, prices } = await FILData()
  
  
  let gradient = FILChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createFILChart
  if(i==1){
    createFILChart = new Chart(FILChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_FTM = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let FTMChart = canvas.getContext( "2d" );
  
  let { times, prices } = await FTMData()
  
  
  let gradient = FTMChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createFTMChart
  if(i==1){
    createFTMChart = new Chart(FTMChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_DGB = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let DGBChart = canvas.getContext( "2d" );
  
  let { times, prices } = await DGBData()
  
  
  let gradient = DGBChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createDGBChart
  if(i==1){
    createDGBChart = new Chart(DGBChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_MANA = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
  
    seti(2)
  let MANAChart = canvas.getContext( "2d" );
  
  let { times, prices } = await MANAData()
  
  
  let gradient = MANAChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  let createMANAChart
  if(i==1){
    createMANAChart = new Chart(MANAChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
  }
  
  const refHandler_ATA = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};
    seti(2)
  let ATAChart = canvas.getContext( "2d" );
  
  let { times, prices } = await ATAData()
  
  
  let gradient = ATAChart.createLinearGradient(0, 0, 0, 400);
  
  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');
  
  
  
  
  let createATAChart
  if(i==1){
    createATAChart = new Chart(ATAChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
    
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
    
        legend: {
          display: false
        },
    
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
    
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
    
        tooltips: {
          callbacks: {
            //This removes the tooltip title
            title: function() {}
         },
          //this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030' 
        }
      }
    });
    }
    
  }
  
  
  
  // // async function printCosmosChart() {
  // //   let { times, prices } = await cosmosData()
  
  // //   let cosmosChart = document.getElementById('cosmosChart').getContext('2d');
  
  // //   let gradient = cosmosChart.createLinearGradient(0, 0, 0, 400);
  
  // //   gradient.addColorStop(0, 'rgba(27,30,54,.5)');
  // //   gradient.addColorStop(.425, 'rgba(46,49,72,0)');
  
  // //   
  // //   
  // //   let createCosmosChart
  // //   createCosmosChart = new Chart(cosmosChart, {
  // //     type: 'line',
  // //     data: {
  // //       labels: times,
  // //       datasets: [{
  // //         label: "",
  // //         data: prices,
  // //         backgroundColor: gradient,
  // //         borderColor: 'rgba(46,49,72,1)',
  // //         borderJoinStyle: 'round',
  // //         borderCapStyle: 'round',
  // //         borderWidth: 3,
  // //         pointRadius: 0,
  // //         pointHitRadius: 10,
  // //         lineTension: .2,
  // //       }]
  // //     },
  
  // //     options: {
  // //       title: {
  // //         display: false,
  // //         text: 'Heckin Chart!',
  // //         fontSize: 35
  // //       },
  
  // //       legend: {
  // //         display: false
  // //       },
  
  // //       layout: {
  // //         padding: {
  // //           left: 0,
  // //           right: 0,
  // //           top: 0,
  // //           bottom: 0
  // //         }
  // //       },
  
  // //       scales: {
  // //         xAxes: [{
  // //           display: false,
  // //           gridLines: {}
  // //         }],
  // //         yAxes: [{
  // //           display: false,
  // //           gridLines: {}
  // //         }]
  // //       },
  
  // //       tooltips: {
  // //         callbacks: {
  // //           //This removes the tooltip title
  // //           title: function() {}
  // //        },
  // //         //this removes legend color
  // //         displayColors: false,
  // //         yPadding: 10,
  // //         xPadding: 10,
  // //         position: 'nearest',
  // //         caretSize: 10,
  // //         backgroundColor: 'rgba(255,255,255,.9)',
  // //         bodyFontSize: 15,
  // //         bodyFontColor: '#303030' 
  // //       }
  // //     }
  // //   });
  // // }
  
  
  // // async function printEthereumChart() {
  // //   let { times, prices } = await ethereumData()
  
  // //   let ethereumChart = document.getElementById('ethereumChart').getContext('2d');
  
  // //   let gradient = ethereumChart.createLinearGradient(0, 0, 0, 400);
  
  // //   gradient.addColorStop(0, 'rgba(78,56,216,.5)');
  // //   gradient.addColorStop(.425, 'rgba(118,106,192,0)');
  
  // //   
  // //   
  
  // //   let createEthereumChart
  // //   createEthereumChart = new Chart(ethereumChart, {
  // //     type: 'line',
  // //     data: {
  // //       labels: times,
  // //       datasets: [{
  // //         label: '$',
  // //         data: prices,
  // //         backgroundColor: gradient,
  // //         borderColor: 'rgba(118,106,192,1)',
  // //         borderJoinStyle: 'round',
  // //         borderCapStyle: 'round',
  // //         borderWidth: 3,
  // //         pointRadius: 0,
  // //         pointHitRadius: 10,
  // //         lineTension: .2,
  // //       }]
  // //     },
  
  // //     options: {
  // //       title: {
  // //         display: false,
  // //         text: 'Heckin Chart!',
  // //         fontSize: 35
  // //       },
  
  // //       legend: {
  // //         display: false
  // //       },
  
  // //       layout: {
  // //         padding: {
  // //           left: 0,
  // //           right: 0,
  // //           top: 0,
  // //           bottom: 0
  // //         }
  // //       },
  
  // //       scales: {
  // //         xAxes: [{
  // //           display: false,
  // //           gridLines: {}
  // //         }],
  // //         yAxes: [{
  // //           display: false,
  // //           gridLines: {}
  // //         }]
  // //       },
  
  // //       tooltips: {
  // //         callbacks: {
  // //           //This removes the tooltip title
  // //           title: function() {}
  // //        },
  // //         //this removes legend color
  // //         displayColors: false,
  // //         yPadding: 10,
  // //         xPadding: 10,
  // //         position: 'nearest',
  // //         caretSize: 10,
  // //         backgroundColor: 'rgba(255,255,255,.9)',
  // //         bodyFontSize: 15,
  // //         bodyFontColor: '#303030' 
  // //       }
  // //     }
  // //   });
  // // }
  
  
  // /// Update current price ///
  // // async function updateEthereumPrice() {
  // //   let { times, prices } = await ethereumData()
  // //   let currentPrice = prices[prices.length-1].toFixed(2);
  
  // //   document.getElementById("ethPrice").innerHTML = "$" + currentPrice;
  // // }
  
  // // async function updateCosmosPrice() {
  // //   let { times, prices } = await cosmosData()
  // //   let currentPrice = prices[prices.length-1].toFixed(2);
  
  // //   document.getElementById("atomPrice").innerHTML = "$" + currentPrice;
  // // }
  
  // async function updateBitcoinPrice() {
  //   let { times, prices } = await btcData()
  //   let currentPrice = prices[prices.length-1].toFixed(2);
  
  //   document.getElementById("btcPrice").innerHTML = "$" + currentPrice;
  // }
  
  // // updateEthereumPrice()
  // // updateCosmosPrice()
  // updateBitcoinPrice()
  
  // printBtcChart()
  // // printCosmosChart()
  // printEthereumChart()
    return ( 
      
       <body style={{backgroundColor:isDark?"black":"white",overflowX:"hidden"}}>
      <div className="content" >
        {loadin_cont ? <LoadDashMobile /> : 
  //         <>
  
      
  //        </> 
  <>
  {
  anteagle_pro ? 
  
  <> null</>:
   
          
   <>
   <Dialog open={show_buy} onClose={()=>{
    setshow_buy(false)
  }} >
    
    
  
   <Form style={{padding:"20px"}}>
    <CardHeader style={{fontWeight:"bold"}}>BALANCE - <br/>  {`${mobileswitch1 ? 'USDT' : 'INRD'}`} : {localStorage.getItem(`${mobileswitch1 ? 'USDT' : 'INRD'}_Coins`)} <br/> {pair.substring(0,pair.indexOf("/"))} : {localStorage.getItem( `${pair.substring(0,pair.indexOf("/"))}_Coins`)  } </CardHeader>
   
      <Label style={{color:"black",fontWeight:"bold"}}>Price</Label>
      <Input  disabled={true}  value={pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2)} disabled onChange={(event)=>{
        setbuy_market_price(event.target.value)
  
      }} placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`}></Input>
  
  
  
  <Label style={{color:"black",fontWeight:"bold"}}>Enter Amount</Label>
     <Input disabled={true}  placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={buy_market_amount} onChange={(event)=>{
        setbuy_market_amount(event.target.value)
        
      }}  placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`}></Input>
  
      <Label style={{color:"black",fontWeight:"bold"}}>You will recieve</Label>
     
      
      <Input  invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
        const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      setbuy_market_price(parseFloat(pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
        parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2)  ))
       if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
        setvalid(false)
        
       }
       else{
        setvalid(true)
        
        setbuy_market_amount(parseFloat(event.target.value)/parseFloat(buy_market_price))
       }
        
      }}></Input>
  
  
      <Button disabled={!valid} style={{marginTop:"1rem"}} className="btn btn-success" onClick={()=>{
        axios({
          method:"POST",
          url:"https://api.anteagle.tech/neworder",    
          headers:{
            "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
            "Content-Type": "application/json",
          
          },
          data: JSON.stringify({
            userid : localStorage.getItem("userid"),
            date: "2021-06-21",
            pair: pair,
            type : "Market",
            side : "BUY",
            price :buy_market_price,
            Amount :  parseFloat(buy_market_amount).toFixed(5),
            filled : "0.0",
            total : buy_market_price*buy_market_amount
          }),
        }).then(res=>{ })
          
        const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}`
                const tem = parseFloat(localStorage.getItem(`${curr}_Coins`)) - (parseFloat(buy_market_price)*parseFloat(buy_market_amount))
                // alert("You have "+localStorage.getItem(`${curr}_Coins`)+curr+' Coins')
           
                axios({
                  method:"post",
                  url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${tem}&userid=${localStorage.getItem("userid")}`,
                  headers:{
                    "Accept": "application/json",
                  }
                }).then(async res=>{
                  console.log(res.data);
                  await swal("Success","Order Submitted Successfully","success");
                  window.location.href = "/"
                })
      
      
        
       
      }}>Submit</Button>
      </Form>
  
  </Dialog>
  
  
  <Dialog open={show_sell} onClose={()=>{
    setshow_sell(false)
  }} >
    <Form style={{padding:"20px"}}>
    <CardHeader style={{fontWeight:"bold"}}>BALANCE - <br/>  {`${mobileswitch1 ? 'USDT' : 'INRD'}`} : {localStorage.getItem(`${mobileswitch1 ? 'USDT' : 'INRD'}_Coins`)} <br/> {pair.substring(0,pair.indexOf("/"))} : {localStorage.getItem( `${pair.substring(0,pair.indexOf("/"))}_Coins`)  } </CardHeader>
  
    <Label>Price  ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
              <Input  placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} value={pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2)} disabled style={{color:"black"}} onChange={(event)=>{
      setsell_market_amount(parseFloat(event.target.value))
    }}></Input>
    <Label>Amount ({`${pair.substr(0,pair.indexOf('/'))}`})</Label>
              <Input  placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={sell_market_amount} onChange={(event)=>{
      setsell_market_amount(parseFloat(event.target.value))
    }}></Input>

              <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
          const g = parseFloat(localStorage.getItem(`${pair.substr(0,pair.lastIndexOf('/'))}_Coins`)*value/100).toFixed(5) 
          setsell_market_amount(parseFloat(localStorage.getItem(`${pair.substr(0,pair.lastIndexOf('/'))}_Coins`)*value/100).toFixed(5))
          setsell_market_total(g*(pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
        parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2)))
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
        <Label>Total  ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
              <Input  invalid={!valid_s} value={sell_market_total} disabled={true} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf("/")+1,pair.length)}`} style={{color : "black"}}onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      const curdebt = `${pair.substr(0,pair.indexOf('/'))}_Debt`
     if((parseFloat(event.target.value)/parseFloat(sell_market_price))>localStorage.getItem(curr)){
      setvalid_s(false)
     }
     else{
      setvalid_s(true)
      // setsell_market_amount(parseFloat(event.target.value)/parseFloat(sell_market_price))
     }
      
    }}></Input>
        
      
      <Button disabled={!valid_s} style={{marginTop:"1rem"}} className="btn btn-dark" onClick={()=>{
        axios({
          method:"POST",
          url:"https://api.anteagle.tech/neworder",
          headers:{
            "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
            "Content-Type": "application/json",
            Authtoken:"sfsfsff"
          },
          data: JSON.stringify({
            userid : localStorage.getItem("userid"),
            date: "2021-06-21",
            pair: pair,
            type : "Market",
            side : "SELL",
            price : (pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
        parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2)),
            Amount : parseFloat(sell_market_amount),
            filled : "0.0",
            total :  parseFloat( (pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
        parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2) ) *sell_market_amount)
          }),
        }).then(res=>{})
        var tem= parseFloat(localStorage.getItem(`${pair.substr(0,pair.indexOf('/'))}_Coins`))-parseFloat(sell_market_amount)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${pair.substr(0,pair.indexOf('/')).toLowerCase()}?coins=${tem}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json"
        }
      }).then(async res=>{
        console.log(res.data);
        await swal("Success","Order Submitted Successfully","success");
        window.location.href = "/"
      })
      }}>Submit</Button>
      </Form>
  
  </Dialog>
  <CardText style={{fontSize:"1.5rem",fontWeight:"500",color:isDark? "white":"black",fontFamily:"Strasua"}}><img src={logo} style={{width:"60px",marginTop:"10px",marginLeft:"5px",background : isDark ? "white" : "none",borderRadius:isDark ? "100px" : "0px" }}></img> AntEagle <br/><p style={{fontSize:"1rem",marginLeft:"4.3rem",marginTop:"-1.5rem",fontFamily:"orbitron"}}> Exchange <span style={{color:"green"}}>Lite</span></p></CardText>

  <div class="container" style={{marginLeft:"18rem",marginBottom:"-1.2rem"}}>
    <input type="checkbox" id="theme-toggle" onChange={(e)=>{
      setDark(!isDark)
    }}/>
    <label for="theme-toggle">
     {isDark ?  <img height="30px" src={moon} style={{filter:"invert(1)"}}/> : <img height="40px" src={sun}/>}
    </label>
  </div>
  
  
  
  <button style={{textAlign:"center",width:"30%",marginLeft:"67%",marginTop:"-5.5rem",position:"absolute"}} onClick={()=>{
          localStorage.removeItem("jwt")
          window.location.href = "/"
        }} className={isDark ?"glow-on-hover" : "light-mode"}>Logout &nbsp;&nbsp;&nbsp; <img style={{height:"20px",filter:isDark ? "invert(1)" : "invert(0"}} src={logout}></img></button>
  
  <div style={{paddingTop:'2rem'}} className="container">
  <Row>
  
  
  <Col>
  
  
  </Col>
  
  
  
  <Col style={{textAlign:"center"}}>
    
  
  
  
    </Col>
  
  
  
  </Row>
  <Dialog open={mobileport} onClose={()=>{
  setmobile_port(false)
  }}>
  <DialogContent style={{paddingRight:"0.8rem",backgroundColor: isDark?"black":"white"}}>
    <h3 style={{color:"black",textAlign:"center",marginLeft:"-0.6rem",color: isDark? "white":"black" }}>YOUR ASSETS</h3>
  <Card  style={{display:parseFloat(localStorage.getItem("BTC_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
        
        <CardTitle style={{textAlign:"left"}} tag="h5"><img style={{width:"30px"}} src={logobtc}></img> BITCOIN<br/><div style={{marginBottom:"-2rem", color:isDark?"white":"black"}}>{localStorage.getItem("BTC_Coins")} BTC</div></CardTitle>
      </CardBody>
    </Card>
    <Card style={{display:parseFloat(localStorage.getItem("BNB_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"><img style={{width:"30px"}} src={bnb}/>    BNB <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("BNB_Coins")} BNB</div></CardTitle>
      </CardBody>
    </Card>
    <Card style={{display:parseFloat(localStorage.getItem("ETH_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
        
        <CardTitle style={{textAlign:"left"}}  tag="h5"><img style={{width:"30px"}} src={eth}/>    ETHEREUM <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ETH_Coins")} ETH</div></CardTitle>
      </CardBody>
    </Card>
    <Card style={{display:parseFloat(localStorage.getItem("USDT_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
        
        <CardTitle style={{textAlign:"left"}}  tag="h5"><img style={{width:"30px"}} src={usdt}/>    USDT <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("USDT_Coins")} USDT</div></CardTitle>
      </CardBody>
    </Card>
    <Card style={{display:parseFloat(localStorage.getItem("INRD_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={ruppee}/>    INRD <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("INRD_Coins")} INRD</div></CardTitle>
      </CardBody>
    </Card>
  
     <Card style={{display:parseFloat(localStorage.getItem("KSM_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={ksm}/>    KUSAMA <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("KSM_Coins")} KSM</div></CardTitle>
      </CardBody>
    </Card>  
    <Card style={{display:parseFloat(localStorage.getItem("ATA_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={ata}/>    AUTOMATA NETWORK <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ATA_Coins")} ATA</div></CardTitle>
      </CardBody>
    </Card>
  
     <Card style={{display:parseFloat(localStorage.getItem("MANA_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={mana}/>   DECENTRALAND  <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("MANA_Coins")} MANA</div></CardTitle>
      </CardBody>
    </Card>
  
     <Card style={{display:parseFloat(localStorage.getItem("DGB_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={dgb}/>    DIGIBYTE <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("DGB_Coins")} DGB</div></CardTitle>
      </CardBody>
    </Card>
  
     <Card style={{display:parseFloat(localStorage.getItem("FTM_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={ftm}/>    FANTOM <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("FTM_Coins")} FTM</div></CardTitle>
      </CardBody>
    </Card>
  
     <Card style={{display:parseFloat(localStorage.getItem("ALICE_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={alice}/>    MY NEIGHBOR ALICE <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ALICE_Coins")} ALICE</div></CardTitle>
      </CardBody>
    </Card>
  
     <Card style={{display:parseFloat(localStorage.getItem("GTC_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={gtc}/>    GITCOIN <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("GTC_Coins")} GTC</div></CardTitle>
      </CardBody>
    </Card>
  
     <Card style={{display:parseFloat(localStorage.getItem("MATIC_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={matic}/>    MATIC NETWORK <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("MATIC_Coins")} MATIC</div></CardTitle>
      </CardBody>
    </Card>
  
     <Card style={{display:parseFloat(localStorage.getItem("AXS_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={axs}/>    AXIE INFINITY <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("AXS_Coins")} AXS</div></CardTitle>
      </CardBody>
    </Card>
  
     <Card style={{display:parseFloat(localStorage.getItem("FTT_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={ftt}/>    FTX TOKEN <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("FTT_Coins")} FTT</div></CardTitle>
      </CardBody>
    </Card>
  
     <Card style={{display:parseFloat(localStorage.getItem("SOL_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={sol}/>    SOLANA <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("SOL_Coins")} SOL</div></CardTitle>
      </CardBody>
    </Card>
  
     <Card style={{display:parseFloat(localStorage.getItem("RUNE_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={rune}/>   THORCHAIN <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("RUNE_Coins")} RUNE</div></CardTitle>
      </CardBody>
    </Card>
  
     <Card style={{display:parseFloat(localStorage.getItem("UNI_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={uni}/>    UNISWAP <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("UNI_Coins")} UNI</div></CardTitle>
      </CardBody>
    </Card>  
  
    <Card style={{display:parseFloat(localStorage.getItem("DOT_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={dot}/>    POLKADOT <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("DOT_Coins")} DOT</div></CardTitle>
      </CardBody>
    </Card>
  
     <Card style={{display:parseFloat(localStorage.getItem("VET_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={vet}/>    VECHAIN <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("VET_Coins")} VET</div></CardTitle>
      </CardBody>
    </Card>
  
     <Card style={{display:parseFloat(localStorage.getItem("TFUEL_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={tfuel}/>    THETA FUEL <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("TFUEL_Coins")} TFUEL</div></CardTitle>
      </CardBody>
    </Card>  
  
    <Card style={{display:parseFloat(localStorage.getItem("GRT_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={grt}/>    THE GRAPH <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("GRT_Coins")} GRT</div></CardTitle>
      </CardBody>
    </Card>
  
     <Card style={{display:parseFloat(localStorage.getItem("ADA_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={ada}/>    CARDANO <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ADA_Coins")} ADA</div></CardTitle>
      </CardBody>
    </Card>  
  
    <Card style={{display:parseFloat(localStorage.getItem("FIL_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={fil}/>    FILECOIN <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("FIL_Coins")} FIL</div></CardTitle>
      </CardBody>
    </Card>
  
    <Card style={{display:parseFloat(localStorage.getItem("LINK_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={link}/>    CHAINLINK <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("LINK_Coins")} LINK</div></CardTitle>
      </CardBody>
    </Card>
  
    <Card style={{display:parseFloat(localStorage.getItem("LUNA_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={luna}/>    TERRA <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("LUNA_Coins")} LUNA</div></CardTitle>
      </CardBody>
    </Card>
  
    <Card style={{display:parseFloat(localStorage.getItem("THETA_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={theta}/>    THETA NETWORK <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("THETA_Coins")} THETA</div></CardTitle>
      </CardBody>
    </Card>  
      

    <Card style={{display:parseFloat(localStorage.getItem("XRP_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={xrp}/>    XRP <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("XRP_Coins")} XRP</div></CardTitle>
      </CardBody>
    </Card>  

    <Card style={{display:parseFloat(localStorage.getItem("DOGE_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={doge}/>    DOGECOIN <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("DOGE_Coins")} DOGE</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("USDC_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={usdc}/>    USD COIN <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("USDC_Coins")} USDC</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("AVAX_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={avax}/>    AVALANCHE <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("AVAX_Coins")} AVAX</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("BUSD_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={busd}/>    BINANCE USD <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("BUSD_Coins")} BUSD</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("LTC_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={ltc}/>    LITECOIN <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("LTC_Coins")} XRP</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("BCH_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={bch}/>    BITCOIN CASH <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("BCH_Coins")} XRP</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("ALGO_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={algo}/>    ALGORAND <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ALGO_Coins")} ALGO</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("ATOM_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={atom}/>    COSMOS NETWORK <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ATOM_Coins")} ATOM</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("ICP_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={icp}/>    INTERNET COMPUTER <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ICP_Coins")} ICP</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("TRX_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={trx}/>    TRON <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("TRX_Coins")} TRX</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("XLM_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={xlm}/>    STELLAR LUMENS <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("XLM_Coins")} XLM</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("ETC_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={etc}/>    ETHEREUM CLASSIC <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ETC_Coins")} ETC</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("XTZ_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={xtz}/>    TEZOS <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("XTZ_Coins")} XTZ</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("EOS_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={eos}/>    EOS <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("EOS_Coins")} EOS</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("CAKE_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={cake}/>    PANCAKESWAP <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("CAKE_Coins")} CAKE</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("EGLD_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={egld}/>    ELROND <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("EGLD_Coins")} EGLD</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("XMR_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={xmr}/>    MONERO <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("XMR_Coins")} XMR</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("AAVE_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={aave}/>    AAVE PROTOCOL <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("AAVE_Coins")} AAVE</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("QNT_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={qnt}/>    QUANT <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("QNT_Coins")} QNT</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("XEC_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={xec}/>    eCASH <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("XEC_Coins")} XEC</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("HBAR_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={hbar}/>    HEDERA HASHGRAPH <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("HBAR_Coins")} HBAR</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("SHIB_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={shib}/>    SHIBA INU <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("SHIB_Coins")} SHIB</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("NEAR_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={near}/>    NEAR PROTOCOL <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("NEAR_Coins")} NEAR</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("NEO_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={neo}/>    NEO <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("NEO_Coins")} NEO</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("KLAY_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={klay}/>    KLAYTN <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("KLAY_Coins")} KLAY</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("WAVES_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={waves}/>    WAVES <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("WAVES_Coins")} WAVES</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("BTT_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={btt}/>    BitTorrent <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("BTT_Coins")} BTT</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("MKR_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={mkr}/>    MakerDAO <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("MKR_Coins")} MKR</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("SUSHI_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={sushi}/>    SUSHISWAP <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("SUSHI_Coins")} SUSHI</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("AR_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={ar}/>    ARWEAVE <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("AR_Coins")} AR</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("SNX_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={snx}/>    SYNTHETIX <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("SNX_Coins")} SNX</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("COMP_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={comp}/>    COMPOUND <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("COMP_Coins")} COMP</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("DASH_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={dash}/>    DASH <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("DASH_Coins")} DASH</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("DCR_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={dcr}/>    DECRED <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("DCR_Coins")} DCR</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("HNT_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={hnt}/>    HELIUM <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("HNT_Coins")} HNT</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("CHZ_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={chz}/>    CHILIZ <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("CHZ_Coins")} CHZ</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("ONE_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={one}/>    HARMONY <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ONE_Coins")} ONE</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("HOT_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={hot}/>    HOLOCHAIN <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("HOT_Coins")} HOT</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("XEM_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={xem}/>    NEM <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("XEM_Coins")} XEM</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("ZEC_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={zec}/>    ZCASH <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ZEC_Coins")} ZEC</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("IOST_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={iost}/>   IOST <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("IOST_Coins")} IOST</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("ENJ_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={enj}/>    ENJIN COIN <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ENJ_Coins")} ENJ</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("STX_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={stx}/>    STACKS <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("STX_Coins")} STX</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("TUSD_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={tusd}/>    TrueUSD <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("TUSD_Coins")} TUSD</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("ZIL_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={zil}/>    ZILLIQA <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ZIL_Coins")} ZIL</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("HNT_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={hnt}/>    HELIUM <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("HNT_Coins")} HNT</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("FLOW_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={flow}/>    FLOW <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("FLOW_Coins")} FLOW</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("QTUM_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={qtum}/>    QTUM <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("QTUM_Coins")} QTUM</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("MINA_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={mina}/>    MINA <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("MINA_Coins")} MINA</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("ICX_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={icx}/>   ICON <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ICX_Coins")} ICX</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("OMG_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={omg}/>    OmiseGO <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("OMG_Coins")} OMG</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("BTG_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={btg}/>    BITCOIN GOLD <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("BTG_Coins")} BTG</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("BAT_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={bat}/>    BASIC ATTENTION TOKEN <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("BAT_Coins")} BAT</div></CardTitle>
      </CardBody>
    </Card>
    
    <Card style={{display:parseFloat(localStorage.getItem("AUDIO_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={audio}/>    AUDIUS <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("AUDIO_Coins")} AUDIO</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("ZEN_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={zen}/>    HORIZEN <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ZEN_Coins")} ZEN</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("RVN_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={rvn}/>    RAVENCOIN <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("RVN_Coins")} RVN</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("MDX_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={mdx}/>    MDEX <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("MDX_Coins")} MDX</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("BNT_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={bnt}/>    BANCOR <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("BNT_Coins")} BNT</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("ZRX_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={zrx}/>    0X PROTOCOL <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ZRX_Coins")} ZRX</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("SC_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={sc}/>    SIACOIN <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("SC_Coins")} SC</div></CardTitle>
      </CardBody>
    </Card>
    <Card style={{display:parseFloat(localStorage.getItem("ONT_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={ont}/>    ONTOLOGY <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ONT_Coins")} ONT</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("RAY_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={ray}/>    RAYDIUM <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("RAY_Coins")} RAY</div></CardTitle>
      </CardBody>
    </Card>
    
    <Card style={{display:parseFloat(localStorage.getItem("DYDX_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={dydx}/>    dYdX <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("DYDX_Coins")} DYDX</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("PERP_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={perp}/>    PERPETUAL PROTOCOL <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("PERP_Coins")} PERP</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("GALA_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={gala}/>    GALA <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("GALA_Coins")} GALA</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("ANKR_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={ankr}/>    ANKR NETWORK <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ANKR_Coins")} ANKR</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("NANO_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={nano}/>    NANO <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("NANO_Coins")} NANO</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("CELO_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={celo}/>    CELO <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("CELO_Coins")} CELO</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("UMA_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={uma}/>    UMA <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("UMA_Coins")} UMA</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("COIN98_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={c98}/>    COIN98 <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("COIN98_Coins")} COIN98</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("CELR_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={celr}/>    CELER NETWORK <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("CELR_Coins")} CELR</div></CardTitle>
      </CardBody>
    </Card>
    
    <Card style={{display:parseFloat(localStorage.getItem("SAND_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={sand}/>    THE SANDBOX <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("SAND_Coins")} SAND</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("POLY_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={poly}/>    POLYMATH <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("POLY_Coins")} POLY</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("FET_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={fet}/>    FETCH.AI <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("FET_Coins")} FET</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("1INCH_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={_1inch}/>    1INCH <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("1INCH_Coins")} 1INCH</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("LRC_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={lrc}/>    LOOPRING <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("LRC_Coins")} LRC</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("KAVA_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={kava}/>    KAVA <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("KAVA_Coins")} KAVA</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("WRX_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={wrx}/>    WAZIRX <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("WRX_Coins")} WRX</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("RSR_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={rsr}/>    RESERVE RIGHTS <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("RSR_Coins")} RSR</div></CardTitle>
      </CardBody>
    </Card>

  
    <Card style={{display:parseFloat(localStorage.getItem("ANTEAG_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px',background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)", color:isDark?"white":"black"}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"left"}}  tag="h5"> <img style={{width:"30px"}} src={logo} style={{backgroundColor:"white",borderRadius:"20px"}}/>    ANTEAG <div style={{marginBottom:"-2rem",color:isDark?"white":"black"}}>{localStorage.getItem("ANTEAG_Coins")} ANTEAG</div></CardTitle>
      </CardBody>
    </Card>
       
  
  </DialogContent>
  </Dialog>
  <div class="tabs" style={{width:"95%",marginLeft:"5px",paddingBottom:"0.6rem",marginBottom:"0.7rem",background:" rgb(0,95,255)",
  background: !isDark ? " linear-gradient(90deg,rgba(0,95,255,1) 0%, rgba(255,255,255,1) 4%, rgba(255,255,255,1) 96%,rgba(0,95,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255,1) 0%, rgba(61,61,61,1) 4%, rgb(61, 61, 61,1) 96%, rgba(255,0,255,1) 100%)",borderRadius:"12px"}}>
  
  
  
  
  <CardTitle style={{fontWeight:"600",textAlign:"center",fontSize:"1.2rem",paddingTop:"1rem",marginTop:"0.7rem",marginRight:"0.5rem",color : isDark?"white":"black"}} onClick={()=>{
     
    setmobile_port(true)
    setport(true)
  }}>
  TOTAL PORTFOLIO : <span style={{color : "green"}}>
    ₹ {( (parseFloat(localStorage.getItem("RSR_Coins"))*parseFloat(liveprice_RSR)*conversion)+(parseFloat(localStorage.getItem("WRX_Coins"))*parseFloat(liveprice_WRX)*conversion)+(parseFloat(localStorage.getItem("KAVA_Coins"))*parseFloat(liveprice_KAVA)*conversion)+(parseFloat(localStorage.getItem("LRC_Coins"))*parseFloat(liveprice_LRC)*conversion)+(parseFloat(localStorage.getItem("1INCH_Coins"))*parseFloat(liveprice_1INCH)*conversion)+(parseFloat(localStorage.getItem("FET_Coins"))*parseFloat(liveprice_FET)*conversion)+(parseFloat(localStorage.getItem("POLY_Coins"))*parseFloat(liveprice_POLY)*conversion)+(parseFloat(localStorage.getItem("SAND_Coins"))*parseFloat(liveprice_SAND)*conversion)+(parseFloat(localStorage.getItem("CELR_Coins"))*parseFloat(liveprice_CELR)*conversion)+(parseFloat(localStorage.getItem("C98_Coins"))*parseFloat(liveprice_C98)*conversion)+(parseFloat(localStorage.getItem("UMA_Coins"))*parseFloat(liveprice_UMA)*conversion)+(parseFloat(localStorage.getItem("CELO_Coins"))*parseFloat(liveprice_CELO)*conversion)+(parseFloat(localStorage.getItem("NANO_Coins"))*parseFloat(liveprice_NANO)*conversion)+(parseFloat(localStorage.getItem("ANKR_Coins"))*parseFloat(liveprice_ANKR)*conversion)+(parseFloat(localStorage.getItem("GALA_Coins"))*parseFloat(liveprice_GALA)*conversion)+(parseFloat(localStorage.getItem("PERP_Coins"))*parseFloat(liveprice_PERP)*conversion)+(parseFloat(localStorage.getItem("DYDX_Coins"))*parseFloat(liveprice_DYDX)*conversion)+(parseFloat(localStorage.getItem("RAY_Coins"))*parseFloat(liveprice_RAY)*conversion)+(parseFloat(localStorage.getItem("ONT_Coins"))*parseFloat(liveprice_ONT)*conversion)+(parseFloat(localStorage.getItem("SC_Coins"))*parseFloat(liveprice_SC)*conversion)+(parseFloat(localStorage.getItem("ZRX_Coins"))*parseFloat(liveprice_ZRX)*conversion)+(parseFloat(localStorage.getItem("BNT_Coins"))*parseFloat(liveprice_BNT)*conversion)+(parseFloat(localStorage.getItem("MDX_Coins"))*parseFloat(liveprice_MDX)*conversion)+(parseFloat(localStorage.getItem("RVN_Coins"))*parseFloat(liveprice_RVN)*conversion)+(parseFloat(localStorage.getItem("ZEN_Coins"))*parseFloat(liveprice_ZEN)*conversion)+(parseFloat(localStorage.getItem("AUDIO_Coins"))*parseFloat(liveprice_AUDIO)*conversion)+(parseFloat(localStorage.getItem("BAT_Coins"))*parseFloat(liveprice_BAT)*conversion)+(parseFloat(localStorage.getItem("BTG_Coins"))*parseFloat(liveprice_BTG)*conversion)+(parseFloat(localStorage.getItem("OMG_Coins"))*parseFloat(liveprice_OMG)*conversion)+(parseFloat(localStorage.getItem("ICX_Coins"))*parseFloat(liveprice_ICX)*conversion)+(parseFloat(localStorage.getItem("MINA_Coins"))*parseFloat(liveprice_MINA)*conversion)+(parseFloat(localStorage.getItem("QTUM_Coins"))*parseFloat(liveprice_QTUM)*conversion)+(parseFloat(localStorage.getItem("FLOW_Coins"))*parseFloat(liveprice_FLOW)*conversion)+(parseFloat(localStorage.getItem("ZIL_Coins"))*parseFloat(liveprice_ZIL)*conversion)+(parseFloat(localStorage.getItem("TUSD_Coins"))*parseFloat(liveprice_TUSD)*conversion)+(parseFloat(localStorage.getItem("STX_Coins"))*parseFloat(liveprice_STX)*conversion)+(parseFloat(localStorage.getItem("ENJ_Coins"))*parseFloat(liveprice_ENJ)*conversion)+(parseFloat(localStorage.getItem("IOST_Coins"))*parseFloat(liveprice_IOST)*conversion)+(parseFloat(localStorage.getItem("ZEC_Coins"))*parseFloat(liveprice_ZEC)*conversion)+(parseFloat(localStorage.getItem("XEM_Coins"))*parseFloat(liveprice_XEM)*conversion)+(parseFloat(localStorage.getItem("HOT_Coins"))*parseFloat(liveprice_HOT)*conversion)+(parseFloat(localStorage.getItem("ONE_Coins"))*parseFloat(liveprice_ONE)*conversion)+(parseFloat(localStorage.getItem("CHZ_Coins"))*parseFloat(liveprice_CHZ)*conversion)+(parseFloat(localStorage.getItem("HNT_Coins"))*parseFloat(liveprice_HNT)*conversion)+(parseFloat(localStorage.getItem("DCR_Coins"))*parseFloat(liveprice_DCR)*conversion)+(parseFloat(localStorage.getItem("DASH_Coins"))*parseFloat(liveprice_DASH)*conversion)+(parseFloat(localStorage.getItem("COMP_Coins"))*parseFloat(liveprice_COMP)*conversion)+(parseFloat(localStorage.getItem("SNX_Coins"))*parseFloat(liveprice_SNX)*conversion)+(parseFloat(localStorage.getItem("AR_Coins"))*parseFloat(liveprice_AR)*conversion)+(parseFloat(localStorage.getItem("SUSHI_Coins"))*parseFloat(liveprice_SUSHI)*conversion)+(parseFloat(localStorage.getItem("MKR_Coins"))*parseFloat(liveprice_MKR)*conversion)+(parseFloat(localStorage.getItem("BTT_Coins"))*parseFloat(liveprice_BTT)*conversion)+(parseFloat(localStorage.getItem("WAVES_Coins"))*parseFloat(liveprice_WAVES)*conversion)+(parseFloat(localStorage.getItem("KLAY_Coins"))*parseFloat(liveprice_KLAY)*conversion)+(parseFloat(localStorage.getItem("NEO_Coins"))*parseFloat(liveprice_NEO)*conversion)+(parseFloat(localStorage.getItem("NEAR_Coins"))*parseFloat(liveprice_NEAR)*conversion)+(parseFloat(localStorage.getItem("SHIB_Coins"))*parseFloat(liveprice_SHIB)*conversion)+(parseFloat(localStorage.getItem("HBAR_Coins"))*parseFloat(liveprice_HBAR)*conversion)+(parseFloat(localStorage.getItem("XEC_Coins"))*parseFloat(liveprice_XEC)*conversion)+(parseFloat(localStorage.getItem("QNT_Coins"))*parseFloat(liveprice_QNT)*conversion)+(parseFloat(localStorage.getItem("AAVE_Coins"))*parseFloat(liveprice_AAVE)*conversion)+(parseFloat(localStorage.getItem("XMR_Coins"))*parseFloat(liveprice_XMR)*conversion)+(parseFloat(localStorage.getItem("EGLD_Coins"))*parseFloat(liveprice_EGLD)*conversion)+(parseFloat(localStorage.getItem("CAKE_Coins"))*parseFloat(liveprice_CAKE)*conversion)+(parseFloat(localStorage.getItem("EOS_Coins"))*parseFloat(liveprice_EOS)*conversion)+(parseFloat(localStorage.getItem("XTZ_Coins"))*parseFloat(liveprice_XTZ)*conversion)+(parseFloat(localStorage.getItem("ETC_Coins"))*parseFloat(liveprice_ETC)*conversion)+(parseFloat(localStorage.getItem("XLM_Coins"))*parseFloat(liveprice_XLM)*conversion)+(parseFloat(localStorage.getItem("TRX_Coins"))*parseFloat(liveprice_TRX)*conversion)+(parseFloat(localStorage.getItem("ICP_Coins"))*parseFloat(liveprice_ICP)*conversion)+(parseFloat(localStorage.getItem("ATOM_Coins"))*parseFloat(liveprice_ATOM)*conversion)+(parseFloat(localStorage.getItem("ALGO_Coins"))*parseFloat(liveprice_ALGO)*conversion)+(parseFloat(localStorage.getItem("BCH_Coins"))*parseFloat(liveprice_BCH)*conversion)+(parseFloat(localStorage.getItem("LTC_Coins"))*parseFloat(liveprice_LTC)*conversion)+(parseFloat(localStorage.getItem("BUSD_Coins"))*parseFloat(liveprice_BUSD)*conversion)+(parseFloat(localStorage.getItem("AVAX_Coins"))*parseFloat(liveprice_AVAX)*conversion)+(parseFloat(localStorage.getItem("USDC_Coins"))*parseFloat(liveprice_USDC)*conversion)+(parseFloat(localStorage.getItem("DOGE_Coins"))*parseFloat(liveprice_DOGE)*conversion)+(parseFloat(localStorage.getItem("XRP_Coins"))*parseFloat(liveprice_XRP)*conversion)+(parseFloat(localStorage.getItem("THETA_Coins"))*parseFloat(liveprice_THETA)*conversion)+(parseFloat(localStorage.getItem("LUNA_Coins"))*parseFloat(liveprice_LUNA)*conversion)+(parseFloat(localStorage.getItem("LINK_Coins"))*parseFloat(liveprice_LINK)*conversion)+(parseFloat(localStorage.getItem("FIL_Coins"))*parseFloat(liveprice_FIL)*conversion)+(parseFloat(localStorage.getItem("ADA_Coins"))*parseFloat(liveprice_ADA)*conversion)+(parseFloat(localStorage.getItem("GRT_Coins"))*parseFloat(liveprice_GRT)*conversion)+(parseFloat(localStorage.getItem("TFUEL_Coins"))*parseFloat(liveprice_TFUEL)*conversion)+(parseFloat(localStorage.getItem("VET_Coins"))*parseFloat(liveprice_VET)*conversion)+(parseFloat(localStorage.getItem("DOT_Coins"))*parseFloat(liveprice_DOT)*conversion)+(parseFloat(localStorage.getItem("UNI_Coins"))*parseFloat(liveprice_UNI)*conversion)+(parseFloat(localStorage.getItem("RUNE_Coins"))*parseFloat(liveprice_RUNE)*conversion)+(parseFloat(localStorage.getItem("SOL_Coins"))*parseFloat(liveprice_SOL)*conversion)+(parseFloat(localStorage.getItem("FTT_Coins"))*parseFloat(liveprice_FTT)*conversion)+(parseFloat(localStorage.getItem("AXS_Coins"))*parseFloat(liveprice_AXS)*conversion)+(parseFloat(localStorage.getItem("MATIC_Coins"))*parseFloat(liveprice_MATIC)*conversion)+(parseFloat(localStorage.getItem("GTC_Coins"))*parseFloat(liveprice_GTC)*conversion)+(parseFloat(localStorage.getItem("ALICE_Coins"))*parseFloat(liveprice_ALICE)*conversion)+(parseFloat(localStorage.getItem("FTM_Coins"))*parseFloat(liveprice_FTM)*conversion)+(parseFloat(localStorage.getItem("MANA_Coins"))*parseFloat(liveprice_MANA)*conversion)+(parseFloat(localStorage.getItem("ATA_Coins"))*parseFloat(liveprice_ATA)*conversion)+(parseFloat(localStorage.getItem("KSM_Coins"))*parseFloat(liveprice_KSM)*conversion) +(parseFloat(localStorage.getItem("BTC_Coins"))*parseFloat(liveprice_BTC)*conversion)+(parseFloat(localStorage.getItem("BNB_Coins"))*parseFloat(liveprice_BNB)*conversion)+(parseFloat(localStorage.getItem("ETH_Coins"))*parseFloat(liveprice_ETH)*conversion)+parseFloat(localStorage.getItem("INRD_Coins"))+(parseFloat(localStorage.getItem("USDT_Coins"))*conversion)).toFixed(2)}
    </span>
  </CardTitle>
  
  
  <span>
  <CardText style={{fontSize:"1.2rem",fontWeight:"500",marginRight:"1.2rem"}}>
  <span style={{marginLeft:"1.5rem"}}>
  <span style={{color:"green", fontWeight:"bold"}}>₹</span > {"   "}<span style={{color : isDark?"white":"black"}}>INRD : </span><span style={{color:"green"}}>{localStorage.getItem("INRD_Coins")}</span>
   </span> 
   <br/>
  
  <span style={{marginLeft:"1.5rem"}}>
  <span style={{color:"green", fontWeight:"bold"}}>$</span> {"   "}<span style={{color : isDark?"white":"black"}}>USDT : </span><span style={{color:"green"}}>{localStorage.getItem("USDT_Coins")}</span>
  </span>
  
  {"              "}
  {/* Other Coins : {((parseFloat(localStorage.getItem("THETA_Coins")))+(parseFloat(localStorage.getItem("LUNA_Coins")))+(parseFloat(localStorage.getItem("LINK_Coins")))+(parseFloat(localStorage.getItem("FIL_Coins")))+(parseFloat(localStorage.getItem("ADA_Coins")))+(parseFloat(localStorage.getItem("GRT_Coins")))+(parseFloat(localStorage.getItem("TFUEL_Coins")))+(parseFloat(localStorage.getItem("VET_Coins")))+(parseFloat(localStorage.getItem("DOT_Coins")))+(parseFloat(localStorage.getItem("UNI_Coins")))+(parseFloat(localStorage.getItem("RUNE_Coins")))+(parseFloat(localStorage.getItem("SOL_Coins")))+(parseFloat(localStorage.getItem("FTT_Coins")))+(parseFloat(localStorage.getItem("AXS_Coins")))+(parseFloat(localStorage.getItem("MATIC_Coins")))+(parseFloat(localStorage.getItem("GTC_Coins")))+(parseFloat(localStorage.getItem("ALICE_Coins")))+(parseFloat(localStorage.getItem("FTM_Coins")))+(parseFloat(localStorage.getItem("MANA_Coins")))+(parseFloat(localStorage.getItem("ATA_Coins")))+(parseFloat(localStorage.getItem("KSM_Coins"))) +(parseFloat(localStorage.getItem("BTC_Coins")))+(parseFloat(localStorage.getItem("BNB_Coins")))+(parseFloat(localStorage.getItem("ETH_Coins")))).toFixed(2)} */}
  </CardText>
  </span>
  
  
  
  
  
  
  </div>
  
  </div>
  <div  style={{marginLeft:"15px",width:"90%",paddingTop:'20px',marginTop:"0.8rem",paddingBottom:"0.8rem",borderRadius:"none"}}> 
  <CardText style={{fontSize:"1.1rem",marginTop:".4rem",textAlign:"center",fontWeight:"500",color:isDark? "white":"black"}} >TRADING CURRENCY </CardText>
  <div class="switch" style={{marginTop:"-0.7rem",textAlign:"center"}} >
    <input type="checkbox" onChange={()=>{
      setmobileswitch1(!mobileswitch1)
    }}/> <label style={{color:isDark? "white":"black"}} > <i > INRD/USDT</i></label>
  </div> 
  <article class="leaderboard" style={{textAlign:"left"}}>
  
  <main class="leaderboard__profiles" style={{margin:"1rem 1rem 1rem 1.3rem" }}>
   
    
     <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
        
        
        <span onClick={()=>{
      setopen_btc(true)
        seti(1)
    }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={logobtc}  alt="Mark Zuckerberg"   /> Bitcoin(BTC) </h4></span>
        
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(BTC_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_BTC : (parseFloat(liveprice_BTC*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(BTC_per) >0 ? 'green' : 'red'}}> {BTC_per}%</span></span></h5>
        <Dialog  open={open_btc} style={{width:"25rem"}} onClose={()=>{setopen_btc(false)}}>
     
      <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                   <img src={logobtc} width="12%"/> 
        <span  style={{color : parseFloat(BTC_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_BTC : (parseFloat(liveprice_BTC*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(BTC_per) >0 ? 'green' : 'red'}}>{BTC_per}%</span></span><br/>
        <canvas style={{marginBottom:"0.8rem",height:"10px"}} id="btcChart" ref={refHandler_BTC}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
          const g = mobileswitch1 ? liveprice_BTC : (parseFloat(liveprice_BTC*conversion).toFixed(2))
          setlive(g)
          setpair(`BTC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          
          setshow_buy(true)
         
        }} >Buy</Button>
        <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
          const g = mobileswitch1 ? liveprice_BTC : (parseFloat(liveprice_BTC*conversion).toFixed(2))
          setlive(g)
          setpair(`BTC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
      </div> 
  
      <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
      <span class="leaderboard__name"  onClick={()=>{
     
     setopen_eth(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={eth}  alt="Mark Zuckerberg"  /> Ethereum (ETH) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(ETH_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ETH : (parseFloat(liveprice_ETH*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(ETH_per) >0 ? 'green' : 'red'}}> {ETH_per}%</span></span></h5>
       
        <Dialog  open={open_eth} style={{width:"25rem"}} onClose={()=>{setopen_eth(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={eth} width="8%"/> 
       <span  style={{color : parseFloat(ETH_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_ETH : (parseFloat(liveprice_ETH*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(ETH_per) >0 ? 'green' : 'red'}}>{ETH_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_ETH}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ETH : (parseFloat(liveprice_ETH*conversion).toFixed(2))
         setlive(g)
         setpair(`ETH/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ETH : (parseFloat(liveprice_ETH*conversion).toFixed(2))
         setlive(g)
         setpair(`ETH/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
      </div> 
      
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_BNB(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={bnb}  alt="Mark Zuckerberg"   /> Binance (BNB) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(BNB_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_BNB : (parseFloat(liveprice_BNB*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(BNB_per) >0 ? 'green' : 'red'}}> {BNB_per}%</span></span></h5>
  
        <Dialog  open={open_BNB} style={{width:"25rem"}} onClose={()=>{setopen_BNB(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={bnb} width="12%"/> 
       <span  style={{color : parseFloat(BNB_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_BNB : (parseFloat(liveprice_BNB*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(BNB_per) >0 ? 'green' : 'red'}}>{BNB_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_BNB: (parseFloat(liveprice_BNB*conversion).toFixed(2))
         setlive(g)
         setpair(`BNB/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_BNB : (parseFloat(liveprice_BNB*conversion).toFixed(2))
         setlive(g)
         setpair(`BNB/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
      </div> 
  
      <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_LINK(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={link}  alt="Mark Zuckerberg"   /> Chainlink (LINK) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(LINK_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_LINK : (parseFloat(liveprice_LINK*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(LINK_per) >0 ? 'green' : 'red'}}> {LINK_per}%</span></span></h5>
  
        <Dialog  open={open_LINK} style={{width:"25rem"}} onClose={()=>{setopen_LINK(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={link} width="12%"/> 
       <span  style={{color : parseFloat(LINK_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_LINK : (parseFloat(liveprice_LINK*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(LINK_per) >0 ? 'green' : 'red'}}>{LINK_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_LINK: (parseFloat(liveprice_LINK*conversion).toFixed(2))
         setlive(g)
         setpair(`LINK/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_LINK : (parseFloat(liveprice_LINK*conversion).toFixed(2))
         setlive(g)
         setpair(`LINK/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_LUNA(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={luna}  alt="Mark Zuckerberg"   /> Terra (LUNA) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(LUNA_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_LUNA : (parseFloat(liveprice_LUNA*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(LUNA_per) >0 ? 'green' : 'red'}}> {LUNA_per}%</span></span></h5>
  
        <Dialog  open={open_LUNA} style={{width:"25rem"}} onClose={()=>{setopen_LUNA(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={luna} width="12%"/> 
       <span  style={{color : parseFloat(LUNA_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_LUNA : (parseFloat(liveprice_LUNA*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(LUNA_per) >0 ? 'green' : 'red'}}>{LUNA_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_LUNA: (parseFloat(liveprice_LUNA*conversion).toFixed(2))
         setlive(g)
         setpair(`LUNA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_LUNA : (parseFloat(liveprice_LUNA*conversion).toFixed(2))
         setlive(g)
         setpair(`LUNA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_THETA(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={theta}  alt="Mark Zuckerberg"   /> THETA (THETA) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(THETA_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_THETA : (parseFloat(liveprice_THETA*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(THETA_per) >0 ? 'green' : 'red'}}> {THETA_per}%</span></span></h5>
  
        <Dialog  open={open_THETA} style={{width:"25rem"}} onClose={()=>{setopen_THETA(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={theta} width="12%"/> 
       <span  style={{color : parseFloat(THETA_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_THETA : (parseFloat(liveprice_THETA*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(THETA_per) >0 ? 'green' : 'red'}}>{THETA_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_THETA: (parseFloat(liveprice_THETA*conversion).toFixed(2))
         setlive(g)
         setpair(`THETA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_THETA : (parseFloat(liveprice_THETA*conversion).toFixed(2))
         setlive(g)
         setpair(`THETA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_GRT(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={grt}  alt="Mark Zuckerberg"   /> GRAPH (GRT) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(GRT_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_GRT : (parseFloat(liveprice_GRT*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(GRT_per) >0 ? 'green' : 'red'}}> {GRT_per}%</span></span></h5>
  
        <Dialog  open={open_GRT} style={{width:"25rem"}} onClose={()=>{setopen_GRT(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={grt} width="12%"/> 
       <span  style={{color : parseFloat(GRT_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_GRT : (parseFloat(liveprice_GRT*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(GRT_per) >0 ? 'green' : 'red'}}>{GRT_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_GRT: (parseFloat(liveprice_GRT*conversion).toFixed(2))
         setlive(g)
         setpair(`GRT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_GRT : (parseFloat(liveprice_GRT*conversion).toFixed(2))
         setlive(g)
         setpair(`GRT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div> 
  
        <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_TFUEL(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={tfuel}  alt="Mark Zuckerberg"   /> THETA FUEL (TFUEL) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(TFUEL_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_TFUEL : (parseFloat(liveprice_TFUEL*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(TFUEL_per) >0 ? 'green' : 'red'}}> {TFUEL_per}%</span></span></h5>
  
        <Dialog  open={open_TFUEL} style={{width:"25rem"}} onClose={()=>{setopen_TFUEL(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={tfuel} width="12%"/> 
       <span  style={{color : parseFloat(TFUEL_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_TFUEL : (parseFloat(liveprice_TFUEL*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(TFUEL_per) >0 ? 'green' : 'red'}}>{TFUEL_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_TFUEL: (parseFloat(liveprice_TFUEL*conversion).toFixed(2))
         setlive(g)
         setpair(`TFUEL/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_TFUEL : (parseFloat(liveprice_TFUEL*conversion).toFixed(2))
         setlive(g)
         setpair(`TFUEL/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
       
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_KSM(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={ksm}  alt="Mark Zuckerberg"   /> KUSAMA (KSM) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(KSM_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_KSM : (parseFloat(liveprice_KSM*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(KSM_per) >0 ? 'green' : 'red'}}> {KSM_per}%</span></span></h5>
  
        <Dialog  open={open_KSM} style={{width:"25rem"}} onClose={()=>{setopen_KSM(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={ksm} width="12%"/> 
       <span  style={{color : parseFloat(KSM_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_KSM : (parseFloat(liveprice_KSM*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(KSM_per) >0 ? 'green' : 'red'}}>{KSM_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_KSM: (parseFloat(liveprice_KSM*conversion).toFixed(2))
         setlive(g)
         setpair(`KSM/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_KSM : (parseFloat(liveprice_KSM*conversion).toFixed(2))
         setlive(g)
         setpair(`KSM/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_ADA(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={ada}  alt="Mark Zuckerberg"   /> Cardano (ADA) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(ADA_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ADA : (parseFloat(liveprice_ADA*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(ADA_per) >0 ? 'green' : 'red'}}> {ADA_per}%</span></span></h5>
  
        <Dialog  open={open_ADA} style={{width:"25rem"}} onClose={()=>{setopen_ADA(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={ada} width="12%"/> 
       <span  style={{color : parseFloat(ADA_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_ADA : (parseFloat(liveprice_ADA*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(ADA_per) >0 ? 'green' : 'red'}}>{ADA_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ADA: (parseFloat(liveprice_ADA*conversion).toFixed(2))
         setlive(g)
         setpair(`ADA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ADA : (parseFloat(liveprice_ADA*conversion).toFixed(2))
         setlive(g)
         setpair(`ADA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_VET(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={vet}  alt="Mark Zuckerberg"   /> VeChain (VET) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(VET_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_VET : (parseFloat(liveprice_VET*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(VET_per) >0 ? 'green' : 'red'}}> {VET_per}%</span></span></h5>
  
        <Dialog  open={open_VET} style={{width:"25rem"}} onClose={()=>{setopen_VET(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={vet} width="12%"/> 
       <span  style={{color : parseFloat(VET_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_VET : (parseFloat(liveprice_VET*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(VET_per) >0 ? 'green' : 'red'}}>{VET_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_VET: (parseFloat(liveprice_VET*conversion).toFixed(2))
         setlive(g)
         setpair(`VET/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_VET : (parseFloat(liveprice_VET*conversion).toFixed(2))
         setlive(g)
         setpair(`VET/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
  
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_DOT(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={dot}  alt="Mark Zuckerberg"   /> Polkadot (DOT) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(DOT_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_DOT : (parseFloat(liveprice_DOT*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(DOT_per) >0 ? 'green' : 'red'}}> {DOT_per}%</span></span></h5>
  
        <Dialog  open={open_DOT} style={{width:"25rem"}} onClose={()=>{setopen_DOT(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={dot} width="12%"/> 
       <span  style={{color : parseFloat(DOT_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_DOT : (parseFloat(liveprice_DOT*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(DOT_per) >0 ? 'green' : 'red'}}>{DOT_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_DOT: (parseFloat(liveprice_DOT*conversion).toFixed(2))
         setlive(g)
         setpair(`DOT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_DOT : (parseFloat(liveprice_DOT*conversion).toFixed(2))
         setlive(g)
         setpair(`DOT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_UNI(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={uni}  alt="Mark Zuckerberg"   /> Uniswap (UNI) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(UNI_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_UNI : (parseFloat(liveprice_UNI*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(UNI_per) >0 ? 'green' : 'red'}}> {UNI_per}%</span></span></h5>
  
        <Dialog  open={open_UNI} style={{width:"25rem"}} onClose={()=>{setopen_UNI(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={uni} width="12%"/> 
       <span  style={{color : parseFloat(UNI_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_UNI : (parseFloat(liveprice_UNI*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(UNI_per) >0 ? 'green' : 'red'}}>{UNI_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_UNI: (parseFloat(liveprice_UNI*conversion).toFixed(2))
         setlive(g)
         setpair(`UNI/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_UNI : (parseFloat(liveprice_UNI*conversion).toFixed(2))
         setlive(g)
         setpair(`UNI/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_RUNE(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={rune}  alt="Mark Zuckerberg"   /> THORChain (RUNE) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(RUNE_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_RUNE : (parseFloat(liveprice_RUNE*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(RUNE_per) >0 ? 'green' : 'red'}}> {RUNE_per}%</span></span></h5>
  
        <Dialog  open={open_RUNE} style={{width:"25rem"}} onClose={()=>{setopen_RUNE(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={rune} width="12%"/> 
       <span  style={{color : parseFloat(RUNE_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_RUNE : (parseFloat(liveprice_RUNE*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(RUNE_per) >0 ? 'green' : 'red'}}>{RUNE_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_RUNE: (parseFloat(liveprice_RUNE*conversion).toFixed(2))
         setlive(g)
         setpair(`RUNE/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_RUNE : (parseFloat(liveprice_RUNE*conversion).toFixed(2))
         setlive(g)
         setpair(`RUNE/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_SOL(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={sol}  alt="Mark Zuckerberg"   /> SOLANA (SOL) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(SOL_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_SOL : (parseFloat(liveprice_SOL*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(SOL_per) >0 ? 'green' : 'red'}}> {SOL_per}%</span></span></h5>
  
        <Dialog  open={open_SOL} style={{width:"25rem"}} onClose={()=>{setopen_SOL(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={sol} width="12%"/> 
       <span  style={{color : parseFloat(SOL_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_SOL : (parseFloat(liveprice_SOL*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(SOL_per) >0 ? 'green' : 'red'}}>{SOL_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_SOL: (parseFloat(liveprice_SOL*conversion).toFixed(2))
         setlive(g)
         setpair(`SOL/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_SOL : (parseFloat(liveprice_SOL*conversion).toFixed(2))
         setlive(g)
         setpair(`SOL/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_FTT(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={ftt}  alt="Mark Zuckerberg"   /> FTX (FTT) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(FTT_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_FTT : (parseFloat(liveprice_FTT*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(FTT_per) >0 ? 'green' : 'red'}}> {FTT_per}%</span></span></h5>
  
        <Dialog  open={open_FTT} style={{width:"25rem"}} onClose={()=>{setopen_FTT(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={ftt} width="12%"/> 
       <span  style={{color : parseFloat(FTT_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_FTT : (parseFloat(liveprice_FTT*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(FTT_per) >0 ? 'green' : 'red'}}>{FTT_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_FTT: (parseFloat(liveprice_FTT*conversion).toFixed(2))
         setlive(g)
         setpair(`FTT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_FTT : (parseFloat(liveprice_FTT*conversion).toFixed(2))
         setlive(g)
         setpair(`FTT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_AXS(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={axs}  alt="Mark Zuckerberg"   /> Axie Infinity (AXS) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(AXS_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_AXS : (parseFloat(liveprice_AXS*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(AXS_per) >0 ? 'green' : 'red'}}> {AXS_per}%</span></span></h5>
  
        <Dialog  open={open_AXS} style={{width:"25rem"}} onClose={()=>{setopen_AXS(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={axs} width="12%"/> 
       <span  style={{color : parseFloat(AXS_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_AXS : (parseFloat(liveprice_AXS*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(AXS_per) >0 ? 'green' : 'red'}}>{AXS_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_AXS: (parseFloat(liveprice_AXS*conversion).toFixed(2))
         setlive(g)
         setpair(`AXS/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_AXS : (parseFloat(liveprice_AXS*conversion).toFixed(2))
         setlive(g)
         setpair(`AXS/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_MATIC(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={matic}  alt="Mark Zuckerberg"   /> Polygon (MATIC) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(MATIC_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_MATIC : (parseFloat(liveprice_MATIC*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(MATIC_per) >0 ? 'green' : 'red'}}> {MATIC_per}%</span></span></h5>
  
        <Dialog  open={open_MATIC} style={{width:"25rem"}} onClose={()=>{setopen_MATIC(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={matic} width="12%"/> 
       <span  style={{color : parseFloat(MATIC_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_MATIC : (parseFloat(liveprice_MATIC*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(MATIC_per) >0 ? 'green' : 'red'}}>{MATIC_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_MATIC: (parseFloat(liveprice_MATIC*conversion).toFixed(2))
         setlive(g)
         setpair(`MATIC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_MATIC : (parseFloat(liveprice_MATIC*conversion).toFixed(2))
         setlive(g)
         setpair(`MATIC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_GTC(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={gtc}  alt="Mark Zuckerberg"   /> GITCOIN (GTC) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(GTC_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_GTC : (parseFloat(liveprice_GTC*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(GTC_per) >0 ? 'green' : 'red'}}> {GTC_per}%</span></span></h5>
  
        <Dialog  open={open_GTC} style={{width:"25rem"}} onClose={()=>{setopen_GTC(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={gtc} width="12%"/> 
       <span  style={{color : parseFloat(GTC_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_GTC : (parseFloat(liveprice_GTC*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(GTC_per) >0 ? 'green' : 'red'}}>{GTC_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_GTC: (parseFloat(liveprice_GTC*conversion).toFixed(2))
         setlive(g)
         setpair(`GTC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_GTC : (parseFloat(liveprice_GTC*conversion).toFixed(2))
         setlive(g)
         setpair(`GTC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_FIL(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={fil}  alt="Mark Zuckerberg"   /> FileCoin (FIL) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(FIL_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_FIL : (parseFloat(liveprice_FIL*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(FIL_per) >0 ? 'green' : 'red'}}> {FIL_per}%</span></span></h5>
  
        <Dialog  open={open_FIL} style={{width:"25rem"}} onClose={()=>{setopen_FIL(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={fil} width="12%"/> 
       <span  style={{color : parseFloat(FIL_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_FIL : (parseFloat(liveprice_FIL*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(FIL_per) >0 ? 'green' : 'red'}}>{FIL_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_FIL: (parseFloat(liveprice_FIL*conversion).toFixed(2))
         setlive(g)
         setpair(`FIL/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_FIL : (parseFloat(liveprice_FIL*conversion).toFixed(2))
         setlive(g)
         setpair(`FIL/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_ALICE(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={alice}  alt="Mark Zuckerberg"   /> Alice (ALICE) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(ALICE_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ALICE : (parseFloat(liveprice_ALICE*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(ALICE_per) >0 ? 'green' : 'red'}}> {ALICE_per}%</span></span></h5>
  
        <Dialog  open={open_ALICE} style={{width:"25rem"}} onClose={()=>{setopen_ALICE(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={alice} width="12%"/> 
       <span  style={{color : parseFloat(ALICE_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_ALICE : (parseFloat(liveprice_ALICE*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(ALICE_per) >0 ? 'green' : 'red'}}>{ALICE_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ALICE: (parseFloat(liveprice_ALICE*conversion).toFixed(2))
         setlive(g)
         setpair(`ALICE/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ALICE : (parseFloat(liveprice_ALICE*conversion).toFixed(2))
         setlive(g)
         setpair(`ALICE/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_FTM(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={ftm}  alt="Mark Zuckerberg"   /> Fantom (FTM) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(FTM_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_FTM : (parseFloat(liveprice_FTM*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(FTM_per) >0 ? 'green' : 'red'}}> {FTM_per}%</span></span></h5>
  
        <Dialog  open={open_FTM} style={{width:"25rem"}} onClose={()=>{setopen_FTM(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={ftm} width="12%"/> 
       <span  style={{color : parseFloat(FTM_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_FTM : (parseFloat(liveprice_FTM*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(FTM_per) >0 ? 'green' : 'red'}}>{FTM_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_FTM: (parseFloat(liveprice_FTM*conversion).toFixed(2))
         setlive(g)
         setpair(`FTM/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_FTM : (parseFloat(liveprice_FTM*conversion).toFixed(2))
         setlive(g)
         setpair(`FTM/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_DGB(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={dgb}  alt="Mark Zuckerberg"   /> DigiByte (DGB) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(DGB_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_DGB : (parseFloat(liveprice_DGB*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(DGB_per) >0 ? 'green' : 'red'}}> {DGB_per}%</span></span></h5>
  
        <Dialog  open={open_DGB} style={{width:"25rem"}} onClose={()=>{setopen_DGB(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={dgb} width="12%"/> 
       <span  style={{color : parseFloat(DGB_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_DGB : (parseFloat(liveprice_DGB*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(DGB_per) >0 ? 'green' : 'red'}}>{DGB_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_DGB: (parseFloat(liveprice_DGB*conversion).toFixed(2))
         setlive(g)
         setpair(`DGB/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_DGB : (parseFloat(liveprice_DGB*conversion).toFixed(2))
         setlive(g)
         setpair(`DGB/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_MANA(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={mana}  alt="Mark Zuckerberg"   /> Decentraland (MANA) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(MANA_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_MANA : (parseFloat(liveprice_MANA*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(MANA_per) >0 ? 'green' : 'red'}}> {MANA_per}%</span></span></h5>
  
        <Dialog  open={open_MANA} style={{width:"25rem"}} onClose={()=>{setopen_MANA(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={mana} width="12%"/> 
       <span  style={{color : parseFloat(MANA_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_MANA : (parseFloat(liveprice_MANA*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(MANA_per) >0 ? 'green' : 'red'}}>{MANA_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_MANA: (parseFloat(liveprice_MANA*conversion).toFixed(2))
         setlive(g)
         setpair(`MANA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_MANA : (parseFloat(liveprice_MANA*conversion).toFixed(2))
         setlive(g)
         setpair(`MANA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div> 
  
        <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_ATA(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={ata}  alt="Mark Zuckerberg"   /> Automata (ATA) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(ATA_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ATA : (parseFloat(liveprice_ATA*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(ATA_per) >0 ? 'green' : 'red'}}> {ATA_per}%</span></span></h5>
  
        <Dialog  open={open_ATA} style={{width:"25rem"}} onClose={()=>{setopen_ATA(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={ata} width="12%"/> 
       <span  style={{color : parseFloat(ATA_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_ATA : (parseFloat(liveprice_ATA*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(ATA_per) >0 ? 'green' : 'red'}}>{ATA_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ATA: (parseFloat(liveprice_ATA*conversion).toFixed(2))
         setlive(g)
         setpair(`ATA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ATA : (parseFloat(liveprice_ATA*conversion).toFixed(2))
         setlive(g)
         setpair(`ATA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_XRP(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={xrp}  alt="Mark Zuckerberg"   /> XRP (XRP) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(XRP_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_XRP : (parseFloat(liveprice_XRP*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(XRP_per) >0 ? 'green' : 'red'}}> {XRP_per}%</span></span></h5>
  
        <Dialog  open={open_XRP} style={{width:"25rem"}} onClose={()=>{setopen_XRP(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={xrp} width="12%"/> 
       <span  style={{color : parseFloat(XRP_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_XRP : (parseFloat(liveprice_XRP*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(XRP_per) >0 ? 'green' : 'red'}}>{XRP_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_XRP: (parseFloat(liveprice_XRP*conversion).toFixed(2))
         setlive(g)
         setpair(`XRP/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_XRP : (parseFloat(liveprice_XRP*conversion).toFixed(2))
         setlive(g)
         setpair(`XRP/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_DOGE(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={doge}  alt="Mark Zuckerberg"   /> Dogecoin (DOGE) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(DOGE_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_DOGE : (parseFloat(liveprice_DOGE*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(DOGE_per) >0 ? 'green' : 'red'}}> {DOGE_per}%</span></span></h5>
  
        <Dialog  open={open_DOGE} style={{width:"25rem"}} onClose={()=>{setopen_DOGE(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={doge} width="12%"/> 
       <span  style={{color : parseFloat(DOGE_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_DOGE : (parseFloat(liveprice_DOGE*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(DOGE_per) >0 ? 'green' : 'red'}}>{DOGE_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_DOGE: (parseFloat(liveprice_DOGE*conversion).toFixed(2))
         setlive(g)
         setpair(`DOGE/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_DOGE : (parseFloat(liveprice_DOGE*conversion).toFixed(2))
         setlive(g)
         setpair(`DOGE/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_USDC(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={usdc}  alt="Mark Zuckerberg"   /> USD Coin (USDC) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(USDC_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_USDC : (parseFloat(liveprice_USDC*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(USDC_per) >0 ? 'green' : 'red'}}> {USDC_per}%</span></span></h5>
  
        <Dialog  open={open_USDC} style={{width:"25rem"}} onClose={()=>{setopen_USDC(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={usdc} width="12%"/> 
       <span  style={{color : parseFloat(USDC_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_USDC : (parseFloat(liveprice_USDC*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(USDC_per) >0 ? 'green' : 'red'}}>{USDC_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_USDC: (parseFloat(liveprice_USDC*conversion).toFixed(2))
         setlive(g)
         setpair(`USDC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_USDC : (parseFloat(liveprice_USDC*conversion).toFixed(2))
         setlive(g)
         setpair(`USDC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_AVAX(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={avax}  alt="Mark Zuckerberg"   /> Avalanche (AVAX) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(AVAX_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_AVAX : (parseFloat(liveprice_AVAX*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(AVAX_per) >0 ? 'green' : 'red'}}> {AVAX_per}%</span></span></h5>
  
        <Dialog  open={open_AVAX} style={{width:"25rem"}} onClose={()=>{setopen_AVAX(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={avax} width="12%"/> 
       <span  style={{color : parseFloat(AVAX_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_AVAX : (parseFloat(liveprice_AVAX*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(AVAX_per) >0 ? 'green' : 'red'}}>{AVAX_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_AVAX: (parseFloat(liveprice_AVAX*conversion).toFixed(2))
         setlive(g)
         setpair(`AVAX/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_AVAX : (parseFloat(liveprice_AVAX*conversion).toFixed(2))
         setlive(g)
         setpair(`AVAX/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_BUSD(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={busd}  alt="Mark Zuckerberg"   /> Binance USD (BUSD) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(BUSD_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_BUSD : (parseFloat(liveprice_BUSD*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(BUSD_per) >0 ? 'green' : 'red'}}> {BUSD_per}%</span></span></h5>
  
        <Dialog  open={open_BUSD} style={{width:"25rem"}} onClose={()=>{setopen_BUSD(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={busd} width="12%"/> 
       <span  style={{color : parseFloat(BUSD_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_BUSD : (parseFloat(liveprice_BUSD*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(BUSD_per) >0 ? 'green' : 'red'}}>{BUSD_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_BUSD: (parseFloat(liveprice_BUSD*conversion).toFixed(2))
         setlive(g)
         setpair(`BUSD/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_BUSD : (parseFloat(liveprice_BUSD*conversion).toFixed(2))
         setlive(g)
         setpair(`BUSD/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_LTC(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={ltc}  alt="Mark Zuckerberg"   /> Litecoin (LTC) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(LTC_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_LTC : (parseFloat(liveprice_LTC*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(LTC_per) >0 ? 'green' : 'red'}}> {LTC_per}%</span></span></h5>
  
        <Dialog  open={open_LTC} style={{width:"25rem"}} onClose={()=>{setopen_LTC(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={ltc} width="12%"/> 
       <span  style={{color : parseFloat(LTC_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_LTC : (parseFloat(liveprice_LTC*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(LTC_per) >0 ? 'green' : 'red'}}>{LTC_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_LTC: (parseFloat(liveprice_LTC*conversion).toFixed(2))
         setlive(g)
         setpair(`LTC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_LTC : (parseFloat(liveprice_LTC*conversion).toFixed(2))
         setlive(g)
         setpair(`LTC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_BCH(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={bch}  alt="Mark Zuckerberg"   /> Bitcoin Cash (BCH) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(BCH_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_BCH : (parseFloat(liveprice_BCH*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(BCH_per) >0 ? 'green' : 'red'}}> {BCH_per}%</span></span></h5>
  
        <Dialog  open={open_BCH} style={{width:"25rem"}} onClose={()=>{setopen_BCH(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={bch} width="12%"/> 
       <span  style={{color : parseFloat(BCH_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_BCH : (parseFloat(liveprice_BCH*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(BCH_per) >0 ? 'green' : 'red'}}>{BCH_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_BCH: (parseFloat(liveprice_BCH*conversion).toFixed(2))
         setlive(g)
         setpair(`BCH/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_BCH : (parseFloat(liveprice_BCH*conversion).toFixed(2))
         setlive(g)
         setpair(`BCH/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_ALGO(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={algo}  alt="Mark Zuckerberg"   /> Algorand (ALGO) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(ALGO_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ALGO : (parseFloat(liveprice_ALGO*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(ALGO_per) >0 ? 'green' : 'red'}}> {ALGO_per}%</span></span></h5>
  
        <Dialog  open={open_ALGO} style={{width:"25rem"}} onClose={()=>{setopen_ALGO(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={algo} width="12%"/> 
       <span  style={{color : parseFloat(ALGO_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_ALGO : (parseFloat(liveprice_ALGO*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(ALGO_per) >0 ? 'green' : 'red'}}>{ALGO_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ALGO: (parseFloat(liveprice_ALGO*conversion).toFixed(2))
         setlive(g)
         setpair(`ALGO/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ALGO : (parseFloat(liveprice_ALGO*conversion).toFixed(2))
         setlive(g)
         setpair(`ALGO/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_ATOM(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={atom}  alt="Mark Zuckerberg"   /> Cosmos Network (ATOM) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(ATOM_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ATOM : (parseFloat(liveprice_ATOM*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(ATOM_per) >0 ? 'green' : 'red'}}> {ATOM_per}%</span></span></h5>
  
        <Dialog  open={open_ATOM} style={{width:"25rem"}} onClose={()=>{setopen_ATOM(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={atom} width="12%"/> 
       <span  style={{color : parseFloat(ATOM_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_ATOM : (parseFloat(liveprice_ATOM*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(ATOM_per) >0 ? 'green' : 'red'}}>{ATOM_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ATOM: (parseFloat(liveprice_ATOM*conversion).toFixed(2))
         setlive(g)
         setpair(`ATOM/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ATOM : (parseFloat(liveprice_ATOM*conversion).toFixed(2))
         setlive(g)
         setpair(`ATOM/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_ICP(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={icp}  alt="Mark Zuckerberg"   /> Internet Computer (ICP) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(ICP_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ICP : (parseFloat(liveprice_ICP*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(ICP_per) >0 ? 'green' : 'red'}}> {ICP_per}%</span></span></h5>
  
        <Dialog  open={open_ICP} style={{width:"25rem"}} onClose={()=>{setopen_ICP(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={icp} width="12%"/> 
       <span  style={{color : parseFloat(ICP_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_ICP : (parseFloat(liveprice_ICP*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(ICP_per) >0 ? 'green' : 'red'}}>{ICP_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ICP: (parseFloat(liveprice_ICP*conversion).toFixed(2))
         setlive(g)
         setpair(`ICP/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ICP : (parseFloat(liveprice_ICP*conversion).toFixed(2))
         setlive(g)
         setpair(`ICP/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_XLM(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={xlm}  alt="Mark Zuckerberg"   /> Stellar Lumens (XLM) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(XLM_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_XLM : (parseFloat(liveprice_XLM*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(XLM_per) >0 ? 'green' : 'red'}}> {XLM_per}%</span></span></h5>
  
        <Dialog  open={open_XLM} style={{width:"25rem"}} onClose={()=>{setopen_XLM(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={xlm} width="12%"/> 
       <span  style={{color : parseFloat(XLM_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_XLM : (parseFloat(liveprice_XLM*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(XLM_per) >0 ? 'green' : 'red'}}>{XLM_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_XLM: (parseFloat(liveprice_XLM*conversion).toFixed(2))
         setlive(g)
         setpair(`XLM/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_XLM : (parseFloat(liveprice_XLM*conversion).toFixed(2))
         setlive(g)
         setpair(`XLM/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_ETC(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={etc}  alt="Mark Zuckerberg"   /> Ethereum Classic (ETC) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(ETC_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ETC : (parseFloat(liveprice_ETC*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(ETC_per) >0 ? 'green' : 'red'}}> {ETC_per}%</span></span></h5>
  
        <Dialog  open={open_ETC} style={{width:"25rem"}} onClose={()=>{setopen_ETC(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={etc} width="12%"/> 
       <span  style={{color : parseFloat(ETC_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_ETC : (parseFloat(liveprice_ETC*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(ETC_per) >0 ? 'green' : 'red'}}>{ETC_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ETC: (parseFloat(liveprice_ETC*conversion).toFixed(2))
         setlive(g)
         setpair(`ETC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ETC : (parseFloat(liveprice_ETC*conversion).toFixed(2))
         setlive(g)
         setpair(`ETC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_XTZ(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={xtz}  alt="Mark Zuckerberg"   /> Tezos (XTZ) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(XTZ_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_XTZ : (parseFloat(liveprice_XTZ*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(XTZ_per) >0 ? 'green' : 'red'}}> {XTZ_per}%</span></span></h5>
  
        <Dialog  open={open_XTZ} style={{width:"25rem"}} onClose={()=>{setopen_XTZ(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={xtz} width="12%"/> 
       <span  style={{color : parseFloat(XTZ_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_XTZ : (parseFloat(liveprice_XTZ*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(XTZ_per) >0 ? 'green' : 'red'}}>{XTZ_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_XTZ: (parseFloat(liveprice_XTZ*conversion).toFixed(2))
         setlive(g)
         setpair(`XTZ/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_XTZ : (parseFloat(liveprice_XTZ*conversion).toFixed(2))
         setlive(g)
         setpair(`XTZ/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_EOS(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={eos}  alt="Mark Zuckerberg"   /> EOS (EOS) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(EOS_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_EOS : (parseFloat(liveprice_EOS*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(EOS_per) >0 ? 'green' : 'red'}}> {EOS_per}%</span></span></h5>
  
        <Dialog  open={open_EOS} style={{width:"25rem"}} onClose={()=>{setopen_EOS(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={eos} width="12%"/> 
       <span  style={{color : parseFloat(EOS_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_EOS : (parseFloat(liveprice_EOS*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(EOS_per) >0 ? 'green' : 'red'}}>{EOS_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_EOS: (parseFloat(liveprice_EOS*conversion).toFixed(2))
         setlive(g)
         setpair(`EOS/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_EOS : (parseFloat(liveprice_EOS*conversion).toFixed(2))
         setlive(g)
         setpair(`EOS/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_CAKE(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={cake}  alt="Mark Zuckerberg"   /> PancakeSwap (CAKE) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(CAKE_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_CAKE : (parseFloat(liveprice_CAKE*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(CAKE_per) >0 ? 'green' : 'red'}}> {CAKE_per}%</span></span></h5>
  
        <Dialog  open={open_CAKE} style={{width:"25rem"}} onClose={()=>{setopen_CAKE(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={cake} width="12%"/> 
       <span  style={{color : parseFloat(CAKE_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_CAKE : (parseFloat(liveprice_CAKE*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(CAKE_per) >0 ? 'green' : 'red'}}>{CAKE_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_CAKE: (parseFloat(liveprice_CAKE*conversion).toFixed(2))
         setlive(g)
         setpair(`CAKE/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_CAKE : (parseFloat(liveprice_CAKE*conversion).toFixed(2))
         setlive(g)
         setpair(`CAKE/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_EGLD(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={egld}  alt="Mark Zuckerberg"   /> Elrond (EGLD) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(EGLD_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_EGLD : (parseFloat(liveprice_EGLD*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(EGLD_per) >0 ? 'green' : 'red'}}> {EGLD_per}%</span></span></h5>
  
        <Dialog  open={open_EGLD} style={{width:"25rem"}} onClose={()=>{setopen_EGLD(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={egld} width="12%"/> 
       <span  style={{color : parseFloat(EGLD_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_EGLD : (parseFloat(liveprice_EGLD*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(EGLD_per) >0 ? 'green' : 'red'}}>{EGLD_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_EGLD: (parseFloat(liveprice_EGLD*conversion).toFixed(2))
         setlive(g)
         setpair(`EGLD/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_EGLD : (parseFloat(liveprice_EGLD*conversion).toFixed(2))
         setlive(g)
         setpair(`EGLD/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div> 

        <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_XMR(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={xmr}  alt="Mark Zuckerberg"   /> Monero (XMR) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(XMR_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_XMR : (parseFloat(liveprice_XMR*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(XMR_per) >0 ? 'green' : 'red'}}> {XMR_per}%</span></span></h5>
  
        <Dialog  open={open_XMR} style={{width:"25rem"}} onClose={()=>{setopen_XMR(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={xmr} width="12%"/> 
       <span  style={{color : parseFloat(XMR_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_XMR : (parseFloat(liveprice_XMR*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(XMR_per) >0 ? 'green' : 'red'}}>{XMR_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_XMR: (parseFloat(liveprice_XMR*conversion).toFixed(2))
         setlive(g)
         setpair(`XMR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_XMR : (parseFloat(liveprice_XMR*conversion).toFixed(2))
         setlive(g)
         setpair(`XMR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_AAVE(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={aave}  alt="Mark Zuckerberg"   /> Aave Protocol (AAVE) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(AAVE_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_AAVE : (parseFloat(liveprice_AAVE*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(AAVE_per) >0 ? 'green' : 'red'}}> {AAVE_per}%</span></span></h5>
  
        <Dialog  open={open_AAVE} style={{width:"25rem"}} onClose={()=>{setopen_AAVE(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={aave} width="12%"/> 
       <span  style={{color : parseFloat(AAVE_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_AAVE : (parseFloat(liveprice_AAVE*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(AAVE_per) >0 ? 'green' : 'red'}}>{AAVE_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_AAVE: (parseFloat(liveprice_AAVE*conversion).toFixed(2))
         setlive(g)
         setpair(`AAVE/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_AAVE : (parseFloat(liveprice_AAVE*conversion).toFixed(2))
         setlive(g)
         setpair(`AAVE/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_QNT(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={qnt}  alt="Mark Zuckerberg"   /> Quant (QNT) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(QNT_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_QNT : (parseFloat(liveprice_QNT*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(QNT_per) >0 ? 'green' : 'red'}}> {QNT_per}%</span></span></h5>
  
        <Dialog  open={open_QNT} style={{width:"25rem"}} onClose={()=>{setopen_QNT(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={qnt} width="12%"/> 
       <span  style={{color : parseFloat(QNT_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_QNT : (parseFloat(liveprice_QNT*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(QNT_per) >0 ? 'green' : 'red'}}>{QNT_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_QNT: (parseFloat(liveprice_QNT*conversion).toFixed(2))
         setlive(g)
         setpair(`QNT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_QNT : (parseFloat(liveprice_QNT*conversion).toFixed(2))
         setlive(g)
         setpair(`QNT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_XEC(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={xec}  alt="Mark Zuckerberg"   /> eCash (XEC) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(XEC_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_XEC : (parseFloat(liveprice_XEC*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(XEC_per) >0 ? 'green' : 'red'}}> {XEC_per}%</span></span></h5>
  
        <Dialog  open={open_XEC} style={{width:"25rem"}} onClose={()=>{setopen_XEC(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={xec} width="12%"/> 
       <span  style={{color : parseFloat(XEC_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_XEC : (parseFloat(liveprice_XEC*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(XEC_per) >0 ? 'green' : 'red'}}>{XEC_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_XEC: (parseFloat(liveprice_XEC*conversion).toFixed(2))
         setlive(g)
         setpair(`XEC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_XEC : (parseFloat(liveprice_XEC*conversion).toFixed(2))
         setlive(g)
         setpair(`XEC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_HBAR(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={hbar}  alt="Mark Zuckerberg"   /> Hedera Hashgraph (HBAR) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(HBAR_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_HBAR : (parseFloat(liveprice_HBAR*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(HBAR_per) >0 ? 'green' : 'red'}}> {HBAR_per}%</span></span></h5>
  
        <Dialog  open={open_HBAR} style={{width:"25rem"}} onClose={()=>{setopen_HBAR(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={hbar} width="12%"/> 
       <span  style={{color : parseFloat(HBAR_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_HBAR : (parseFloat(liveprice_HBAR*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(HBAR_per) >0 ? 'green' : 'red'}}>{HBAR_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_HBAR: (parseFloat(liveprice_HBAR*conversion).toFixed(2))
         setlive(g)
         setpair(`HBAR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_HBAR : (parseFloat(liveprice_HBAR*conversion).toFixed(2))
         setlive(g)
         setpair(`HBAR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_SHIB(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={shib}  alt="Mark Zuckerberg"   /> SHIBA INU (SHIB) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(SHIB_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_SHIB : (parseFloat(liveprice_SHIB*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(SHIB_per) >0 ? 'green' : 'red'}}> {SHIB_per}%</span></span></h5>
  
        <Dialog  open={open_SHIB} style={{width:"25rem"}} onClose={()=>{setopen_SHIB(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={shib} width="12%"/> 
       <span  style={{color : parseFloat(SHIB_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_SHIB : (parseFloat(liveprice_SHIB*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(SHIB_per) >0 ? 'green' : 'red'}}>{SHIB_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_SHIB: (parseFloat(liveprice_SHIB*conversion).toFixed(2))
         setlive(g)
         setpair(`SHIB/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_SHIB : (parseFloat(liveprice_SHIB*conversion).toFixed(2))
         setlive(g)
         setpair(`SHIB/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_NEAR(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={near}  alt="Mark Zuckerberg"   /> NEAR Protocol (NEAR) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(NEAR_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_NEAR : (parseFloat(liveprice_NEAR*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(NEAR_per) >0 ? 'green' : 'red'}}> {NEAR_per}%</span></span></h5>
  
        <Dialog  open={open_NEAR} style={{width:"25rem"}} onClose={()=>{setopen_NEAR(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={near} width="12%"/> 
       <span  style={{color : parseFloat(NEAR_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_NEAR : (parseFloat(liveprice_NEAR*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(NEAR_per) >0 ? 'green' : 'red'}}>{NEAR_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_NEAR: (parseFloat(liveprice_NEAR*conversion).toFixed(2))
         setlive(g)
         setpair(`NEAR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_NEAR : (parseFloat(liveprice_NEAR*conversion).toFixed(2))
         setlive(g)
         setpair(`NEAR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_NEO(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={neo}  alt="Mark Zuckerberg"   /> NEO (NEO) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(NEO_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_NEO : (parseFloat(liveprice_NEO*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(NEO_per) >0 ? 'green' : 'red'}}> {NEO_per}%</span></span></h5>
  
        <Dialog  open={open_NEO} style={{width:"25rem"}} onClose={()=>{setopen_NEO(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={neo} width="12%"/> 
       <span  style={{color : parseFloat(NEO_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_NEO : (parseFloat(liveprice_NEO*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(NEO_per) >0 ? 'green' : 'red'}}>{NEO_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_NEO: (parseFloat(liveprice_NEO*conversion).toFixed(2))
         setlive(g)
         setpair(`NEO/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_NEO : (parseFloat(liveprice_NEO*conversion).toFixed(2))
         setlive(g)
         setpair(`NEO/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_KLAY(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={klay}  alt="Mark Zuckerberg"   /> Klaytn (KLAY) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(KLAY_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_KLAY : (parseFloat(liveprice_KLAY*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(KLAY_per) >0 ? 'green' : 'red'}}> {KLAY_per}%</span></span></h5>
  
        <Dialog  open={open_KLAY} style={{width:"25rem"}} onClose={()=>{setopen_KLAY(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={klay} width="12%"/> 
       <span  style={{color : parseFloat(KLAY_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_KLAY : (parseFloat(liveprice_KLAY*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(KLAY_per) >0 ? 'green' : 'red'}}>{KLAY_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_KLAY: (parseFloat(liveprice_KLAY*conversion).toFixed(2))
         setlive(g)
         setpair(`KLAY/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_KLAY : (parseFloat(liveprice_KLAY*conversion).toFixed(2))
         setlive(g)
         setpair(`KLAY/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

        <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_WAVES(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={waves}  alt="Mark Zuckerberg"   /> WAVES (WAVES) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(WAVES_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_WAVES : (parseFloat(liveprice_WAVES*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(WAVES_per) >0 ? 'green' : 'red'}}> {WAVES_per}%</span></span></h5>
  
        <Dialog  open={open_WAVES} style={{width:"25rem"}} onClose={()=>{setopen_WAVES(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={waves} width="12%"/> 
       <span  style={{color : parseFloat(WAVES_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_WAVES : (parseFloat(liveprice_WAVES*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(WAVES_per) >0 ? 'green' : 'red'}}>{WAVES_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_WAVES: (parseFloat(liveprice_WAVES*conversion).toFixed(2))
         setlive(g)
         setpair(`WAVES/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_WAVES : (parseFloat(liveprice_WAVES*conversion).toFixed(2))
         setlive(g)
         setpair(`WAVES/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_BTT(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={btt}  alt="Mark Zuckerberg"   /> BitTorrent (BTT) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(BTT_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_BTT : (parseFloat(liveprice_BTT*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(BTT_per) >0 ? 'green' : 'red'}}> {BTT_per}%</span></span></h5>
  
        <Dialog  open={open_BTT} style={{width:"25rem"}} onClose={()=>{setopen_BTT(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={btt} width="12%"/> 
       <span  style={{color : parseFloat(BTT_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_BTT : (parseFloat(liveprice_BTT*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(BTT_per) >0 ? 'green' : 'red'}}>{BTT_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_BTT: (parseFloat(liveprice_BTT*conversion).toFixed(2))
         setlive(g)
         setpair(`BTT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_BTT : (parseFloat(liveprice_BTT*conversion).toFixed(2))
         setlive(g)
         setpair(`BTT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_MKR(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={mkr}  alt="Mark Zuckerberg"   /> MakerDAO (MKR) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(MKR_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_MKR : (parseFloat(liveprice_MKR*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(MKR_per) >0 ? 'green' : 'red'}}> {MKR_per}%</span></span></h5>
  
        <Dialog  open={open_MKR} style={{width:"25rem"}} onClose={()=>{setopen_MKR(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={mkr} width="12%"/> 
       <span  style={{color : parseFloat(MKR_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_MKR : (parseFloat(liveprice_MKR*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(MKR_per) >0 ? 'green' : 'red'}}>{MKR_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_MKR: (parseFloat(liveprice_MKR*conversion).toFixed(2))
         setlive(g)
         setpair(`MKR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_MKR : (parseFloat(liveprice_MKR*conversion).toFixed(2))
         setlive(g)
         setpair(`MKR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_SUSHI(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={sushi}  alt="Mark Zuckerberg"   /> SushiSwap (SUSHI) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(SUSHI_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_SUSHI : (parseFloat(liveprice_SUSHI*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(SUSHI_per) >0 ? 'green' : 'red'}}> {SUSHI_per}%</span></span></h5>
  
        <Dialog  open={open_SUSHI} style={{width:"25rem"}} onClose={()=>{setopen_SUSHI(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={sushi} width="12%"/> 
       <span  style={{color : parseFloat(SUSHI_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_SUSHI : (parseFloat(liveprice_SUSHI*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(SUSHI_per) >0 ? 'green' : 'red'}}>{SUSHI_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_SUSHI: (parseFloat(liveprice_SUSHI*conversion).toFixed(2))
         setlive(g)
         setpair(`SUSHI/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_SUSHI : (parseFloat(liveprice_SUSHI*conversion).toFixed(2))
         setlive(g)
         setpair(`SUSHI/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_AR(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={ar}  alt="Mark Zuckerberg"   /> Arweave (AR) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(AR_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_AR : (parseFloat(liveprice_AR*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(AR_per) >0 ? 'green' : 'red'}}> {AR_per}%</span></span></h5>
  
        <Dialog  open={open_AR} style={{width:"25rem"}} onClose={()=>{setopen_AR(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={ar} width="12%"/> 
       <span  style={{color : parseFloat(AR_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_AR : (parseFloat(liveprice_AR*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(AR_per) >0 ? 'green' : 'red'}}>{AR_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_AR: (parseFloat(liveprice_AR*conversion).toFixed(2))
         setlive(g)
         setpair(`AR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_AR : (parseFloat(liveprice_AR*conversion).toFixed(2))
         setlive(g)
         setpair(`AR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_SNX(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={snx}  alt="Mark Zuckerberg"   /> Synthetix (SNX) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(SNX_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_SNX : (parseFloat(liveprice_SNX*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(SNX_per) >0 ? 'green' : 'red'}}> {SNX_per}%</span></span></h5>
  
        <Dialog  open={open_SNX} style={{width:"25rem"}} onClose={()=>{setopen_SNX(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={snx} width="12%"/> 
       <span  style={{color : parseFloat(SNX_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_SNX : (parseFloat(liveprice_SNX*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(SNX_per) >0 ? 'green' : 'red'}}>{SNX_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_SNX: (parseFloat(liveprice_SNX*conversion).toFixed(2))
         setlive(g)
         setpair(`SNX/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_SNX : (parseFloat(liveprice_SNX*conversion).toFixed(2))
         setlive(g)
         setpair(`SNX/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_COMP(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={comp}  alt="Mark Zuckerberg"   /> Compound (COMP) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(COMP_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_COMP : (parseFloat(liveprice_COMP*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(COMP_per) >0 ? 'green' : 'red'}}> {COMP_per}%</span></span></h5>
  
        <Dialog  open={open_COMP} style={{width:"25rem"}} onClose={()=>{setopen_COMP(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={comp} width="12%"/> 
       <span  style={{color : parseFloat(COMP_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_COMP : (parseFloat(liveprice_COMP*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(COMP_per) >0 ? 'green' : 'red'}}>{COMP_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_COMP: (parseFloat(liveprice_COMP*conversion).toFixed(2))
         setlive(g)
         setpair(`COMP/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_COMP : (parseFloat(liveprice_COMP*conversion).toFixed(2))
         setlive(g)
         setpair(`COMP/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_DASH(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={dash}  alt="Mark Zuckerberg"   /> Dash (DASH) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(DASH_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_DASH : (parseFloat(liveprice_DASH*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(DASH_per) >0 ? 'green' : 'red'}}> {DASH_per}%</span></span></h5>
  
        <Dialog  open={open_DASH} style={{width:"25rem"}} onClose={()=>{setopen_DASH(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={dash} width="12%"/> 
       <span  style={{color : parseFloat(DASH_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_DASH : (parseFloat(liveprice_DASH*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(DASH_per) >0 ? 'green' : 'red'}}>{DASH_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_DASH: (parseFloat(liveprice_DASH*conversion).toFixed(2))
         setlive(g)
         setpair(`DASH/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_DASH : (parseFloat(liveprice_DASH*conversion).toFixed(2))
         setlive(g)
         setpair(`DASH/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_DCR(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={dcr}  alt="Mark Zuckerberg"   /> Decred (DCR) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(DCR_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_DCR : (parseFloat(liveprice_DCR*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(DCR_per) >0 ? 'green' : 'red'}}> {DCR_per}%</span></span></h5>
  
        <Dialog  open={open_DCR} style={{width:"25rem"}} onClose={()=>{setopen_DCR(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={dcr} width="12%"/> 
       <span  style={{color : parseFloat(DCR_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_DCR : (parseFloat(liveprice_DCR*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(DCR_per) >0 ? 'green' : 'red'}}>{DCR_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_DCR: (parseFloat(liveprice_DCR*conversion).toFixed(2))
         setlive(g)
         setpair(`DCR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_DCR : (parseFloat(liveprice_DCR*conversion).toFixed(2))
         setlive(g)
         setpair(`DCR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_HNT(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={hnt}  alt="Mark Zuckerberg"   /> Helium (HNT) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(HNT_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_HNT : (parseFloat(liveprice_HNT*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(HNT_per) >0 ? 'green' : 'red'}}> {HNT_per}%</span></span></h5>
  
        <Dialog  open={open_HNT} style={{width:"25rem"}} onClose={()=>{setopen_HNT(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={hnt} width="12%"/> 
       <span  style={{color : parseFloat(HNT_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_HNT : (parseFloat(liveprice_HNT*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(HNT_per) >0 ? 'green' : 'red'}}>{HNT_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_HNT: (parseFloat(liveprice_HNT*conversion).toFixed(2))
         setlive(g)
         setpair(`HNT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_HNT : (parseFloat(liveprice_HNT*conversion).toFixed(2))
         setlive(g)
         setpair(`HNT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_CHZ(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={chz}  alt="Mark Zuckerberg"   /> Chiliz (CHZ) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(CHZ_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_CHZ : (parseFloat(liveprice_CHZ*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(CHZ_per) >0 ? 'green' : 'red'}}> {CHZ_per}%</span></span></h5>
  
        <Dialog  open={open_CHZ} style={{width:"25rem"}} onClose={()=>{setopen_CHZ(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={chz} width="12%"/> 
       <span  style={{color : parseFloat(CHZ_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_CHZ : (parseFloat(liveprice_CHZ*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(CHZ_per) >0 ? 'green' : 'red'}}>{CHZ_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_CHZ: (parseFloat(liveprice_CHZ*conversion).toFixed(2))
         setlive(g)
         setpair(`CHZ/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_CHZ : (parseFloat(liveprice_CHZ*conversion).toFixed(2))
         setlive(g)
         setpair(`CHZ/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_ONE(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={one}  alt="Mark Zuckerberg"   /> Harmony (ONE) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(ONE_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ONE : (parseFloat(liveprice_ONE*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(ONE_per) >0 ? 'green' : 'red'}}> {ONE_per}%</span></span></h5>
  
        <Dialog  open={open_ONE} style={{width:"25rem"}} onClose={()=>{setopen_ONE(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={one} width="12%"/> 
       <span  style={{color : parseFloat(ONE_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_ONE : (parseFloat(liveprice_ONE*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(ONE_per) >0 ? 'green' : 'red'}}>{ONE_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ONE: (parseFloat(liveprice_ONE*conversion).toFixed(2))
         setlive(g)
         setpair(`ONE/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ONE : (parseFloat(liveprice_ONE*conversion).toFixed(2))
         setlive(g)
         setpair(`ONE/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_HOT(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={hot}  alt="Mark Zuckerberg"   /> Holochain (HOT) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(HOT_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_HOT : (parseFloat(liveprice_HOT*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(HOT_per) >0 ? 'green' : 'red'}}> {HOT_per}%</span></span></h5>
  
        <Dialog  open={open_HOT} style={{width:"25rem"}} onClose={()=>{setopen_HOT(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={hot} width="12%"/> 
       <span  style={{color : parseFloat(HOT_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_HOT : (parseFloat(liveprice_HOT*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(HOT_per) >0 ? 'green' : 'red'}}>{HOT_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_HOT: (parseFloat(liveprice_HOT*conversion).toFixed(2))
         setlive(g)
         setpair(`HOT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_HOT : (parseFloat(liveprice_HOT*conversion).toFixed(2))
         setlive(g)
         setpair(`HOT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_XEM(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={xem}  alt="Mark Zuckerberg"   /> NEM (XEM) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(XEM_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_XEM : (parseFloat(liveprice_XEM*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(XEM_per) >0 ? 'green' : 'red'}}> {XEM_per}%</span></span></h5>
  
        <Dialog  open={open_XEM} style={{width:"25rem"}} onClose={()=>{setopen_XEM(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={xem} width="12%"/> 
       <span  style={{color : parseFloat(XEM_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_XEM : (parseFloat(liveprice_XEM*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(XEM_per) >0 ? 'green' : 'red'}}>{XEM_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_XEM: (parseFloat(liveprice_XEM*conversion).toFixed(2))
         setlive(g)
         setpair(`XEM/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_XEM : (parseFloat(liveprice_XEM*conversion).toFixed(2))
         setlive(g)
         setpair(`XEM/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div> 

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_ZEC(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={zec}  alt="Mark Zuckerberg"   /> ZCash (ZEC) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(ZEC_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ZEC : (parseFloat(liveprice_ZEC*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(ZEC_per) >0 ? 'green' : 'red'}}> {ZEC_per}%</span></span></h5>
  
        <Dialog  open={open_ZEC} style={{width:"25rem"}} onClose={()=>{setopen_ZEC(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={zec} width="12%"/> 
       <span  style={{color : parseFloat(ZEC_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_ZEC : (parseFloat(liveprice_ZEC*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(ZEC_per) >0 ? 'green' : 'red'}}>{ZEC_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ZEC: (parseFloat(liveprice_ZEC*conversion).toFixed(2))
         setlive(g)
         setpair(`ZEC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ZEC : (parseFloat(liveprice_ZEC*conversion).toFixed(2))
         setlive(g)
         setpair(`ZEC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_IOST(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={iost}  alt="Mark Zuckerberg"   /> IOST (IOST) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(IOST_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_IOST : (parseFloat(liveprice_IOST*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(IOST_per) >0 ? 'green' : 'red'}}> {IOST_per}%</span></span></h5>
  
        <Dialog  open={open_IOST} style={{width:"25rem"}} onClose={()=>{setopen_IOST(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={iost} width="12%"/> 
       <span  style={{color : parseFloat(IOST_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_IOST : (parseFloat(liveprice_IOST*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(IOST_per) >0 ? 'green' : 'red'}}>{IOST_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_IOST: (parseFloat(liveprice_IOST*conversion).toFixed(2))
         setlive(g)
         setpair(`IOST/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_IOST : (parseFloat(liveprice_IOST*conversion).toFixed(2))
         setlive(g)
         setpair(`IOST/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_ENJ(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={enj}  alt="Mark Zuckerberg"   /> Enjin Coin (ENJ) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(ENJ_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ENJ : (parseFloat(liveprice_ENJ*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(ENJ_per) >0 ? 'green' : 'red'}}> {ENJ_per}%</span></span></h5>
  
        <Dialog  open={open_ENJ} style={{width:"25rem"}} onClose={()=>{setopen_ENJ(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={enj} width="12%"/> 
       <span  style={{color : parseFloat(ENJ_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_ENJ : (parseFloat(liveprice_ENJ*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(ENJ_per) >0 ? 'green' : 'red'}}>{ENJ_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ENJ: (parseFloat(liveprice_ENJ*conversion).toFixed(2))
         setlive(g)
         setpair(`ENJ/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ENJ : (parseFloat(liveprice_ENJ*conversion).toFixed(2))
         setlive(g)
         setpair(`ENJ/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_STX(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={stx}  alt="Mark Zuckerberg"   /> Stacks (STX) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(STX_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_STX : (parseFloat(liveprice_STX*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(STX_per) >0 ? 'green' : 'red'}}> {STX_per}%</span></span></h5>
  
        <Dialog  open={open_STX} style={{width:"25rem"}} onClose={()=>{setopen_STX(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={stx} width="12%"/> 
       <span  style={{color : parseFloat(STX_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_STX : (parseFloat(liveprice_STX*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(STX_per) >0 ? 'green' : 'red'}}>{STX_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_STX: (parseFloat(liveprice_STX*conversion).toFixed(2))
         setlive(g)
         setpair(`STX/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_STX : (parseFloat(liveprice_STX*conversion).toFixed(2))
         setlive(g)
         setpair(`STX/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_TUSD(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={tusd}  alt="Mark Zuckerberg"   /> TrueUSD (TUSD) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(TUSD_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_TUSD : (parseFloat(liveprice_TUSD*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(TUSD_per) >0 ? 'green' : 'red'}}> {TUSD_per}%</span></span></h5>
  
        <Dialog  open={open_TUSD} style={{width:"25rem"}} onClose={()=>{setopen_TUSD(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={tusd} width="12%"/> 
       <span  style={{color : parseFloat(TUSD_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_TUSD : (parseFloat(liveprice_TUSD*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(TUSD_per) >0 ? 'green' : 'red'}}>{TUSD_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_TUSD: (parseFloat(liveprice_TUSD*conversion).toFixed(2))
         setlive(g)
         setpair(`TUSD/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_TUSD : (parseFloat(liveprice_TUSD*conversion).toFixed(2))
         setlive(g)
         setpair(`TUSD/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_ZIL(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={zil}  alt="Mark Zuckerberg"   /> Zilliqa (ZIL) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(ZIL_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ZIL : (parseFloat(liveprice_ZIL*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(ZIL_per) >0 ? 'green' : 'red'}}> {ZIL_per}%</span></span></h5>
  
        <Dialog  open={open_ZIL} style={{width:"25rem"}} onClose={()=>{setopen_ZIL(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={zil} width="12%"/> 
       <span  style={{color : parseFloat(ZIL_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_ZIL : (parseFloat(liveprice_ZIL*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(ZIL_per) >0 ? 'green' : 'red'}}>{ZIL_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ZIL: (parseFloat(liveprice_ZIL*conversion).toFixed(2))
         setlive(g)
         setpair(`ZIL/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ZIL : (parseFloat(liveprice_ZIL*conversion).toFixed(2))
         setlive(g)
         setpair(`ZIL/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_FLOW(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={flow}  alt="Mark Zuckerberg"   /> Flow (FLOW) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(FLOW_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_FLOW : (parseFloat(liveprice_FLOW*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(FLOW_per) >0 ? 'green' : 'red'}}> {FLOW_per}%</span></span></h5>
  
        <Dialog  open={open_FLOW} style={{width:"25rem"}} onClose={()=>{setopen_FLOW(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={flow} width="12%"/> 
       <span  style={{color : parseFloat(FLOW_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_FLOW : (parseFloat(liveprice_FLOW*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(FLOW_per) >0 ? 'green' : 'red'}}>{FLOW_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_FLOW: (parseFloat(liveprice_FLOW*conversion).toFixed(2))
         setlive(g)
         setpair(`FLOW/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_FLOW : (parseFloat(liveprice_FLOW*conversion).toFixed(2))
         setlive(g)
         setpair(`FLOW/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_QTUM(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={qtum}  alt="Mark Zuckerberg"   /> Qtum (QTUM) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(QTUM_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_QTUM : (parseFloat(liveprice_QTUM*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(QTUM_per) >0 ? 'green' : 'red'}}> {QTUM_per}%</span></span></h5>
  
        <Dialog  open={open_QTUM} style={{width:"25rem"}} onClose={()=>{setopen_QTUM(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={qtum} width="12%"/> 
       <span  style={{color : parseFloat(QTUM_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_QTUM : (parseFloat(liveprice_QTUM*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(QTUM_per) >0 ? 'green' : 'red'}}>{QTUM_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_QTUM: (parseFloat(liveprice_QTUM*conversion).toFixed(2))
         setlive(g)
         setpair(`QTUM/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_QTUM : (parseFloat(liveprice_QTUM*conversion).toFixed(2))
         setlive(g)
         setpair(`QTUM/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_MINA(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={mina}  alt="Mark Zuckerberg"   /> Mina (MINA) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(MINA_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_MINA : (parseFloat(liveprice_MINA*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(MINA_per) >0 ? 'green' : 'red'}}> {MINA_per}%</span></span></h5>
  
        <Dialog  open={open_MINA} style={{width:"25rem"}} onClose={()=>{setopen_MINA(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={mina} width="12%"/> 
       <span  style={{color : parseFloat(MINA_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_MINA : (parseFloat(liveprice_MINA*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(MINA_per) >0 ? 'green' : 'red'}}>{MINA_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_MINA: (parseFloat(liveprice_MINA*conversion).toFixed(2))
         setlive(g)
         setpair(`MINA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_MINA : (parseFloat(liveprice_MINA*conversion).toFixed(2))
         setlive(g)
         setpair(`MINA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_ICX(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={icx}  alt="Mark Zuckerberg"   /> ICON (ICX) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(ICX_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ICX : (parseFloat(liveprice_ICX*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(ICX_per) >0 ? 'green' : 'red'}}> {ICX_per}%</span></span></h5>
  
        <Dialog  open={open_ICX} style={{width:"25rem"}} onClose={()=>{setopen_ICX(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={icx} width="12%"/> 
       <span  style={{color : parseFloat(ICX_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_ICX : (parseFloat(liveprice_ICX*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(ICX_per) >0 ? 'green' : 'red'}}>{ICX_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ICX: (parseFloat(liveprice_ICX*conversion).toFixed(2))
         setlive(g)
         setpair(`ICX/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ICX : (parseFloat(liveprice_ICX*conversion).toFixed(2))
         setlive(g)
         setpair(`ICX/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_OMG(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={omg}  alt="Mark Zuckerberg"   /> OmiseGO (OMG) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(OMG_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_OMG : (parseFloat(liveprice_OMG*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(OMG_per) >0 ? 'green' : 'red'}}> {OMG_per}%</span></span></h5>
  
        <Dialog  open={open_OMG} style={{width:"25rem"}} onClose={()=>{setopen_OMG(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={omg} width="12%"/> 
       <span  style={{color : parseFloat(OMG_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_OMG : (parseFloat(liveprice_OMG*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(OMG_per) >0 ? 'green' : 'red'}}>{OMG_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_OMG: (parseFloat(liveprice_OMG*conversion).toFixed(2))
         setlive(g)
         setpair(`OMG/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_OMG : (parseFloat(liveprice_OMG*conversion).toFixed(2))
         setlive(g)
         setpair(`OMG/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_BTG(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={btg}  alt="Mark Zuckerberg"   /> Bitcoin Gold (BTG) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(BTG_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_BTG : (parseFloat(liveprice_BTG*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(BTG_per) >0 ? 'green' : 'red'}}> {BTG_per}%</span></span></h5>
  
        <Dialog  open={open_BTG} style={{width:"25rem"}} onClose={()=>{setopen_BTG(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={btg} width="12%"/> 
       <span  style={{color : parseFloat(BTG_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_BTG : (parseFloat(liveprice_BTG*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(BTG_per) >0 ? 'green' : 'red'}}>{BTG_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_BTG: (parseFloat(liveprice_BTG*conversion).toFixed(2))
         setlive(g)
         setpair(`BTG/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_BTG : (parseFloat(liveprice_BTG*conversion).toFixed(2))
         setlive(g)
         setpair(`BTG/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_BAT(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={bat}  alt="Mark Zuckerberg"   /> Basic Attention Token(BAT)</h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(BAT_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_BAT : (parseFloat(liveprice_BAT*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(BAT_per) >0 ? 'green' : 'red'}}> {BAT_per}%</span></span></h5>
  
        <Dialog  open={open_BAT} style={{width:"25rem"}} onClose={()=>{setopen_BAT(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={bat} width="12%"/> 
       <span  style={{color : parseFloat(BAT_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_BAT : (parseFloat(liveprice_BAT*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(BAT_per) >0 ? 'green' : 'red'}}>{BAT_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_BAT: (parseFloat(liveprice_BAT*conversion).toFixed(2))
         setlive(g)
         setpair(`BAT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_BAT : (parseFloat(liveprice_BAT*conversion).toFixed(2))
         setlive(g)
         setpair(`BAT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_AUDIO(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={audio}  alt="Mark Zuckerberg"   /> Audius (AUDIO) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(AUDIO_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_AUDIO : (parseFloat(liveprice_AUDIO*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(AUDIO_per) >0 ? 'green' : 'red'}}> {AUDIO_per}%</span></span></h5>
  
        <Dialog  open={open_AUDIO} style={{width:"25rem"}} onClose={()=>{setopen_AUDIO(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={audio} width="12%"/> 
       <span  style={{color : parseFloat(AUDIO_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_AUDIO : (parseFloat(liveprice_AUDIO*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(AUDIO_per) >0 ? 'green' : 'red'}}>{AUDIO_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_AUDIO: (parseFloat(liveprice_AUDIO*conversion).toFixed(2))
         setlive(g)
         setpair(`AUDIO/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_AUDIO : (parseFloat(liveprice_AUDIO*conversion).toFixed(2))
         setlive(g)
         setpair(`AUDIO/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_ZEN(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={zen}  alt="Mark Zuckerberg"   /> Horizen (ZEN) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(ZEN_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ZEN : (parseFloat(liveprice_ZEN*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(ZEN_per) >0 ? 'green' : 'red'}}> {ZEN_per}%</span></span></h5>
  
        <Dialog  open={open_ZEN} style={{width:"25rem"}} onClose={()=>{setopen_ZEN(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={zen} width="12%"/> 
       <span  style={{color : parseFloat(ZEN_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_ZEN : (parseFloat(liveprice_ZEN*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(ZEN_per) >0 ? 'green' : 'red'}}>{ZEN_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ZEN: (parseFloat(liveprice_ZEN*conversion).toFixed(2))
         setlive(g)
         setpair(`ZEN/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ZEN : (parseFloat(liveprice_ZEN*conversion).toFixed(2))
         setlive(g)
         setpair(`ZEN/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_RVN(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={rvn}  alt="Mark Zuckerberg"   /> Ravencoin (RVN) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(RVN_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_RVN : (parseFloat(liveprice_RVN*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(RVN_per) >0 ? 'green' : 'red'}}> {RVN_per}%</span></span></h5>
  
        <Dialog  open={open_RVN} style={{width:"25rem"}} onClose={()=>{setopen_RVN(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={rvn} width="12%"/> 
       <span  style={{color : parseFloat(RVN_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_RVN : (parseFloat(liveprice_RVN*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(RVN_per) >0 ? 'green' : 'red'}}>{RVN_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_RVN: (parseFloat(liveprice_RVN*conversion).toFixed(2))
         setlive(g)
         setpair(`RVN/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_RVN : (parseFloat(liveprice_RVN*conversion).toFixed(2))
         setlive(g)
         setpair(`RVN/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_MDX(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={mdx}  alt="Mark Zuckerberg"   /> Mdex (MDX) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(MDX_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_MDX : (parseFloat(liveprice_MDX*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(MDX_per) >0 ? 'green' : 'red'}}> {MDX_per}%</span></span></h5>
  
        <Dialog  open={open_MDX} style={{width:"25rem"}} onClose={()=>{setopen_MDX(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={mdx} width="12%"/> 
       <span  style={{color : parseFloat(MDX_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_MDX : (parseFloat(liveprice_MDX*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(MDX_per) >0 ? 'green' : 'red'}}>{MDX_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_MDX: (parseFloat(liveprice_MDX*conversion).toFixed(2))
         setlive(g)
         setpair(`MDX/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_MDX : (parseFloat(liveprice_MDX*conversion).toFixed(2))
         setlive(g)
         setpair(`MDX/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_BNT(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={bnt}  alt="Mark Zuckerberg"   /> Bancor (BNT) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(BNT_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_BNT : (parseFloat(liveprice_BNT*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(BNT_per) >0 ? 'green' : 'red'}}> {BNT_per}%</span></span></h5>
  
        <Dialog  open={open_BNT} style={{width:"25rem"}} onClose={()=>{setopen_BNT(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={bnt} width="12%"/> 
       <span  style={{color : parseFloat(BNT_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_BNT : (parseFloat(liveprice_BNT*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(BNT_per) >0 ? 'green' : 'red'}}>{BNT_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_BNT: (parseFloat(liveprice_BNT*conversion).toFixed(2))
         setlive(g)
         setpair(`BNT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_BNT : (parseFloat(liveprice_BNT*conversion).toFixed(2))
         setlive(g)
         setpair(`BNT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_ZRX(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={zrx}  alt="Mark Zuckerberg"   /> 0X Protocol (ZRX) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(ZRX_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ZRX : (parseFloat(liveprice_ZRX*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(ZRX_per) >0 ? 'green' : 'red'}}> {ZRX_per}%</span></span></h5>
  
        <Dialog  open={open_ZRX} style={{width:"25rem"}} onClose={()=>{setopen_ZRX(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={zrx} width="12%"/> 
       <span  style={{color : parseFloat(ZRX_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_ZRX : (parseFloat(liveprice_ZRX*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(ZRX_per) >0 ? 'green' : 'red'}}>{ZRX_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ZRX: (parseFloat(liveprice_ZRX*conversion).toFixed(2))
         setlive(g)
         setpair(`ZRX/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ZRX : (parseFloat(liveprice_ZRX*conversion).toFixed(2))
         setlive(g)
         setpair(`ZRX/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_SC(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={sc}  alt="Mark Zuckerberg"   /> Siacoin (SC) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(SC_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_SC : (parseFloat(liveprice_SC*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(SC_per) >0 ? 'green' : 'red'}}> {SC_per}%</span></span></h5>
  
        <Dialog  open={open_SC} style={{width:"25rem"}} onClose={()=>{setopen_SC(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={sc} width="12%"/> 
       <span  style={{color : parseFloat(SC_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_SC : (parseFloat(liveprice_SC*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(SC_per) >0 ? 'green' : 'red'}}>{SC_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_SC: (parseFloat(liveprice_SC*conversion).toFixed(2))
         setlive(g)
         setpair(`SC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_SC : (parseFloat(liveprice_SC*conversion).toFixed(2))
         setlive(g)
         setpair(`SC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_ONT(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={ont}  alt="Mark Zuckerberg"   /> Ontology (ONT) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(ONT_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ONT : (parseFloat(liveprice_ONT*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(ONT_per) >0 ? 'green' : 'red'}}> {ONT_per}%</span></span></h5>
  
        <Dialog  open={open_ONT} style={{width:"25rem"}} onClose={()=>{setopen_ONT(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={ont} width="12%"/> 
       <span  style={{color : parseFloat(ONT_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_ONT : (parseFloat(liveprice_ONT*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(ONT_per) >0 ? 'green' : 'red'}}>{ONT_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ONT: (parseFloat(liveprice_ONT*conversion).toFixed(2))
         setlive(g)
         setpair(`ONT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ONT : (parseFloat(liveprice_ONT*conversion).toFixed(2))
         setlive(g)
         setpair(`ONT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_RAY(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={ray}  alt="Mark Zuckerberg"   /> Raydium (RAY) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(RAY_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_RAY : (parseFloat(liveprice_RAY*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(RAY_per) >0 ? 'green' : 'red'}}> {RAY_per}%</span></span></h5>
  
        <Dialog  open={open_RAY} style={{width:"25rem"}} onClose={()=>{setopen_RAY(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={ray} width="12%"/> 
       <span  style={{color : parseFloat(RAY_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_RAY : (parseFloat(liveprice_RAY*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(RAY_per) >0 ? 'green' : 'red'}}>{RAY_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_RAY: (parseFloat(liveprice_RAY*conversion).toFixed(2))
         setlive(g)
         setpair(`RAY/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_RAY : (parseFloat(liveprice_RAY*conversion).toFixed(2))
         setlive(g)
         setpair(`RAY/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_DYDX(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={dydx}  alt="Mark Zuckerberg"   /> dYdX (DYDX) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(DYDX_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_DYDX : (parseFloat(liveprice_DYDX*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(DYDX_per) >0 ? 'green' : 'red'}}> {DYDX_per}%</span></span></h5>
  
        <Dialog  open={open_DYDX} style={{width:"25rem"}} onClose={()=>{setopen_DYDX(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={dydx} width="12%"/> 
       <span  style={{color : parseFloat(DYDX_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_DYDX : (parseFloat(liveprice_DYDX*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(DYDX_per) >0 ? 'green' : 'red'}}>{DYDX_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_DYDX: (parseFloat(liveprice_DYDX*conversion).toFixed(2))
         setlive(g)
         setpair(`DYDX/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_DYDX : (parseFloat(liveprice_DYDX*conversion).toFixed(2))
         setlive(g)
         setpair(`DYDX/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_PERP(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={perp}  alt="Mark Zuckerberg"   /> Perpetual Protocol (PERP) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(PERP_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_PERP : (parseFloat(liveprice_PERP*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(PERP_per) >0 ? 'green' : 'red'}}> {PERP_per}%</span></span></h5>
  
        <Dialog  open={open_PERP} style={{width:"25rem"}} onClose={()=>{setopen_PERP(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={perp} width="12%"/> 
       <span  style={{color : parseFloat(PERP_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_PERP : (parseFloat(liveprice_PERP*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(PERP_per) >0 ? 'green' : 'red'}}>{PERP_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_PERP: (parseFloat(liveprice_PERP*conversion).toFixed(2))
         setlive(g)
         setpair(`PERP/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_PERP : (parseFloat(liveprice_PERP*conversion).toFixed(2))
         setlive(g)
         setpair(`PERP/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_GALA(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={gala}  alt="Mark Zuckerberg"   /> Gala (GALA) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(GALA_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_GALA : (parseFloat(liveprice_GALA*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(GALA_per) >0 ? 'green' : 'red'}}> {GALA_per}%</span></span></h5>
  
        <Dialog  open={open_GALA} style={{width:"25rem"}} onClose={()=>{setopen_GALA(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={gala} width="12%"/> 
       <span  style={{color : parseFloat(GALA_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_GALA : (parseFloat(liveprice_GALA*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(GALA_per) >0 ? 'green' : 'red'}}>{GALA_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_GALA: (parseFloat(liveprice_GALA*conversion).toFixed(2))
         setlive(g)
         setpair(`GALA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_GALA : (parseFloat(liveprice_GALA*conversion).toFixed(2))
         setlive(g)
         setpair(`GALA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_ANKR(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={ankr}  alt="Mark Zuckerberg"   /> Ankr Network (ANKR) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(ANKR_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ANKR : (parseFloat(liveprice_ANKR*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(ANKR_per) >0 ? 'green' : 'red'}}> {ANKR_per}%</span></span></h5>
  
        <Dialog  open={open_ANKR} style={{width:"25rem"}} onClose={()=>{setopen_ANKR(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={ankr} width="12%"/> 
       <span  style={{color : parseFloat(ANKR_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_ANKR : (parseFloat(liveprice_ANKR*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(ANKR_per) >0 ? 'green' : 'red'}}>{ANKR_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ANKR: (parseFloat(liveprice_ANKR*conversion).toFixed(2))
         setlive(g)
         setpair(`ANKR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_ANKR : (parseFloat(liveprice_ANKR*conversion).toFixed(2))
         setlive(g)
         setpair(`ANKR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_NANO(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={nano}  alt="Mark Zuckerberg"   /> Nano (NANO) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(NANO_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_NANO : (parseFloat(liveprice_NANO*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(NANO_per) >0 ? 'green' : 'red'}}> {NANO_per}%</span></span></h5>
  
        <Dialog  open={open_NANO} style={{width:"25rem"}} onClose={()=>{setopen_NANO(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={nano} width="12%"/> 
       <span  style={{color : parseFloat(NANO_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_NANO : (parseFloat(liveprice_NANO*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(NANO_per) >0 ? 'green' : 'red'}}>{NANO_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_NANO: (parseFloat(liveprice_NANO*conversion).toFixed(2))
         setlive(g)
         setpair(`NANO/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_NANO : (parseFloat(liveprice_NANO*conversion).toFixed(2))
         setlive(g)
         setpair(`NANO/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_CELO(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={celo}  alt="Mark Zuckerberg"   /> Celo (CELO) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(CELO_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_CELO : (parseFloat(liveprice_CELO*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(CELO_per) >0 ? 'green' : 'red'}}> {CELO_per}%</span></span></h5>
  
        <Dialog  open={open_CELO} style={{width:"25rem"}} onClose={()=>{setopen_CELO(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={celo} width="12%"/> 
       <span  style={{color : parseFloat(CELO_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_CELO : (parseFloat(liveprice_CELO*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(CELO_per) >0 ? 'green' : 'red'}}>{CELO_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_CELO: (parseFloat(liveprice_CELO*conversion).toFixed(2))
         setlive(g)
         setpair(`CELO/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_CELO : (parseFloat(liveprice_CELO*conversion).toFixed(2))
         setlive(g)
         setpair(`CELO/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_UMA(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={uma}  alt="Mark Zuckerberg"   /> UMA (UMA) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(UMA_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_UMA : (parseFloat(liveprice_UMA*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(UMA_per) >0 ? 'green' : 'red'}}> {UMA_per}%</span></span></h5>
  
        <Dialog  open={open_UMA} style={{width:"25rem"}} onClose={()=>{setopen_UMA(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={uma} width="12%"/> 
       <span  style={{color : parseFloat(UMA_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_UMA : (parseFloat(liveprice_UMA*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(UMA_per) >0 ? 'green' : 'red'}}>{UMA_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_UMA: (parseFloat(liveprice_UMA*conversion).toFixed(2))
         setlive(g)
         setpair(`UMA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_UMA : (parseFloat(liveprice_UMA*conversion).toFixed(2))
         setlive(g)
         setpair(`UMA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_C98(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={c98}  alt="Mark Zuckerberg"   /> Coin98 (C98) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(C98_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_C98 : (parseFloat(liveprice_C98*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(C98_per) >0 ? 'green' : 'red'}}> {C98_per}%</span></span></h5>
  
        <Dialog  open={open_C98} style={{width:"25rem"}} onClose={()=>{setopen_C98(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={c98} width="12%"/> 
       <span  style={{color : parseFloat(C98_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_C98 : (parseFloat(liveprice_C98*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(C98_per) >0 ? 'green' : 'red'}}>{C98_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_C98: (parseFloat(liveprice_C98*conversion).toFixed(2))
         setlive(g)
         setpair(`C98/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_C98 : (parseFloat(liveprice_C98*conversion).toFixed(2))
         setlive(g)
         setpair(`C98/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_CELR(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={celr}  alt="Mark Zuckerberg"   /> Celer Network (CELR) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(CELR_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_CELR : (parseFloat(liveprice_CELR*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(CELR_per) >0 ? 'green' : 'red'}}> {CELR_per}%</span></span></h5>
  
        <Dialog  open={open_CELR} style={{width:"25rem"}} onClose={()=>{setopen_CELR(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={celr} width="12%"/> 
       <span  style={{color : parseFloat(CELR_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_CELR : (parseFloat(liveprice_CELR*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(CELR_per) >0 ? 'green' : 'red'}}>{CELR_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_CELR: (parseFloat(liveprice_CELR*conversion).toFixed(2))
         setlive(g)
         setpair(`CELR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_CELR : (parseFloat(liveprice_CELR*conversion).toFixed(2))
         setlive(g)
         setpair(`CELR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_SAND(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={sand}  alt="Mark Zuckerberg"   /> The Sandbox (SAND) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(SAND_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_SAND : (parseFloat(liveprice_SAND*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(SAND_per) >0 ? 'green' : 'red'}}> {SAND_per}%</span></span></h5>
  
        <Dialog  open={open_SAND} style={{width:"25rem"}} onClose={()=>{setopen_SAND(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={sand} width="12%"/> 
       <span  style={{color : parseFloat(SAND_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_SAND : (parseFloat(liveprice_SAND*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(SAND_per) >0 ? 'green' : 'red'}}>{SAND_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_SAND: (parseFloat(liveprice_SAND*conversion).toFixed(2))
         setlive(g)
         setpair(`SAND/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_SAND : (parseFloat(liveprice_SAND*conversion).toFixed(2))
         setlive(g)
         setpair(`SAND/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_POLY(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={poly}  alt="Mark Zuckerberg"   /> Polymath (POLY) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(POLY_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_POLY : (parseFloat(liveprice_POLY*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(POLY_per) >0 ? 'green' : 'red'}}> {POLY_per}%</span></span></h5>
  
        <Dialog  open={open_POLY} style={{width:"25rem"}} onClose={()=>{setopen_POLY(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={poly} width="12%"/> 
       <span  style={{color : parseFloat(POLY_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_POLY : (parseFloat(liveprice_POLY*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(POLY_per) >0 ? 'green' : 'red'}}>{POLY_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_POLY: (parseFloat(liveprice_POLY*conversion).toFixed(2))
         setlive(g)
         setpair(`POLY/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_POLY : (parseFloat(liveprice_POLY*conversion).toFixed(2))
         setlive(g)
         setpair(`POLY/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_FET(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={fet}  alt="Mark Zuckerberg"   /> Fetch.AI (FET) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(FET_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_FET : (parseFloat(liveprice_FET*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(FET_per) >0 ? 'green' : 'red'}}> {FET_per}%</span></span></h5>
  
        <Dialog  open={open_FET} style={{width:"25rem"}} onClose={()=>{setopen_FET(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={fet} width="12%"/> 
       <span  style={{color : parseFloat(FET_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_FET : (parseFloat(liveprice_FET*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(FET_per) >0 ? 'green' : 'red'}}>{FET_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_FET: (parseFloat(liveprice_FET*conversion).toFixed(2))
         setlive(g)
         setpair(`FET/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_FET : (parseFloat(liveprice_FET*conversion).toFixed(2))
         setlive(g)
         setpair(`FET/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_1INCH(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={_1inch}  alt="Mark Zuckerberg"   /> 1inch (1INCH) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(_1INCH_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_1INCH : (parseFloat(liveprice_1INCH*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(_1INCH_per) >0 ? 'green' : 'red'}}> {_1INCH_per}%</span></span></h5>
  
        <Dialog  open={open_1INCH} style={{width:"25rem"}} onClose={()=>{setopen_1INCH(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={_1inch} width="12%"/> 
       <span  style={{color : parseFloat(_1INCH_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_1INCH : (parseFloat(liveprice_1INCH*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(_1INCH_per) >0 ? 'green' : 'red'}}>{_1INCH_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_1INCH: (parseFloat(liveprice_1INCH*conversion).toFixed(2))
         setlive(g)
         setpair(`1INCH/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_1INCH : (parseFloat(liveprice_1INCH*conversion).toFixed(2))
         setlive(g)
         setpair(`1INCH/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_LRC(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={lrc}  alt="Mark Zuckerberg"   /> Loopring (LRC) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(LRC_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_LRC : (parseFloat(liveprice_LRC*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(LRC_per) >0 ? 'green' : 'red'}}> {LRC_per}%</span></span></h5>
  
        <Dialog  open={open_LRC} style={{width:"25rem"}} onClose={()=>{setopen_LRC(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={lrc} width="12%"/> 
       <span  style={{color : parseFloat(LRC_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_LRC : (parseFloat(liveprice_LRC*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(LRC_per) >0 ? 'green' : 'red'}}>{LRC_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_LRC: (parseFloat(liveprice_LRC*conversion).toFixed(2))
         setlive(g)
         setpair(`LRC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_LRC : (parseFloat(liveprice_LRC*conversion).toFixed(2))
         setlive(g)
         setpair(`LRC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_KAVA(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={kava}  alt="Mark Zuckerberg"   /> Kava (KAVA) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(KAVA_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_KAVA : (parseFloat(liveprice_KAVA*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(KAVA_per) >0 ? 'green' : 'red'}}> {KAVA_per}%</span></span></h5>
  
        <Dialog  open={open_KAVA} style={{width:"25rem"}} onClose={()=>{setopen_KAVA(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={kava} width="12%"/> 
       <span  style={{color : parseFloat(KAVA_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_KAVA : (parseFloat(liveprice_KAVA*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(KAVA_per) >0 ? 'green' : 'red'}}>{KAVA_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_KAVA: (parseFloat(liveprice_KAVA*conversion).toFixed(2))
         setlive(g)
         setpair(`KAVA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_KAVA : (parseFloat(liveprice_KAVA*conversion).toFixed(2))
         setlive(g)
         setpair(`KAVA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_WRX(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={wrx}  alt="Mark Zuckerberg"   /> WazirX (WRX) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(WRX_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_WRX : (parseFloat(liveprice_WRX*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(WRX_per) >0 ? 'green' : 'red'}}> {WRX_per}%</span></span></h5>
  
        <Dialog  open={open_WRX} style={{width:"25rem"}} onClose={()=>{setopen_WRX(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={wrx} width="12%"/> 
       <span  style={{color : parseFloat(WRX_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_WRX : (parseFloat(liveprice_WRX*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(WRX_per) >0 ? 'green' : 'red'}}>{WRX_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_WRX: (parseFloat(liveprice_WRX*conversion).toFixed(2))
         setlive(g)
         setpair(`WRX/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_WRX : (parseFloat(liveprice_WRX*conversion).toFixed(2))
         setlive(g)
         setpair(`WRX/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>

       <div class="card card-5" style={{borderRadius:"15px",background: !isDark ? "linear-gradient(90deg, rgba(0,95,255,1) 0%, rgba(0,95,255,1) 5%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 100%)" : "linear-gradient(90deg, rgb(255, 0, 255) 0%, rgba(255,0,255,1) 5%, rgb(61, 61, 61) 5%, rgba(61,61,61,1) 100%)"}}>
       <span class="leaderboard__name"  onClick={()=>{
     
     setopen_RSR(true)
     seti(1)
   }}> <h4 class="card__title"  style={{color:isDark ? "white" : "black"}}><img src={rsr}  alt="Mark Zuckerberg"   /> Reserved Rights (RSR) </h4></span>
      
        <h5 className="price"><span  class="leaderboard__value" style={{color : parseFloat(RSR_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_RSR : (parseFloat(liveprice_RSR*conversion).toFixed(2))}<span> {mobileswitch1 ? 'USDT' : 'INRD'}</span> <span class="leaderboard__value1" style={{color : parseFloat(RSR_per) >0 ? 'green' : 'red'}}> {RSR_per}%</span></span></h5>
  
        <Dialog  open={open_RSR} style={{width:"25rem"}} onClose={()=>{setopen_RSR(false)}}>
     
     <DialogContent style={{paddingBottom:"1.2rem"}}>
  
                  <img src={rsr} width="12%"/> 
       <span  style={{color : parseFloat(RSR_per) >0 ? 'green' : 'red',fontSize:"1.5rem",fontWeight:"500"}}> {mobileswitch1 ? liveprice_RSR : (parseFloat(liveprice_RSR*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}> {mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span className='leaderboard__value1' style={{color : parseFloat(RSR_per) >0 ? 'green' : 'red'}}>{RSR_per}%</span></span><br/>
       <canvas style={{marginBottom:"0.8rem"}} style={{marginBottom:"0.8rem"}} id="btcChart" ref={refHandler_BNB}></canvas>
       <span style={{marginLeft:"1.4rem"}}>
       <Button  className="btn btn-success btn-lg" style={{float:"left"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_RSR: (parseFloat(liveprice_RSR*conversion).toFixed(2))
         setlive(g)
         setpair(`RSR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         
         setshow_buy(true)
        
       }} >Buy</Button>
       <Button  className="btn btn-dark btn-lg" style={{float:"right"}} onClick={()=>{
         const g = mobileswitch1 ? liveprice_RSR : (parseFloat(liveprice_RSR*conversion).toFixed(2))
         setlive(g)
         setpair(`RSR/${mobileswitch1 ? 'USDT' : 'INRD'}`)
         setshow_sell(true)
       }}>Sell</Button>
       </span>
       
     </DialogContent>
     </Dialog>
  
  
       </div>
  
    </main>
  
  
  </article>
  </div>
  </>
  
  }
  
  </>
        }
      </div>
      </body>
    );
  
}

   
else{
  return (
  <>

    
      

    <Navbar bg= {isDarkDes?"dark":"light"} expand="lg" style={{padding:"20px"}}>
    <img src={logo} style={{height:"70px",width:"70px",backgroundColor:isDarkDes?"white":null,borderRadius:isDarkDes?"100%":"none" }}></img>{"   "}
       <Navbar.Brand href="#home" style={{fontFamily:"Strasua",marginLeft:"10px",color:isDarkDes?"white":"black"}}>Anteagle Exchange</Navbar.Brand>
       
      <Navbar.Toggle />


      <Navbar.Collapse className="justify-content-center"  >
     
          <Nav.Link href="#home" style={{color:isDarkDes?"white":"#0275d8"}} onClick={()=>{
            sethome(true)
            setportfolio(false)
            setSwap(false)
            setWithdraw(false)
            setWithdrawAmt(false)
          }}>Home</Nav.Link>
          <Nav.Link href="#home"  style={{color:isDarkDes?"white":"#0275d8"}} onClick={()=>{
            sethome(false)
            setportfolio(false)
            setWithdraw(false)
            setSwap(true)
            setWithdrawAmt(false)
          }}>Swap</Nav.Link>
          <Nav.Link href="#home"  style={{color:isDarkDes?"white":"#0275d8"}}  onClick={()=>{
            sethome(false)
            setportfolio(false)
            setSwap(false)
            setWithdraw(false)
            setWithdrawAmt(false)
          }}
          >Add Asset</Nav.Link>
          <Nav.Link href="#home"   style={{color:isDarkDes?"white":"#0275d8"}} onClick={()=>{
            sethome(false)
            setportfolio(false)
            setSwap(false)
            setWithdraw(true)
            setWithdrawAmt(false)
          }}>Withdraw Asset</Nav.Link>
           <Nav.Link href="#home"   style={{color:isDarkDes?"white":"#0275d8"}} onClick={()=>{
            sethome(false)
            setportfolio(false)
            setSwap(false)
            setWithdraw(false)
            setWithdrawAmt(true)
          }}>Withdraw Amount</Nav.Link>
          <Nav.Link href="#link"  style={{color:isDarkDes?"white":"#0275d8"}} onClick={()=>{
            sethome(false)
            setportfolio(true)
            setSwap(false)
            setWithdraw(false)
            setWithdrawAmt(false)
          }}>Wallet  </Nav.Link>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end"  >

      <input type="checkbox" id="theme-toggle" onChange={(e)=>{
      localStorage.setItem("dark",!isDarkDes)
      setDarkDes(!isDarkDes)
      
      
    }}/>
    <label for="theme-toggle">
     {isDarkDes ?  <img height="24px" src={moon} style={{filter:"invert(1)"}}/> : <img height="24px" src={sun}/>}
    </label>
        <span style={{paddingRight:"50px"}}>

        </span>
        <Button variant ="success" style={{marginRight:"1rem"}} onClick={()=>{
             sethome(false)
        setportfolio(false)
        setSwap(false)
        setWithdraw(false)
        setadd(false)
          setReferral(true)
       
            
        }}>Referral Code</Button>
      <Button variant="success" style={{marginRight:'1rem'}} onClick={()=>{
        sethome(false)
        setportfolio(false)
        setSwap(false)
        setWithdraw(false)
        setReferral(false)
        setadd(true)

      }}>Add INR </Button>
        {"   "}
   
        <Button variant={!isDarkDes?"primary":"info"} onClick={()=>{
          localStorage.removeItem("jwt")
          window.location.href = "/"
        }}>Logout</Button>
      
       <Nav.Link onClick={()=>{
        document.body.classList.remove("white-content")
        window.location.href="https://mobile.twitter.com/anteagle_"
      }}><img src={!isDarkDes?"https://img.icons8.com/ios-glyphs/24/000000/twitter--v2.png":"https://img.icons8.com/ios-glyphs/24/ffffff/twitter--v1.png"}/></Nav.Link>
       <Nav.Link onClick={()=>{
        document.body.classList.remove("white-content")
        window.location.href="https://t.me/anteagle"
      }}><img src={!isDarkDes?"https://img.icons8.com/ios-filled/24/000000/telegram-app.png":"https://img.icons8.com/ios-filled/24/ffffff/telegram-app.png"}/></Nav.Link>
      
      
   
 
      
      </Navbar.Collapse>
    
  </Navbar>

{ home ? <body style={{backgroundColor:isDarkDes?"#212529":"white"}}><div className="row" style={{ overflow:"auto" ,paddingRight:"20px",margin:"0 0 0 10px"}}>

<div class="tabs" style={{width:"20%",backgroundColor:isDarkDes?"#161c2d":"white",height:"806px"}}>
      <Row >
      <Tabs > 
        <TabList >
          <Tab style={{backgroundColor:!isDarkDes?"white":"#161c2d",color: isDarkDes?"white" :"black"}}>Single Trade</Tab> 
          <Tab style={{backgroundColor:!isDarkDes?"white":"#161c2d",color: isDarkDes?"white" :"black"}}>Full Trade</Tab>
        </TabList>
        <TabPanel>
        <ButtonGroup >
          <Button  size="lg"  className="bg-success"  style={{paddingRight:"2rem",paddingLeft:"2rem"}} onClick={()=>{
         setActiveB(true)
         
       }}>
        BUY
       </Button>
       
          <Button size="lg" className="bg-dark" style={{paddingRight:"2rem",paddingLeft:"2rem"}}  onClick={()=>{
            setActiveB(false)
         
           }}>
        SELL
       </Button>
       </ButtonGroup>
{/* 
       <ToggleButtonGroup type="checkbox" >
      <ToggleButton  size="lg" id="tbg-btn-1" value={1} onClick={()=>{
         setActiveB(true)
      }}>
        Option 1
      </ToggleButton>
      <ToggleButton size="lg"  id="tbg-btn-2" value={2} onClick={()=>{
         setActiveB(false)
      }}>
        Option 2
      </ToggleButton>
      </ToggleButtonGroup> */}
         
     
      {activeB?<>
        
        <Tabs>
          <TabList  style={{fontSize:"0.8rem"}}>
            <Tab style={{backgroundColor:!isDarkDes?"white":"#161c2d",color: isDarkDes?"white" :"black"}}>Limit</Tab>
            <Tab style={{backgroundColor:!isDarkDes?"white":"#161c2d",color: isDarkDes?"white" :"black"}}>Market</Tab>
            <Tab style={{backgroundColor:!isDarkDes?"white":"#161c2d",color: isDarkDes?"white" :"black"}}>Stop-limit
           
            {/* <Select  style={{fontSize:"0.79rem"}} id="select"  value={buy}
          onChange={(e)=>{
            
            setBuy(e.target.value)
          }}>
              <MenuItem value={'Stop-limit'}>Stop-limit</MenuItem>
              <MenuItem value={'Stop-market'}>Stop-market</MenuItem>
            </Select> */}
            </Tab>
           
          </TabList>
          <TabPanel>
            
              
            <Form style={{color:isDarkDes?"white":"black"}}>
              <Label >Price ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
              <Input  onChange={(event)=>{
      setbuy_limit_price(parseFloat(event.target.value) )

    }} placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`}></Input>

           

              <Label>Amount ({`${pair.substr(0,pair.indexOf('/'))}`})</Label>
              <Input invalid={!valid} style={{color:"black"}} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} disabled={true} value={buy_limit_amount} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
     if(parseFloat(event.target.value*buy_limit_price)>parseFloat(localStorage.getItem(curr))){
      setvalid(false)
     }
     else{
      setvalid(true)
      // setlimit_buy_total(parseFloat(event.target.value)*parseFloat(buy_limit_price))
     }
      
    }}></Input>

       

              <Label>Total ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
              <Input invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      
     if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
        setvalid(false)
     }
     else{
      setvalid(true)
    
      setbuy_limit_amount(parseFloat(parseFloat(event.target.value) /parseFloat(buy_limit_price)) )
     }
      
    }}></Input>

              {/* <div>
     
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Price</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Amount</InputGroupAddon>
        <Input />
      </InputGroup>
    </div> */}

              <Button disabled={!valid} size="lg" className="bg-success" style={{margin:"2rem 0 2rem 0",display:"block",width:"100%"}} onClick={()=>{
                 alert(`Are you sure that you want to place a buy market order for ${parseFloat(buy_limit_amount).toFixed(5)} ${pair.substr(0,pair.indexOf("/"))}_Coins`)
                axios({
                  method:"POST",
                  url:"https://api.anteagle.tech/neworder",    
                  headers:{
                    "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
                    "Content-Type": "application/json",
                    Authtoken:"sfsfsff"
                  },
                  data: JSON.stringify({
                    userid : localStorage.getItem("userid"),
                    date: "2021-06-21",
                    pair: pair,
                    type : "Limit",
                    side : "BUY",
                    price : buy_limit_price,
                    Amount : buy_limit_amount,
                    filled : "0.0",
                    total : buy_limit_price * buy_limit_amount
                  }),
                }).then(res=>{
                  const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}`
                  //console.log(parseFloat(localStorage.getItem(`${curr}_Coins`)) - buy_limit_price*buy_limit_amount)
                  const end = parseFloat(localStorage.getItem(`${curr}_Coins`)) - buy_limit_price*buy_limit_amount;
                  const range=-9999;                                     //add range
                  if( end < 0 && end > range){
                    alert("Are you sure that you want to proceed further?");
                    var te = parseFloat(localStorage.getItem(`${curr}_Debt`));
                    if(te === null){
                      te = 0;
                    }
                    localStorage.setItem(`${curr}_Coins`,end);
                    localStorage.setItem(`${curr}_Debt `,end+te);        //set debt
                    //console.log("The debt is "+end+te);
                  }
                   
                  else if(end<range) alert("Cannot go beyond this range"); 
                  else{
                    localStorage.setItem(`${curr}_Coins`,end)
                    
                  }
            
                  axios({
                    method:"post",
                    url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${end}&userid=${localStorage.getItem("userid")}`,
                    headers:{
                      "Accept": "application/json",
                    }
                  }).then( async res=>{
                  console.log(res.data);
                  await  swal("Success","Order Submitted Successfully","success")
                  window.location.href = "/"
                  })
                  //console.log(res.data)
                  })
              }}>Buy {`${pair.substr(0,pair.indexOf('/'))}`}</Button>
            </Form>
            
          </TabPanel>
          
         
          <TabPanel>
          <Form style={{color:isDarkDes?"white":"black"}}>
              <Label>Price  ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
              <Input placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} value= {pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2)} disabled onChange={(event)=>{
                setbuy_market_price(event.target.value)
                
               

              }}></Input>

           

              <Label>Amount ({`${pair.substr(0,pair.indexOf('/'))}`})</Label>
              <Input disabled={true} style={{color:"black"}} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={buy_market_amount} onChange={(event)=>{
     
    }} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`}></Input>

     

              <Label>Total  ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
              <Input invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
    setbuy_market_price(parseFloat(pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2)))
     if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
      setvalid(false)
      
     }
     else{
      setvalid(true)
    
      setbuy_market_amount(parseFloat(event.target.value)/parseFloat(buy_market_price))
      
     }
      
    }}></Input>

              <Button size="lg" valid={!valid} className="bg-success" onClick={()=>{
                 alert(`Are you sure that you want to place a buy market order for ${parseFloat(buy_market_amount).toFixed(5)} ${pair.substr(0,pair.indexOf("/"))}_Coins`)
                axios({
                  method:"POST",
                  url:"https://api.anteagle.tech/neworder",
                  headers:{
                    "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
                    "Content-Type": "application/json",
                    Authtoken:"sfsfsff"
                  },
                  data: JSON.stringify({
                    userid : localStorage.getItem("userid"),
                    date: "2021-06-21",
                    pair: pair,
                    type : "Market",
                    side : "BUY",
                    price : buy_market_price,
                    Amount : parseFloat(buy_market_amount).toFixed(5),
                    filled : "0.0",
                    total : buy_market_price*buy_market_amount
                  }),
                }).then(res=>{console.log(res.data)})
                const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}`
                const tem = parseFloat(localStorage.getItem(`${curr}_Coins`)) - (parseFloat(buy_market_price)*parseFloat(buy_market_amount))
               
               
                axios({
                  method:"post",
                  url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${tem}&userid=${localStorage.getItem("userid")}`,
                  headers:{
                    "Accept": "application/json",
                  }
                }).then(async res=>{
                  console.log(res.data);
                  await swal("Success","Order Submitted Successfully","success");
                  window.location.href = "/"
                })
              }} style={{margin:"2rem 0 2rem 0",display:"block",width:"100%"}}>Buy {`${pair.substr(0,pair.indexOf('/'))}`}</Button>
            </Form>
          </TabPanel>
         
          <TabPanel>
              <Form style={{marginBottom:"1rem",color:isDarkDes?"white":"black"}} >
                <Label>Trigger Price ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
                <Input onChange={(event)=>{
      // setbuy_limit_price(parseFloat(event.target.value)  
      setStop_buy_trig(parseFloat(event.target.value) )

    }} placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`}></Input>
    
<Label>Stop Price ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
                <Input onChange={(event)=>{
      // setbuy_limit_price(parseFloat(event.target.value)  
      setStop_buy_stop(parseFloat(event.target.value) )

    }} placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`}></Input>
{ stop_buy_stop>stop_buy_trig? <p style={{color:"red",fontSize:"0.7rem"}}>Stop price should be lower than trigger price</p>: null}

                <Label>Amount ({`${pair.substr(0,pair.indexOf('/'))}`})</Label>
                <Input invalid={!valid} style={{color:"black"}} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} disabled={true} value={stop_buy_amount} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
     if(parseFloat(event.target.value*stop_buy_stop)>parseFloat(localStorage.getItem(curr))){
      setvalid(false)
     }
     else{
      setvalid(true)
      // setlimit_buy_total(parseFloat(event.target.value)*parseFloat(buy_limit_price))
     }
      
    }}></Input>

                <Label>Total  ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
                <Input  invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      
     if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
        setvalid(false)
     }
     else{
      setvalid(true)
    
      setStop_buy_amount(parseFloat(parseFloat(event.target.value) /parseFloat(stop_buy_stop)) )
     }
      
    }}></Input>

                <Button size="lg" className="bg-success" style={{margin:"2rem 0 2rem 0",display:"block",width:"100%"}} type="submit" onClick={()=>{
                     alert(`Are you sure that you want to place a stop-limit buy order for ${parseFloat(stop_buy_amount).toFixed(5)} ${pair.substr(0,pair.indexOf("/"))}_Coins`)
                        axios({
                  method:"POST",
                  url:"https://api.anteagle.tech/hit",
                  headers:{
                    "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
                    "Content-Type": "application/json",
                    Authtoken:"sfsfsff"
                  },
                  data: JSON.stringify({
                    userid : localStorage.getItem("userid"),
                    date: "2021-06-21",
                    pair: pair,
                    type:"Limit",
                    side : "BUY",
                    triggerPrice: stop_buy_trig ,
                    hitPrice :stop_buy_stop,
                    Amount : parseFloat(stop_buy_amount).toFixed(5),
                    filled : "0.0",
                    total : stop_buy_stop*stop_buy_amount
                  }),
                }).then(res=>{console.log(res.data)})
                const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}`
                const tem = parseFloat(localStorage.getItem(`${curr}_Coins`)) - (parseFloat(stop_buy_stop)*parseFloat(stop_buy_amount))
               
                axios({
                  method:"post",
                  url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${tem}&userid=${localStorage.getItem("userid")}`,
                  headers:{
                    "Accept": "application/json",
                  }
                }).then(async res=>{
                  console.log(res.data);
                  await swal("Success","Order Submitted Successfully","success");
                  window.location.href = "/"
                })
              
                }}>Buy {`${pair.substr(0,pair.indexOf('/'))}`}</Button>
              </Form>
          </TabPanel>
      
        </Tabs>
        
       
      </>:
      <Tabs>
          <TabList style={{fontSize:"0.8rem"}}>
            <Tab style={{backgroundColor:!isDarkDes?"white":"#161c2d",color: isDarkDes?"white" :"black"}}>Limit</Tab>
            <Tab style={{backgroundColor:!isDarkDes?"white":"#161c2d",color: isDarkDes?"white" :"black"}}>Market</Tab>
            <Tab style={{backgroundColor:!isDarkDes?"white":"#161c2d",color: isDarkDes?"white" :"black"}}>Take-profit-market
            {/* <Select  style={{fontSize:"0.76rem"}} id="select"  value={sell}
          onChange={(e)=>{
            
            setSell(e.target.value)
          }}>
              <MenuItem value={'Stop-limit'}>Stop-limit</MenuItem>
              <MenuItem value={'Stop-market'}>Stop-market</MenuItem>
              <MenuItem value={'Take-Profit-Limit'}>Take-Profit-Limit</MenuItem>
              <MenuItem value={'Take-Profit-Market'}>Take-Profit-Market</MenuItem>
            </Select> */}
           </Tab>
            
            
          </TabList>
          
          <TabPanel>
          <Form style={{marginBottom:"1rem",color:isDarkDes?"white":"black"}}>
                <Label>Price ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
                <Input placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      setsell_limit_price(parseFloat(event.target.value))
    }}></Input>

              

                <Label>Amount ({`${pair.substr(0,pair.indexOf('/'))}`})</Label>
                <Input invalid={!valid_s} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={sell_limit_amount} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      if(parseFloat(event.target.value) > parseFloat(localStorage.getItem(curr))){
        setvalid_s(false)
      }
      else{
        setvalid_s(true)
        setsell_limit_amount(parseFloat(event.target.value))
      }
      
    }}></Input>

<Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
          const g = parseFloat(localStorage.getItem(`${pair.substr(0,pair.indexOf('/'))}_Coins`)*value/100).toFixed(5) 
          setsell_limit_amount(parseFloat(localStorage.getItem(`${pair.substr(0,pair.indexOf('/'))}_Coins`)*value/100).toFixed(5))
          setsell_limit_total(g*sell_limit_price)
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />


                <Label>Total  ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
                <Input invalid={!valid_s} disabled={true}  style={{color:"black"}} value={sell_limit_total} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf("/")+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(0,pair.indexOf('/'))}_Coins`
      const curdebt = `${pair.substr(0,pair.indexOf('/'))}_Debt`
      

     if(parseFloat(parseFloat(event.target.value)/parseFloat(sell_limit_price))>parseFloat(localStorage.getItem(curr))){
        // alert("do you want to transact");
       const debt=parseFloat(localStorage.getItem(curr) )- parseFloat(event.target.value*buy_limit_price);
       if(localStorage.getItem(curdebt) +debt > -9999  )
        localStorage.setItem( curdebt,localStorage.getItem(curdebt) +debt );
        //console.log(localStorage.getItem(curdebt) +debt);
        
        setvalid_s(false)
     }
     else{
      setvalid_s(true)
      // setsell_limit_amount(parseFloat(event.target.value)/parseFloat(sell_limit_price))
     }
      
    }}></Input>

                <Button size="lg" className="bg-dark" style={{margin:"2rem 0 2rem 0",display:"block",width:"100%"}}  onClick={()=>{
                          alert(`Are you sure that you want to place a sell limit order for ${parseFloat(sell_limit_amount).toFixed(5)} ${pair.substr(0,pair.indexOf("/"))}_Coins`)       
                                axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Limit",
          side : "SELL",
          price : parseFloat(sell_limit_price),
          Amount : sell_limit_amount,
          filled : "0.0",
          total : sell_limit_price*sell_limit_amount
        }),
      }).then(res=>{console.log(res.data)})
      const curr = `${pair.substr(0,pair.indexOf('/'))}`
      //console.log(localStorage.getItem(`${curr}_Coins`) - sell_limit_amount)
      const end = parseFloat(localStorage.getItem(`${curr}_Coins`)) - sell_limit_amount;
      localStorage.setItem(`${curr}_Coins`,end)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${end}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json",
        }
      }).then(async res=>{
        console.log(res.data);
        await swal("Success","Order Submitted Successfully","success");
        window.location.href = "/"
      })


                              }}

                             
                >Sell {`${pair.substr(0,pair.indexOf('/'))}`}</Button>
              </Form>
          </TabPanel>

          <TabPanel>
          <Form  style={{color:isDarkDes?"white":"black"}}>
              <Label>Price  ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
              <Input  placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} value={pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2)} disabled style={{color:"black"}} onChange={(event)=>{
      setsell_market_amount(parseFloat(event.target.value))
    }}></Input>

           

              <Label>Amount ({`${pair.substr(0,pair.indexOf('/'))}`})</Label>
              <Input  placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={sell_market_amount} onChange={(event)=>{
      setsell_market_amount(parseFloat(event.target.value))
    }}></Input>

              <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
          const g = parseFloat(localStorage.getItem(`${pair.substr(0,pair.lastIndexOf('/'))}_Coins`)*value/100).toFixed(5) 
          setsell_market_amount(parseFloat(localStorage.getItem(`${pair.substr(0,pair.lastIndexOf('/'))}_Coins`)*value/100).toFixed(5))
          setsell_market_total(g*(pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2)))
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />

              <Label>Total  ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
              <Input  invalid={!valid_s} value={sell_market_total} disabled={true} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf("/")+1,pair.length)}`} style={{color : "black"}}onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      const curdebt = `${pair.substr(0,pair.indexOf('/'))}_Debt`
     if((parseFloat(event.target.value)/parseFloat(sell_market_price))>localStorage.getItem(curr)){
      setvalid_s(false)
     }
     else{
      setvalid_s(true)
      // setsell_market_amount(parseFloat(event.target.value)/parseFloat(sell_market_price))
     }
      
    }}></Input>

              <Button size="lg" className="bg-dark"  style={{margin:"2rem 0 2rem 0",display:"block",width:"100%"}} 
              
              onClick={()=>{
                alert(`Are you sure that you want to place a sell market order for ${parseFloat(sell_market_amount).toFixed(5)} ${pair.substr(0,pair.indexOf("/"))}_Coins`)
                axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",
        headers:{
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Market",
          side : "SELL",
          price : (pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2)),
          Amount : parseFloat(sell_market_amount),
          filled : "0.0",
          total : parseFloat( (pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2) ) *sell_market_amount),
        }),
      }).then(res=>{})
      var tem= parseFloat(localStorage.getItem(`${pair.substr(0,pair.indexOf('/'))}_Coins`))-parseFloat(sell_market_amount)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${pair.substr(0,pair.indexOf('/')).toLowerCase()}?coins=${tem}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json"
        }
      }).then(async res=>{
        console.log(res.data);
        await swal("Success","Order Submitted Successfully","success");
        window.location.href = "/"
      })
              }}
              
              >Sell {`${pair.substr(0,pair.indexOf('/'))}`}</Button> 
            </Form>
          </TabPanel>

          <TabPanel>
         
         <Form  style={{color:isDarkDes?"white":"black"}}>
           <Label>Trigger Price  ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
           <Input invalid={!valid_s} placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
             
   setStopTake_sell_trig(parseFloat(event.target.value))
           
              if(stopTake_sell_trig> localStorage.getItem(`${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins` ))
                    setvalid_s(false)
              else  
                  setvalid_s(true)
 }}></Input>

<Label>Take Price  ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
           <Input invalid={!valid_s} disabled placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`}  value={pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2)} onChange={(event)=>{
   setStopTake_sell_take(parseFloat(event.target.value))
  
   if(stopTake_sell_take> localStorage.getItem(`${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins` ))
                    setvalid_s(false)
              else{
                   setvalid_s(true)
                }  
 }}></Input>
      {stopTake_sell_trig > (pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2))?  <p style={{color:"red",fontSize:"0.7rem"}} >*Take price must be higher than trigger price</p>:null }

           <Label>Amount ({`${pair.substr(0,pair.indexOf('/'))}`})</Label>
           <Input invalid={!valid_s} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={stopTake_sell_amount} onChange={(event)=>{
   const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
  
  
   
 }}></Input>

           <Slider
     defaultValue={30}
     getAriaValueText={(value)=>{
       const g = parseFloat(localStorage.getItem(`${pair.substr(0,pair.indexOf('/'))}_Coins`)*value/100).toFixed(5) 
       setStopTake_sell_amount(parseFloat(localStorage.getItem(`${pair.substr(0,pair.indexOf('/'))}_Coins`)*value/100).toFixed(5))
       setStopTake_sell_total(parseFloat(g* (pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2))))
     }}
     aria-labelledby="discrete-slider"
     valueLabelDisplay="auto"
     step={10}
     marks
     min={0}
     max={100}
   />

           <Label>Total  ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
           <Input invalid={!valid_s} disabled={true}  style={{color:"black"}} value={stopTake_sell_total} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf("/")+1,pair.length)}`} onChange={(event)=>{
   const curr = `${pair.substr(0,pair.indexOf('/'))}_Coins`
   const curdebt = `${pair.substr(0,pair.indexOf('/'))}_Debt`
   

  if(parseFloat(parseFloat(event.target.value)/parseFloat( (pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2))))>parseFloat(localStorage.getItem(curr))){
    
     
     setvalid_s(false)
  }
  else{
   setvalid_s(true)
  
  }
   
 }}></Input>

           <Button disabled={!valid_s} size="lg"  className="bg-dark"  style={{margin:"2rem 0 2rem 0",display:"block",width:"100%"}} onClick={()=>{
             if(stopTake_sell_trig==0|| stopTake_sell_take==0 ){
               swal("Error","Enter all fields","error")
             }
             alert(`Are you sure that you want to place a take-profit-market order for ${parseFloat(stopTake_sell_amount).toFixed(5)} ${pair.substr(0,pair.indexOf("/"))}_Coins`)      
             axios({
        method:"POST",
        url:"https://api.anteagle.tech/hit",
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Market",
          side : "SELL",
          triggerPrice : parseFloat(stopTake_sell_trig),
          hitPrice: parseFloat( (pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2))),
          Amount :stopTake_sell_amount,
          filled : "0.0",
          total :  parseFloat( (pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2)))* stopTake_sell_amount,
        }),
      }).then(res=>{console.log(res.data)})
      const curr = `${pair.substr(0,pair.indexOf('/'))}`
      //console.log(localStorage.getItem(`${curr}_Coins`) - sell_limit_amount)
      const end = parseFloat(localStorage.getItem(`${curr}_Coins`)) - stopTake_sell_amount;
      localStorage.setItem(`${curr}_Coins`,end)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${end}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json",
        }
      }).then(async res=>{
        console.log(res.data);
        await swal("Success","Order Submitted Successfully","success");
        window.location.href = "/"
      })
           }}>Sell {`${pair.substr(0,pair.indexOf('/'))}`}</Button>
         </Form>
       </TabPanel>



         
        </Tabs>
        }
       

       
        </TabPanel>
        <TabPanel>
            {!exit? 
                <> 
                <p style={{fontSize:"1.1rem",fontWeight:"400",color:isDarkDes?"white":"black"}}>1.Entry Order</p>
              <Tabs>
          <TabList style={{fontSize:"0.8rem",marginTop:"-1rem"}}>
            <Tab style={{backgroundColor:!isDarkDes?"white":"#161c2d",color: isDarkDes?"white" :"black"}}>Limit</Tab>
            <Tab style={{backgroundColor:!isDarkDes?"white":"#161c2d",color: isDarkDes?"white" :"black"}}>Market</Tab>
           
            
            
          </TabList>
          <TabPanel>
              <Form style={{marginBottom:"1rem",color:isDarkDes?"white":"black"}}>
              <Label>Price ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
              <Input onChange={(event)=>{
      setbuy_limit_price(parseFloat(event.target.value) )
      var tempPrice=pricee;
      tempPrice.push(event.target.value);
      setPrice(tempPrice);

    }} placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`}></Input>

           

              <Label>Amount ({`${pair.substr(0,pair.indexOf('/'))}`})</Label>
              <Input  invalid={!valid}  style={{color:"black"}} disabled={true} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={buy_limit_amount} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
     if(parseFloat(event.target.value*buy_limit_price)>parseFloat(localStorage.getItem(curr))){
      setvalid(false)
     }
     else{
      setvalid(true)
      //setbuy_limit_amount(parseFloat(event.target.value))
      var tempQuant=quant;
      tempQuant.push(event.target.value);
      setQuant(tempQuant);
     }
      
    }}></Input>

           

              <Label>Total ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
              <Input  invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      //alert(curr)
     if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
        setvalid(false)
     }
     else{
      setvalid(true)
      
      setbuy_limit_amount(parseFloat(parseFloat(event.target.value) /parseFloat(buy_limit_price)) )
      var tempQuant=quant;
      tempQuant.push(parseFloat(event.target.value)/parseFloat(buy_limit_price));
      setQuant(tempQuant);
     }
      
    }}></Input>

              <Button type="reset" size="lg" className="bg-dark"  style={{margin:"2rem 0 2rem 0",display:"block",width:"100%"}}  onClick={()=>{
                   setfulltradeType("LIMIT")
                  const tempQ=finalQuants;
      tempQ.push(quant[quant.length-1])
      const tempP=finalPrices;
      tempP.push(pricee[pricee.length-1])
      localStorage.setItem(`purchased_quantity_${pair}`,parseFloat(quant[quant.length-1]))
      setFinalQuants(tempQ)
      setFinalPrices(tempP)
      setQuant([])
      setPrice([])
     //console.log("final quant is",finalQuants,"final price is",finalPrices);
        setcurr(quant)
        set_bought_price(pricee)
        setExit(true)
              }}>Next Exits {`>`}</Button>
            </Form>
            </TabPanel>


            <TabPanel>
            <Form  style={{marginBottom:"1rem",color:isDarkDes?"white":"black"}}>
              <Label>Price  ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
   <Input disabled style={{color:"black"}}  type="number" step="any" value={pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2)} onChange={(event)=>{
      var tempPrice=pricee;
      tempPrice.push(event.target.value);
      setPrice(tempPrice);
      // settrade_price(parseFloat(event.target.value) )

    }} >  ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Input>
   <Label>Amount  ({`${pair.substr(0,pair.indexOf('/'))}`})</Label>
   <Input   value={buy_market_amount} disabled={true} style={{color:"black"}} type="number" step="any" name="quantity"  onChange={(event)=>{
      var tempQuant=quant;
      tempQuant.push(event.target.value);
      setQuant(tempQuant);
      // settrade_quantity(parseFloat(event.target.value) )

    }}> </Input>

  
  <Label>Total  ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
   <Input invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      
     if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
        setvalid(false)
     }
     else{
      setvalid(true)
     
      setbuy_market_amount(parseFloat(parseFloat(event.target.value) /parseFloat(pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2))).toFixed(4) )
      var tempQuant=quant;
      tempQuant.push(parseFloat(parseFloat(event.target.value) /parseFloat(pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2))).toFixed(4) );
      setQuant(tempQuant);
     }
      
    }}></Input>
     <Button type="reset" size="lg" className="bg-dark"  style={{margin:"2rem 0 2rem 0",display:"block",width:"100%"}}  onClick={()=>{

          setfulltradeType("MARKET")
                     var tempPrice=pricee;
     tempPrice.push(pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2));
     setPrice(tempPrice);
    const tempQ=finalQuants;
    tempQ.push(quant[quant.length-1])
    const tempP=finalPrices;
    tempP.push(pricee[pricee.length-1])
    localStorage.setItem(`purchased_quantity_${pair}`,parseFloat(quant[quant.length-1]))
    setFinalQuants(tempQ)
    setFinalPrices(tempP)
    setQuant([])
    setPrice([])
     //console.log("final quant is",finalQuants,"final price is",finalPrices);
    setcurr(quant)
    set_bought_price(pricee)
                  setExit(true)
              }}>Next Exits {`>`}</Button>
    </Form>
            </TabPanel>

           
          </Tabs>

                </>:
            
                <> 
                <p style={{fontSize:"1.1rem",fontWeight:"400",color:isDarkDes?"white":"black"}}>1.Exits <span><Button size=" sm"  style={{float:"right"}} onClick={()=>{
                  setExit(false)
                }}> {`<`}Back</Button></span></p>
                <ButtonGroup>
                  <Button  size="lg"  className="bg-success"  onClick={()=>{
                    setActiveE(true)
         
                  }}>
                   Target
                 </Button>
       
                 <Button size="lg" className="bg-dark"  onClick={()=>{
                    setActiveE(false)
         
                  }}>
                  Stop-Loss
                    </Button>
                </ButtonGroup>

                  {activeE ? 
                  
                  <> 
                    <Tabs>
                      <TabList >
                        <Tab style={{backgroundColor:!isDarkDes?"white":"#161c2d",color: isDarkDes?"white" :"black"}}>Stop-market</Tab>
                      </TabList>

                      <TabPanel>
                        <Form style={{marginTop:"0.5rem",color:isDarkDes?"white":"black"}}>
                        <Label>Selling Price ({pair.substr(pair.lastIndexOf("/")+1,pair.length)})</Label>
  <Input  name="price_sell" onChange={(event)=>{
     const tempPrice=pricee;
     tempPrice.push(event.target.value)
     setPrice(tempPrice)
     // setsell_price(parseFloat(event.target.value) )

   }}></Input>

<Label>Selling Amount ({pair.substr(pair.lastIndexOf("/")+1,pair.length)})</Label>
  <Input  disabled  value={full_trade_sell} name="quantity_sell" onChange={(event)=>{
     if(parseFloat(finalQuants[0])-parseFloat(event.target.value) < 0 ){
       //alert("Cannot sell more than you buy");
     }
     else if(parseFloat(localStorage.getItem(`purchased_quantity_${pair}`))-parseFloat(event.target.value)<0){
       //alert(`Only ${parseFloat(localStorage.getItem("purchased_quantity"))-parseFloat(event.target.value)} Left to sell`)
     }
     else{
       if(finalQuants.length == 1){
         localStorage.setItem(`purchased_quantity_${pair}`,parseFloat(finalQuants[0])-parseFloat(event.target.value))
       }
       else{
       localStorage.setItem(`purchased_quantity_${pair}`,parseFloat(localStorage.getItem(`purchased_quantity_${pair}`))-parseFloat(event.target.value))
       }
       const tempQuant=quant;
       tempQuant.push(event.target.value)
       setQuant(tempQuant)
     }
       // setsell_quantity(parseFloat(event.target.value) )

   }}> </Input>
 
 <Slider
       defaultValue={30}
       getAriaValueText={(value)=>{set_full_trade_sell(parseFloat(localStorage.getItem(`purchased_quantity_${pair}`)*value/100).toFixed(5))
       quant.push(localStorage.getItem(`purchased_quantity_${pair}`)*value/100)
       if(value == 100){
         setcontinueselling(true)
       }
       else{
         setcontinueselling(false)
       }
     }
   
     }
       aria-labelledby="discrete-slider"
       valueLabelDisplay="auto"
       step={10}
       marks
       min={0}
       max={100}
     />
   
    
  <Button type="reset" className="bg-dark" disabled={continueselling} style={{marginRight:"0.5rem"}} onClick={()=>{
  
   const tempQ=finalQuants;
   tempQ.push(quant[quant.length-1])
   const tempP=finalPrices;
   tempP.push(pricee[pricee.length-1])
   setFinalQuants(tempQ)
   setFinalPrices(tempP)
   setFulltradeSellType("MARKET")
    //console.log("final quant is",finalQuants,"final price is",finalPrices);
   //alert(quant)
    const ans = localStorage.getItem(`purchased_quantity_${pair}`)-quant[quant.length-1]
    localStorage.setItem(`purchased_quantity_${pair}`,ans)
  }}>Add Target</Button>
    

<Button type="reset" className="bg-success" disabled={!continueselling} onClick={()=>{
   const tempQ=finalQuants;
   tempQ.push(quant[quant.length-1])
   const tempP=finalPrices;
   tempP.push(pricee[pricee.length-1])
   setFinalQuants(tempQ)
   setFinalPrices(tempP)
   setFulltradeSellType("MARKET")
   // setQuant([])
   // setPrice([])
    //console.log("final quant is",finalQuants,"final price is",finalPrices);
    setswitchtrade(true)
    alert("Are you sure that you want to proceed with fulltrade")
 axios({
   method : "POST",
   url : "https://api.anteagle.tech/full_trade",
   headers : {
     "Accept" : "application, text/plain, */*",
     "Content-Type" : "application/json"
   },
   data : JSON.stringify({
     prices : finalPrices,
     quantities : finalQuants,
     pair : pair,
     type :fulltradeType,
     userid:localStorage.getItem("userid")
   })
 }).then(res=>{
   if(res.data.success){
    
     var total=finalPrices[0]*finalQuants[0];
     console.log(total)
     var first = pair.substring(0,pair.indexOf("/"))
     var second=pair.substring(pair.indexOf("/")+1, pair.length)
     const tem = (parseFloat(localStorage.getItem(`${second}_Coins`)) - total).toFixed(3)
     const c= pair.substr(pair.lastIndexOf("/")+1,pair.length).toLowerCase()
     
     axios({
       method:"post",
       url : `https://api.anteagle.tech/get${c}?coins=${tem}&userid=${localStorage.getItem("userid")}`,
       headers:{
         "Accept": "application/json"
       }
     }).then(async res=>{
       console.log(res.data);
      await  swal("Success","Order Submitted Successfully it will execute as you have decided","success")
       setExit(true)
     })
     setFinalPrices([])
     setFinalQuants([])
   }
 })

 
  }}>Submit fulltrade</Button>
                        </Form>

                      </TabPanel>
                    </Tabs>
                  </>: 
                  <> 
                  
                    <Tabs>
                      <TabList>
                        <Tab style={{backgroundColor:!isDarkDes?"white":"#161c2d",color: isDarkDes?"white" :"black"}}>Stop-market</Tab>
                        <Tab style={{backgroundColor:!isDarkDes?"white":"#161c2d",color: isDarkDes?"white" :"black"}}>Stop-limit</Tab>

                      </TabList>

                    <TabPanel>

                    <Form  style={{marginBottom:"2rem",color:isDarkDes?"white":"black"}}>
                    <Label>Trigger Price  ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
           <Input  placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} value={fullStop_market_trig.toFixed(5)} onChange={(event)=>{
              if(event.target.value.length == 0){
                setfullStop_market_trig(0)
              }
                    setfullStop_market_trig(parseFloat(event.target.value).toFixed(5))

                    
                  
                }}></Input>
                    

                        <Label>Profit %</Label>
                        <Input  placeholder={`Percentage loss incurred`} value={fullStop_market_profit1}></Input>
                        <Slider
        value={fullStop_market_profit1}
        defaultValue={0}
       onChange={(e,newvalue)=>{
         if(typeof(newvalue) == 'number'){
            // alert(e)
            setfullStop_market_trig( parseFloat(finalPrices[0]) +( (parseFloat(newvalue)/100 )*parseFloat(finalPrices[0]) ) )
            setfullStop_market_profit1(newvalue)
         }
        }}
     
       
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={-100}
        max={0}
      />
                           <Label>Quantity</Label>
                        <Input value={fullStop_market_quantity}></Input>
                        <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
          setfullStop_market_quantity(parseFloat(localStorage.getItem(`purchased_quantity_${pair}`)*value/100).toFixed(5))
       
      
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
          <Button type="reset" size="lg" className="bg-dark"  style={{display:"block",width:"100%"}} onClick={()=>{
              const temp=stopTypes;
              temp.push(["stop-market","Sell",fullStop_market_trig,fullStop_market_quantity,fullStop_market_profit1+"%"])
              setStopTypes(temp)
            
              alert(`Are you sure you want to place a stop-market order for ${fullStop_market_quantity} ${pair.substr(0,pair.indexOf("/"))}_Coins`)
       axios({
        method:"POST",
        url:"https://api.anteagle.tech/hit",
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Market",
          side : "SELL",
          triggerPrice : parseFloat(fullStop_market_trig),
    
          hitPrice: parseFloat( (pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2))),
          Amount :fullStop_market_quantity,
          filled : "0.0",
          total: fullStop_market_quantity * (parseFloat( (pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2))))
        }),
      }).then(res=>{console.log(res.data)})
      const curr = `${pair.substr(0,pair.indexOf('/'))}`
      //console.log(localStorage.getItem(`${curr}_Coins`) - sell_limit_amount)
      const end = parseFloat(localStorage.getItem(`${curr}_Coins`)) - fullStop_market_quantity;
      localStorage.setItem(`${curr}_Coins`,end)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${end}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json",
        }
      }).then(async res=>{
        console.log(res.data);
        await swal("Success","Order Submitted Successfully","success");
        
      })

          }}>Add Stop-loss </Button>
                        </Form>
                    </TabPanel>
                    
                    
                    <TabPanel>
                    <Form  style={{marginBottom:"2rem",color:isDarkDes?"white":"black"}}>
                    <Label>Trigger Price  ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
           <Input  placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} value={fullStop_limit_trig.toFixed(5)} onChange={(event)=>{
                    
                    if(event.target.value.length == 0){
                     setfullStop_limit_trig(0)
              }
                    setfullStop_limit_trig(parseFloat(event.target.value).toFixed(5))
                  
                }}></Input>
                     <Label>Stop Price  ( {`${pair.substr(pair.indexOf('/')+1,pair.length)}`} )</Label>
           <Input  placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} value={fullStop_limit_stop} onChange={(event)=>{
                    setfullStop_limit_stop(event.target.value)
                  
                }}></Input>
                {fullStop_limit_stop > fullStop_limit_trig?<p style={{color:"red",fontSize:"0.7rem"}}>Stop Price must be lesser than trigger price </p>:null}

                        <Label>Profit %</Label>
                        <Input  placeholder={`Percentage loss incurred`} value={fullStop_limit_profit1}></Input>
                        <Slider
        value={fullStop_limit_profit1}
        defaultValue={0}
        onChange={(e,value)=>{
          if(typeof(value)=="number"){
            setfullStop_limit_trig( parseFloat(finalPrices[0]) +( (parseFloat(value)/100 )*parseFloat(finalPrices[0]) ) )
            setfullStop_limit_profit1(value)
          }
        }}
     
       
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={-100}
        max={0}
      />
                           <Label>Quantity</Label>
                        <Input value={fullStop_limit_quantity}></Input>
                        <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
          setfullStop_limit_quantity(parseFloat(localStorage.getItem(`purchased_quantity_${pair}`)*value/100).toFixed(5))
       
      
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
          <Button type="reset" size="lg" className="bg-dark" style={{display:"block",width:"100%"}} onClick={()=>{
            const temp=stopTypes;
              temp.push(["stop-limit","Sell",fullStop_limit_trig,fullStop_limit_quantity,fullStop_limit_profit1+"%"])
              setStopTypes(temp)
           
            alert(`Are you sure that you want to place a stop-limit order for ${fullStop_limit_quantity} ${pair.substr(0,pair.indexOf("/"))}_Coins `)
                axios({
        method:"POST",
        url:"https://api.anteagle.tech/hit",
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Limit",
          side : "SELL",
          triggerPrice : parseFloat(fullStop_limit_trig),
         
          hitPrice: parseFloat(fullStop_limit_stop),
          Amount :fullStop_limit_quantity,
          filled : "0.0",
          total: fullStop_limit_quantity * parseFloat(fullStop_limit_stop)
        }),
      }).then(res=>{console.log(res.data)})

      const curr = `${pair.substr(0,pair.indexOf('/'))}`
      //console.log(localStorage.getItem(`${curr}_Coins`) - sell_limit_amount)
      const end = parseFloat(localStorage.getItem(`${curr}_Coins`)) - fullStop_limit_quantity;
      localStorage.setItem(`${curr}_Coins`,end)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${end}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json",
        }
      }).then(async res=>{
        console.log(res.data);
        await swal("Success","Order Submitted Successfully","success");
      
      })
          }}>Add Stop-loss </Button>
                        </Form>
                    </TabPanel>
                    </Tabs>
                  
                  </>
                  
                  }


                </> }
              
        </TabPanel>
       
        
        </Tabs>
      </Row>
      {exit ? 
      <>
      <Row style={{marginTop:"1.2rem"}}>
      
      <h5 style={{color:isDarkDes?"white":"black"}}>Trade Overview</h5>
      <Table style={{display:"block",color:isDarkDes?"white":"black"}}>
      <thead style={{fontSize:"0.7rem"}}>
        <tr>
          <th>Type</th>
          <th>Mode</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Profit</th>
        </tr>
      

            
      </thead>
      

      <tbody style={{fontSize:"0.7rem"}}>
      { finalPrices.map((ans,i)=>{
                  return(
                        <>
                        <tr>
                        <td style={{textAlign:"left"}}> {i>0?fulltradeSellType:fulltradeType}</td>
                        <td style={{textAlign:"left"}}> {i > 0 ? 'Sell' : 'Buy'}</td>
                        <td style={{textAlign:"left"}}>{ans}</td>
                        <td style={{textAlign:"left"}}>{finalQuants[i]}</td>
                        </tr>
                        </>
                  )
                  })
                }

                { stopTypes.map((ans1,i)=>{
                  return(
                        <>
                        <tr>
                        <td style={{textAlign:"left"}}> {ans1[0]}</td>
                        <td style={{textAlign:"left"}}> {ans1[1]}</td>
                        <td style={{textAlign:"left"}}>{ans1[2]}</td>
                        <td style={{textAlign:"left"}}>{ans1[3]}</td>
                        <td style={{textAlign:"left"}}>{ans1[4]}</td>
                        </tr>
                        </>
                  )
                  })
                }
           
      </tbody>
    </Table>
      </Row>
      </> :null
    }
</div>

  <div className="col" style={{height:"100vh"}}>
  <div class="tabs" style={{width:"100%",marginBottom:"0.3rem",backgroundColor:isDarkDes?"#161c2d":"white",color:isDarkDes?"white":"black"}}>
      
      <Navbar className="mr-auto" navbar>
        <NavItem style={{marginLeft:"1rem",marginTop:"-1.6rem"}}>
        <UncontrolledDropdown >
            
            <DropdownToggle tag="a" style={{fontSize:"1.2rem",borderRadius:"10px",borderWidth:'4px',textDecoration:"none",color:isDarkDes?"white":"black"}} caret>{pair}    </DropdownToggle>
           
            <DropdownMenu  style={{maxHeight:"20rem" ,overflow:"scroll"}} >
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('BTC/USDT');localStorage.setItem("pair",'BTC/USDT');settradingvalue('BTCUSDT');setlive(liveprice_BTC_u);setlivevol(btc_u_vol)}}>BTC/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('BTC/INRD');localStorage.setItem("pair",'BTC/INRD');settradingvalue('BTCINR');setlive(liveprice_BTC);setlivevol(btc_vol)}}>BTC/INRD</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ETH/USDT');localStorage.setItem("pair",'ETH/USDT');settradingvalue('ETHUSDT');setlive(liveprice_ETH_u);setlivevol(eth_u_vol)}}>ETH/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ETH/INRD');localStorage.setItem("pair",'ETH/INRD');settradingvalue('ETHINR');setlive(liveprice_ETH);setlivevol(eth_vol)}}>ETH/INRD</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('BNB/USDT');localStorage.setItem("pair",'BNB/USDT');settradingvalue('BNBUSDT');setlive(liveprice_BNB_u);setlivevol(bnb_u_vol)}}>BNB/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('BNB/INRD');localStorage.setItem("pair",'BNB/INRD');settradingvalue('BNBINR');setlive(liveprice_BNB);setlivevol(bnb_vol)}}>BNB/INR</DropdownItem>
              
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('KSM/USDT');localStorage.setItem("pair",'KSM/USDT');settradingvalue('KSMUSDT');setlive(liveprice_KSM_u);setlivevol(btc_u_vol)}}>KSM/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('KSM/INRD');localStorage.setItem("pair",'KSM/INRD');settradingvalue('KSMINR');setlive(liveprice_KSM);setlivevol(bnb_vol)}}>KSM/INRD</DropdownItem>
              
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('ATA/USDT');localStorage.setItem("pair",'ATA/USDT');settradingvalue('ATAUSDT');setlive(liveprice_ATA_u);setlivevol(btc_u_vol)}}>ATA/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ATA/INRD');localStorage.setItem("pair",'ATA/INRD');settradingvalue('ATAINR');setlive(liveprice_ATA);setlivevol(bnb_vol)}}>ATA/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('MANA/USDT');localStorage.setItem("pair",'MANA/USDT');settradingvalue('MANAUSDT');setlive(liveprice_MANA_u);setlivevol(btc_u_vol)}}>MANA/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('MANA/INRD');localStorage.setItem("pair",'MANA/INRD');settradingvalue('MANAINR');setlive(liveprice_MANA);setlivevol(bnb_vol)}}>MANA/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('DGB/USDT');localStorage.setItem("pair",'DGB/USDT');settradingvalue('DGBUSDT');setlive(liveprice_DGB_u);setlivevol(btc_u_vol)}}>DGB/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('DGB/INRD');localStorage.setItem("pair",'DGB/INRD');settradingvalue('DGBINR');setlive(liveprice_DGB);setlivevol(bnb_vol)}}>DGB/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('FTM/USDT');localStorage.setItem("pair",'FTM/USDT');settradingvalue('FTMUSDT');setlive(liveprice_FTM_u);setlivevol(btc_u_vol)}}>FTM/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('FTM/INRD');localStorage.setItem("pair",'FTM/INRD');settradingvalue('FTMINR');setlive(liveprice_FTM);setlivevol(bnb_vol)}}>FTM/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('ALICE/USDT');localStorage.setItem("pair",'ALICE/USDT');settradingvalue('ALICEUSDT');setlive(liveprice_ALICE_u);setlivevol(btc_u_vol)}}>ALICE/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ALICE/INRD');localStorage.setItem("pair",'ALICE/INRD');settradingvalue('ALICEINR');setlive(liveprice_ALICE);setlivevol(bnb_vol)}}>ALICE/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('GTC/USDT');localStorage.setItem("pair",'GTC/USDT');settradingvalue('GTCUSDT');setlive(liveprice_GTC_u);setlivevol(btc_u_vol)}}>GTC/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('GTC/INRD');localStorage.setItem("pair",'GTC/INRD');settradingvalue('GTCINR');setlive(liveprice_GTC);setlivevol(bnb_vol)}}>GTC/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('MATIC/USDT');localStorage.setItem("pair",'MATIC/USDT');settradingvalue('MATICUSDT');setlive(liveprice_MATIC_u);setlivevol(btc_u_vol)}}>MATIC/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('MATIC/INRD');localStorage.setItem("pair",'MATIC/INRD');settradingvalue('MATICINR');setlive(liveprice_MATIC);setlivevol(bnb_vol)}}>MATIC/INRD</DropdownItem>
            
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('AXS/USDT');localStorage.setItem("pair",'AXS/USDT');settradingvalue('AXSUSDT');setlive(liveprice_AXS_u);setlivevol(btc_u_vol)}}>AXS/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('AXS/INRD');localStorage.setItem("pair",'AXS/INRD');settradingvalue('AXSINR');setlive(liveprice_AXS);setlivevol(bnb_vol)}}>AXS/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('FTT/USDT');localStorage.setItem("pair",'FTT/USDT');settradingvalue('FTTUSDT');setlive(liveprice_FTT_u);setlivevol(btc_u_vol)}}>FTT/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('FTT/INRD');localStorage.setItem("pair",'FTT/INRD');settradingvalue('FTTINR');setlive(liveprice_FTT);setlivevol(bnb_vol)}}>FTT/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('SOL/USDT');localStorage.setItem("pair",'SOL/USDT');settradingvalue('SOLUSDT');setlive(liveprice_SOL_u);setlivevol(btc_u_vol)}}>SOL/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('SOL/INRD');localStorage.setItem("pair",'SOL/INRD');settradingvalue('SOLINR');setlive(liveprice_SOL);setlivevol(bnb_vol)}}>SOL/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('RUNE/USDT');localStorage.setItem("pair",'RUNE/USDT');settradingvalue('RUNEUSDT');setlive(liveprice_RUNE_u);setlivevol(btc_u_vol)}}>RUNE/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('RUNE/INRD');localStorage.setItem("pair",'RUNE/INRD');settradingvalue('RUNEINR');setlive(liveprice_RUNE);setlivevol(bnb_vol)}}>RUNE/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('UNI/USDT');localStorage.setItem("pair",'UNI/USDT');settradingvalue('UNIUSDT');setlive(liveprice_UNI_u);setlivevol(btc_u_vol)}}>UNI/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('UNI/INRD');localStorage.setItem("pair",'UNI/INRD');settradingvalue('UNIINR');setlive(liveprice_UNI);setlivevol(bnb_vol)}}>UNI/INRD</DropdownItem>
              
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('DOT/USDT');localStorage.setItem("pair",'DOT/USDT');settradingvalue('DOTUSDT');setlive(liveprice_DOT_u);setlivevol(btc_u_vol)}}>DOT/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('DOT/INRD');localStorage.setItem("pair",'DOT/INRD');settradingvalue('DOTINR');setlive(liveprice_DOT);setlivevol(bnb_vol)}}>DOT/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('VET/USDT');localStorage.setItem("pair",'VET/USDT');settradingvalue('VETUSDT');setlive(liveprice_VET_u);setlivevol(btc_u_vol)}}>VET/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('VET/INRD');localStorage.setItem("pair",'VET/INRD');settradingvalue('VETINR');setlive(liveprice_VET);setlivevol(bnb_vol)}}>VET/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('TFUEL/USDT');localStorage.setItem("pair",'TFUEL/USDT');settradingvalue('TFUELUSDT');setlive(liveprice_TFUEL_u);setlivevol(btc_u_vol)}}>TFUEL/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('TFUEL/INRD');localStorage.setItem("pair",'TFUEL/INRD');settradingvalue('TFUELINR');setlive(liveprice_TFUEL);setlivevol(bnb_vol)}}>TFUEL/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('GRT/USDT');localStorage.setItem("pair",'GRT/USDT');settradingvalue('GRTUSDT');setlive(liveprice_GRT_u);setlivevol(btc_u_vol)}}>GRT/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('GRT/INRD');localStorage.setItem("pair",'GRT/INRD');settradingvalue('GRTINR');setlive(liveprice_GRT);setlivevol(bnb_vol)}}>GRT/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('ADA/USDT');localStorage.setItem("pair",'ADA/USDT');settradingvalue('ADAUSDT');setlive(liveprice_ADA_u);setlivevol(btc_u_vol)}}>ADA/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ADA/INRD');localStorage.setItem("pair",'ADA/INRD');settradingvalue('ADAINR');setlive(liveprice_ADA);setlivevol(bnb_vol)}}>ADA/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('FIL/USDT');localStorage.setItem("pair",'FIL/USDT');settradingvalue('FILUSDT');setlive(liveprice_FIL_u);setlivevol(btc_u_vol)}}>FIL/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('FIL/INRD');localStorage.setItem("pair",'FIL/INRD');settradingvalue('FILINR');setlive(liveprice_FIL);setlivevol(bnb_vol)}}>FIL/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('LINK/USDT');localStorage.setItem("pair",'LINK/USDT');settradingvalue('LINKUSDT');setlive(liveprice_LINK_u);setlivevol(btc_u_vol)}}>LINK/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('LINK/INRD');localStorage.setItem("pair",'LINK/INRD');settradingvalue('LINKINR');setlive(liveprice_LINK);setlivevol(bnb_vol)}}>LINK/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('LUNA/USDT');localStorage.setItem("pair",'LUNA/USDT');settradingvalue('LUNAUSDT');setlive(liveprice_LUNA_u);setlivevol(btc_u_vol)}}>LUNA/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('LUNA/INRD');localStorage.setItem("pair",'LUNA/INRD');settradingvalue('LUNAINR');setlive(liveprice_LUNA);setlivevol(bnb_vol)}}>LUNA/INRD</DropdownItem>
  
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('THETA/USDT');localStorage.setItem("pair",'THETA/USDT');settradingvalue('THETAUSDT');setlive(liveprice_FIL_u);setlivevol(btc_u_vol)}}>THETA/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('THETA/INRD');localStorage.setItem("pair",'THETA/INRD');settradingvalue('THETAINR');setlive(liveprice_FIL);setlivevol(bnb_vol)}}>THETA/INRD</DropdownItem>
  
  
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ANTEAG/USDT');localStorage.setItem("pair",'ANTEAG/USDT');settradingvalue('ANTEAGUSDT');setlive(liveprice_ANTEAG_u);setlivevol(ant_u_vol)}}>ANTEAG/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('ANTEAG/INRD');localStorage.setItem("pair",'ANTEAG/INRD');settradingvalue('ANTEAGINR');setlive(liveprice_ANTEAG);setlivevol(ant_vol)}}>ANTEAG/INRD</DropdownItem>
            
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('XRP/USDT');localStorage.setItem("pair",'XRP/USDT');settradingvalue('XRPUSDT');setlive(liveprice_XRP_u);setlivevol(btc_u_vol)}}>XRP/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('XRP/INRD');localStorage.setItem("pair",'XRP/INRD');settradingvalue('XRPINR');setlive(liveprice_XRP);setlivevol(bnb_vol)}}>XRP/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('DOGE/USDT');localStorage.setItem("pair",'DOGE/USDT');settradingvalue('DOGEUSDT');setlive(liveprice_DOGE_u);setlivevol(btc_u_vol)}}>DOGE/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('DOGE/INRD');localStorage.setItem("pair",'DOGE/INRD');settradingvalue('DOGEINR');setlive(liveprice_DOGE);setlivevol(bnb_vol)}}>DOGE/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('USDC/USDT');localStorage.setItem("pair",'USDC/USDT');settradingvalue('USDCUSDT');setlive(liveprice_USDC_u);setlivevol(btc_u_vol)}}>USDC/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('USDC/INRD');localStorage.setItem("pair",'USDC/INRD');settradingvalue('USDCINR');setlive(liveprice_USDC);setlivevol(bnb_vol)}}>USDC/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('AVAX/USDT');localStorage.setItem("pair",'AVAX/USDT');settradingvalue('AVAXUSDT');setlive(liveprice_AVAX_u);setlivevol(btc_u_vol)}}>AVAX/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('AVAX/INRD');localStorage.setItem("pair",'AVAX/INRD');settradingvalue('AVAXINR');setlive(liveprice_AVAX);setlivevol(bnb_vol)}}>AVAX/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('BUSD/USDT');localStorage.setItem("pair",'BUSD/USDT');settradingvalue('BUSDUSDT');setlive(liveprice_BUSD_u);setlivevol(btc_u_vol)}}>BUSD/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('BUSD/INRD');localStorage.setItem("pair",'BUSD/INRD');settradingvalue('BUSDINR');setlive(liveprice_BUSD);setlivevol(bnb_vol)}}>BUSD/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('LTC/USDT');localStorage.setItem("pair",'LTC/USDT');settradingvalue('LTCUSDT');setlive(liveprice_LTC_u);setlivevol(btc_u_vol)}}>LTC/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('LTC/INRD');localStorage.setItem("pair",'LTC/INRD');settradingvalue('LTCINR');setlive(liveprice_LTC);setlivevol(bnb_vol)}}>LTC/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('BCH/USDT');localStorage.setItem("pair",'BCH/USDT');settradingvalue('BCHUSDT');setlive(liveprice_BCH_u);setlivevol(btc_u_vol)}}>BCH/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('BCH/INRD');localStorage.setItem("pair",'BCH/INRD');settradingvalue('BCHINR');setlive(liveprice_BCH);setlivevol(bnb_vol)}}>BCH/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('ALGO/USDT');localStorage.setItem("pair",'ALGO/USDT');settradingvalue('ALGOUSDT');setlive(liveprice_ALGO_u);setlivevol(btc_u_vol)}}>ALGO/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ALGO/INRD');localStorage.setItem("pair",'ALGO/INRD');settradingvalue('ALGOINR');setlive(liveprice_ALGO);setlivevol(bnb_vol)}}>ALGO/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('ATOM/USDT');localStorage.setItem("pair",'ATOM/USDT');settradingvalue('ATOMUSDT');setlive(liveprice_ATOM_u);setlivevol(btc_u_vol)}}>ATOM/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ATOM/INRD');localStorage.setItem("pair",'ATOM/INRD');settradingvalue('ATOMINR');setlive(liveprice_ATOM);setlivevol(bnb_vol)}}>ATOM/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('ICP/USDT');localStorage.setItem("pair",'ICP/USDT');settradingvalue('ICPUSDT');setlive(liveprice_ICP_u);setlivevol(btc_u_vol)}}>ICP/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ICP/INRD');localStorage.setItem("pair",'ICP/INRD');settradingvalue('ICPINR');setlive(liveprice_ICP);setlivevol(bnb_vol)}}>ICP/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('TRX/USDT');localStorage.setItem("pair",'TRX/USDT');settradingvalue('TRXUSDT');setlive(liveprice_TRX_u);setlivevol(btc_u_vol)}}>TRX/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('TRX/INRD');localStorage.setItem("pair",'TRX/INRD');settradingvalue('TRXINR');setlive(liveprice_TRX);setlivevol(bnb_vol)}}>TRX/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('XLM/USDT');localStorage.setItem("pair",'XLM/USDT');settradingvalue('XLMUSDT');setlive(liveprice_XLM_u);setlivevol(btc_u_vol)}}>XLM/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('XLM/INRD');localStorage.setItem("pair",'XLM/INRD');settradingvalue('XLMINR');setlive(liveprice_XLM);setlivevol(bnb_vol)}}>XLM/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('ETC/USDT');localStorage.setItem("pair",'ETC/USDT');settradingvalue('ETCUSDT');setlive(liveprice_ETC_u);setlivevol(btc_u_vol)}}>ETC/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ETC/INRD');localStorage.setItem("pair",'ETC/INRD');settradingvalue('ETCINR');setlive(liveprice_ETC);setlivevol(bnb_vol)}}>ETC/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('XTZ/USDT');localStorage.setItem("pair",'XTZ/USDT');settradingvalue('XTZUSDT');setlive(liveprice_XTZ_u);setlivevol(btc_u_vol)}}>XTZ/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('XTZ/INRD');localStorage.setItem("pair",'XTZ/INRD');settradingvalue('XTZINR');setlive(liveprice_XTZ);setlivevol(bnb_vol)}}>XTZ/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('EOS/USDT');localStorage.setItem("pair",'EOS/USDT');settradingvalue('EOSUSDT');setlive(liveprice_EOS_u);setlivevol(btc_u_vol)}}>EOS/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('EOS/INRD');localStorage.setItem("pair",'EOS/INRD');settradingvalue('EOSINR');setlive(liveprice_EOS);setlivevol(bnb_vol)}}>EOS/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('CAKE/USDT');localStorage.setItem("pair",'CAKE/USDT');settradingvalue('CAKEUSDT');setlive(liveprice_CAKE_u);setlivevol(btc_u_vol)}}>CAKE/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('CAKE/INRD');localStorage.setItem("pair",'CAKE/INRD');settradingvalue('CAKEINR');setlive(liveprice_CAKE);setlivevol(bnb_vol)}}>CAKE/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('EGLD/USDT');localStorage.setItem("pair",'EGLD/USDT');settradingvalue('EGLDUSDT');setlive(liveprice_EGLD_u);setlivevol(btc_u_vol)}}>EGLD/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('EGLD/INRD');localStorage.setItem("pair",'EGLD/INRD');settradingvalue('EGLDINR');setlive(liveprice_EGLD);setlivevol(bnb_vol)}}>EGLD/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('XMR/USDT');localStorage.setItem("pair",'XMR/USDT');settradingvalue('XMRUSDT');setlive(liveprice_XMR_u);setlivevol(btc_u_vol)}}>XMR/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('XMR/INRD');localStorage.setItem("pair",'XMR/INRD');settradingvalue('XMRINR');setlive(liveprice_XMR);setlivevol(bnb_vol)}}>XMR/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('AAVE/USDT');localStorage.setItem("pair",'AAVE/USDT');settradingvalue('AAVEUSDT');setlive(liveprice_AAVE_u);setlivevol(btc_u_vol)}}>AAVE/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('AAVE/INRD');localStorage.setItem("pair",'AAVE/INRD');settradingvalue('AAVEINR');setlive(liveprice_AAVE);setlivevol(bnb_vol)}}>AAVE/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('QNT/USDT');localStorage.setItem("pair",'QNT/USDT');settradingvalue('QNTUSDT');setlive(liveprice_QNT_u);setlivevol(btc_u_vol)}}>QNT/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('QNT/INRD');localStorage.setItem("pair",'QNT/INRD');settradingvalue('QNTINR');setlive(liveprice_QNT);setlivevol(bnb_vol)}}>QNT/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('XEC/USDT');localStorage.setItem("pair",'XEC/USDT');settradingvalue('XECUSDT');setlive(liveprice_XEC_u);setlivevol(btc_u_vol)}}>XEC/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('XEC/INRD');localStorage.setItem("pair",'XEC/INRD');settradingvalue('XECINR');setlive(liveprice_XEC);setlivevol(bnb_vol)}}>XEC/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('HBAR/USDT');localStorage.setItem("pair",'HBAR/USDT');settradingvalue('HBARUSDT');setlive(liveprice_HBAR_u);setlivevol(btc_u_vol)}}>HBAR/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('HBAR/INRD');localStorage.setItem("pair",'HBAR/INRD');settradingvalue('HBARINR');setlive(liveprice_HBAR);setlivevol(bnb_vol)}}>HBAR/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('SHIB/USDT');localStorage.setItem("pair",'SHIB/USDT');settradingvalue('SHIBUSDT');setlive(liveprice_SHIB_u);setlivevol(btc_u_vol)}}>SHIB/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('SHIB/INRD');localStorage.setItem("pair",'SHIB/INRD');settradingvalue('SHIBINR');setlive(liveprice_SHIB);setlivevol(bnb_vol)}}>SHIB/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('NEAR/USDT');localStorage.setItem("pair",'NEAR/USDT');settradingvalue('NEARUSDT');setlive(liveprice_NEAR_u);setlivevol(btc_u_vol)}}>NEAR/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('NEAR/INRD');localStorage.setItem("pair",'NEAR/INRD');settradingvalue('NEARINR');setlive(liveprice_NEAR);setlivevol(bnb_vol)}}>NEAR/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('NEO/USDT');localStorage.setItem("pair",'NEO/USDT');settradingvalue('NEOUSDT');setlive(liveprice_NEO_u);setlivevol(btc_u_vol)}}>NEO/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('NEO/INRD');localStorage.setItem("pair",'NEO/INRD');settradingvalue('NEOINR');setlive(liveprice_NEO);setlivevol(bnb_vol)}}>NEO/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('WAVES/USDT');localStorage.setItem("pair",'WAVES/USDT');settradingvalue('WAVESUSDT');setlive(liveprice_WAVES_u);setlivevol(btc_u_vol)}}>WAVES/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('WAVES/INRD');localStorage.setItem("pair",'WAVES/INRD');settradingvalue('WAVESINR');setlive(liveprice_WAVES);setlivevol(bnb_vol)}}>WAVES/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('BTT/USDT');localStorage.setItem("pair",'BTT/USDT');settradingvalue('BTTUSDT');setlive(liveprice_BTT_u);setlivevol(btc_u_vol)}}>BTT/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('BTT/INRD');localStorage.setItem("pair",'BTT/INRD');settradingvalue('BTTINR');setlive(liveprice_BTT);setlivevol(bnb_vol)}}>BTT/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('MKR/USDT');localStorage.setItem("pair",'MKR/USDT');settradingvalue('MKRUSDT');setlive(liveprice_MKR_u);setlivevol(btc_u_vol)}}>MKR/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('MKR/INRD');localStorage.setItem("pair",'MKR/INRD');settradingvalue('MKRINR');setlive(liveprice_MKR);setlivevol(bnb_vol)}}>MKR/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('SUSHI/USDT');localStorage.setItem("pair",'SUSHI/USDT');settradingvalue('SUSHIUSDT');setlive(liveprice_SUSHI_u);setlivevol(btc_u_vol)}}>SUSHI/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('SUSHI/INRD');localStorage.setItem("pair",'SUSHI/INRD');settradingvalue('SUSHIINR');setlive(liveprice_SUSHI);setlivevol(bnb_vol)}}>SUSHI/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('AR/USDT');localStorage.setItem("pair",'AR/USDT');settradingvalue('ARUSDT');setlive(liveprice_AR_u);setlivevol(btc_u_vol)}}>AR/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('AR/INRD');localStorage.setItem("pair",'AR/INRD');settradingvalue('ARINR');setlive(liveprice_AR);setlivevol(bnb_vol)}}>AR/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('SNX/USDT');localStorage.setItem("pair",'SNX/USDT');settradingvalue('SNXUSDT');setlive(liveprice_SNX_u);setlivevol(btc_u_vol)}}>SNX/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('SNX/INRD');localStorage.setItem("pair",'SNX/INRD');settradingvalue('SNXINR');setlive(liveprice_SNX);setlivevol(bnb_vol)}}>SNX/INRD</DropdownItem>
              
              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('COMP/USDT');localStorage.setItem("pair",'COMP/USDT');settradingvalue('COMPUSDT');setlive(liveprice_COMP_u);setlivevol(btc_u_vol)}}>COMP/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('COMP/INRD');localStorage.setItem("pair",'COMP/INRD');settradingvalue('COMPINR');setlive(liveprice_COMP);setlivevol(bnb_vol)}}>COMP/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('DASH/USDT');localStorage.setItem("pair",'DASH/USDT');settradingvalue('DASHUSDT');setlive(liveprice_DASH_u);setlivevol(btc_u_vol)}}>DASH/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('DASH/INRD');localStorage.setItem("pair",'DASH/INRD');settradingvalue('DASHINR');setlive(liveprice_DASH);setlivevol(bnb_vol)}}>DASH/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('HNT/USDT');localStorage.setItem("pair",'HNT/USDT');settradingvalue('HNTUSDT');setlive(liveprice_HNT_u);setlivevol(btc_u_vol)}}>HNT/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('HNT/INRD');localStorage.setItem("pair",'HNT/INRD');settradingvalue('HNTINR');setlive(liveprice_HNT);setlivevol(bnb_vol)}}>HNT/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('CHZ/USDT');localStorage.setItem("pair",'CHZ/USDT');settradingvalue('CHZUSDT');setlive(liveprice_CHZ_u);setlivevol(btc_u_vol)}}>CHZ/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('CHZ/INRD');localStorage.setItem("pair",'CHZ/INRD');settradingvalue('CHZINR');setlive(liveprice_CHZ);setlivevol(bnb_vol)}}>CHZ/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('ONE/USDT');localStorage.setItem("pair",'ONE/USDT');settradingvalue('ONEUSDT');setlive(liveprice_ONE_u);setlivevol(btc_u_vol)}}>ONE/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ONE/INRD');localStorage.setItem("pair",'ONE/INRD');settradingvalue('ONEINR');setlive(liveprice_ONE);setlivevol(bnb_vol)}}>ONE/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('HOT/USDT');localStorage.setItem("pair",'HOT/USDT');settradingvalue('HOTUSDT');setlive(liveprice_HOT_u);setlivevol(btc_u_vol)}}>HOT/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('HOT/INRD');localStorage.setItem("pair",'HOT/INRD');settradingvalue('HOTINR');setlive(liveprice_HOT);setlivevol(bnb_vol)}}>HOT/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('XEM/USDT');localStorage.setItem("pair",'XEM/USDT');settradingvalue('XEMUSDT');setlive(liveprice_XEM_u);setlivevol(btc_u_vol)}}>XEM/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('XEM/INRD');localStorage.setItem("pair",'XEM/INRD');settradingvalue('XEMINR');setlive(liveprice_XEM);setlivevol(bnb_vol)}}>XEM/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('KLAY/USDT');localStorage.setItem("pair",'KLAY/USDT');settradingvalue('KLAYUSDT');setlive(liveprice_KLAY_u);setlivevol(btc_u_vol)}}>KLAY/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('KLAY/INRD');localStorage.setItem("pair",'KLAY/INRD');settradingvalue('KLAYINR');setlive(liveprice_KLAY);setlivevol(bnb_vol)}}>KLAY/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('DCR/USDT');localStorage.setItem("pair",'DCR/USDT');settradingvalue('DCRUSDT');setlive(liveprice_DCR_u);setlivevol(btc_u_vol)}}>DCR/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('DCR/INRD');localStorage.setItem("pair",'DCR/INRD');settradingvalue('DCRINR');setlive(liveprice_DCR);setlivevol(bnb_vol)}}>DCR/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('ZEC/USDT');localStorage.setItem("pair",'ZEC/USDT');settradingvalue('ZECUSDT');setlive(liveprice_ZEC_u);setlivevol(btc_u_vol)}}>ZEC/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ZEC/INRD');localStorage.setItem("pair",'ZEC/INRD');settradingvalue('ZECINR');setlive(liveprice_ZEC);setlivevol(bnb_vol)}}>ZEC/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('IOST/USDT');localStorage.setItem("pair",'IOST/USDT');settradingvalue('IOSTUSDT');setlive(liveprice_IOST_u);setlivevol(btc_u_vol)}}>IOST/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('IOST/INRD');localStorage.setItem("pair",'IOST/INRD');settradingvalue('IOSTINR');setlive(liveprice_IOST);setlivevol(bnb_vol)}}>IOST/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('ENJ/USDT');localStorage.setItem("pair",'ENJ/USDT');settradingvalue('ENJUSDT');setlive(liveprice_ENJ_u);setlivevol(btc_u_vol)}}>ENJ/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ENJ/INRD');localStorage.setItem("pair",'ENJ/INRD');settradingvalue('ENJINR');setlive(liveprice_ENJ);setlivevol(bnb_vol)}}>ENJ/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('STX/USDT');localStorage.setItem("pair",'STX/USDT');settradingvalue('STXUSDT');setlive(liveprice_STX_u);setlivevol(btc_u_vol)}}>STX/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('STX/INRD');localStorage.setItem("pair",'STX/INRD');settradingvalue('STXINR');setlive(liveprice_STX);setlivevol(bnb_vol)}}>STX/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('TUSD/USDT');localStorage.setItem("pair",'TUSD/USDT');settradingvalue('TUSDUSDT');setlive(liveprice_TUSD_u);setlivevol(btc_u_vol)}}>TUSD/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('TUSD/INRD');localStorage.setItem("pair",'TUSD/INRD');settradingvalue('TUSDINR');setlive(liveprice_TUSD);setlivevol(bnb_vol)}}>TUSD/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('ZIL/USDT');localStorage.setItem("pair",'ZIL/USDT');settradingvalue('ZILUSDT');setlive(liveprice_ZIL_u);setlivevol(btc_u_vol)}}>ZIL/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ZIL/INRD');localStorage.setItem("pair",'ZIL/INRD');settradingvalue('ZILINR');setlive(liveprice_ZIL);setlivevol(bnb_vol)}}>ZIL/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('FLOW/USDT');localStorage.setItem("pair",'FLOW/USDT');settradingvalue('FLOWUSDT');setlive(liveprice_FLOW_u);setlivevol(btc_u_vol)}}>FLOW/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('FLOW/INRD');localStorage.setItem("pair",'FLOW/INRD');settradingvalue('FLOWINR');setlive(liveprice_FLOW);setlivevol(bnb_vol)}}>FLOW/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('QTUM/USDT');localStorage.setItem("pair",'QTUM/USDT');settradingvalue('QTUMUSDT');setlive(liveprice_QTUM_u);setlivevol(btc_u_vol)}}>QTUM/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('QTUM/INRD');localStorage.setItem("pair",'QTUM/INRD');settradingvalue('QTUMINR');setlive(liveprice_QTUM);setlivevol(bnb_vol)}}>QTUM/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('MINA/USDT');localStorage.setItem("pair",'MINA/USDT');settradingvalue('MINAUSDT');setlive(liveprice_MINA_u);setlivevol(btc_u_vol)}}>MINA/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('MINA/INRD');localStorage.setItem("pair",'MINA/INRD');settradingvalue('MINAINR');setlive(liveprice_MINA);setlivevol(bnb_vol)}}>MINA/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('ICX/USDT');localStorage.setItem("pair",'ICX/USDT');settradingvalue('ICXUSDT');setlive(liveprice_ICX_u);setlivevol(btc_u_vol)}}>ICX/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ICX/INRD');localStorage.setItem("pair",'ICX/INRD');settradingvalue('ICXINR');setlive(liveprice_ICX);setlivevol(bnb_vol)}}>ICX/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('OMG/USDT');localStorage.setItem("pair",'OMG/USDT');settradingvalue('OMGUSDT');setlive(liveprice_OMG_u);setlivevol(btc_u_vol)}}>OMG/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('OMG/INRD');localStorage.setItem("pair",'OMG/INRD');settradingvalue('OMGINR');setlive(liveprice_OMG);setlivevol(bnb_vol)}}>OMG/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('BTG/USDT');localStorage.setItem("pair",'BTG/USDT');settradingvalue('BTGUSDT');setlive(liveprice_BTG_u);setlivevol(btc_u_vol)}}>BTG/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('BTG/INRD');localStorage.setItem("pair",'BTG/INRD');settradingvalue('BTGINR');setlive(liveprice_BTG);setlivevol(bnb_vol)}}>BTG/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('BAT/USDT');localStorage.setItem("pair",'BAT/USDT');settradingvalue('BATUSDT');setlive(liveprice_BAT_u);setlivevol(btc_u_vol)}}>BAT/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('BAT/INRD');localStorage.setItem("pair",'BAT/INRD');settradingvalue('BATINR');setlive(liveprice_BAT);setlivevol(bnb_vol)}}>BAT/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('AUDIO/USDT');localStorage.setItem("pair",'AUDIO/USDT');settradingvalue('AUDIOUSDT');setlive(liveprice_AUDIO_u);setlivevol(btc_u_vol)}}>AUDIO/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('AUDIO/INRD');localStorage.setItem("pair",'AUDIO/INRD');settradingvalue('AUDIOINR');setlive(liveprice_AUDIO);setlivevol(bnb_vol)}}>AUDIO/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('ZEN/USDT');localStorage.setItem("pair",'ZEN/USDT');settradingvalue('ZENUSDT');setlive(liveprice_ZEN_u);setlivevol(btc_u_vol)}}>ZEN/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ZEN/INRD');localStorage.setItem("pair",'ZEN/INRD');settradingvalue('ZENINR');setlive(liveprice_ZEN);setlivevol(bnb_vol)}}>ZEN/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('RVN/USDT');localStorage.setItem("pair",'RVN/USDT');settradingvalue('RVNUSDT');setlive(liveprice_RVN_u);setlivevol(btc_u_vol)}}>RVN/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('RVN/INRD');localStorage.setItem("pair",'RVN/INRD');settradingvalue('RVNINR');setlive(liveprice_RVN);setlivevol(bnb_vol)}}>RVN/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('MDX/USDT');localStorage.setItem("pair",'MDX/USDT');settradingvalue('MDXUSDT');setlive(liveprice_MDX_u);setlivevol(btc_u_vol)}}>MDX/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('MDX/INRD');localStorage.setItem("pair",'MDX/INRD');settradingvalue('MDXINR');setlive(liveprice_MDX);setlivevol(bnb_vol)}}>MDX/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('BNT/USDT');localStorage.setItem("pair",'BNT/USDT');settradingvalue('BNTUSDT');setlive(liveprice_BNT_u);setlivevol(btc_u_vol)}}>BNT/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('BNT/INRD');localStorage.setItem("pair",'BNT/INRD');settradingvalue('BNTINR');setlive(liveprice_BNT);setlivevol(bnb_vol)}}>BNT/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('ZRX/USDT');localStorage.setItem("pair",'ZRX/USDT');settradingvalue('ZRXUSDT');setlive(liveprice_ZRX_u);setlivevol(btc_u_vol)}}>ZRX/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ZRX/INRD');localStorage.setItem("pair",'ZRX/INRD');settradingvalue('ZRXINR');setlive(liveprice_ZRX);setlivevol(bnb_vol)}}>ZRX/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('SC/USDT');localStorage.setItem("pair",'SC/USDT');settradingvalue('SCUSDT');setlive(liveprice_SC_u);setlivevol(btc_u_vol)}}>SC/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('SC/INRD');localStorage.setItem("pair",'SC/INRD');settradingvalue('SCINR');setlive(liveprice_SC);setlivevol(bnb_vol)}}>SC/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('ONT/USDT');localStorage.setItem("pair",'ONT/USDT');settradingvalue('ONTUSDT');setlive(liveprice_ONT_u);setlivevol(btc_u_vol)}}>ONT/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ONT/INRD');localStorage.setItem("pair",'ONT/INRD');settradingvalue('ONTINR');setlive(liveprice_ONT);setlivevol(bnb_vol)}}>ONT/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('RAY/USDT');localStorage.setItem("pair",'RAY/USDT');settradingvalue('RAYUSDT');setlive(liveprice_RAY_u);setlivevol(btc_u_vol)}}>RAY/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('RAY/INRD');localStorage.setItem("pair",'RAY/INRD');settradingvalue('RAYINR');setlive(liveprice_RAY);setlivevol(bnb_vol)}}>RAY/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('DYDX/USDT');localStorage.setItem("pair",'DYDX/USDT');settradingvalue('DYDXUSDT');setlive(liveprice_DYDX_u);setlivevol(btc_u_vol)}}>DYDX/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('DYDX/INRD');localStorage.setItem("pair",'DYDX/INRD');settradingvalue('DYDXINR');setlive(liveprice_DYDX);setlivevol(bnb_vol)}}>DYDX/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('PERP/USDT');localStorage.setItem("pair",'PERP/USDT');settradingvalue('PERPUSDT');setlive(liveprice_PERP_u);setlivevol(btc_u_vol)}}>PERP/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('PERP/INRD');localStorage.setItem("pair",'PERP/INRD');settradingvalue('PERPINR');setlive(liveprice_PERP);setlivevol(bnb_vol)}}>PERP/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('GALA/USDT');localStorage.setItem("pair",'GALA/USDT');settradingvalue('GALAUSDT');setlive(liveprice_GALA_u);setlivevol(btc_u_vol)}}>GALA/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('GALA/INRD');localStorage.setItem("pair",'GALA/INRD');settradingvalue('GALAINR');setlive(liveprice_GALA);setlivevol(bnb_vol)}}>GALA/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('ANKR/USDT');localStorage.setItem("pair",'ANKR/USDT');settradingvalue('ANKRUSDT');setlive(liveprice_ANKR_u);setlivevol(btc_u_vol)}}>ANKR/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('ANKR/INRD');localStorage.setItem("pair",'ANKR/INRD');settradingvalue('ANKRINR');setlive(liveprice_ANKR);setlivevol(bnb_vol)}}>ANKR/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('NANO/USDT');localStorage.setItem("pair",'NANO/USDT');settradingvalue('NANOUSDT');setlive(liveprice_NANO_u);setlivevol(btc_u_vol)}}>NANO/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('NANO/INRD');localStorage.setItem("pair",'NANO/INRD');settradingvalue('NANOINR');setlive(liveprice_NANO);setlivevol(bnb_vol)}}>NANO/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('CELO/USDT');localStorage.setItem("pair",'CELO/USDT');settradingvalue('CELOUSDT');setlive(liveprice_CELO_u);setlivevol(btc_u_vol)}}>CELO/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('CELO/INRD');localStorage.setItem("pair",'CELO/INRD');settradingvalue('CELOINR');setlive(liveprice_CELO);setlivevol(bnb_vol)}}>CELO/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('UMA/USDT');localStorage.setItem("pair",'UMA/USDT');settradingvalue('UMAUSDT');setlive(liveprice_UMA_u);setlivevol(btc_u_vol)}}>UMA/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('UMA/INRD');localStorage.setItem("pair",'UMA/INRD');settradingvalue('UMAINR');setlive(liveprice_UMA);setlivevol(bnb_vol)}}>UMA/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('C98/USDT');localStorage.setItem("pair",'C98/USDT');settradingvalue('C98USDT');setlive(liveprice_C98_u);setlivevol(btc_u_vol)}}>C98/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('C98/INRD');localStorage.setItem("pair",'C98/INRD');settradingvalue('C98INR');setlive(liveprice_C98);setlivevol(bnb_vol)}}>C98/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('CELR/USDT');localStorage.setItem("pair",'CELR/USDT');settradingvalue('CELRUSDT');setlive(liveprice_CELR_u);setlivevol(btc_u_vol)}}>CELR/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('CELR/INRD');localStorage.setItem("pair",'CELR/INRD');settradingvalue('CELRINR');setlive(liveprice_CELR);setlivevol(bnb_vol)}}>CELR/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('SAND/USDT');localStorage.setItem("pair",'SAND/USDT');settradingvalue('SANDUSDT');setlive(liveprice_SAND_u);setlivevol(btc_u_vol)}}>SAND/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('SAND/INRD');localStorage.setItem("pair",'SAND/INRD');settradingvalue('SANDINR');setlive(liveprice_SAND);setlivevol(bnb_vol)}}>SAND/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('POLY/USDT');localStorage.setItem("pair",'POLY/USDT');settradingvalue('POLYUSDT');setlive(liveprice_POLY_u);setlivevol(btc_u_vol)}}>POLY/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('POLY/INRD');localStorage.setItem("pair",'POLY/INRD');settradingvalue('POLYINR');setlive(liveprice_POLY);setlivevol(bnb_vol)}}>POLY/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('FET/USDT');localStorage.setItem("pair",'FET/USDT');settradingvalue('FETUSDT');setlive(liveprice_FET_u);setlivevol(btc_u_vol)}}>FET/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('FET/INRD');localStorage.setItem("pair",'FET/INRD');settradingvalue('FETINR');setlive(liveprice_FET);setlivevol(bnb_vol)}}>FET/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('1INCH/USDT');localStorage.setItem("pair",'1INCH/USDT');settradingvalue('1INCHUSDT');setlive(liveprice_1INCH_u);setlivevol(btc_u_vol)}}>1INCH/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('1INCH/INRD');localStorage.setItem("pair",'1INCH/INRD');settradingvalue('1INCHINR');setlive(liveprice_1INCH);setlivevol(bnb_vol)}}>1INCH/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('LRC/USDT');localStorage.setItem("pair",'LRC/USDT');settradingvalue('LRCUSDT');setlive(liveprice_LRC_u);setlivevol(btc_u_vol)}}>LRC/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('LRC/INRD');localStorage.setItem("pair",'LRC/INRD');settradingvalue('LRCINR');setlive(liveprice_LRC);setlivevol(bnb_vol)}}>LRC/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('KAVA/USDT');localStorage.setItem("pair",'KAVA/USDT');settradingvalue('KAVAUSDT');setlive(liveprice_KAVA_u);setlivevol(btc_u_vol)}}>KAVA/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('KAVA/INRD');localStorage.setItem("pair",'KAVA/INRD');settradingvalue('KAVAINR');setlive(liveprice_KAVA);setlivevol(bnb_vol)}}>KAVA/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('WRX/USDT');localStorage.setItem("pair",'WRX/USDT');settradingvalue('WRXUSDT');setlive(liveprice_WRX_u);setlivevol(btc_u_vol)}}>WRX/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('WRX/INRD');localStorage.setItem("pair",'WRX/INRD');settradingvalue('WRXINR');setlive(liveprice_WRX);setlivevol(bnb_vol)}}>WRX/INRD</DropdownItem>

              <DropdownItem style={{color:"black"}}  onClick={()=>{setpair('RSR/USDT');localStorage.setItem("pair",'RSR/USDT');settradingvalue('RSRUSDT');setlive(liveprice_RSR_u);setlivevol(btc_u_vol)}}>RSR/USDT</DropdownItem>
              <DropdownItem style={{color:"black"}} onClick={()=>{setpair('RSR/INRD');localStorage.setItem("pair",'RSR/INRD');settradingvalue('RSRINR');setlive(liveprice_RSR);setlivevol(bnb_vol)}}>RSR/INRD</DropdownItem>

             




            </DropdownMenu>
          
          </UncontrolledDropdown>
        </NavItem>
        <Collapse isOpen={isOpen} navbar>     
        <NavItem style={{marginLeft:"2rem",fontSize:'1.2rem',textAlign:"center",paddingRight:"20px"}}>
              <CardText >Current {pair.substr(0,pair.indexOf('/'))} Price</CardText>
              <CardText style={{color:"green",fontWeight:"bold",marginTop:"-1rem"}}>
              {pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="XRP/USDT"?liveprice_XRP:pair=="XRP/INRD"?parseFloat(liveprice_XRP*conversion).toFixed(2):pair=="DOGE/USDT"?liveprice_DOGE:pair=="DOGE/INRD"?parseFloat(liveprice_DOGE*conversion).toFixed(2):pair=="USDC/USDT"?liveprice_USDC:pair=="USDC/INRD"?parseFloat(liveprice_USDC*conversion).toFixed(2) :pair=="AVAX/USDT"?liveprice_AVAX:pair=="AVAX/INRD"?parseFloat(liveprice_AVAX*conversion).toFixed(2):pair=="BUSD/USDT"?liveprice_BUSD:pair=="BUSD/INRD"?parseFloat(liveprice_BUSD*conversion).toFixed(2):pair=="LTC/USDT"?liveprice_LTC:pair=="LTC/INRD"?parseFloat(liveprice_LTC*conversion).toFixed(2):pair=="BCH/USDT"?liveprice_BCH:pair=="BCH/INRD"?parseFloat(liveprice_BCH*conversion).toFixed(2):pair=="ALGO/USDT"?liveprice_ALGO:pair=="ALGO/INRD"?parseFloat(liveprice_ALGO*conversion).toFixed(2):pair=="ATOM/USDT"?liveprice_ATOM:pair=="ATOM/INRD"?parseFloat(liveprice_ATOM*conversion).toFixed(2):pair=="ICP/USDT"?liveprice_ICP:pair=="ICP/INRD"?parseFloat(liveprice_ICP*conversion).toFixed(2):pair=="TRX/USDT"?liveprice_TRX:pair=="TRX/INRD"?parseFloat(liveprice_TRX*conversion).toFixed(2): pair=="XLM/USDT"?liveprice_XLM:pair=="XLM/INRD"?parseFloat(liveprice_XLM*conversion).toFixed(2):pair=="ETC/USDT"?liveprice_ETC:pair=="ETC/INRD"?parseFloat(liveprice_ETC*conversion).toFixed(2):pair=="XTZ/USDT"?liveprice_XTZ:pair=="XTZ/INRD"?parseFloat(liveprice_XTZ*conversion).toFixed(2):pair=="EOS/USDT"?liveprice_EOS:pair=="EOS/INRD"?parseFloat(liveprice_EOS*conversion).toFixed(2):pair=="CAKE/USDT"?liveprice_CAKE:pair=="CAKE/INRD"?parseFloat(liveprice_CAKE*conversion).toFixed(2):pair=="EGLD/USDT"?liveprice_EGLD:pair=="EGLD/INRD"?parseFloat(liveprice_EGLD*conversion).toFixed(2):pair=="XMR/USDT"?liveprice_XMR:pair=="XMR/INRD"?parseFloat(liveprice_XMR*conversion).toFixed(2):pair=="AAVE/USDT"?liveprice_AAVE:pair=="AAVE/INRD"?parseFloat(liveprice_AAVE*conversion).toFixed(2):pair=="QNT/USDT"?liveprice_QNT:pair=="QNT/INRD"?parseFloat(liveprice_QNT*conversion).toFixed(2):pair=="XEC/USDT"?liveprice_XEC:pair=="XEC/INRD"?parseFloat(liveprice_XEC*conversion).toFixed(2):pair=="HBAR/USDT"?liveprice_HBAR:pair=="HBAR/INRD"?parseFloat(liveprice_HBAR*conversion).toFixed(2):pair=="SHIB/USDT"?liveprice_SHIB:pair=="SHIB/INRD"?parseFloat(liveprice_SHIB*conversion).toFixed(2):pair=="NEAR/USDT"?liveprice_NEAR:pair=="NEAR/INRD"?parseFloat(liveprice_NEAR*conversion).toFixed(2):pair=="NEO/USDT"?liveprice_NEO:pair=="NEO/INRD"?parseFloat(liveprice_NEO*conversion).toFixed(2):pair=="WAVES/USDT"?liveprice_WAVES:pair=="WAVES/INRD"?parseFloat(liveprice_WAVES*conversion).toFixed(2):pair=="BTT/USDT"?liveprice_BTT:pair=="BTT/INRD"?parseFloat(liveprice_BTT*conversion).toFixed(2):pair=="MKR/USDT"?liveprice_MKR:pair=="MKR/INRD"?parseFloat(liveprice_MKR*conversion).toFixed(2):pair=="SUSHI/USDT"?liveprice_SUSHI:pair=="SUSHI/INRD"?parseFloat(liveprice_SUSHI*conversion).toFixed(2):pair=="AR/USDT"?liveprice_AR:pair=="AR/INRD"?parseFloat(liveprice_AR*conversion).toFixed(2):pair=="SNX/USDT"?liveprice_SNX:pair=="SNX/INRD"?parseFloat(liveprice_SNX*conversion).toFixed(2):pair=="COMP/USDT"?liveprice_COMP:pair=="COMP/INRD"?parseFloat(liveprice_COMP*conversion).toFixed(2):pair=="DASH/USDT"?liveprice_DASH:pair=="DASH/INRD"?parseFloat(liveprice_DASH*conversion).toFixed(2):pair=="HNT/USDT"?liveprice_HNT:pair=="HNT/INRD"?parseFloat(liveprice_HNT*conversion).toFixed(2):pair=="CHZ/USDT"?liveprice_CHZ:pair=="CHZ/INRD"?parseFloat(liveprice_CHZ*conversion).toFixed(2):pair=="ONE/USDT"?liveprice_ONE:pair=="ONE/INRD"?parseFloat(liveprice_ONE*conversion).toFixed(2):pair=="HOT/USDT"?liveprice_HOT:pair=="HOT/INRD"?parseFloat(liveprice_HOT*conversion).toFixed(2):pair=="XEM/USDT"?liveprice_XEM:pair=="XEM/INRD"?parseFloat(liveprice_XEM*conversion).toFixed(2):pair=="KLAY/USDT"?liveprice_KLAY:pair=="KLAY/INRD"?parseFloat(liveprice_KLAY*conversion).toFixed(2):pair=="DCR/USDT"?liveprice_DCR:pair=="DCR/INRD"?parseFloat(liveprice_DCR*conversion).toFixed(2):pair=="ZEC/USDT"?liveprice_ZEC:pair=="ZEC/INRD"?parseFloat(liveprice_ZEC*conversion).toFixed(2):pair=="IOST/USDT"?liveprice_IOST:pair=="IOST/INRD"?parseFloat(liveprice_IOST*conversion).toFixed(2):pair=="ENJ/USDT"?liveprice_ENJ:pair=="ENJ/INRD"?parseFloat(liveprice_ENJ*conversion).toFixed(2):pair=="STX/USDT"?liveprice_STX:pair=="STX/INRD"?parseFloat(liveprice_STX*conversion).toFixed(2):pair=="TUSD/USDT"?liveprice_TUSD:pair=="TUSD/INRD"?parseFloat(liveprice_TUSD*conversion).toFixed(2):pair=="ZIL/USDT"?liveprice_ZIL:pair=="ZIL/INRD"?parseFloat(liveprice_ZIL*conversion).toFixed(2):pair=="FLOW/USDT"?liveprice_FLOW:pair=="FLOW/INRD"?parseFloat(liveprice_FLOW*conversion).toFixed(2):pair=="QTUM/USDT"?liveprice_QTUM:pair=="QTUM/INRD"?parseFloat(liveprice_QTUM*conversion).toFixed(2):pair=="MINA/USDT"?liveprice_MINA:pair=="MINA/INRD"?parseFloat(liveprice_MINA*conversion).toFixed(2):pair=="ICX/USDT"?liveprice_ICX:pair=="ICX/INRD"?parseFloat(liveprice_ICX*conversion).toFixed(2):pair=="OMG/USDT"?liveprice_OMG:pair=="OMG/INRD"?parseFloat(liveprice_OMG*conversion).toFixed(2):pair=="BTG/USDT"?liveprice_BTG:pair=="BTG/INRD"?parseFloat(liveprice_BTG*conversion).toFixed(2):pair=="BAT/USDT"?liveprice_BAT:pair=="BAT/INRD"?parseFloat(liveprice_BAT*conversion).toFixed(2):pair=="AUDIO/USDT"?liveprice_AUDIO:pair=="AUDIO/INRD"?parseFloat(liveprice_AUDIO*conversion).toFixed(2):pair=="ZEN/USDT"?liveprice_ZEN:pair=="ZEN/INRD"?parseFloat(liveprice_ZEN*conversion).toFixed(2):pair=="RVN/USDT"?liveprice_RVN:pair=="RVN/INRD"?parseFloat(liveprice_RVN*conversion).toFixed(2):pair=="MDX/USDT"?liveprice_MDX:pair=="MDX/INRD"?parseFloat(liveprice_MDX*conversion).toFixed(2):pair=="BNT/USDT"?liveprice_BNT:pair=="BNT/INRD"?parseFloat(liveprice_BNT*conversion).toFixed(2):pair=="ZRX/USDT"?liveprice_ZRX:pair=="ZRX/INRD"?parseFloat(liveprice_ZRX*conversion).toFixed(2):pair=="ONT/USDT"?liveprice_ONT:pair=="ONT/INRD"?parseFloat(liveprice_ONT*conversion).toFixed(2):pair=="RAY/USDT"?liveprice_RAY:pair=="RAY/INRD"?parseFloat(liveprice_RAY*conversion).toFixed(2):pair=="SC/USDT"?liveprice_SC:pair=="SC/INRD"?parseFloat(liveprice_SC*conversion).toFixed(2):pair=="DYDX/USDT"?liveprice_DYDX:pair=="DYDX/INRD"?parseFloat(liveprice_DYDX*conversion).toFixed(2):pair=="PERP/USDT"?liveprice_PERP:pair=="PERP/INRD"?parseFloat(liveprice_PERP*conversion).toFixed(2):pair=="GALA/USDT"?liveprice_GALA:pair=="GALA/INRD"?parseFloat(liveprice_GALA*conversion).toFixed(2):pair=="ANKR/USDT"?liveprice_ANKR:pair=="ANKR/INRD"?parseFloat(liveprice_ANKR*conversion).toFixed(2):pair=="NANO/USDT"?liveprice_NANO:pair=="NANO/INRD"?parseFloat(liveprice_NANO*conversion).toFixed(2):pair=="CELO/USDT"?liveprice_CELO:pair=="CELO/INRD"?parseFloat(liveprice_CELO*conversion).toFixed(2):pair=="UMA/USDT"?liveprice_UMA:pair=="UMA/INRD"?parseFloat(liveprice_UMA*conversion).toFixed(2):pair=="C98/USDT"?liveprice_C98:pair=="C98/INRD"?parseFloat(liveprice_C98*conversion).toFixed(2):pair=="CELR/USDT"?liveprice_CELR:pair=="CELR/INRD"?parseFloat(liveprice_CELR*conversion).toFixed(2):pair=="SAND/USDT"?liveprice_SAND:pair=="SAND/INRD"?parseFloat(liveprice_SAND*conversion).toFixed(2):pair=="POLY/USDT"?liveprice_POLY:pair=="POLY/INRD"?parseFloat(liveprice_POLY*conversion).toFixed(2):pair=="FET/USDT"?liveprice_FET:pair=="FET/INRD"?parseFloat(liveprice_FET*conversion).toFixed(2):pair=="1INCH/USDT"?liveprice_1INCH:pair=="1INCH/INRD"?parseFloat(liveprice_1INCH*conversion).toFixed(2):pair=="LRC/USDT"?liveprice_LRC:pair=="LRC/INRD"?parseFloat(liveprice_LRC*conversion).toFixed(2):pair=="KAVA/USDT"?liveprice_KAVA:pair=="KAVA/INRD"?
              parseFloat(liveprice_KAVA*conversion).toFixed(2):pair=="WRX/USDT"?liveprice_WRX:pair=="WRX/INRD"?parseFloat(liveprice_WRX*conversion).toFixed(2):pair=="RSR/USDT"?liveprice_RSR:pair=="RSR/INRD"?parseFloat(liveprice_RSR*conversion).toFixed(2) : pair == "ANTEAG/USDT" ? parseFloat(8.08/conversion).toFixed(4) : pair =="ANTEAG/INRD" ? parseFloat(8.08) :pair=="THETA/USDT"?liveprice_THETA :parseFloat(liveprice_THETA*conversion).toFixed(2)}  
              {pair.substr(pair.indexOf('/')+1,pair.length)}</CardText>
            </NavItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <CardText>USDT:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</CardText><CardText style={{color:"green",fontWeight:"bold",marginTop:"-0.1rem"}}>{localStorage.getItem("USDT_Coins")}</CardText>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <CardText>INRD:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</CardText><CardText style={{color:"green",fontWeight:"bold",marginTop:"-1rem"}}>{localStorage.getItem("INRD_Coins")}</CardText>
            </Collapse>  
       
      </Navbar>                
  </div>
  <TVChartContainer theme={isDarkDes? "Dark":"Light"} pair={pair == "ANTEAG/USDT" || pair == 'ANTEAG/INRD' ? `AntEagle:${pair}` : `Binance:${pair}`}/>

<div style={{height:"100rem"}}>
<Col xs="11" style={{margin:"6.5rem 0 0 0.9rem"}} >
            <Card style={{backgroundColor:isDarkDes?"#161c2d":"white"}}>
             
              <CardBody>
               <Tabs>
                <TabList>
                  <Tab  style={{backgroundColor:isDarkDes?"#161c2d":"white",color: isDarkDes?"white":"black"}}>Open Orders({myorders.length})</Tab>
                  <Tab  style={{backgroundColor:isDarkDes?"#161c2d":"white",color: isDarkDes?"white":"black"}}>Order History({allorder.length})</Tab>
                  <Tab  style={{backgroundColor:isDarkDes?"#161c2d":"white",color: isDarkDes?"white":"black"}}>Trade History({fillorders.length}))</Tab>
                  
                </TabList>
                <TabPanel>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr style={{color: isDarkDes?"white":"black"}}>
                    <th>Order ID</th>
                      <th>Date</th>
                      <th>Pair</th>
                      <th>type</th>
                      <th>Side</th>
                      <th>Price</th>
                      <th> Amount</th>
                      <th>Filled</th>
                      <th>Total</th>
                      <th>status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody style={{color: isDarkDes?"white":"black"}} >
                  {myorders.map((ans,i)=>{
                   return(
                    <tr>
                      {  ans.map((res,i)=>{
                    return(
                      <td>{res}</td>
                    )
                   })}
                  <td><Button title="Cancel" onClick={()=>{
                    axios({
                      method:'post',
                      url : `https://api.anteagle.tech/cancel?userid=${localStorage.getItem("userid")}`,
                      headers:{
                        "Accept": "application/json, text/plain, */*",
                        'Content-type' : "application/json"
                      },
                      data : JSON.stringify({
                        date : ans[0],
                        pair : ans[1],
                        type : ans[2],
                        side : ans[3],
                        price : ans[4],
                        Amount : ans[5],
                        filled : ans[6],
                        total : ans[7],
                        status : ans[8],

                      })
                    }).then(res=>{
                      //console.log(res.data)
                      swal("Canceled","Your order Canceled Successfully","success")
                    })
                  }}>Cancel</Button></td>
                       </tr>
                   )


                 })}

  
                  </tbody>
                </Table>
                </TabPanel>
                <TabPanel>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr style={{color: isDarkDes?"white":"black"}}>
                    <th>Order ID</th>
                      <th>Date</th>
                      <th>Pair</th>
                      <th>type</th>
                      <th>Side</th>
                      <th>Price</th>
                      <th> Amount</th>
                      <th>Filled</th>
                      <th>Total</th>
                      <th>status</th>
                    </tr>
                  </thead>
                  <tbody style={{color: isDarkDes?"white":"black"}}>
                
                  {allorder.map((ans,i)=>{
                   return(
                    <tr>
                      {  ans.map((res,i)=>{
                    return(
                      <td>{res}</td>
                    )
                   })}

                       </tr>
                   )


                 })}
               
                    
                  </tbody>
                </Table>
                </TabPanel>
                <TabPanel>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr style={{color: isDarkDes?"white":"black"}}>
                    <th>Order ID</th>
                      <th>Date</th>
                      <th>Pair</th>
                      <th>type</th>
                      <th>Side</th>
                      <th>Price</th>
                      <th> Amount</th>
                      <th>Filled</th>
                      <th>Total</th>
                      <th>status</th>
                    </tr>
                  </thead>
                  <tbody style={{color: isDarkDes?"white":"black"}}>
                
                 {fillorders.map((ans,i)=>{
                   return(
                    <tr>
                      {  ans.map((res,i)=>{
                    return(
                      <td>{res}</td>
                    )
                   })}
                 
                       </tr>
                   )
                 
                      
                 })}
                 
               
                    
                  </tbody>
                </Table>
                </TabPanel>
               </Tabs>
              </CardBody>
            </Card>
          </Col>         
</div>
  </div>
 
</div> </body> : portfolio ?
<>
<body style={{backgroundColor:isDarkDes?"#212529":"white"}}>
<div className="row" style={{padding:"40px"}}>
<div className="col chart2" style={{backgroundColor:isDarkDes?"#161c2d":"white",color: isDarkDes?"white":"black"}}>
<h3>Estimated Value</h3>
<div className="row" style={{marginTop:"2rem",padding:"10px"}}>
  <div className="col">
  {wal.map((ans,i)=>{
                   return(
                    <ul><img style={{height:"30px",width:"30px"}} src={ans[0].includes("USDT")?usdt:ans[0].includes("TFUEL")?tfuel :ans[0].includes("THETA")?theta:ans[0].includes("UNI")?uni:ans[0].includes("VET")?vet:ans[0].includes("RUNE")?rune:ans[0].includes("LUNA")?luna:ans[0].includes("LINK")?link:ans[0].includes("GTC")?gtc:ans[0].includes("FTT")?ftt:ans[0].includes("FTM")?ftm:ans[0].includes("FIL")?fil:ans[0].includes("ATA")?ata:ans[0].includes("AXS")?axs:ans[0].includes("ALICE")?alice:ans[0].includes("MANA")?mana:ans[0].includes("MATIC")?matic:ans[0].includes("ADA")?ada:ans[0].includes("SOL")?sol:ans[0].includes("DGB")?dgb:ans[0].includes("GRT")?grt:ans[0].includes("KSM")?ksm:ans[0].includes("BTC")?logobtc:ans[0].includes("BNB")?bnb:ans[0].includes("ETH")?eth:dot}           ></img> {ans[1]} {ans[0].substr(0,ans[0].indexOf("_"))} </ul>
                        
                   )
                 
                      
                 })}
                
  </div>
</div>

</div>

<div className="col chart1" style={{backgroundColor:isDarkDes?"#161c2d":"white",color: isDarkDes?"white":"black"}}>
<h3 >PortFolio Distribution</h3>
<div style={{height:"30rem"}} id="chartdiv"></div>

</div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
  <div className="chart3"  style={{backgroundColor:isDarkDes?"#161c2d":"white",color: isDarkDes?"white":"black"}}>
    <h1>Balance</h1>
  <div className='post-body' id=' post-body'>
  <div itemprop='description'>
    <div className='clear'></div>
    <table cellPadding="0" cellspacing="0" style={{textAlign: "left"}}>
      <tbody >
        <tr style={{backgroundColor:isDarkDes?"#161c2d":"white",color: isDarkDes?"white":"black"}} >
          <th >Asset</th>
          <th >Amount</th>
        </tr>
        
            
       {
         wal.map((ans,i)=>{
           return(
             <tr>
               {
                 ans.map((res,j)=>{
                   return(

                    <td style={{backgroundColor:isDarkDes?"#161c2d":"white",color: isDarkDes?"white":"black"}}>{res}</td>
                   )
                 })
               }
             </tr>
           )
         })
       }
               
       
      </tbody>
    </table>
  </div>
</div>
  </div>
  <br/><br/>
  </body>
</> : swap? <> 
                      {/* <div className="row" style={{paddingRight:"40px",marginLeft:"40px"}}> */}
<body  style={{backgroundColor:isDarkDes?"#212529":"white"}} >
<br/>
<div class="tabs swap" style={{width:"40%",margin:"0 28rem 6rem",paddingTop:"4rem",borderRadius:"3rem",backgroundColor:isDarkDes?"#161c2d":"white",color: isDarkDes?"white":"black"}}>    
                          
        <Row>
          <Col>
           
              <h3>SWAP YOUR COINS</h3>
              <CardBody style={{alignSelf:"center",width:"100%"}}>
                
                    
                  <div style={{ textColor: "black", marginLeft: "1rem" }}>
                    <h3 style={{  fontFamily: "Kanit,sans-serif" }}>Exchange</h3>
                   
                  </div>


              

                  <Label style={{  padding: "0.3rem", width: "99%" }}>From</Label>
                    <div className="input-swap"> 
                     
                      <p style={{marginLeft:"0.7rem",marginTop:"0.5rem",color:"black"}}>Max Available: {localStorage.getItem(`${butnval}_Coins`)}   <button className="btn btn-sm btn-outline-warning" style={{borderRadius:"1.2rem"}} onClick={()=>{
                        setFullValue(!fullValue)
                        if(fullValue)
                          setfromvalue(localStorage.getItem(`${butnval}_Coins`))
                        else
                          setfromvalue('')
                      }} > Max</button> </p>
                      <Row>
                      <Col>
                      <input className="inp-swap" placeholder={`ENTER ${butnval}`} value={fromvalue} onChange={(e) => {
                        if(e.target.value.length == 0){
                          setfromvalue('')
                        }
                        else if (parseFloat(e.target.value) > parseFloat(localStorage.getItem(`${butnval}_Coins`))) {
                          alert("Please Enter Amount less than or equal to your wallet balance")
                          setvalid1(false);
                        }
                        else {
                          // setfromvalue('')
                          console.log(parseFloat(e.target.value))
                          setfromvalue(e.target.value)
                          //console.log("from>>>>>>>>>>",from)
                          //console.log("to>>>>>>>>>>>>",to)
                          //console.log(parseFloat(e.target.value))

                          setvalid1(true)
                          if (butnval == 'ETH') {  
                          if( to == 'INRD'){
                            setfinal(liveusd * liveprice_ETH * parseFloat(e.target.value) * 0.98)
                          }
                          else if(to == 'USDT'){
                            setfinal(liveprice_ETH * parseFloat(e.target.value) * 0.98)
                          }
                          else if(to == 'BNB'){
                            setfinal(((liveprice_ETH * parseFloat(e.target.value))/(liveprice_BNB)) * 0.98)
                          }
                          else if(to == 'BTC'){
                            setfinal(liveprice_BTC * parseFloat(e.target.value) * 0.98)
                          }
                          else{
                            alert("Cannot convert to same type")
                          }}
                          else if (butnval == 'BTC') {
                            if( to == 'INRD'){
                              //console.log(75 * 2600000 * parseFloat(e.target.value) * 0.98 )
                              setfinal(75 * 2600000 * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(to == 'USDT'){
                              setfinal(liveprice_BTC * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(to == 'BNB'){
                              setfinal(liveprice_BNB * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(to == 'ETH'){
                              setfinal(liveprice_ETH * parseFloat(e.target.value) * 0.98 )
                            }
                            else{
                              alert("Cannot convert to same type")
                            }
                            
                          }
                          else if (butnval == 'BNB') {  
                            if( to == 'INRD'){
                            setfinal(75 * liveprice_BTC * parseFloat(e.target.value) * 0.98 )
                          }
                          else if(to == 'USDT'){
                            setfinal(liveprice_BTC * parseFloat(e.target.value) * 0.98 )
                          }
                          else if(to == 'BTC'){
                            setfinal(liveprice_BNB * parseFloat(e.target.value) * 0.98 )
                          }
                          else if(to == 'ETH'){
                            setfinal(liveprice_ETH * parseFloat(e.target.value) * 0.98 )
                          }
                          else{
                            alert("Cannot convert to same type")
                          } }
                          else if (butnval == 'ANTEAG') { 
                            if( to == 'INRD'){
                              setfinal(75 * liveprice_BTC * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(butnval == 'USDT'){
                              setfinal(liveprice_BTC * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(to == 'BNB'){
                              setfinal(liveprice_BNB * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(to == 'ETH'){
                              setfinal(liveprice_ETH * parseFloat(e.target.value) * 0.98 )
                            }
                            else{
                              alert("Cannot convert to same type")
                            }
                           }
                          else if (butnval == 'USDT') { 
                            if( to == 'INRD'){
                              setfinal(75 * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(to == 'BTC'){
                              setfinal(liveprice_BTC * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(to == 'BNB'){
                              setfinal(liveprice_BNB * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(to == 'ETH'){
                              setfinal(liveprice_ETH * parseFloat(e.target.value) * 0.98 )
                            }
                            else{
                              alert("Cannot convert to same type")
                            }
                           }
                          else if (butnval == 'INRD') {  
                          
                          if( to == 'BTC'){
                            //console.log(parseFloat(e.target.value) * 0.98 )
                            setfinal((parseFloat(e.target.value)/(liveprice_BTC*liveusd)) * 0.98 )
                          }
                          else if(to == 'USDT'){
                            setfinal((parseFloat(e.target.value)/(liveusd)) * 0.98 )
                          }
                          else if(to == 'BNB'){
                            setfinal((parseFloat(e.target.value)/(liveprice_BNB * liveusd)) * 0.98 )
                          }
                          else if(to == 'ETH'){
                            setfinal((parseFloat(e.target.value)/(liveprice_ETH * liveusd)) * 0.98 )
                          }
                          else{
                            alert("Cannot convert to same type")
                          } }
                        }



                      }} ></input>
                        </Col>

                        {
                          diag?<>
                              <Dialog open={diag} onClose={()=>{
                                setOpenDiag(false)
                              }}>
                                      <DialogContent>
                                      <Row style={{marginLeft:"1.2rem"}}>
                                          <Col className="col-md-4 col-lg-4 " style={{marginBottom:"0.8rem"}}>
                                        <button style={{marginRight:"0.3rem",borderRadius:"2rem"}} className="btn btn-outline-dark" onClick={()=>{
                                          setButnVal("BTC")
                                          setOpenDiag(false)
                                        }}><img style={{width:"30px"}} src={logobtc}></img> BTC</button>
                                        </Col>
                                        <Col className="col-md-4 col-lg-4 " style={{marginBottom:"0.8rem"}}>
                                        <button  style={{marginRight:"0.3rem",borderRadius:"2rem"}} className="btn btn-outline-dark" onClick={()=>{
                                          setButnVal("ETH")
                                          setOpenDiag(false)
                                        }}><img style={{width:"20px"}} src={eth}></img> ETH</button>
                                        </Col>
                                        <Col className="col-md-4 col-lg-4 " style={{marginBottom:"0.8rem"}}>
                                        <button  style={{marginRight:"0.3rem",borderRadius:"2rem"}} className="btn btn-outline-dark" onClick={()=>{
                                          setButnVal("BNB")
                                          setOpenDiag(false)
                                        }} ><img style={{width:"30px"}} src={bnb}></img> BNB</button>
                                        </Col>
                                        <Col className="col-md-4 col-lg-4 " style={{marginBottom:"0.8rem"}}>
                                        <button  style={{marginRight:"0.3rem",borderRadius:"2rem"}} className="btn btn-outline-dark" onClick={()=>{
                                          setButnVal("INRD")
                                          setOpenDiag(false)
                                        }}><img style={{width:"30px"}} src={ruppee}></img> INRD</button>
                                        </Col>
                                        <Col className="col-md-4 col-lg-4 " style={{marginBottom:"0.8rem"}}>
                                        <button  style={{marginRight:"0.3rem",borderRadius:"2rem"}} className="btn btn-outline-dark" onClick={()=>{
                                          setButnVal("USDT")
                                          setOpenDiag(false)
                                        }}><img style={{width:"30px"}} src={usdt}></img> USDT</button>
                                        </Col>
                                        <Col className="col-md-4 col-lg-4 " style={{marginBottom:"0.8rem",borderRadius:"2rem"}}>
                                        <button  style={{marginRight:"0.3rem",borderRadius:"2rem"}} className="btn btn-outline-dark" onClick={()=>{
                                          setButnVal("ANTEAG")
                                          setOpenDiag(false)
                                        }}><img style={{width:"30px"}} src={logo}></img> ANTEAG</button>
                                        </Col>
                                        </Row>
                                      </DialogContent>
                              </Dialog>
                           </>
                           : null
                        }
                        <Col>
                      
                        <button className="from-btn btn btn-lg" style={{padding: "20px 50px",width:butnval=="ANTEAG"? "205px":"200px",backgroundColor:"white",marginTop:"-2.5rem",borderRadius:"2rem 2rem",boxShadow:"rgb(0 0 0 / 8%) 0px 6px 10px",marginLeft:"3rem"}} onClick={()=>{
                              setOpenDiag(true)
                        }}>
                         <img style={{width:"20px"}} src={butnval=="BTC"?logobtc:butnval=="ETH"?eth:butnval=="BNB"?bnb:butnval=="INRD"?ruppee:butnval=="USDT"?usdt:logo}></img> {butnval} 
                        </button>
                      {/* <Select  disableUnderline style={{ background: "rgb(247, 248, 250)", border:"2px 2px solid",  height: "1.7rem",position: "absolute" }} value={from} onChange={(e) => {
                        setfrom(e.target.value)
                      }}>
                        <MenuItem value={"BTC"}  >BTC</MenuItem>
                        <MenuItem value={"INRD"}>INRD</MenuItem>
                        <MenuItem value={"ETH"}>ETH</MenuItem>
                        <MenuItem value={"BNB"}>BNB</MenuItem>
                        <MenuItem value={"USDT"}>USDT</MenuItem>
                        <MenuItem value={"ANTEAG"}>ANTEAG</MenuItem>
                      </Select> */}
                      
                      </Col>
                      </Row>
                    {/* <CgArrowsExchangeV size={40} style={{ marginLeft: "50%", marginBottom: "1rem" }}></CgArrowsExchangeV> */}
                          </div>
                          <Label style={{ padding: "0.3rem", width: "99%" }}>To</Label>
                    <div className="input-swap">
                      
                      <Row>
                        <Col>
                      
                      <input className="inp-swap" style={{paddingTop:"1.5rem",paddingBottom:"1.5rem",paddingRight:"2rem"}} disabled="true" placeholder={`Recieve ${final.toFixed(4)}`} ></input>
                        </Col>
                        {
                          todiag?<>
                          <Dialog open={todiag} onClose={()=>{
                                setToDiag(false)
                              }}>
                                      <DialogContent>
                                      <Row style={{marginLeft:"1.2rem"}}>
                                          <Col className="col-md-4 col-lg-4 " style={{marginBottom:"0.8rem"}}>
                                        <button style={{marginRight:"0.3rem",borderRadius:"2rem"}} className="btn btn-outline-dark" onClick={()=>{
                                          setto("BTC")
                                          settocurr(liveprice_BTC)
                                          setToDiag(false)
                                        }}><img style={{width:"30px"}} src={logobtc}></img> BTC</button>
                                        </Col>
                                        <Col className="col-md-4 col-lg-4 " style={{marginBottom:"0.8rem"}}>
                                        <button  style={{marginRight:"0.3rem",borderRadius:"2rem"}} className="btn btn-outline-dark" onClick={()=>{
                                          setto("ETH")
                                          settocurr(liveprice_ETH)
                                          setToDiag(false)
                                        }}><img style={{width:"20px"}} src={eth}></img> ETH</button>
                                        </Col>
                                        <Col className="col-md-4 col-lg-4 " style={{marginBottom:"0.8rem"}}>
                                        <button  style={{marginRight:"0.3rem",borderRadius:"2rem"}} className="btn btn-outline-dark" onClick={()=>{
                                          setto("BNB")
                                          settocurr(liveprice_BNB)
                                          setToDiag(false)
                                        }} ><img style={{width:"30px"}} src={bnb}></img> BNB</button>
                                        </Col>
                                        <Col className="col-md-4 col-lg-4 " style={{marginBottom:"0.8rem"}}>
                                        <button  style={{marginRight:"0.3rem",borderRadius:"2rem"}} className="btn btn-outline-dark" onClick={()=>{
                                          setto("INRD")
                                          settocurr(liveusd)
                                          setToDiag(false)
                                        }}><img style={{width:"30px"}} src={ruppee}></img> INRD</button>
                                        </Col>
                                        <Col className="col-md-4 col-lg-4 " style={{marginBottom:"0.8rem"}}>
                                        <button  style={{marginRight:"0.3rem",borderRadius:"2rem"}} className="btn btn-outline-dark" onClick={()=>{
                                          setto("USDT")
                                          settocurr(1)
                                          setToDiag(false)
                                        }}><img style={{width:"30px"}} src={usdt}></img> USDT</button>
                                        </Col>
                                        <Col className="col-md-4 col-lg-4 " style={{marginBottom:"0.8rem",borderRadius:"2rem"}}>
                                        <button  style={{marginRight:"0.3rem",borderRadius:"2rem"}} className="btn btn-outline-dark" onClick={()=>{
                                          setto("ANTEAG")
                                          settocurr(liveprice_BTC)
                                          setToDiag(false)
                                        }}><img style={{width:"30px"}} src={logo}></img> ANTEAG</button>
                                        </Col>
                                        </Row>
                                      </DialogContent>
                              </Dialog>
                          </>: null
                        }
                        <Col>
                      {/* <Select style={{ background: "rgb(238,234,244)", marginTop: "0.7rem", height: "1.7rem", width: "20%", position: "absolute" }} value={to} onChange={(e) => {
                        setto(e.target.value)
                        switch (e.target.value) {
                          case 'ETH':
                            settocurr(liveprice_ETH)
                          case 'BTC':
                            settocurr(liveprice_BTC)
                          case 'BNB':
                            settocurr(liveprice_BNB)
                          case 'ANTEAG':
                            settocurr(liveprice_ANTEAG)
                          case 'USDT':
                            settocurr(1)
                          case 'INRD':
                            settocurr(liveusd)
                        }
                      }}>


                        <MenuItem value={"BTC"} >BTC</MenuItem>
                        <MenuItem value={"INRD"} >INRD</MenuItem>
                        <MenuItem value={"ETH"} >ETH</MenuItem>
                        <MenuItem value={"BNB"} >BNB</MenuItem>
                        <MenuItem value={"USDT"} >USDT</MenuItem>
                        <MenuItem value={"ANTEAG"} >ANTEAG</MenuItem>
                      </Select> */}

                      <button className="btn btn-lg " style={{padding: "20px 50px",width:to=="ANTEAG"? "205px":"200px",backgroundColor:"white",borderRadius:"2rem 2rem",boxShadow:"rgb(0 0 0 / 8%) 0px 6px 10px",marginTop:"0.5rem",marginLeft:"3rem"}} value={to} onClick={()=>{
                         setToDiag(true)
                      }}>
                       <img style={{width:"20px"}} src={to=="BTC"?logobtc:to=="ETH"?eth:to=="BNB"?bnb:to=="INRD"?ruppee:to=="USDT"?usdt:logo}></img> {to}</button>
                      </Col>
                      </Row>
                      </div>
                    
                    <button className="btn  m-6" style={{ marginBottom:"1rem",marginTop: "2rem", width: "100%",paddingTop:"1.7rem",paddingBottom:"1.7rem",borderRadius:"2rem 2rem ",backgroundColor:"#FDEFEF",color:"black" }} disabled={!valid1} onClick={() => {
                      if (butnval.length != 0 || to.length != 0) {
                        if (butnval.length < localStorage.getItem(`${butnval}_Coins`) || to.length < localStorage.getItem(`${to}_Coins`)) {
                          const temp =parseFloat(localStorage.getItem(`${butnval}_Coins`))-parseFloat(fromvalue);
                          const temp1 = parseFloat(localStorage.getItem(`${to}_Coins`))+parseFloat(final.toFixed(4))
                          // alert(`${to}_Coins`,localStorage.getItem(`${to}_Coins`))
                          // alert(to)
                          // alert(localStorage.getItem(`${butnval}_Coins`))
                          // alert(tocurr)
                         
                          axios({
                            url : `https://api.anteagle.tech/get${butnval.toLowerCase()}?coins=${temp}&userid=${localStorage.getItem("userid")}`,
                            method : "POST",
                            headers:{
                              "Accept" : "Application/json",
                              'Content-type' : "application/json"
                            }
                          }).then(res=>{
                            axios({
                              method : 'post',                            
                              url : `https://api.anteagle.tech/get${to.toLowerCase()}?coins=${temp1}&userid=${localStorage.getItem("userid")}`,
                              headers:{
                                "Accept" : "Application/json",
                                'Content-type' : "application/json"
                              }
                            }).then(res=>{
                              swal("SUCCESS","Swap Successfull","Success")
                              window.location = "/"
                            })
                          })
                          
                        }
                      }
                    }}><b>CONVERT</b></button>
                 

                

              </CardBody>
            
          </Col>
        </Row>
    

</div><br/><br/>

</body>
 {/* </div> */}


</> :  withdraw ? <>
<body style={{backgroundColor:isDarkDes?"#212529":"white"}} >
<div className="content" style={{marginLeft:"29rem",padding:"5rem 0 12rem 0",width:"50%"}}>
        <Row style={{marginLeft:"0.5rem"}}>
          <Col md="8">
            <Card style={{paddingBottom:"2rem",borderRadius:"3rem",backgroundColor:isDarkDes?"#161c2d":"white",color: isDarkDes?"white":"black"}}>
              
                <h3 className="title" style={{borderRadius:"3rem",textAlign:"center"}} >Withdraw Your Currency</h3>
            
              <CardBody>
                <Form>
                  <Label >Enter Address</Label>
                  <Input  placeholder="Copy & Paste Your Address here to withdraw your coins" style={{borderRadius:"2rem",margin:"0.3rem 0  "}} onChange={(e)=>{setwallet2(e.target.value)}}></Input>
                  <Label  >Amount</Label>
                 
                  <Input required placeholder="Enter Amount" style={{borderRadius:"2rem",margin:"0.3rem 0  "}} onChange={(e)=>{
                    setamount2(e.target.value)
                  }}></Input>
        
                  <Label  >Currency</Label>
                  <Input placeholder="Select Currency" style={{borderRadius:"2rem",margin:"0.3rem 0 "}} type="select" onChange={(e)=>{
                    setcurrency2(e.target.value)
                  }}>
                    <option>BTC</option>
                    <option>BNB</option>
                    <option>ETH</option>
                  </Input>
      
                  <FormText >* Make sure the Address you entered is verified by your end. The amout of coins you entered will get directly transfered to this Address</FormText>
                </Form>
               

              </CardBody>
              
                <button className="btn-lg" style={{width:"96%",borderRadius:"2rem",marginLeft:"1rem",backgroundColor:"rgb(253, 239, 239)",border:"none",padding:"1rem 0"}}  type="submit" onClick={()=>{
                   if(wallet.length > 0 && amount.length > 0 && currency.length > 0){
                  axios({
                    method:"post",
                    url : `https://api.anteagle.tech/requestcrypto?walletaddress=${wallet}&coins=${amount}&type=withdraw&currency=${currency}`,
                    headers: {
                      'Accept' : 'Application/json',
                      'Content-type' : "application/json"
                    }
                  }).then(res=>{
                    if(res.data.message){
                      swal("Submitted","Your transaction has been processed Succesfully, All coins will be redirected to your wallet after 15 confirmations,\n Transaction hash will be shared to you email id","success");
                    }
                    else{
              swal("Error","Some Error Occured","error")
            }
                    //console.log(res.data)
                  })}
                  else{
                      swal("Please Fill all the Fields !")
                    }
                }}><b>
                  WITHDRAW</b>
                </button>
         
            </Card>
          </Col>
          
        </Row>
      </div>

</body>
</> : add ? 

<Add/>
: referral?<> <Referral /></> : withdrawAmt ?<> <body  style={{backgroundColor:isDarkDes?"#212529":"white"}}> <Withdraw></Withdraw> </body>
</>
: <> 
<body style={{backgroundColor:isDarkDes?"#212529":"white"}}>
<div className="content" style={{marginLeft:"27rem",padding:"5rem 0 7rem 0",width:"40%"}}>
        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>
    
            <Card style={{borderRadius:"2rem",backgroundColor:isDarkDes?"#161c2d":"white",color: isDarkDes?"white":"black"}}>
              <CardBody>
                <div className="places-buttons">
                  
               
                   
                      <CardTitle tag="h3" style={{textAlign:"center"}}>
                        DEPOSIT
                        <p className="category">Deposit your Currency to these Address</p>
                      </CardTitle>
                 
                  
                  
                  <Row>
                    <Col >
                    <Tabs >
    <TabList style={{textAlign:"center"}}>
      <Tab style={{backgroundColor:isDarkDes?"#161c2d":"white",color: isDarkDes?"white":"black"}}>BTC</Tab>
      <Tab style={{backgroundColor:isDarkDes?"#161c2d":"white",color: isDarkDes?"white":"black"}}>ETH</Tab>
      <Tab style={{backgroundColor:isDarkDes?"#161c2d":"white",color: isDarkDes?"white":"black"}}>USDT</Tab>
      <Tab style={{backgroundColor:isDarkDes?"#161c2d":"white",color: isDarkDes?"white":"black"}}>BNB</Tab>
    </TabList>

    <TabPanel>

       <Label style={{margin:"0.3rem 4rem"}}>YOUR BTC ADDRESS</Label>
       <InputGroup>
       <Input style={{marginLeft:"4rem"}} placeholder="18HwcqpEf7nSdMGgrnw2WCnrkGjnTpEyek" disabled="true"/><Button onClick={()=>{

         notify('tr')
       }} style={{marginTop:"-0.17rem"}}><img src="https://img.icons8.com/fluent-systems-regular/20/000000/copy.png"/></Button>
       </InputGroup>
       <Label style={{margin:"0.3rem 4rem"}}>SCAN THIS TO GET CODE</Label>
      <br/>
      <div style={{marginLeft:"4rem"}}>
       <QRCode  value="18HwcqpEf7nSdMGgrnw2WCnrkGjnTpEyek" />
      </div>
    </TabPanel>
    <TabPanel>
    <Label style={{margin:"0.3rem 4rem"}}>YOUR ETH ADDRESS</Label>
       <InputGroup>
       <Input style={{marginLeft:"4rem"}} placeholder="0xf218970b176c262cb4e5d15bb4195c6973077848" disabled="true"/><Button onClick={()=>{
         notify('tr')
       }} style={{marginTop:"-0.17rem"}}><img src="https://img.icons8.com/fluent-systems-regular/20/000000/copy.png"/></Button>
       </InputGroup>
       <Label  style={{margin:"0.3rem 4rem"}}>SCAN THIS TO GET CODE</Label>
      <br/>
      <div   style={{marginLeft:"4rem"}} > 
       <QRCode value="0xf218970b176c262cb4e5d15bb4195c6973077848" />
       </div>
    </TabPanel>
    <TabPanel>
    <Label  style={{margin:"0.3rem 4rem"}}>YOUR USDT ADDRESS</Label>
       <InputGroup>
       <Input  style={{marginLeft:"4rem"}}  placeholder="0xf218970b176c262cb4e5d15bb4195c6973077848" disabled="true"/><Button onClick={()=>{
         notify('tr')
       }} style={{marginTop:"-0.17rem"}}><img src="https://img.icons8.com/fluent-systems-regular/20/000000/copy.png"/></Button>
       </InputGroup>
       <Label style={{margin:"0.3rem 4rem"}}>SCAN THIS TO GET CODE</Label>
      <br/>
      <div  style={{marginLeft:"4rem"}} >
       <QRCode value="0xf218970b176c262cb4e5d15bb4195c6973077848" />
       </div>
    </TabPanel>
    <TabPanel>
    <Label style={{margin:"0.3rem 4rem"}}>YOUR BNB ADDRESS</Label>
       <InputGroup>
       <Input  style={{marginLeft:"4rem"}}  placeholder="0xf218970b176c262cb4e5d15bb4195c6973077848" disabled="true"/><Button onClick={()=>{
         notify('tr')
       }} style={{marginTop:"-0.17rem"}}><img src="https://img.icons8.com/fluent-systems-regular/20/000000/copy.png"/></Button>
       </InputGroup>
       <Label style={{margin:"0.3rem 4rem"}}>SCAN THIS TO GET CODE</Label>
      <br/>
      <div  style={{marginLeft:"4rem"}} >
       <QRCode value="0xf218970b176c262cb4e5d15bb4195c6973077848" />
       </div>
    </TabPanel>
  
  </Tabs>
                    </Col>
                  </Row>
                 
                </div>
              </CardBody>
             
                <button className="btn-lg" style={{width:"96%",borderRadius:"2rem",marginLeft:"1rem",backgroundColor:"rgb(253, 239, 239)",border:"none",padding:"1rem 0"}}  color="primary" type="submit">
                  <b>DEPOSIT</b>
                </button>
              
            </Card>
         
      </div>
</body>
</>


          



}

  
  </  >
  ); 
  }
}

export default App;
