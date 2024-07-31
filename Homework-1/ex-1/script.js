// EX 1.1
// function caesarCipher(text, shift) {
//   const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
//   const alphabetLength = alphabet.length;
//   let result = "";

//   // Приводим сдвиг к диапазону алфавита
//   shift = shift % alphabetLength;

//   for (let i = 0; i < text.length; i++) {
//     const char = text[i];
//     const isUpperCase = char === char.toUpperCase();

//     if (alphabet.includes(char.toLowerCase())) {
//       const currentIndex = alphabet.indexOf(char.toLowerCase());
//       const newIndex = (currentIndex + shift + alphabetLength) % alphabetLength; // Сдвиг с учетом длины алфавита
//       const newChar = alphabet[newIndex];

//       result += isUpperCase ? newChar.toUpperCase() : newChar; // Восстанавливаем регистр
//     } else {
//       result += char; // Не шифруем символы, не входящие в алфавит
//     }
//   }

//   return result;
// }

// function encrypt(text, shift) {
//   return caesarCipher(text, shift);
// }

// function decrypt(text, shift) {
//   return caesarCipher(text, -shift);
// }

// const originalText = "Привет, Мир!";
// const shift = 3;

// const encryptedText = encrypt(originalText, shift);
// console.log("Зашифрованный текст:", encryptedText);

// const decryptedText = decrypt(encryptedText, shift);
// console.log("Дешифрованный текст:", decryptedText);
//
//
//
//
// EX 1.2
// Функция для шифрования текста с использованием AES
function aesEncrypt(plainText, secretKey) {
  const encrypted = CryptoJS.AES.encrypt(plainText, secretKey).toString();
  return encrypted;
}

// Функция для дешифрования текста с использованием AES
function aesDecrypt(cipherText, secretKey) {
  const decrypted = CryptoJS.AES.decrypt(cipherText, secretKey);
  return decrypted.toString(CryptoJS.enc.Utf8);
}


const secretKey = "mySecretKey123"; // Ваш секретный ключ
const textToEncrypt = "Hello, World!";

// Шифруем текст
const encryptedText = aesEncrypt(textToEncrypt, secretKey);
console.log("Зашифрованный текст:", encryptedText);

// Дешифруем текст
const decryptedText = aesDecrypt(encryptedText, secretKey);
console.log("Дешифрованный текст:", decryptedText);
