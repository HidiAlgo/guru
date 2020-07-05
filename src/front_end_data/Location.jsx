import React, { Component } from 'react'

export class Location extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            districts: ['Colombo', 'Kandy', 'Galle', 'Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Gampaha', 'Hambantota', 'Jaffna', 'Kalutara',
            'Kegalle', 'Kilinochchi', 'Kurunegala', 'Mannar', 'Matale', 'Matara', 'Monaragala', 'Mullativu', 'Nuwara Eliya', 'Polonnaruwa', 'Puttalam', 'Ratnapura',
            'Trincomalee', 'Vavuniya'],
            cities: [['All of Colombo', 'Colombo 6', 'Nugegoda', 'Piliyandala', 'Athurugiriya', 'Maharagama'], 
                      ['All of Kandy', 'Kandy', 'Katugastota','Gampola','Peradeniya','Akurana'],
                      ['All of Galle','Galle','Ambalangoda','Elpitiya','Baddegama','Hikkaduwa'],
                      ['All of Ampara','Akkarepattu','Ampara','Kalmunai', 'Sainthamaruthu'],
                      ['All of Anuradhapura','Anuradhapura','Kekirawa','Eppawala','Medawachchiya','Tambuttegama'],
                      ['All of Badulla','Badulla','Bandarawela','Welimada','Mahiyanganaya','Hali Ela'],
                      ['All of Batticaloa', 'Batticaloa'],
                      ['All of Gampaha', 'Negombo','Gampaha','Kiribathgoda','Kadawatha','Kelaniya'],
                      ['All of Hambantota','Tangalla','Beliatta','Hambantota','Ambalantota','Tissamaharama'],
                      ['All of Jaffna', 'Jaffna','Nallur','Chavakachcheri'],
                      ['All of Kalutara','Panadura','Horana', 'Kalutara','Bandaragama','Matugama', 'Alutgama','Beruwala','Ingiriya','Wadduwa'],
                      ['All of Kegalle','Kegalle','Mawanella', 'Warakapola','Rambukkana','Ruwanwella', 'Dehiowita','Deraniyagala','Galigamuwa','Kitulgala', 'Yatiyantota'],
                      ['All of Kilinochchi','Kilinochchi'],
                      ['All of Kurunegala','Kurunegala','Kuliyapitiya','Narammala','Wariyapola','Pannala', 'Alawwa','Bingiriya','Galgamuwa','Giriulla','Hettipola','Ibbagamuwa','Mawathagama','Nikaweratiya','Polgahawela'],
                      ['All of Mannar','Mannar'],
                      ['All of Matale','Matale','Dambulla','Galewela','Ukuwela','Sigiriya', 'Palapathwela', 'Rattota','Yatawatta'],
                      ['All of Matara','Matara','Akuressa','Weligama','Hakmana','Dikwella', 'Deniyaya','Kamburugamuwa','Kamburupitiya','Kekanadurra'],
                      ['All of Monaragala','Monaragala','Wellawaya','Buttala','Bibile','Kataragama'],
                      ['All of Mullativu','Mullativu'],
                      ['All of Nuwara Eliya','Nuwara Eliya','Hatton','Ginigathhena','Madulla'],
                      ['All of Polonnaruwa','Polonnaruwa','Kaduruwela','Hingurakgoda','Medirigiriya'],
                      ['All of Puttalam','Chilaw','Nattandiya','Wennappuwa','Puttalam','Marawila', 'Dankotuwa'],
                      ['All of Ratnapura','Ratnapura','Embilipitiya','Pelmadulla','Balangoda','Eheliyagoda', 'Kuruwita'],
                      ['All of Trincomalee','Trincomalee','Kinniya'],
                      ['All of Vavuniya','Vavuniya']],
            selectedList: [] 
        }
        this.changeSelectedList = this.changeSelectedList.bind(this)
        this.changeCity = this.changeCity.bind(this)
        this.getDistrict = this.getDistrict.bind(this)
    }

    changeSelectedList(event){
        let index = this.state.districts.indexOf(event.target.value)

        this.setState({
            selectedList: this.state.cities[index]
        })
        this.props.pass(event.target.name, event.target.value)
    }
    changeCity(event){
        this.props.pass(event.target.name, event.target.value)
    }
    
    render() {
        return (
            <div className="row">
                <div className="form-group col-6">
                    <label>District</label>
                    {/* use datalist here */}
                    <select className="form-control" name = 'district' onChange={this.changeSelectedList}>
                        <option>Select</option>
                        {this.state.districts.map((d, index) => <option key={index}>{d}</option>)}
                    </select>
                </div>
                <div className="form-group col-6">
                    <label>City</label>
                    <select className="form-control disabled" name = 'city' onChange={this.changeCity}>
                        {this.state.selectedList.map((d, index) => <option key={index}>{d}</option>)}
                    </select>
                </div>
            </div>
        )
    }

    getDistrict(){
        return this.districts;
    }
}

export default Location
