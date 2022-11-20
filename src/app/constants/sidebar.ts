import { VociMenu } from "../model/common/voci";

export const VOCI_MENU:VociMenu[]=[
    {
        id:"HOME_ID",
        label:"Home",
        child:[],
        class:"",
        link:"home"
    },
   {    
        id:"OP_ID",
        label:"Operazioni",
        child:[
            {id:"OP_ID_1",label:"Convertiore",child:[],class:"sidebar-child OP_ID",link:"business"},
            {id:"OP_ID_2",label:"Email",child:[],class:"sidebar-child OP_ID",link:"email"},
            
        ],
        class:"sidebar-parents",
        link:""
    },
    {
        id:"CONTACT_ID",
        label:"Contatti",
        child:[],
        class:"",
        link:""
    }


]