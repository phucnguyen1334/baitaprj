import React, { Component } from 'react';
import FormSinhVien from './FormSinhVien';
import TableSinhVien from './TableSinhVien';

export default class ReactForm extends Component {
    state = {
        arrSV: [ 
          {id:'1',name:'Nguyễn Văn A',sdt:09381111111,email:'nguyenvana@gmail.com'},
          {id:'2',name:'Nguyễn Văn B',sdt:093822232232,email:'nguyenvanb@gmail.com'},
        ],
        SVEdit: {
          id:'',name:'',sdt: '',email:''
        },
      };
    
      updateSV = (svUpdate) =>{
        let sv = this.state.arrSV.find(p =>p.id == svUpdate.id);
        if(sv){
            sv.name = svUpdate.name;
            sv.sdt = svUpdate.sdt;
            sv.email = svUpdate.email;
        }
        this.setState({
          arrSV:this.state.arrSV
        })
      }
      editSV = (svClick) =>{
        this.setState({
          svEdit: svClick
        })
      }
    
      addSV = (newSV) =>{
        let arrSVUpdate = [...this.state.arrSV, {...newSV}]
        //setState
        this.setState({
          arrSV:arrSVUpdate
        },()=>{
          this.luuStore();
        })
      }
    
      delSV = (idDel) =>{
        let arrSVUpdate = this.state.arrSV.filter(p=>p.id !== idDel);
        //this.setState
        this.setState({
          arrSV:arrSVUpdate
        }, ()=>{
          this.luuStore();
        })
      }
    
      layStore(){
        if(localStorage.getItem('arrSV')){
          let arrSV = JSON.parse(localStorage.getItem('arrSV'));
          return arrSV;
        }
        return [];
      }
    
      luuStore(){
        let value = JSON.stringify(this.state.arrSV);
        localStorage.setItem('arrSV', value);
      }
      static getDerivedStateFromProps(newProps,currentState){
        return null;
    }
  render() {
    return (
        <div className='container'>
        <FormSinhVien addSV={this.addSV} svEdit={this.state.svEdit} updateSV={this.updateSV}/>
        <TableSinhVien arrSV={this.state.arrSV} delSV={this.delSV} editSV={this.editSV}/>
    </div>
    )
  }
}
