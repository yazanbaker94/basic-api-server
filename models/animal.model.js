'use strict';

const Animal = (sequalize, DataTypes) => {
    return sequalize.define('Animal', {
        animalName: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
  
    });
}

module.exports = Animal;