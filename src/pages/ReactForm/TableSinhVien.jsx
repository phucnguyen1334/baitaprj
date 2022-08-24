import React, { Component } from "react";

export default class TableSinhVien extends Component {
  render() {
    let { arrSV, delSV, editSV } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrSV.map((sv, index) => {
            return (
              <tr key={index}>
                <td>{sv.id}</td>
                <td>{sv.name}</td>
                <td>{sv.sdt}</td>
                <td>{sv.email}</td>
                <td>
                  <button className="btn btn-danger mx-2" onClick={() => {
                      delSV(sv.id);
                    }}>Xóa</button>
                  <button onClick={() => {
                      editSV(sv);
                    }}
                    className="btn btn-primary mx-2">Sửa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
