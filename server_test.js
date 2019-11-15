const mandatoryFields = ['username', 'name'];

function validateUser1(user) {
    if (!user) {
        return false;
    }
    if (!user.username) {
        return false;
    }

    if (!user.name) {
        return false;
    }
    return true;
}

function validateUser2(user) {
    if (!user) {
        return false;
    }

    for (let field of mandatoryFields) {
        if (!user[field]) {
            return false;
        }
    }
    return true;
}

function validateUser3(user) {
    const value = JSON.stringify(user) || '';
    for (let field of mandatoryFields) {
        if (value.indexOf(field) < 0) {
            return false;
        }
    }
    return true;
}

function validateUser4a(user) {
    if (!user) {
        return false;
    }
    return Object.keys(user)[0] === mandatoryFields[1] &&
        Object.keys(user)[1] === mandatoryFields[0];
}

function validateUser5a(user) {
    if (!user) {
        return false;
    }
    const stringJSON = JSON.stringify(user);
    let validationsCount = 0;
    mandatoryFields.forEach(element => {
        if (stringJSON.includes(element)) {
            validationsCount += 1;
        }
    });
    return validationsCount === mandatoryFields.length;
}

describe('Validator', () => {
    test('Debe devolver false si es un usuario vacío', () => {
        const user = {};
        expect(validateUser(user)).toBeFalsy();
    });
    test('Debe devolver false si es un usuario es undefined', () => {
        expect(validateUser(undefined)).toBeFalsy();
    });
    test('Debe devolver false si no tiene nombre', () => {
        const user = { age: 12 };
        expect(validateUser(user)).toBeFalsy();
    });
    test('Debe devolver false si no tiene username', () => {
        const user = { name: "pepe" };
        expect(validateUser(user)).toBeFalsy();
    });
    test('Debe devolver true si tiene nombre y username', () => {
        const user = { name: "pepe", username: 'Manolo' };
        expect(validateUser(user)).toBeTruthy();
    });
});