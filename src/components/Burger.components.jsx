import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './Burger.styles.scss'

 class Burger extends Component {
     state={
         meat:0,
         tomatoes:0,
         lettuce:0,
         cheese:0,
     }

     addRemoveIngredients=(action,ingredient)=>{
  let{
    meat,
    tomatoes,
    lettuce,
    cheese
  }=this.state
     

     let stateValue;
     switch(ingredient){
         case'lettuce':{
            stateValue= lettuce;
            break;  
         }
         case'meat':{
            stateValue= meat;
            break;
        
         }
         case'tomatoes':{
            stateValue= tomatoes;
            break;
        
         }
         case'cheese':{
            stateValue=cheese ;
            break;
        
         }
         
         default:break;
       }
       if(action=='add'){
           stateValue = stateValue+1;
       }
       else{
           stateValue= stateValue-1
       }
       this.setState({
           [ingredient]: stateValue >=0 ? stateValue:0
       })
    }

    burgerContent =() =>{
        let {
            meat,
            tomatoes,
            lettuce,
            cheese
          }=this.state
     
          
          let burger = []

          //OUTPUTTING The lettuce 
          for( let i=0;i<lettuce;i++){
             burger.push(<div key={burger.length} className="lettuceSide"></div>)
          }

            //OUTPUTTING The meat
            for( let i=0;i<meat;i++){
                burger.push(<div key={burger.length} className="meatSide"></div>)
             }
               //OUTPUTTING The tomatoes 
          for( let i=0;i<tomatoes;i++){
            burger.push(<div key={burger.length} className="tomatoSide"></div>)
         }
           //OUTPUTTING The  cheese
           for( let i=0;i<cheese;i++){
            burger.push(<div key={burger.length} className="cheeseSide"></div>)
         }
          return burger;
    }

    orderHandler=()=>{
        alert("orderd")
    }
    render() {
        return (
            <>
            <div className="BurgerIngredients">
              <div className="topSide"></div>
              {this.burgerContent()}
              <div className="BottomSide"></div>
                </div>

              <div className="IngredientsBlock">

                  <div className="IngrBtns">
                <p>Meat</p>  
                    <button onClick={()=>this.addRemoveIngredients('add','meat')} className="IngrBtn">Add</button>
                    <button onClick={()=>this.addRemoveIngredients('remove','meat')} className="IngrBtn">Remove</button>
                </div>

                <div className="IngrBtns">
                <p>Tomato</p>  
                <button onClick={()=>this.addRemoveIngredients('add','tomatoes')} className="IngrBtn">Add</button>
                <button onClick={()=>this.addRemoveIngredients('remove','tomatoes')} className="IngrBtn">Remove</button>
                </div>

                <div className="IngrBtns">
                <p>Lettuce</p>  
                <button onClick={()=>this.addRemoveIngredients('add','lettuce')} className="IngrBtn">Add</button>
                <button  onClick={()=>this.addRemoveIngredients('remove','lettuce')} className="IngrBtn">Remove</button>
                </div>
                 
                 <div className="IngrBtns">
                <p>Cheese</p>  
                <button onClick={()=>this.addRemoveIngredients('add','cheese')} className="IngrBtn">Add</button>
                <button onClick={()=>this.addRemoveIngredients('remove','cheese')} className="IngrBtn">Remove</button>
                </div>
                   
                   {/* <button onClick={this.orderHandler}className="OrderBtn">Order Now</button> */}
                   <StripeCheckout price />
                  </div> 
                  
                   
           
            </>
        )
    }
}

export default Burger
