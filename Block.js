const {GENESIS_DATA}=require('./config');
const cryptoHash=require('./crypto-hash');
class Block{
    constructor({timestamp,prevHash,hash,data}){
        this.timestamp = timestamp;
        this.prevHash=prevHash;
        this.hash=hash;
        this.data=data;


    }
    static genesis(){
        return new this(GENESIS_DATA);
    }
    static mineBlock({prevBlock,data}){
        const timestamp = Date.now();
        const prevHash = prevBlock.hash;
        return new this({
            timestamp,
            prevHash,
            data,
            hash:cryptoHash(timestamp,prevHash,data),
        });
    }
}
const block1=new Block({

    timestamp:"1/10/24",
    prevHash:"0xc12",
    hash: "0xacb",
    data:"hello",

});
const block2=new Block({
    timestamp:"2/10/24",
    prevHash:"0xc12",
    hash:"123",
    data:"world"
});

//const genesisBlock = Block.genesis();
//console.log(genesisBlock);

//const result = Block.mineBlock({prevBlock:block1,data:"block2"});
//console.log(result);
//console.log(block1);
//console.log(block2);
module.exports = Block;