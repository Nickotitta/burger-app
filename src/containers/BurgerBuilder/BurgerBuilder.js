import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from "../../hoc/Auz";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
   
    state ={
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalpPice: 4
   }

   addingredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount +1;
    const updatedIngredients = {
        ...this.state.ingredients
    }; 
    updatedIngredients[type] = updatedCount; 
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice  = this.state.totalpPice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalpPice: newPrice, ingredients: updatedIngredients});
   }

   removeIngredienthandler = (type) => {

   }

        render() {
            return (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                        ingredientAdded={this.addingredientHandler}/>
                </Aux>
            );
        }
}

export default BurgerBuilder;