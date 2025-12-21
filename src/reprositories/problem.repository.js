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
}

module.exports = problemRepository