// @flow
import React from "react";
import { StyleSheet, css } from "aphrodite";
import { slide as Menu } from 'react-burger-menu';


type Props = {};

type State = {
  highlight: boolean
};

export default class GuardCircle extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      highlight: false,
      zone:-1,
      polygonHighlight: false,
      data: [
        [[0,0],[100,100],[0,100],[]],
        [
          [126,86],
          [186,11.2],
          [140.4,150],
          [112.2,88.8],
          [140.4,74]
        ],
        [
          [100,200],
          [200,390],
          [20,400],
          [30,300]
        ],
        [
          [200, 300],
          [200, 300],
          [20, 90],
          [20, 90]
        ]
      ]
    };
  }

  
  isGuardWithinBounds(x, y) {
    if (x <= 250 && x >= 160 && y <= 210 && y >= 10) {
      return true;
    }
    return false;
  }

  onClickItem(zone){
    console.log("btn");
    this.setState({
      zone:zone
    })
  }
  
  colorSelect(i){
    let colorM=
    { 0: "red",
    1: "blue",
    2: "orange"};
    colorM[i]="black";
    return colorM;
  }

   triangle = (zone)=>{return (
    <svg height="1000" width="1000">
   
        {
         this.state.data.map(function(data, i){
          data.flat();  
          const id="zone"+i;
         
          const colorMatch={ 0: "red",
          1: "blue",
          2: "orange"};
          if(zone==id){
            colorMatch[i]="black";
          }
          console.log(data.join(' ').toString()+"i");
           return <polygon
           id={id}
           points={data.join(' ').toString()} 
           ondragover={() => this.setState({ polygonHighlight: true })}
           fill="white"
           style={{stroke:colorMatch[i],background:"white"}}
          //  className={css([
          //    styles.polygon,
          //    this.state.polygonHighlight && styles.polygonHighlight
          //  ])}
         />
         })
       }
    </svg>
  )}
  render() {
   
    const circle = (
      <div className={css([this.state.highlight && styles.outerCircle])}>
        <div className={css([styles.innerCircle])} />
      </div>
    );

 
   

    const quadrilateral = (
      <svg height="210" width="500">
        <polygon
        stroke="black" 
          points="0.4813,0.9848 0.4813,0.5913 0.2271,0.5913 0.2271,0.3826 0.0292,0.3826 0.0271,0.9848"
          className={css([
            styles.polygon,
            this.state.polygonHighlight && styles.polygonHighlight
          ])}
        />
      </svg>
    );

   


    return (
      <div>
        <Menu>
      <a className="menu-item" onClick={()=>this.onClickItem("zone0")}>
        Zone 1
      </a>
      <a className="menu-item" onClick={()=>this.onClickItem("zone1")}>
      Zone 2
      </a>
      <a className="menu-item" onClick={()=>this.onClickItem("zone2")}>
      Zone 3
      </a>
    </Menu>
        {this.triangle(this.state.zone)}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  innerCircle: {
    borderRadius: "50%",
    width: 15,
    height: 15,
    // margin: 5,
    backgroundColor: "black"
  },
  polygon: {
    fill: "#2E8B57",
    opacity: 0.5,
    ":hover": {
      fill: "blue"
    }
  },
  polygonHighlight: {
    fill: "red"
  }
});
