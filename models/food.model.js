'use strict';

const Food = (sequalize, DataTypes) => {
    return sequalize.define('Food', {
        foodName: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
  
    });
}

module.exports = Food;