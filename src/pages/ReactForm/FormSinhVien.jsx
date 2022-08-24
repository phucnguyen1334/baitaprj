import React, { Component } from 'react'

export default class FormSinhVien extends Component {
    state = {
        SVInfo: {
          id: '',
          name: '',
          sdt: '',
          email: ''
        },
        error: {
          id: '',
          name: '',
          sdt: '',
          name: ''
        }
      }
      handleChange = (event) => {
        let { value, id } = event.target;
    
        let dataType = event.target.getAttribute('data-type');
        let newValue = this.state.SVInfo;
        newValue[id] = value;
    
        let newError = this.state.error;
        let messError = '';
        if(value.trim() === ''){
            messError = id + ' không được bỏ trống !';
        }else {
            if(dataType == 'number'){
              let regexNumber = /^\d+$/;
              if(!regexNumber.test(value)){
                messError = id + ' phải là số !';
              }
            }
        }
        newError[id] = messError;

        this.setState({
          SVInfo:newValue,
          error:newError
        }, () => {
          console.log(this.state);
        });
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        //this.props.addSV(this.state.SVInfo);
      };
      static getDerivedStateFromProps(newProps,currentState){
          currentState.SVInfo = newProps.SVEdit;
          return { ...currentState };
      }
      
    render() {
    return (
        <form className='card' onSubmit={this.handleSubmit}>
        <div className='card-header bg-dark text-white'>
          Thông tin sinh viên
        </div>
        <div className='card-body row'>
          <div className='col-6'>
            <div className='form-group'>
              <p>Mã SV</p>
              <input value={id} className='form-control' id="id" name='id' onInput={this.handleChange} />
              <p className='text-danger'>{this.state.error.id}</p>
            </div>
            <div className='form-group'>
              <p>Số điện thoại</p>
              <input value={sdt} className='form-control' id="sdt" name='sdt' onInput={this.handleChange} />
              <p className='text-danger'>{this.state.error.sdt}</p>
            </div>
          </div>
          <div className='col-6'>
            <div className='form-group'>
              <p>Họ tên</p>
              <input value={name} className='form-control' id="name" name='name' onInput={this.handleChange} />
              <p className='text-danger'>{this.state.error.name}</p>
            </div>
            <div className='form-group'>
              <p>Email</p>
              <input value={email} className='form-control' id="email" name='email' onInput={this.handleChange} />
              <p className='text-danger'>{this.state.error.email}</p>
            </div>
          </div>
        </div>
        <div className='card-footer'>
          <button className='btn btn-success mx-2'>Thêm sinh viên</button>
          <button type='button' className='btn btn-primary' onClick={()=>{
            this.props.updateSV({...this.state.SVInfo});
          }}>Cập nhật</button>
        </div>
      </form>
    )
  }
}
