const {Problem } = require('../models')
const { create } = require('../models/problem.model')
class problemRepository{
    async createProblem(problemData){
        try {
            const problem =  await Problem.create({
            title: problemData.title,
            description : problemData.description,
            testcase : problemData.testcase ? problemData.testcase : []
        })
            return problem;
        } catch (error) {
            throw  error
        }
        
    }
}

module.exports = problemRepository