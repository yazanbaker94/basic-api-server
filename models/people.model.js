'use strict';

const People = (sequalize, DataTypes) => {
    return sequalize.define('People', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        lastName: {
            type: DataTypes.STRING
        }
    });
}

module.exports = People;