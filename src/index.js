import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


class RecordComponent extends React.Component {

  constructor(props) {
      super(props);
      this.AddMedicineDetails = this.AddMedicineDetails.bind(this);
      this.state = {
        medicalrecord: [],

        mname: '',
      
        brand: '',
  
        price: '',
  
        quantity: '',
 
        expirydate: '',
        note:''

      };
    }
    componentDidMount() {
      fetch("https://localhost:44394/api/MedicineTraker")
    
      .then(res => res.json())
      .then(
        
        result => {
          debugger
          this.setState({
            
            medicalrecord:result              
          });
      }        
      )        
  }

  
  MedicineNamechange(e) {
        
    this.setState({ mname:e.target.value })

  }

  
  Brandchange(e) {
        
    this.setState({ brand:e.target.value })

  }

  
  Pricechange(e) {
        
    this.setState({ price:e.target.value })

  }

  
  Quantitychange(e) {
        
    this.setState({ quantity:e.target.value })

  }

  
  expiryDatechange(e) {
        
    this.setState({ expirydate:e.target.value })

  }

  Notechange(e) {
        
    this.setState({ note:e.target.value })

  }

  AddMedicineDetails(){
    debugger;
    let member= this.state

    debugger

    fetch('https://localhost:44394/api/MedicineTraker/AddRecord', {
      
  
        method: 'post',              
        headers: {       
         
          'Content-Type': 'application/json'        
        },         
   
        body: JSON.stringify({
          member
        })
  
      }).then((Response) => Response.json())
      .then((Result) => {
              debugger
        if (Result.Status == 'Success')

               // this.props.history.push("/Dashboard");
               alert("TeamMember added")

        else

          alert('Sorrrrrry !!!! TeamMember Not added !!!!!')

      })

}


    render() {
      return (
        <div>
          <h2> Medicine Tracking System...</h2>

<div>
              


</div>
<div>

<label for="MedicineName">MedicineName</label>
                            <div>
                                <input  type="text"  name="MedicineName" id="MedicineName" onChange={e=>this.MedicineNamechange(e) }></input>                               
                            </div>

                            <label for="Brand">Brand</label>
                            <div>
                                <input  type="text"  name="Brand" id="Brand" onChange={e=>this.Brandchange(e) }></input>                               
                            </div>
                            <label for="Price">Price</label>
                            <div>
                                <input  type="text"  name="Price" id="Price" onChange={e=>this.Pricechange(e) }></input>                               
                            </div>

                            <label for="Quantity">Quantity</label>
                            <div>
                                <input  type="text"  name="Quantity" id="Quantity" onChange={e=>this.Quantitychange(e) }></input>                               
                            </div>

                            <label for="expiryDate">expiryDate</label>
                            <div>
                                <input  type="text"  name="expiryDate" id="expiryDate" onChange={e=>this.expiryDatechange(e) }></input>                               
                            </div>

                            <label for="Note">Note</label>
                            <div>
                                <input  type="text"  name="Note" id="Note" onChange={e=>this.Notechange(e) }></input>                               
                            </div>


                            <div >
        
        <button type="button"  onClick={this.AddMedicineDetails}>Add</button>
      </div>


</div>

      

<div> 
<table border="2px">
            <thead>
              <tr>
                <th>MedicineName</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>ExpiryDate</th>
                <th>Note</th>              
                
              </tr>
            </thead>
            <tbody>  
             
            {this.state.medicalrecord.map(medicine => (
            
          <tr key={medicine.id}>
            <td>{medicine.medicineName}</td>
            <td>{medicine.brand}</td>
            <td>{medicine.price}</td>
            <td>{medicine.quantity}</td>
            <td>{medicine.expiryDate}</td>
            <td>{medicine.note}</td>
                     
            </tr>
))}       
            </tbody>
          </table>
  
   </div>

         
          </div>
       
        );
      }
}

const element=<RecordComponent></RecordComponent>
ReactDOM.render(element,document.getElementById("root"));