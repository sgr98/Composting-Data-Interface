import React, {Component} from 'react';
import './Interface.css';

class Interface extends Component {

    displayTempColor = (temp) => {
        if(temp < 50) {
            return {background : '#b9fffc'}
        }
        else if(temp < 70) {
            return {background : '#e8e8e8'}
        }
        else {
            return {background : '#fe5f55'}
        }
    }

    displayMoistureColor = (moist) => {
        if(moist < 50) {
            return {background : '#f2dcbb'}
        }
        else if(moist < 70) {
            return {background : '#e8e8e8'}
        }
        else {
            return {background : '#51adcf'}
        }
    }

    displayPHColor = (ph) => {
        if(ph < 6) {
            return {background : '#e4e978'}
        }
        else if(ph < 8) {
            return {background : '#e8e8e8'}
        }
        else {
            return {background : '#c3aed6'}
        }
    }

    render() {
        const infos = this.props.infos;
        const infolist = infos.map(info => {
            return (
                <div className="Interface-sub">
                    <div className="Interface-individual" id="time">
                        <h4>Date : {info.date} ; Time : {info.time}</h4>
                    </div>

                    <div className="Interface-individual" style={this.displayTempColor(info.temperature)}>
                        <h3>Temperature = {info.temperature} &#176;C</h3>
                    </div>

                    <div className="Interface-individual" style={this.displayMoistureColor(info.moisture)}>
                        <h3>Moisture = {info.moisture} %</h3>
                    </div>

                    <div className="Interface-individual" style={this.displayPHColor(info.ph)} id="ph">
                        <h3>ph = {info.ph}</h3>
                    </div>
                </div>
            )
        })
        return (
            <div className="Interface-main">
                { infolist }
            </div>
        )
    }

}

export default Interface;