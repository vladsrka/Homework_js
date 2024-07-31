function caesarCipher(text, shift) {
  const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  const alphabetLength = alphabet.length;
  let result = "";

  // Приводим сдвиг к диапазону алфавита
  shift = shift % alphabetLength;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const isUpperCase = char === char.toUpperCase();

    if (alphabet.includes(char.toLowerCase())) {
      const currentIndex = alphabet.indexOf(char.toLowerCase());
      const newIndex = (currentIndex + shift + alphabetLength) % alphabetLength; // Сдвиг с учетом длины алфавита
      const newChar = alphabet[newIndex];

      result += isUpperCase ? newChar.toUpperCase() : newChar; // Восстанавливаем регистр
    } else {
      result += char; // Не шифруем символы, не входящие в алфавит
    }
  }

  return result;
}

function encrypt(text, shift) {
  return caesarCipher(text, shift);
}

function decrypt(text, shift) {
  return caesarCipher(text, -shift);
}

const originalText = "Привет, Мир!";
const shift = 3;

const encryptedText = encrypt(originalText, shift);
console.log("Зашифрованный текст:", encryptedText);

const decryptedText = decrypt(encryptedText, shift);
console.log("Дешифрованный текст:", decryptedText);
