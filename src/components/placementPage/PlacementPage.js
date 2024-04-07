import React from 'react'
import Table from 'react-bootstrap/Table';
import Partner from './Partner';

const PlacementPage = () => {
  return (
    <div style={{marginTop: '50px'}}>
       <Partner/>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th>Year</th>
          <th>Name Of Course</th>
          <th>No. Of Students</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2022</td>
          <td>B.Tech/MCA/M.Tech</td>
          <td>137</td>
        </tr>
        <tr>
          <td>2</td>
          <td>2021</td>
          <td>B.Tech/MCA/M.Tech</td>
          <td>130</td>
        </tr>
        <tr>
          <td>3</td>
          <td>2020</td>
          <td>B.Tech/MCA/M.Tech</td>
          <td>69</td>
        </tr>
        <tr>
          <td>4</td>
          <td>2019</td>
          <td>B.Tech/MCA/M.Tech</td>
          <td>125</td>
        </tr>
        <tr>
          <td>5</td>
          <td>2018</td>
          <td>B.Tech/MCA/M.Tech</td>
          <td>76</td>
        </tr>
        <tr>
          <td>6</td>
          <td>2017</td>
          <td>B.Tech/MCA/M.Tech</td>
          <td>89</td>
        </tr>
        <tr>
          <td>7</td>
          <td>2016</td>
          <td>B.Tech/MCA/M.Tech</td>
          <td>43</td>
        </tr>
        <tr>
          <td>8</td>
          <td>2015</td>
          <td>B.Tech/MCA/M.Tech</td>
          <td>16</td>
        </tr>
        <tr>
          <td>9</td>
          <td>2014</td>
          <td>B.Tech/MCA/M.Tech</td>
          <td>07</td>
        </tr>
        <tr>
          <td>10</td>
          <td>2013</td>
          <td>B.Tech. IT/CSE</td>
          <td>06</td>
        </tr>
        <tr>
          <td>11</td>
          <td>2012</td>
          <td>B.Tech. IT/CSE</td>
          <td>04</td>
        </tr>
        <tr>
          <td>12</td>
          <td>2011</td>
          <td>B.Tech. IT/CSE</td>
          <td>14</td>
        </tr>
        <tr>
          <td>13</td>
          <td>2010</td>
          <td>B.Tech/MCA/M.Tech</td>
          <td>14</td>
        </tr>
        <tr>
          <td>14</td>
          <td>2009</td>
          <td>B.Tech/MCA/M.Tech</td>
          <td>25</td>
        </tr>
        <tr>
          <td>15</td>
          <td>2008</td>
          <td>B.Tech/MCA/M.Tech</td>
          <td>30</td>
        </tr>
        <tr>
          <td>16</td>
          <td>2007</td>
          <td>B.Tech/MCA/M.Tech</td>
          <td>20</td>
        </tr>
        <tr>
          <td>17</td>
          <td>2022</td>
          <td>B.Tech/MCA/M.Tech</td>
          <td>137</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default PlacementPage
