import React, { Component } from 'react'
let waibuCount = 1;
export default class App extends Component {
  state = {
    count:1
  };
  // class 里面的变量值 会递增； 但是function 里面定义的值 每次会被清除
  // home 里面定义的 值copyCpunt 每次+1 没效果，只有全局的 定义的才有+1 效果
  

  copyCount = 1; 
  onClick = ()=>{
    console.log('开始之前 count', this.state.count);
    console.log('开始之前 copycopyCountcount', this.copyCount);
    console.log('开始之前 waibuCount', this.copyCount);
    this.setState({
      count: this.state.count +1
    })
    this.copyCount = this.copyCount + 1;
    waibuCount = waibuCount +1;
    this.lgFn()
  }
  lgFn=()=>{
    console.log('开始之后', this.state.count);
    console.log('开始之后 copycopyCountcount', this.copyCount);
    console.log('开始之后 waibuCount', waibuCount);
  }
  render() {
    return (
      <div>
        <h4>count:{this.state.count}</h4>
        <h4>copyCount:{this.copyCount}</h4>
        <h4>waibuCount:{waibuCount}</h4>
        <button onClick={this.onClick}>hello class</button>
      </div>
    )
  }
}

