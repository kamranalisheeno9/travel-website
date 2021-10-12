import React from 'react';
import './availability.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, FormGroup, FormControl, Form, Row,Col,Button } from 'react-bootstrap';
import { ImSearch } from 'react-icons/im';
import { useState } from 'react';
import { date } from 'yup';

const Availability =()=>{
    const [startDate, setStartDate] = useState(new Date());
    const [days, setDays] = useState(0);
    const [country, setCountry] = useState("");
    const [searchData,setSearchData]=useState([])
    const searchAvaliablityFunc=()=>{
        const data={
            Country:country,
            Day:days,
            date:startDate,

        }
        searchData.push(data)
        setSearchData([...searchData])
        // console.log(searchData)
    }

return(

    <Container className="availability-search">

        <Container className="inputs-availability">
        <Row className="justify-content-between">
            <Col sm={3}>
            <Form.Label className="label" >
      Tour Country
    </Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
       
    <Form.Control type="text" value={country} onChange={(e)=>setCountry(e.target.value)} placeholder="Tour Country" />
   

  </Form.Group>
            </Col>
    
            <Col sm={3}>
            <Form.Label  className="label" >
        No. of Days
    </Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="number" value={days} onChange={(e)=>setDays(e.target.value)} placeholder="Preffered No. of Days" />
   

  </Form.Group>
            </Col>
            <Col sm={3}>
            <Form.Label  className="label" >
      Travellng Date
    </Form.Label>
        <DatePicker className="date-picker" selected={startDate} onChange={(date) => setStartDate(date)} />
</Col>
            <Col sm={2}>
                <Form.Label  className="label" >
        &nbsp;
    </Form.Label>
    <div className="search-container">
      <Button variant="outline-secondary" className="availability-btn" onClick={()=>searchAvaliablityFunc()}>Search</Button>
         </div>  
</Col>

     </Row>
        </Container>
        </Container>
)
}

export default Availability;

