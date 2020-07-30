var crypto = require('crypto');

class Cipher{
	constructor(){

	}

	encrypt(pwd,key){
		this.pwd = pwd;
		this.key = key;
		var enckey = crypto.createCipher('aes-128-cbc', this.key);
		var encstr = enckey.update(this.pwd, 'utf8', 'hex');
		encstr += enckey.final('hex');
		return encstr;
	}

	decrypt(pwd,key){
		this.pwd = pwd;
		this.key = key;
		var deckey = crypto.createDecipher('aes-128-cbc', this.key);
		var decstr = deckey.update(this.pwd, 'hex', 'utf8');
		decstr += deckey.final('utf8');
		return decstr;
	}
}

let cipher = new Cipher();
var message = cipher.encrypt('Ini tulisan rahasia', 'p4$$word');
console.log(message);
var decryptedMessage = cipher.decrypt(message,'p4$$word');
console.log(decryptedMessage);