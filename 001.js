var md5 = require('md5')
var sha1 = require('js-sha1')
var hash = require('hash.js')
class Hash{
    constructor(string) {
        this.string = string;
      }
    md5(){
        console.log('md5 : ' + md5(this.string))
    }
    sha1(){
        console.log('sha1 : ' + sha1(this.string))
    }
    sha256(){
        console.log('sha256 : ' + hash.sha256().update(this.string).digest('hex'))
    }
    sha512(){
        console.log('sha512 : ' + hash.sha512().update(this.string).digest('hex'))
    }

}
myHash = new Hash('secret')
myHash.md5('secret')
myHash.sha1('secret')
myHash.sha256('secret')
myHash.sha512('secret')