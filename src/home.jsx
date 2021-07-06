import React, {useEffect, useState} from 'react';
let quanju = 1;
const Home = (props) => {
  const [count, setCount] = useState(1);
  let copyCount = 5;
  console.log('点击之前：', count, copyCount);
  const btnClick = (e)=>{
    console.log(e);
    setCount(count +1);
    copyCount = copyCount + 5;
    quanju = quanju +1;
    logFn()
  }
  useEffect(()=>{
    // log 顺序是： 第一次进来 先执行 name() log  , 
    // 后续更新的时候 ，每次在更新之前都会执行 清除函数， 渲染完成之后 ，才会执行name()函数
    // 但是清除 是在 函数组件中的所有 事件完成之后了，逻辑执行完，开始渲染之前的节点 ，

    // class 里面定义的 值copyCpunt 每次+1 有效果， 但是function 里面定义的则没效果，每次都会清除成默认值
    // 只有全局的 定义的才有+1 效果
    // 但是局部刷新的时候，function 组件里面的count值 还是原来的值，并没有 清除， class里面的则是被清除了，

   // 所以 用 class 或者 function的时候 其数据上的更新性质 一定要区分清楚 

    function name(){
      console.log('useEffect',quanju);
    }
    name()
    return ()=>{
      console.log('清除');
    }
  })
  const logFn = ()=>{
    console.log('点击之后：', count, copyCount);
  }
  return(
    <div>
      <h4> count : {count}</h4>
      <h4>copyCpunt: {copyCount}</h4>
      <h4>quanju : {quanju}</h4>
      <button onClick={btnClick}>hello world</button>
    </div>
  )
}

export default Home