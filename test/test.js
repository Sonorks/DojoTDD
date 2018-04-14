var assert = require('assert');
var romanConvert=require('../functionTest/romanConverter');

describe('RomanTest',function(){
    describe('NumbertoRomanTest',function(){
        it('converts 1 to roman',function(){
            assert.equal(romanConvert.toRoman(1),"I");        
        });   

        it('converts 10 to roman',function(){
            assert.equal(romanConvert.toRoman(10),"X");        
        });

        it('converts 50 to roman',function(){
            assert.equal(romanConvert.toRoman(50),"L");        
        });

        it('converts 100 to roman',function(){
            assert.equal(romanConvert.toRoman(100),"C");        
        });
        
    });

    describe('RomanToNumberTest',function(){
        it('converts V to number',function(){
            assert.equal(romanConvert.fromRoman("V"),5);        
        });   

        it('converts XV to number',function(){
            assert.equal(romanConvert.fromRoman("XV"),15);        
        });

        it('converts LIV to number',function(){
            assert.equal(romanConvert.fromRoman("LIV"),54);        
        });

        it('converts C to number',function(){
            assert.equal(romanConvert.fromRoman("C"),100);        
        });
        
    });
});


