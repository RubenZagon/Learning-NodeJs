"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isValid = function (input) { return function (veq, validators) {
    try {
        return validators.every(function (validator) { return validator(input); });
    }
    catch (e) {
        return false;
    }
}; };
var validateName = function (input) {
    if (input && input.name) {
        return true;
    }
    throw new Error('Invalid name');
};
var validaMovieTitle = function (movie) {
    if (movie && movie.title) {
        return true;
    }
    throw new Error('Invalid');
};
var isValidMovieToCreate = function (body) { return body && body.title; };
var validateDate = function (input) {
    if (input && input.date && input.date.getMonth() > 3) {
        // if (input?.date?.getMonth() > 3) {
        return true;
    }
    throw new Error('Invalid date');
};
module.exports = {
    validateName: validateName,
};
