import {SignUpController} from './signUp'
import {MissingParamError} from '../errors/meassing-param-errors'

describe('signUp Controller', ()=> {
    test('Should return 400 if name is provided', ()=> {
     const sut = new SignUpController()
     const httpRequest = {
        body: {
            email:'test@example.com',
            password: 'password',
            password_confirmation: 'password'

        }
     }
     const httpResponse = sut.handle(httpRequest)
     expect(httpResponse.statusCode).toBe(400)
     expect(httpResponse.body).toEqual(new MissingParamError('name'))
    })
    test('Should return 400 if email is provided', ()=> {
        const sut = new SignUpController()
        const httpRequest = {
           body: {
               name:'Isaac Isvaldo',
               password: 'password',
               password_confirmation: 'password'
   
           }
        }
        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('email'))
       })
})