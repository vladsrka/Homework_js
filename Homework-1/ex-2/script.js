function generatePassword(length, useLetters = true, useNumbers = true, useSpecialChars = false, includeChars = '', excludeChars = '') {
    let charset = '';
    let password = '';

    // Определяем набор символов
    if (useLetters) {
        charset += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; // буквы
    }
    if (useNumbers) {
        charset += '0123456789'; // цифры
    }
    if (useSpecialChars) {
        charset += '!@#$%^&*()_+[]{}|;:,.<>?'; // специальные символы
    }

    // Добавляем включаемые символы
    if (includeChars) {
        charset += includeChars;
    }

    // Исключаем символы
    if (excludeChars) {
        charset = charset.split('').filter(char => !excludeChars.includes(char)).join('');
    }

    // Проверяем, что есть хотя бы один выбранный набор символов
    if (charset.length === 0) {
        throw new Error('Должен быть выбран хотя бы один набор символов для генерации пароля.');
    }

    // Генерируем пароль
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

const passwordLength = 13; // длина пароля
const includeChars = '@_'; // дополнительные символы, которые нужно включить
const excludeChars = 'oO08'; // символы, которые нужно исключить

const password = generatePassword(passwordLength, true, true, true, includeChars, excludeChars); // генерируем с буквами, цифрами и специальными символами
console.log(`Сгенерированный пароль: ${password}`);
