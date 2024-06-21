import React, { Component } from 'react'


//There are 3 stages of lifecycles any component goes through:
// 1.Mounted: Component is created and placed in the DOM tree for the first time.
// 2. Updation: When a state change occurs and rerendring is triggered for the component
// 3. Unmounting: When a component is removed from the DOM tree.

// During each lifecycle stage React has different methods

// Mounting Methods- 
// -Constructor()
// static getDerivedStateFromProps()
// Render()
// ComponentDidMount()

// Updation Methods-
// static getDerivedStateFromProps()
// ShouldComponentUpdate
// Render()
// ComponentDidUpdate()

// Unmounting Methods-
// ComponentWillUnMount()


export default class Demo extends Component {
    constructor(){
        super()
        console.log("constructor")
        this.state={
            count:0,
            color:"yellow"
        }
        this.handleIncrement=this.handleIncrement.bind(this)
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    static getDerivedStateFromProps(props,state){
        console.log(`Props:${props}`)
        console.log(`State: ${state}`)
        return {color:props.color}
    }
    componentDidMount(){
        console.log("Mounting Called")
        setInterval(()=>{
            this.setState(count:this.state.count+1)
        },1000)
    }
  render() {
    // this.state={
    //     count:0,
    //     color:"blue"
    // }
    console.log("render")
    return (
      <div>
        <h1>Hello World</h1>
        <h3>{this.state.count}</h3>
        <button onClick={()=>this.handleIncrement()}>Increment</button>
        <button  onClick={()=>this.setState({color:"blue"})}>colour</button>
        <h3>{this.props.fname}</h3>
      </div>
    )
  }
}
