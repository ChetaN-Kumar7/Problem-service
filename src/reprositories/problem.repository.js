const { deleteProblem } = require('../controllers/problem.controller');
const NotFound = require('../errors/notfound.error');
const {Problem } = require('../models')

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

    async getAllProblems(){
        try {
            const problems = await Problem.find({});
            return problems
        } catch (error) {
            throw error
        }
    }

    async getProblem(id){
        try {
            const problem = await Problem.findById(id);
            if(!problem){
                        throw new NotFound("Problem",id)
                    }
            return problem;
        } catch (error) {
            throw error
        }
    }

    async deleteProblem(id){
        try {
            const deleteproblem = await Problem.findByIdAndDelete(id);
            if(!deleteproblem){
                throw new NotFound("deleteproblem",id);
            }
            return deleteproblem;
        } catch (error) {
            throw error
        }
        
    }

    async updateProblem(id,problemData){
        try {
            const problem = await Problem.findByIdAndUpdate(id,problemData);
            if(!problem){
                throw new NotFound("Problem",id)
            }
            return problem;
        } catch (error) {
            throw error
        }
        
    }

}

module.exports = problemRepository