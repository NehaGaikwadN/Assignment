var chai = require('chai')
var chaiHttp = require('chai-http')
var app =require('../index')
const should = chai.should()
chai.use(chaiHttp)
const API_BASE  = "http://localhost:3000"


describe("test cases ", ()=>{
    it('should create user', ()=>{
        let data = {
            firstname :"Neha",
            lastName: "GaiTest"
        }
        chai
            .request(app)
            .post('/user')
            .send(data)
            .end((err,res)=>{
                res.should.have.status(200)
                res.body.should.be.a('object')
            })

    })

    it('should create transaction details', ()=>{
        let data = {
            user: "Usertest1",
            itemName: "itemtest1",
            amount: 30,
        }
        chai
            .request(app)
            .post('/transaction')
            .send(data)
            .end((err,res)=>{
                res.should.have.status(200)
                res.body.should.be.a('object')
            })

    })

    it('should create health', ()=>{
        chai
            .request(app)
            .get('/health')
            .end((err,res)=>{
                res.should.have.status(200)
                res.body.should.be.a('object')
            })
    })

    // //getTransaction

    it('should show transaCTION DETAILS', ()=>{
        let data = {
            id : "63bf91efaaa2ee355169292b"
        }
        chai
            .request(app)
            .post('/getTransaction')
            .send(data)
            .end((err,res)=>{
                console.log("*************************************************",res.body)
                res.should.have.status(200)
                res.body.should.be.a('object')
            })

    })
    
})